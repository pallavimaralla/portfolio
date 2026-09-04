import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Education.css';

const msCourses = [
  'Prompt Engineering',
  'Applied AI / AI Technology Management',
  'Agile Software Development',
  'DevOps Principles',
];

const beCourses = [
  'Software Development',
  'Algorithm Design & Analysis',
  'Object-Oriented Programming (Java)',
  'Database Management Systems (DBMS)',
];

interface Degree {
  degree: string;
  school: string;
  period: string;
  location: string;
  badge: string;
  badgeColor: 'cyan' | 'purple';
  courses?: string[];
}

const degrees: Degree[] = [
  {
    degree: 'Master of Science — Computer Science',
    school: 'Stevens Institute of Technology',
    period: 'September 2024 – May 2026',
    location: 'Hoboken, NJ',
    badge: 'In Progress',
    badgeColor: 'cyan',
    courses: msCourses,
  },
  {
    degree: 'Bachelor of Engineering — Computer Science & Engineering',
    school: 'Dayananda Sagar College of Engineering',
    period: 'July 2018 – July 2022',
    location: 'Bangalore, India',
    badge: 'Completed',
    badgeColor: 'purple',
    courses: beCourses,
  },
];

const Education: React.FC = () => (
  <section id="education" className="education-section">
    <div className="section-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label mono">
          <span className="label-num">05.</span> Education
        </div>
        <h2 className="section-title">Academic Background</h2>
        <div className="section-divider" />
      </motion.div>

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
                {React.createElement(FiAward as any, { size: 26, className: 'edu-award-icon' })}
              </div>
              <div className="edu-main">
                <div className="edu-degree">{d.degree}</div>
                <div className="edu-school">{d.school}</div>
                <div className="edu-meta-row">
                  <span className="edu-meta-item">
                    {React.createElement(FiCalendar as any, { size: 12 })}
                    {d.period}
                  </span>
                  <span className="edu-meta-item">
                    {React.createElement(FiMapPin as any, { size: 12 })}
                    {d.location}
                  </span>
                </div>
              </div>
              <span className={`edu-status-badge tag tag-${d.badgeColor}`}>{d.badge}</span>
            </div>

            {d.courses && (
              <>
                <div className="edu-divider" />
                <div className="edu-courses-section">
                  <div className="edu-courses-label mono">
                    {React.createElement(FiBook as any, { size: 13 })}
                    Relevant Coursework
                  </div>
                  <div className="edu-courses-grid">
                    {d.courses.map(c => (
                      <span key={c} className="tag tag-purple">{c}</span>
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
