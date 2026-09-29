import React from 'react';
import { SectionHeader, FadeIn, GhostPill } from '../../ui';
import { sections } from '../../../data/sections';
import { skillCategories } from '../../../data/skills';
import styles from './Skills.module.css';

const skillSection = sections.find(s => s.id === 'skills')!;

const Skills: React.FC = () => (
  <section id="skills" className={styles['skills-section']}>
    <div className={styles['section-container']}>
      <FadeIn as="div" delay={0} y={20} duration={0.7}>
        <SectionHeader num={skillSection.number} label={skillSection.label} title={skillSection.title} />
      </FadeIn>

      <FadeIn as="div" className={styles['skills-list']} delay={0.15} y={20} duration={0.7}>
        {skillCategories.map((category, i) => (
          <div key={category.label} className={styles['category-group']}>
            <h3 className={styles['category-title']}>{category.label}</h3>
            <div className={styles['skills-tags']}>
              {category.skills.map(skill => (
                <GhostPill key={skill}>{skill}</GhostPill>
              ))}
            </div>
          </div>
        ))}
      </FadeIn>
    </div>
  </section>
);

export default Skills;
