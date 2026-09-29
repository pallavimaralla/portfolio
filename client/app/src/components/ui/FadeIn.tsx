import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks';

interface FadeInProps extends Omit<MotionProps, 'initial' | 'animate' | 'exit'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: React.ElementType;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  as = 'div',
  ...motionProps
}) => {
  const prefersReduced = usePrefersReducedMotion();
  const MotionComponent = motion(as as any);

  if (prefersReduced) {
    const Component = as as React.ElementType;
    return <Component className={className}>{children}</Component>;
  }

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      {...motionProps}
    >
      {children}
    </MotionComponent>
  );
};
