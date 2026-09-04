import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import { SOCIAL } from '../../config/social';
import './Hero.css';

const roles = [
  'Full Stack Developer',
  'Backend Engineer',
  'Software Development Engineer (SDE)',
  'Java Backend Developer',
  'Node.js Developer',
  'API Developer',
  'Android Developer',
];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState(prefersReducedMotion ? roles[0] : '');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(prefersReducedMotion ? roles[0].length : 0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(c => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(c => c - 1);
      }, 45);
    } else {
      setIsDeleting(false);
      setRoleIndex(r => (r + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

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
            <div className="stat-item">
              <span className="stat-value">3+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">AI</span>
              <span className="stat-label">LLM & Embeddings</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">CI/CD</span>
              <span className="stat-label">Jenkins & Git</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-value">Agile</span>
              <span className="stat-label">Scrum & Sprints</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {React.createElement(FiMail as any, { style: { marginRight: '0.5rem' } })}
              Get In Touch
            </button>
            <a
              href="/Pallavi_Maralla_Satish_Resume.pdf"
              className="btn-outline"
              download
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              {React.createElement(FiDownload as any)}
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
              {React.createElement(FiGithub as any, { size: 20 })}
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="hero-social-link" aria-label="LinkedIn">
              {React.createElement(FiLinkedin as any, { size: 20 })}
            </a>
            <a href={SOCIAL.mailto} className="hero-social-link" aria-label="Email">
              {React.createElement(FiMail as any, { size: 20 })}
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
            {[
              { label: '☕ Java',         cls: 'badge-java',     y: 8,  dur: 3.0, delay: 0.00 },
              { label: '🔺 Vert.x',      cls: 'badge-vertx',    y: 10, dur: 3.5, delay: 0.40 },
              { label: '📨 Kafka',       cls: 'badge-kafka',    y: 7,  dur: 2.8, delay: 0.80 },
              { label: '🐍 Python',      cls: 'badge-python',   y: 9,  dur: 3.3, delay: 0.20 },
              { label: '🟢 Node.js',     cls: 'badge-node',     y: 8,  dur: 3.1, delay: 0.60 },
              { label: '⚛️ React.js',    cls: 'badge-react',    y: 9,  dur: 3.2, delay: 0.10 },
              { label: '🗄️ Redis',       cls: 'badge-redis',    y: 6,  dur: 2.9, delay: 1.00 },
              { label: '🔧 Git',         cls: 'badge-git',      y: 9,  dur: 3.4, delay: 0.30 },
              { label: '⚙️ CI/CD',      cls: 'badge-cicd',     y: 7,  dur: 3.0, delay: 0.70 },
              { label: '📱 Kotlin',      cls: 'badge-kotlin',   y: 8,  dur: 3.2, delay: 0.50 },
              { label: '🔥 Firebase',    cls: 'badge-firebase', y: 10, dur: 3.6, delay: 0.90 },
              { label: '☁️ GCP',         cls: 'badge-gcp',      y: 7,  dur: 3.1, delay: 1.20 },
              { label: '🌩️ AWS',         cls: 'badge-aws',      y: 8,  dur: 2.9, delay: 0.35 },
              { label: '🐳 Docker',      cls: 'badge-docker',   y: 9,  dur: 3.3, delay: 0.65 },
              { label: '🌀 Spring Boot', cls: 'badge-spring',   y: 6,  dur: 3.0, delay: 1.10 },
              { label: '🔷 TypeScript',  cls: 'badge-ts',       y: 8,  dur: 3.4, delay: 0.45 },
              { label: '🛢️ PostgreSQL',  cls: 'badge-postgres', y: 7,  dur: 2.8, delay: 0.85 },
              { label: '🍃 MongoDB',     cls: 'badge-mongo',   y: 9,  dur: 3.1, delay: 0.25 },
              { label: '🪸 ScyllaDB',   cls: 'badge-scylla',  y: 8,  dur: 3.0, delay: 1.30 },
              { label: '📋 Zoho',       cls: 'badge-zoho',    y: 7,  dur: 2.9, delay: 0.55 },
              { label: '📖 Swagger',    cls: 'badge-swagger', y: 9,  dur: 3.2, delay: 0.95 },
            ].map(({ label, cls, y, dur, delay }) => (
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
        {React.createElement(FiArrowDown as any, { size: 20 })}
      </motion.button>
    </section>
  );
};

export default Hero;
