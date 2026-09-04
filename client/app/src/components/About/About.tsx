import React from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiServer, FiCloud, FiZap } from 'react-icons/fi';
import { SOCIAL } from '../../config/social';
import './About.css';

type Highlight = { icon: any; title: string; desc: string; color: string };

const highlights: Highlight[] = [
  { icon: FiServer, title: 'Backend Engineering', desc: 'Building production services across streaming, media, and research platforms using Node.js, Java, Spring Boot, and Python. Architecting microservices, APIs, and distributed systems at scale.', color: 'cyan' },
  { icon: FiCloud, title: 'Cloud & DevOps', desc: 'AWS-to-GCP cloud migrations, infrastructure management, and DevOps. Reduced costs by 15% and scaled services to 5K req/s through query optimization and CI/CD automation.', color: 'purple' },
  { icon: FiZap, title: 'AI/LLM Integration', desc: 'Hands-on prompt engineering and LLM integration (Ollama, Claude API). Built natural-language-to-code pipelines and agentic AI systems with secure sandboxed execution.', color: 'green' },
  { icon: FiLayers, title: 'Full Stack Development', desc: 'End-to-end platform ownership — React/TypeScript frontends, Node.js/Express backends, and PostgreSQL/MongoDB data layers deployed on Docker and Kubernetes.', color: 'pink' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label mono">
            <span className="label-num">01.</span> About Me
          </div>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              I'm a <span className="about-highlight">Backend-focused Software Engineer</span> owning production services across streaming, media, and research-platform domains. Currently pursuing my{' '}
              <span className="about-highlight">Master's in Computer Science</span> at Stevens Institute
              of Technology, New Jersey.
            </p>

            <p>
              At <span className="about-highlight">SERC</span> — a <span className="about-highlight">DoD-sponsored research center</span>, I architect workflow automation platforms from the ground up and integrate LLM-driven AI tools. Previously at <span className="about-highlight">Zee Entertainment</span> (100M+ users), I led AWS-to-GCP cloud migration and modernized metadata queries, achieving 35% faster API response times while scaling to 5K req/s.
            </p>
            <p>
              My expertise spans Java, Node.js, Python backend systems, end-to-end platform ownership, and hands-on LLM integration with prompt-engineered pipelines. I thrive building scalable microservices, optimizing performance, and delivering with Agile methodology.
            </p>

            <div className="about-info-grid">
              <div className="info-item">
                <span className="info-label mono">Location</span>
                <span className="info-value">New Jersey, USA</span>
              </div>
              <div className="info-item">
                <span className="info-label mono">Email</span>
                <a href={SOCIAL.mailto} className="info-value info-link">
                  {SOCIAL.email}
                </a>
              </div>
              <div className="info-item">
                <span className="info-label mono">Phone</span>
                <span className="info-value">+1 (551) 229 1836</span>
              </div>
              <div className="info-item">
                <span className="info-label mono">Status</span>
                <span className="info-value status-available">
                  <span className="status-dot" />
                  Open to Opportunities
                </span>
              </div>
            </div>
          </motion.div>

          <div className="about-highlights-col">
          <div className="about-highlights">
              {highlights.map((item, i) => {
                const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                return (
                  <motion.div
                    key={item.title}
                    id={`highlight-${slug}`}
                    className={`highlight-card highlight-${item.color}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i + 0.2 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    role="article"
                    tabIndex={0}
                    aria-labelledby={`highlight-${slug}-title`}
                  >
                    <div className={`highlight-icon icon-${item.color}`}>{React.createElement(item.icon as any, { size: 22 })}</div>
                    <h3 id={`highlight-${slug}-title`} className="highlight-title">{item.title}</h3>
                    <p className="highlight-desc">{item.desc}</p>
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
