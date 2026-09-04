import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronDown, FiChevronUp, FiShield, FiTv } from 'react-icons/fi';
import './Experience.css';

interface Job {
  company: string;
  domain: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  tech: string[];
  color: 'cyan' | 'purple' | 'green' | 'pink';
}

const jobs: Job[] = [
  {
    company: 'Systems Engineering Research Center (SERC)',
    domain: 'DoD-Sponsored University Affiliated Research Center',
    role: 'Full Stack Developer',
    period: 'June 2025 – May 2026',
    location: 'Hoboken, New Jersey',
    type: 'Full-time',
    color: 'cyan',
    bullets: [
      'Architected and engineered an internal workflow automation platform from the ground up, adopted across 500 users spanning SERC/AIRC staff, by independently owning system design, custom application logic, and deployment.',
      'Built custom backend logic beyond default no-code configuration, as measured by 6 forms, 10 views, and 15 reports powering the platform, by studying Zoho Creator\'s technical documentation.',
      'Drove continuous evolution of the platform through repeated feature additions, retirements, and re-optimizations without rebuild, by maintaining an extensible architecture.',
      'Provided infrastructure support for the platform through reliable data backup and domain resolution via AWS S3 and Route 53.',
    ],
    tech: ['Zoho Creator', 'AWS S3', 'AWS Route 53', 'Node.js', 'React', 'TypeScript'],
  },
  {
    company: 'Zee Entertainment Enterprises Limited',
    domain: 'Media & Entertainment Conglomerate, Parent of ZEE5 OTT Streaming Platform',
    role: 'Software Development Engineer - I',
    period: 'April 2022 – July 2024',
    location: 'Bangalore, India',
    type: 'Full-time',
    color: 'purple',
    bullets: [
      'Led migration of Watch History and Launch API from AWS to Google Cloud Platform, personally executing approximately 95% of the technical migration work.',
      'Modernized complex metadata queries, decreasing API response time by 35% through consolidating ten calls into two, allowing the API to scale to 5,000 req/s.',
      'Integrated the Music API with the Watch History service by designing and building the integration within a Java, ScyllaDB, and Confluent Kafka stack.',
      'Authored the first documentation for Watch History and Launch using Swagger/OpenAPI, achieving adoption across other backend teams and cross-functional QA/frontend teams.',
      'Owned production stability for Watch History and Launch API by resolving approximately 98% of bugs and Jira tickets, serving as first point of contact for incidents.',
    ],
    tech: ['GCP', 'Java', 'ScyllaDB', 'Confluent Kafka', 'Redis', 'Swagger/OpenAPI', 'Git', 'CI/CD'],
  },
  {
    company: 'JSW Pvt Ltd',
    domain: 'Steel and Infrastructure Conglomerate',
    role: 'Android App Developer',
    period: 'March 2021 – May 2021',
    location: 'Bellary, India',
    type: 'Internship',
    color: 'green',
    bullets: [
      'Built the MIS Generator Android application from scratch, delivering a fully functioning app as one of two interns with zero prior Android experience.',
      'Independently learned Kotlin development through documentation and self-directed research to complete the project.',
    ],
    tech: ['Kotlin', 'Android', 'Firebase'],
  },
];

const Experience: React.FC = () => {
  const [expanded, setExpanded] = useState<Set<number>>(new Set([0, 1, 2]));

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label mono">
            <span className="label-num">02.</span> Experience
          </div>
          <h2 className="section-title">Where I've Worked</h2>
          <div className="section-divider" />
          <div className="exp-industry-badges">
            {React.createElement(FiShield as any, { size: 13 })}
            <span className="industry-badge badge-defense">DoD · Defense &amp; National Security</span>
            <span className="industry-badge-sep" />
            {React.createElement(FiTv as any, { size: 13 })}
            <span className="industry-badge badge-ott">OTT Streaming · 100M+ Users</span>
          </div>
        </motion.div>

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
                      {React.createElement(FiBriefcase as any, { size: 15, className: `job-icon icon-${job.color}` })}
                      <span className={`timeline-company color-${job.color}`}>{job.company}</span>
                      <span className={`job-type-badge badge-${job.color}`}>{job.type}</span>
                    </div>
                    <span className={`job-domain domain-${job.color}`}>{job.domain}</span>
                    <h3 className="timeline-role">{job.role}</h3>
                    <div className="timeline-info-row">
                      <span className="timeline-info-item">
                        {React.createElement(FiCalendar as any, { size: 12 })}
                        {job.period}
                      </span>
                      <span className="timeline-info-item">
                        {React.createElement(FiMapPin as any, { size: 12 })}
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <span className="expand-icon">
                    {expanded.has(i)
                      ? React.createElement(FiChevronUp as any, { size: 18 })
                      : React.createElement(FiChevronDown as any, { size: 18 })}
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
                          <span key={t} className={`tag tag-${job.color}`}>{t}</span>
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
