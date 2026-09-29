import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface UseTypewriterOptions {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const useTypewriter = ({
  texts,
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseDuration = 1800,
}: UseTypewriterOptions) => {
  const prefersReduced = usePrefersReducedMotion();
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayed, setDisplayed] = useState(prefersReduced ? texts[0] : '');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReduced) {
      setDisplayed(texts[0]);
      return;
    }

    const currentText = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= currentText.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, charIndex));
        setCharIndex(c => c + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex > currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, charIndex));
        setCharIndex(c => c - 1);
      }, deletingSpeed);
    } else {
      setIsDeleting(false);
      setTextIndex(t => (t + 1) % texts.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, prefersReduced, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return { displayed, isComplete: !prefersReduced };
};
