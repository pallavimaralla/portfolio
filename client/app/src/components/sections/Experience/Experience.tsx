import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader, Icon, Tag } from '../../ui';
import { sections } from '../../../data/sections';
import { jobs } from '../../../data/jobs';
import './Experience.css';

const expSection = sections.find(s => s.id === 'experience')!;

const Experience: React.FC = () => {
  const [expanded, setExpanded] = useState<Set<number>>(new Set([0, 1, 2]));

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <SectionHeader num={expSection.number} label={expSection.label} title={expSection.title}>
          <div className="exp-industry-badges">
            <Icon name="FiShield" size={13} />
            <span className="industry-badge badge-defense">DoD · Defense &amp; National Security</span>
            <span className="industry-badge-sep" />
            <Icon name="FiTv" size={13} />
            <span className="industry-badge badge-ott">OTT Streaming · 100M+ Users</span>
          </div>
        </SectionHeader>

        <div className="timeline">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="timeline-marker">
                <div className={`timeline-dot dot-${job.color}`} />
                {i < jobs.length - 1 && <div className="timeline-line" />}
              </div>

              <div className="timeline-card gradient-border">
                <button
                  className="timeline-header"
                  onClick={() => setExpanded(prev => { const s = new Set(prev); s.has(i) ? s.delete(i) : s.add(i); return s; })}
                  aria-expanded={expanded.has(i)}
                >
                  <div className="timeline-meta">
                    <div className="timeline-company-row">
                      <Icon name="FiBriefcase" size={15} className={`job-icon icon-${job.color}`} />
                      <span className={`timeline-company color-${job.color}`}>{job.company}</span>
                      <span className={`job-type-badge badge-${job.color}`}>{job.type}</span>
                    </div>
                    <span className={`job-domain domain-${job.color}`}>{job.domain}</span>
                    <h3 className="timeline-role">{job.role}</h3>
                    <div className="timeline-info-row">
                      <span className="timeline-info-item">
                        <Icon name="FiCalendar" size={12} />
                        {job.period}
                      </span>
                      <span className="timeline-info-item">
                        <Icon name="FiMapPin" size={12} />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <span className="expand-icon">
                    {expanded.has(i) ? (
                      <Icon name="FiChevronUp" size={18} />
                    ) : (
                      <Icon name="FiChevronDown" size={18} />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {expanded.has(i) && (
                    <motion.div
                      className="timeline-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <ul className="bullet-list">
                        {job.bullets.map((b, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.06 }}
                          >
                            <span className={`bullet-dot dot-${job.color}`} />
                            {b}
                          </motion.li>
                        ))}
                      </ul>
                      <div className="job-tech-row">
                        {job.tech.map(t => (
                          <Tag key={t} color={job.color}>{t}</Tag>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
