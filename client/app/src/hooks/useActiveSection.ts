import { useEffect, useState } from 'react';
import { sections } from '../data/sections';

export const useActiveSection = (): string => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionIds = sections.map(s => s.id);
    const observers = new Map<string, IntersectionObserver>();

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-100px 0px -66% 0px',
        }
      );

      observer.observe(element);
      observers.set(id, observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return activeSection;
};
