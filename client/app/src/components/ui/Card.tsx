import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  gradient?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, gradient = false, className }) => (
  <div className={`card ${gradient ? 'gradient-border' : ''} ${className || ''}`}>
    {children}
  </div>
);
