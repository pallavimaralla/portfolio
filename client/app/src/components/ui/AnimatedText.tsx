import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  if (prefersReduced) {
    return (
      <p ref={containerRef} className={className}>
        {text}
      </p>
    );
  }

  return (
    <p
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        visibility: 'hidden',
      }}
    >
      {text}
      <span
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          visibility: 'visible',
          display: 'block',
        }}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = (i + 1) / words.length;

          return (
            <WordReveal
              key={i}
              word={word}
              progress={scrollYProgress}
              start={start}
              end={end}
            />
          );
        })}
      </span>
    </p>
  );
};

interface WordRevealProps {
  word: string;
  progress: any;
  start: number;
  end: number;
}

const WordReveal: React.FC<WordRevealProps> = ({ word, progress, start, end }) => {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} aria-hidden="true">
      {word}{' '}
    </motion.span>
  );
};
