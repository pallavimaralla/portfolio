import React from 'react';
import styles from './GhostPill.module.css';

interface GhostPillProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  as?: 'button' | 'a';
}

export const GhostPill: React.FC<GhostPillProps> = ({
  children,
  onClick,
  href,
  target,
  rel,
  className,
  as = href ? 'a' : 'button',
}) => {
  const combinedClassName = `${styles.pill} ${className || ''}`;

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};
