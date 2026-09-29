import React from 'react';
import { Marquee } from '../ui';
import { skillCategories } from '../../data/skills';
import styles from './SkillsStrip.module.css';

const SkillsStrip: React.FC = () => {
  // Flatten all skills from categories
  const allSkills = skillCategories.flatMap(cat => cat.skills);

  return (
    <section className={styles['skills-strip']}>
      <Marquee items={allSkills} />
    </section>
  );
};

export default SkillsStrip;
