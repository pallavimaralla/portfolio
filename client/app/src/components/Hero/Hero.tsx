import React from 'react';
import { motion } from 'framer-motion';
import { Icon, FadeIn, GradientText } from '../ui';
import { profile } from '../../data/profile';
import { heroStats, floatingBadges, roles } from '../../data/heroStats';
import { useTypewriter } from '../../hooks';
import styles from './Hero.module.css';

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
    <section id="hero" className={styles["hero-section"]}>
      <div className={styles["hero-container"]}>
        <div className={styles["hero-content"]}>
          <motion.div
            className="hero-greeting mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className={styles["greeting-bracket"]}>{'>'}</span> Hello, World! I'm
          </motion.div>

          <motion.h1
            className={styles["hero-name"]}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <GradientText variant="name">
              Pallavi
              <br />
              <span className={styles["hero-name-last"]}>Maralla Satish</span>
            </GradientText>
          </motion.h1>

          <motion.div
            className={styles["hero-role"]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="role-prefix mono">const role = </span>
            <span className="role-quote mono">"</span>
            <span className={styles["role-text"]}>{displayed}</span>
            <span className={styles["role-cursor"]}>|</span>
            <span className="role-quote mono">"</span>
          </motion.div>

          <motion.p
            className={styles["hero-summary"]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Full Stack & Backend Engineer with <span className={styles["highlight"]}>3+ years</span> of experience in{' '}
            <span className={styles["highlight"]}>React.js</span>, <span className={styles["highlight"]}>Node.js</span>,{' '}
            <span className={styles["highlight"]}>Java</span>, and <span className={styles["highlight"]}>Python</span>.
            Scaled APIs to 5K req/s, cut cloud costs 15%, and built AI-powered search tools.
          </motion.p>

          <motion.div
            className={styles["hero-stats"]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            {heroStats.map((stat, i) => (
              <React.Fragment key={stat.value}>
                <div className={styles["stat-item"]}>
                  <span className={styles["stat-value"]}>{stat.value}</span>
                  <span className={styles["stat-label"]}>{stat.label}</span>
                </div>
                {i < heroStats.length - 1 && <div className={styles["stat-divider"]} />}
              </React.Fragment>
            ))}
          </motion.div>

          <motion.div
            className={styles["hero-actions"]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <button className={styles["btn-primary"]} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="FiMail" style={{ marginRight: '0.5rem' }} />
              Get In Touch
            </button>
            <a
              href="/Pallavi_Maralla_Satish_Resume.pdf"
              className={styles["btn-outline"]}
              download
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Icon name="FiDownload" />
              Resume
            </a>
          </motion.div>

          <motion.div
            className={styles["hero-socials"]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <a href={SOCIAL.github} target="_blank" rel="noreferrer" className={styles["hero-social-link"]} aria-label="GitHub">
              <Icon name="FiGithub" size={20} />
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className={styles["hero-social-link"]} aria-label="LinkedIn">
              <Icon name="FiLinkedin" size={20} />
            </a>
            <a href={SOCIAL.mailto} className={styles["hero-social-link"]} aria-label="Email">
              <Icon name="FiMail" size={20} />
            </a>
            <div className={styles["social-line"]} />
          </motion.div>
        </div>

        <motion.div
          className={styles["hero-visual"]}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className={styles["code-window"]}>
            <div className={styles["code-window-header"]}>
              <div className="window-dot dot-red" />
              <div className="window-dot dot-yellow" />
              <div className="window-dot dot-green" />
              <span className="window-title mono">pallavi.ts</span>
            </div>
            <div className={styles["code-window-body"]}>
              <pre className="code-content mono">
                <span className={styles["code-keyword"]}>const</span>{' '}
                <span className={styles["code-var"]}>developer</span>{' '}
                <span className={styles["code-op"]}>=</span>{' '}
                <span className={styles["code-bracket"]}>{'{'}</span>
                {'\n'}
                {'  '}<span className={styles["code-key"]}>name</span>
                <span className={styles["code-op"]}>:</span>{' '}
                <span className={styles["code-string"]}>"Pallavi Maralla Satish"</span>,
                {'\n'}
                {'  '}<span className={styles["code-key"]}>role</span>
                <span className={styles["code-op"]}>:</span>{' '}
                <span className={styles["code-string"]}>"Full Stack Developer | Backend Engineer | SDE"</span>,
                {'\n'}
                {'  '}<span className={styles["code-key"]}>location</span>
                <span className={styles["code-op"]}>:</span>{' '}
                <span className={styles["code-string"]}>"New Jersey, USA · Open to Relocation"</span>,
                {'\n'}
                {'  '}<span className={styles["code-key"]}>education</span>
                <span className={styles["code-op"]}>:</span>{' '}
                <span className={styles["code-string"]}>"MS CS @ Stevens"</span>,
                {'\n'}
                {'  '}<span className={styles["code-key"]}>stack</span>
                <span className={styles["code-op"]}>:</span>{' '}
                <span className={styles["code-bracket"]}>[</span>
                {'\n'}
                {'    '}<span className={styles["code-string"]}>"React"</span>,{' '}
                <span className={styles["code-string"]}>"Node.js"</span>,{' '}
                <span className={styles["code-string"]}>"TypeScript"</span>,
                {'\n'}
                {'    '}<span className={styles["code-string"]}>"Java"</span>,{' '}
                <span className={styles["code-string"]}>"Vert.x"</span>,{' '}
                <span className={styles["code-string"]}>"Kafka"</span>,
                {'\n'}
                {'    '}<span className={styles["code-string"]}>"GCP"</span>,{' '}
                <span className={styles["code-string"]}>"AWS"</span>,{' '}
                <span className={styles["code-string"]}>"Redis"</span>,
                {'\n'}
                {'    '}<span className={styles["code-string"]}>"Python"</span>,{' '}
                <span className={styles["code-string"]}>"Kotlin"</span>,{' '}
                <span className={styles["code-string"]}>"Firebase"</span>,
                {'\n'}
                {'    '}<span className={styles["code-string"]}>"Swagger"</span>,{' '}
                <span className={styles["code-string"]}>"ScyllaDB"</span>,{' '}
                <span className={styles["code-string"]}>"Zoho"</span>,
                {'\n'}
                {'  '}<span className={styles["code-bracket"]}>]</span>,
                {'\n'}
                {'  '}<span className={styles["code-key"]}>openToWork</span>
                <span className={styles["code-op"]}>:</span>{' '}
                <span className={styles["code-bool"]}>true</span>,
                {'\n'}
                <span className={styles["code-bracket"]}>{'}'}</span>
                <span className={styles["code-op"]}>;</span>
              </pre>
            </div>
          </div>

          <div className={styles["floating-badges"]}>
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
        className={styles["scroll-down-btn"]}
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
