import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader, Icon, Tag, FadeIn } from '../../ui';
import { sections } from '../../../data/sections';
import { degrees } from '../../../data/education';
import styles from './Education.module.css';

const eduSection = sections.find(s => s.id === 'education')!;

const Education: React.FC = () => (
  <section id="education" className={styles["education-section"]}>
    <div className={styles["section-container"]}>
      <FadeIn as="div" delay={0} y={20} duration={0.7}>
        <SectionHeader num={eduSection.number} label={eduSection.label} title={eduSection.title} />
      </FadeIn>

      <FadeIn as="div" className={styles["edu-list"]} delay={0.15} y={20} duration={0.7}>
        {degrees.map((d, i) => (
          <motion.div
            key={d.degree}
            className="edu-card gradient-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
          >
            <div className={styles["edu-card-top"]}>
              <div className={styles["edu-icon-wrap"]}>
                <Icon name="FiAward" size={26} className={styles["edu-award-icon"]} />
              </div>
              <div className={styles["edu-main"]}>
                <div className={styles["edu-degree"]}>{d.degree}</div>
                <div className={styles["edu-school"]}>{d.school}</div>
                <div className={styles["edu-meta-row"]}>
                  <span className={styles["edu-meta-item"]}>
                    <Icon name="FiCalendar" size={12} />
                    {d.period}
                  </span>
                  <span className={styles["edu-meta-item"]}>
                    <Icon name="FiMapPin" size={12} />
                    {d.location}
                  </span>
                </div>
              </div>
              <Tag color={d.badgeColor}>{d.badge}</Tag>
            </div>

            {d.courses && (
              <>
                <div className={styles["edu-divider"]} />
                <div className={styles["edu-courses-section"]}>
                  <div className="edu-courses-label mono">
                    <Icon name="FiBook" size={13} />
                    Relevant Coursework
                  </div>
                  <div className={styles["edu-courses-grid"]}>
                    {d.courses.map(c => (
                      <Tag key={c} color="purple">{c}</Tag>
                    ))}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </FadeIn>
    </div>
  </section>
);

export default Education;
