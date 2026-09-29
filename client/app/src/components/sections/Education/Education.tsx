import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader, Icon, Tag } from '../../ui';
import { sections } from '../../../data/sections';
import { degrees } from '../../../data/education';
import './Education.css';

const eduSection = sections.find(s => s.id === 'education')!;

const Education: React.FC = () => (
  <section id="education" className="education-section">
    <div className="section-container">
      <SectionHeader num={eduSection.number} label={eduSection.label} title={eduSection.title} />

      <div className="edu-list">
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
            <div className="edu-card-top">
              <div className="edu-icon-wrap">
                <Icon name="FiAward" size={26} className="edu-award-icon" />
              </div>
              <div className="edu-main">
                <div className="edu-degree">{d.degree}</div>
                <div className="edu-school">{d.school}</div>
                <div className="edu-meta-row">
                  <span className="edu-meta-item">
                    <Icon name="FiCalendar" size={12} />
                    {d.period}
                  </span>
                  <span className="edu-meta-item">
                    <Icon name="FiMapPin" size={12} />
                    {d.location}
                  </span>
                </div>
              </div>
              <Tag color={d.badgeColor}>{d.badge}</Tag>
            </div>

            {d.courses && (
              <>
                <div className="edu-divider" />
                <div className="edu-courses-section">
                  <div className="edu-courses-label mono">
                    <Icon name="FiBook" size={13} />
                    Relevant Coursework
                  </div>
                  <div className="edu-courses-grid">
                    {d.courses.map(c => (
                      <Tag key={c} color="purple">{c}</Tag>
                    ))}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
