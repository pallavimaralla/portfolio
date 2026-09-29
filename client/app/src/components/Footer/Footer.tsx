import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SOCIAL } from '../../config/social';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles["footer"]}>
    <div className="section-container footer-inner">
      <span className="footer-copy mono">
        &copy; {new Date().getFullYear()} Pallavi Maralla
      </span>
      <span className="footer-built mono">Built with React &amp; TypeScript</span>
      <div className={styles["footer-socials"]}>
        <a href={SOCIAL.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={styles["footer-social-link"]}>
          {React.createElement(FiGithub as any, { size: 16 })}
        </a>
        <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={styles["footer-social-link"]}>
          {React.createElement(FiLinkedin as any, { size: 16 })}
        </a>
        <a href={SOCIAL.mailto} aria-label="Email" className={styles["footer-social-link"]}>
          {React.createElement(FiMail as any, { size: 16 })}
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
