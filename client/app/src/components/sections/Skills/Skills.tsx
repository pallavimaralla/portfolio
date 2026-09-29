import React from 'react';
import { SectionHeader, FadeIn, Marquee } from '../../ui';
import { sections } from '../../../data/sections';
import { skillCategories } from '../../../data/skills';
import styles from './Skills.module.css';

const skillSection = sections.find(s => s.id === 'skills')!;

// Flatten all skills from categories into a single array
const allSkills = skillCategories.flatMap(cat => cat.skills);

const Skills: React.FC = () => (
  <section id="skills" className={styles['skills-section']}>
    <div className={styles['section-container']}>
      <FadeIn as="div" delay={0} y={20} duration={0.7}>
        <SectionHeader num={skillSection.number} label={skillSection.label} title={skillSection.title} />
      </FadeIn>

      <FadeIn as="div" className={styles['marquee-wrapper']} delay={0.15} y={20} duration={0.7}>
        <Marquee items={allSkills} />
      </FadeIn>
    </div>
  </section>
);

export default Skills;
