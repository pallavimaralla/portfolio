import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GhostPill, FadeIn } from '../../ui';
import { projects } from '../../../data/projects';
import { usePrefersReducedMotion } from '../../../hooks';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  return (
    <section id="projects" className={styles['projects-section']} ref={containerRef}>
      <div className={styles['section-container']}>
        {/* Giant centered heading */}
        <FadeIn as="h2" className={styles['projects-heading']} delay={0} y={20} duration={0.7}>
          <span className={styles['heading-gradient']}>PROJECTS</span>
        </FadeIn>

        {/* Cards container - sticky stacking on desktop, normal list on mobile */}
        <div className={styles['cards-wrapper']}>
          {projects.map((project, i) => {
            // Sticky stacking effect on desktop
            let scale = 1;
            let yOffset = 0;

            if (!prefersReduced && typeof window !== 'undefined' && window.innerWidth >= 768) {
              const total = projects.length;
              const scaleFactor = 1 - (total - 1 - i) * 0.03;
              scale = useTransform(scrollYProgress, [0, 1], [scaleFactor, 1]).get() ?? scaleFactor;
              yOffset = i * 28;
            }

            return (
              <motion.div
                key={project.title}
                className={styles['project-card']}
                style={
                  !prefersReduced && typeof window !== 'undefined' && window.innerWidth >= 768
                    ? {
                        scale: useTransform(scrollYProgress, [0, 1], [1 - (projects.length - 1 - i) * 0.03, 1]),
                        y: yOffset,
                      }
                    : {}
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Project number */}
                <div className={styles['project-number']}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Project content */}
                <div className={styles['project-content']}>
                  {/* Category */}
                  <div className={styles['project-category']}>{project.category}</div>

                  {/* Title and GitHub link */}
                  <div className={styles['project-header']}>
                    <h3 className={styles['project-title']}>{project.title}</h3>
                    {project.repo && (
                      <GhostPill as="a" href={project.repo} target="_blank" rel="noreferrer">
                        GitHub
                      </GhostPill>
                    )}
                  </div>

                  {/* Description */}
                  <p className={styles['project-desc']}>{project.desc}</p>

                  {/* Tags */}
                  <div className={styles['project-tags']}>
                    {project.tech.map(t => (
                      <span key={t} className={styles['tag']}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
