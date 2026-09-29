import React from 'react';
import { FadeIn, GhostPill } from '../../ui';
import { skillCategories } from '../../../data/skills';
import styles from './Skills.module.css';

const Skills: React.FC = () => (
  <section id="skills" className={styles['skills-section']}>
    <div className={styles['section-container']}>
      {/* Giant centered heading */}
      <FadeIn as="h2" className={styles['skills-heading']} delay={0} y={20} duration={0.7}>
        <span className={styles['heading-gradient']}>SKILLS</span>
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
