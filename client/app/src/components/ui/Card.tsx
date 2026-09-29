import React from 'react';
import styles from './Card.module.css';
import { cx } from '../../lib/cx';

interface CardProps {
  children: React.ReactNode;
  gradient?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, gradient = false, className }) => (
  <div className={cx(styles.card, gradient && styles['gradient-border'], className)}>
    {children}
  </div>
);
