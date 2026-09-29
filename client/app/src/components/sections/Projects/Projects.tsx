import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader, Icon, Tag } from '../../ui';
import { sections } from '../../../data/sections';
import { projects } from '../../../data/projects';
import { staggerContainer, fadeUp } from '../../../lib/motion';
import { slugify } from '../../../lib/slugify';
import styles from './Projects.module.css';

const projSection = sections.find(s => s.id === 'projects')!;

const cardVariants = fadeUp;

const Projects: React.FC = () => (
  <section id="projects" className={styles["projects-section"]}>
    <div className="section-container">
      <SectionHeader num={projSection.number} label={projSection.label} title={projSection.title} />

      <motion.div
        className={styles["projects-grid"]}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map(p => {
          const slug = slugify(p.title);
          return (
            <motion.div
              key={p.title}
              id={`proj-${slug}`}
              className="project-card gradient-border"
              aria-labelledby={`proj-${slug}-title`}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className={styles["project-card-top"]}>
                <Icon name="FiFolder" size={28} className={styles["project-folder-icon"]} />
                <div className={styles["project-links"]}>
                  {p.repo && (
                    <a
                      aria-label={`Open ${p.title} repository`}
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className={styles["project-link"]}
                    >
                      <Icon name="FiGithub" size={18} />
                    </a>
                  )}
                  {p.live && (
                    <a
                      aria-label={`Open ${p.title} live site`}
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className={styles["project-link"]}
                    >
                      <Icon name="FiExternalLink" size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 id={`proj-${slug}-title`} className={styles["project-title"]}>{p.title}</h3>
              <p className={styles["project-desc"]}>{p.desc}</p>

              <div className={styles["project-tech"]}>
                {p.tech.map(t => (
                  <Tag key={t} color="cyan">{t}</Tag>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Projects;
