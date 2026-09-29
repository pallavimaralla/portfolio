import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader, Icon } from '../../ui';
import { profile } from '../../../data/profile';
import { sections } from '../../../data/sections';
import { highlights } from '../../../data/highlights';
import { slugify } from '../../../lib/slugify';
import { hoverHoist } from '../../../lib/motion';
import styles from './About.module.css';

const aboutSection = sections.find(s => s.id === 'about')!;

const About: React.FC = () => {
  return (
    <section id="about" className={styles["about-section"]}>
      <div className={styles["section-container"]}>
        <SectionHeader num={aboutSection.number} label={aboutSection.label} title={aboutSection.title} />

        <div className={styles["about-grid"]}>
          <motion.div
            className={styles["about-text"]}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              I'm a <span className={styles["about-highlight"]}>Backend-focused Software Engineer</span> owning production services across streaming, media, and research-platform domains. I've completed my{' '}
              <span className={styles["about-highlight"]}>Master's in Computer Science</span> at Stevens Institute
              of Technology, New Jersey.
            </p>

            <p>
              At <span className={styles["about-highlight"]}>SERC</span> — a <span className={styles["about-highlight"]}>DoD-sponsored research center</span>, I architect workflow automation platforms from the ground up and integrate LLM-driven AI tools. Previously at <span className={styles["about-highlight"]}>Zee Entertainment</span> (100M+ users), I led AWS-to-GCP cloud migration and modernized metadata queries, achieving 35% faster API response times while scaling to 5K req/s.
            </p>
            <p>
              My expertise spans Java, Node.js, Python backend systems, end-to-end platform ownership, and hands-on LLM integration with prompt-engineered pipelines. I thrive building scalable microservices, optimizing performance, and delivering with Agile methodology.
            </p>

            <div className={styles["about-info-grid"]}>
              <div className={styles["info-item"]}>
                <span className="info-label mono">Location</span>
                <span className={styles["info-value"]}>{profile.location}</span>
              </div>
              <div className={styles["info-item"]}>
                <span className="info-label mono">Email</span>
                <a href={`mailto:${profile.email}`} className="info-value info-link">
                  {profile.email}
                </a>
              </div>
              <div className={styles["info-item"]}>
                <span className="info-label mono">Phone</span>
                <span className={styles["info-value"]}>{profile.phone}</span>
              </div>
              <div className={styles["info-item"]}>
                <span className="info-label mono">Status</span>
                <span className="info-value status-available">
                  <span className={styles["status-dot"]} />
                  Open to Opportunities
                </span>
              </div>
            </div>
          </motion.div>

          <div className={styles["about-highlights-col"]}>
            <div className={styles["about-highlights"]}>
              {highlights.map((item, i) => {
                const slug = slugify(item.title);
                return (
                  <motion.div
                    key={item.title}
                    id={`highlight-${slug}`}
                    className={`highlight-card highlight-${item.color}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i + 0.2 }}
                    whileHover={hoverHoist}
                  >
                    <div className={`highlight-icon icon-${item.color}`}>
                      <Icon name={item.icon} size={22} />
                    </div>
                    <h3 id={`highlight-${slug}-title`} className={styles["highlight-title"]}>{item.title}</h3>
                    <p className={styles["highlight-desc"]}>{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
