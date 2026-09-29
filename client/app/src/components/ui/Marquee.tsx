import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks';
import styles from './Marquee.module.css';

interface MarqueeProps {
  items: string[];
}

export const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  const { scrollY } = useScroll();

  // Calculate offset based on scroll position relative to container
  const offset = useTransform(scrollY, (value) => {
    if (!containerRef.current) return 0;
    const sectionTop = containerRef.current.offsetTop;
    return (value - sectionTop + window.innerHeight) * 0.3;
  });

  const row1X = useTransform(offset, (val) => val - 200);
  const row2X = useTransform(offset, (val) => -(val - 200));

  if (prefersReduced) {
    return (
      <div ref={containerRef} className={styles.marquee}>
        <div className={styles.row}>
          {items.map((item) => (
            <span key={item} className={styles.pill}>
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // Split items into two rows (alternating)
  const row1Items = items.filter((_, i) => i % 2 === 0);
  const row2Items = items.filter((_, i) => i % 2 === 1);

  return (
    <div ref={containerRef} className={styles.marquee}>
      <motion.div
        className={styles.row}
        style={{ x: row1X, willChange: 'transform' }}
      >
        {/* Original + 2 duplicates for seamless loop */}
        {[...Array(3)].map((_, iteration) => (
          <div key={`row1-${iteration}`} style={{ display: 'flex', gap: 'var(--gap)' }}>
            {row1Items.map((item) => (
              <span key={`${item}-${iteration}`} className={styles.pill}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </motion.div>

      <motion.div
        className={styles.row}
        style={{ x: row2X, willChange: 'transform' }}
      >
        {/* Original + 2 duplicates for seamless loop */}
        {[...Array(3)].map((_, iteration) => (
          <div key={`row2-${iteration}`} style={{ display: 'flex', gap: 'var(--gap)' }}>
            {row2Items.map((item) => (
              <span key={`${item}-${iteration}`} className={styles.pill}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
