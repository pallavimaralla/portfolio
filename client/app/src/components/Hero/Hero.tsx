import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../ui';
import { profile } from '../../data/profile';
import { heroStats, floatingBadges, roles } from '../../data/heroStats';
import { useTypewriter } from '../../hooks';
import './Hero.css';

const SOCIAL = {
  github: profile.github,
  linkedin: profile.linkedin,
  mailto: `mailto:${profile.email}`,
};

const Hero: React.FC = () => {
  const { displayed } = useTypewriter({ texts: roles });

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-greeting mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="greeting-bracket">{'>'}</span> Hello, World! I'm
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Pallavi
            <br />
            <span className="hero-name-last">Maralla Satish</span>
          </motion.h1>

          <motion.div
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="role-prefix mono">const role = </span>
            <span className="role-quote mono">"</span>
            <span className="role-text">{displayed}</span>
            <span className="role-cursor">|</span>
            <span className="role-quote mono">"</span>
          </motion.div>

          <motion.p
            className="hero-summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            Full Stack & Backend Engineer with <span className="highlight">3+ years</span> of experience in{' '}
            <span className="highlight">React.js</span>, <span className="highlight">Node.js</span>,{' '}
            <span className="highlight">Java</span>, and <span className="highlight">Python</span>.
            Scaled APIs to 5K req/s, cut cloud costs 15%, and built AI-powered search tools.
          </motion.p>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            {heroStats.map((stat, i) => (
              <React.Fragment key={stat.value}>
                <div className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
                {i < heroStats.length - 1 && <div className="stat-divider" />}
              </React.Fragment>
            ))}
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="FiMail" style={{ marginRight: '0.5rem' }} />
              Get In Touch
            </button>
            <a
              href="/Pallavi_Maralla_Satish_Resume.pdf"
              className="btn-outline"
              download
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Icon name="FiDownload" />
              Resume
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <a href={SOCIAL.github} target="_blank" rel="noreferrer" className="hero-social-link" aria-label="GitHub">
              <Icon name="FiGithub" size={20} />
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <Icon name="FiLinkedin" size={20} />
            </a>
            <a href={SOCIAL.mailto} className="hero-social-link" aria-label="Email">
              <Icon name="FiMail" size={20} />
            </a>
            <div className="social-line" />
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="code-window">
            <div className="code-window-header">
              <div className="window-dot dot-red" />
              <div className="window-dot dot-yellow" />
              <div className="window-dot dot-green" />
              <span className="window-title mono">pallavi.ts</span>
            </div>
            <div className="code-window-body">
              <pre className="code-content mono">
                <span className="code-keyword">const</span>{' '}
                <span className="code-var">developer</span>{' '}
                <span className="code-op">=</span>{' '}
                <span className="code-bracket">{'{'}</span>
                {'\n'}
                {'  '}<span className="code-key">name</span>
                <span className="code-op">:</span>{' '}
                <span className="code-string">"Pallavi Maralla Satish"</span>,
                {'\n'}
                {'  '}<span className="code-key">role</span>
                <span className="code-op">:</span>{' '}
                <span className="code-string">"Full Stack Developer | Backend Engineer | SDE"</span>,
                {'\n'}
                {'  '}<span className="code-key">location</span>
                <span className="code-op">:</span>{' '}
                <span className="code-string">"New Jersey, USA · Open to Relocation"</span>,
                {'\n'}
                {'  '}<span className="code-key">education</span>
                <span className="code-op">:</span>{' '}
                <span className="code-string">"MS CS @ Stevens"</span>,
                {'\n'}
                {'  '}<span className="code-key">stack</span>
                <span className="code-op">:</span>{' '}
                <span className="code-bracket">[</span>
                {'\n'}
                {'    '}<span className="code-string">"React"</span>,{' '}
                <span className="code-string">"Node.js"</span>,{' '}
                <span className="code-string">"TypeScript"</span>,
                {'\n'}
                {'    '}<span className="code-string">"Java"</span>,{' '}
                <span className="code-string">"Vert.x"</span>,{' '}
                <span className="code-string">"Kafka"</span>,
                {'\n'}
                {'    '}<span className="code-string">"GCP"</span>,{' '}
                <span className="code-string">"AWS"</span>,{' '}
                <span className="code-string">"Redis"</span>,
                {'\n'}
                {'    '}<span className="code-string">"Python"</span>,{' '}
                <span className="code-string">"Kotlin"</span>,{' '}
                <span className="code-string">"Firebase"</span>,
                {'\n'}
                {'    '}<span className="code-string">"Swagger"</span>,{' '}
                <span className="code-string">"ScyllaDB"</span>,{' '}
                <span className="code-string">"Zoho"</span>,
                {'\n'}
                {'  '}<span className="code-bracket">]</span>,
                {'\n'}
                {'  '}<span className="code-key">openToWork</span>
                <span className="code-op">:</span>{' '}
                <span className="code-bool">true</span>,
                {'\n'}
                <span className="code-bracket">{'}'}</span>
                <span className="code-op">;</span>
              </pre>
            </div>
          </div>

          <div className="floating-badges">
            {floatingBadges.map(({ label, cls, y, dur, delay }) => (
              <motion.div
                key={label}
                className={`float-badge ${cls}`}
                animate={{ y: [0, -y, 0] }}
                transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay }}
              >
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.button
        className="scroll-down-btn"
        onClick={scrollToAbout}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        aria-label="Scroll to about"
      >
        <Icon name="FiArrowDown" size={20} />
      </motion.button>
    </section>
  );
};

export default Hero;
