import React from 'react';
import { motion } from 'framer-motion';
import './SectionHeader.css';

interface SectionHeaderProps {
  num: string;
  label: string;
  title: string;
  children?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ num, label, title, children }) => (
  <motion.div
    className="section-header"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="section-label mono">
      <span className="label-num">{num}.</span> {label}
    </div>
    <h2 className="section-title">{title}</h2>
    <div className="section-divider" />
    {children}
  </motion.div>
);
