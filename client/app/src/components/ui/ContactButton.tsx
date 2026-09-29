import React from 'react';
import styles from './ContactButton.module.css';

interface ContactButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  children = 'Contact Me',
  onClick,
  className,
}) => {
  return (
    <button
      className={`${styles.button} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
