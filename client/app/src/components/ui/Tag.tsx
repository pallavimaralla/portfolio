import React from 'react';
import './Tag.css';

export type TagColor = 'cyan' | 'purple' | 'green' | 'pink';

interface TagProps {
  children: React.ReactNode;
  color?: TagColor;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, color = 'cyan', className }) => (
  <span className={`tag tag-${color} ${className || ''}`}>{children}</span>
);
