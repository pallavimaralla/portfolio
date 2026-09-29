import React from 'react';
import styles from './GhostPill.module.css';

interface GhostPillProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  className?: string;
  as?: 'button' | 'a';
}

export const GhostPill: React.FC<GhostPillProps> = ({
  children,
  onClick,
  href,
  target,
  rel,
  download,
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
        download={download}
        onClick={onClick}
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
