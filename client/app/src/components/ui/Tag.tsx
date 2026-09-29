import React from 'react';
import styles from './Tag.module.css';
import { cx } from '../../lib/cx';

export type TagColor = 'cyan' | 'purple' | 'green' | 'pink';

interface TagProps {
  children: React.ReactNode;
  color?: TagColor;
  className?: string;
}

const tagColorMap: Record<TagColor, string> = {
  cyan: styles['tag-cyan'],
  purple: styles['tag-purple'],
  green: styles['tag-green'],
  pink: styles['tag-pink'],
};

export const Tag: React.FC<TagProps> = ({ children, color = 'cyan', className }) => (
  <span className={cx(styles.tag, tagColorMap[color], className)}>{children}</span>
);
