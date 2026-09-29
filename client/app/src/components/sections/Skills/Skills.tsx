import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader, Icon, Tag } from '../../ui';
import { sections } from '../../../data/sections';
import { skillCategories } from '../../../data/skills';
import { staggerContainerSmall } from '../../../lib/motion';
import './Skills.css';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const skillSection = sections.find(s => s.id === 'skills')!;

const Skills: React.FC = () => (
  <section id="skills" className="skills-section">
    <div className="section-container">
      <SectionHeader num={skillSection.number} label={skillSection.label} title={skillSection.title} />

      <motion.div
        className="skills-grid"
        variants={staggerContainerSmall}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skillCategories.map(cat => (
          <motion.div
            key={cat.label}
            className={`skill-card skill-card-${cat.color} gradient-border`}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className={`skill-card-header skill-header-${cat.color}`}>
              <Icon name={cat.icon} size={18} />
              <span className="skill-category-label mono">{cat.label}</span>
            </div>
            <div className="skill-tags">
              {cat.skills.map(s => (
                <Tag key={s} color={cat.color}>{s}</Tag>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
