import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../../ui';
import { jobs } from '../../../data/jobs';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles['experience-section']}>
      <div className={styles['section-container']}>
        {/* Giant centered heading */}
        <FadeIn as="h2" className={styles['experience-heading']} delay={0} y={20} duration={0.7}>
          <span className={styles['heading-text']}>EXPERIENCE</span>
        </FadeIn>

        {/* Jobs list */}
        <div className={styles['jobs-list']}>
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              className={styles['job-row']}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Job number */}
              <div className={styles['job-number']}>
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Job details */}
              <div className={styles['job-content']}>
                <div className={styles['job-header']}>
                  <div>
                    <div className={styles['job-company']}>{job.company}</div>
                    <div className={styles['job-role']}>{job.role}</div>
                    <div className={styles['job-meta']}>
                      <span>{job.period}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets if they exist */}
                {job.bullets && job.bullets.length > 0 && (
                  <ul className={styles['job-bullets']}>
                    {job.bullets.map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Divider */}
              {i < jobs.length - 1 && <div className={styles['job-divider']} />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
