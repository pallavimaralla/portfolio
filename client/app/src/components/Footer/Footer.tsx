import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SOCIAL } from '../../config/social';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles["footer"]}>
    <div className={styles["footer-container"]}>
      <span className={styles["footer-copy"]}>
        &copy; 2026 Pallavi Maralla Satish
      </span>
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
