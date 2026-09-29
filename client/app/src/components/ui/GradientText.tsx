import React from 'react';
import { usePrefersReducedMotion } from '../../hooks';
import styles from './GradientText.module.css';

interface GradientTextProps {
  children: React.ReactNode;
  variant?: 'name' | 'heading';
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  variant = 'heading',
  className = '',
}) => {
  const prefersReduced = usePrefersReducedMotion();

  const variantClass = variant === 'name' ? styles['gradient-name'] : styles['gradient-heading'];
  const classes = `${variantClass} ${className}`.trim();

  if (prefersReduced) {
    return <span className={className}>{children}</span>;
  }

  return <span className={classes}>{children}</span>;
};
