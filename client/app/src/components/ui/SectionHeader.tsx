import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionHeader.module.css';
import { cx } from '../../lib/cx';
import { GradientText } from './GradientText';

interface SectionHeaderProps {
  num: string;
  label: string;
  title: string;
  children?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ num, label, title, children }) => (
  <motion.div
    className={styles['section-header']}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className={cx(styles['section-label'], 'mono')}>
      <span className={styles['label-num']}>{num}.</span> {label}
    </div>
    <h2 className={styles['section-title']}>
      <GradientText variant="heading">{title}</GradientText>
    </h2>
    <div className={styles['section-divider']} />
    {children}
  </motion.div>
);
