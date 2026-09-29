import React from 'react';
import { Magnet, Icon } from '../ui';
import { ContactButton, GhostPill } from '../ui';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Pallavi_Maralla_Satish_Resume.pdf';
    link.download = 'Pallavi_Maralla_Satish_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className={styles['hero-section']}>
      {/* Heading with overflow-hidden wrapper */}
      <div className={styles['heading-wrapper']}>
        <h1 className={styles['hero-heading']}>
          <span className={styles['heading-gradient']}>HI, I'M PALLAVI</span>
        </h1>
      </div>

      {/* Tagline bottom-left */}
      <div className={styles['tagline-container']}>
        <p className={styles['hero-tagline']}>
          A backend engineer building scalable platforms and AI-powered tools
        </p>
      </div>

      {/* Buttons bottom-right */}
      <div className={styles['buttons-container']}>
        <ContactButton onClick={handleContactClick}>Contact Me</ContactButton>
        <GhostPill as="a" href="/Pallavi_Maralla_Satish_Resume.pdf" download onClick={handleResumeClick}>
          Resume
        </GhostPill>
      </div>

      {/* Portrait absolutely positioned */}
      <div className={styles['portrait-container']}>
        <Magnet strength={3} padding={150}>
          <img
            src="/portrait.webp"
            alt="Pallavi Maralla Satish"
            className={styles['hero-portrait']}
          />
        </Magnet>
      </div>
    </section>
  );
};

export default Hero;
