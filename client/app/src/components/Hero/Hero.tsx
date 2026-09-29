import React from 'react';
import { Icon, FadeIn, Magnet, ContactButton, GhostPill } from '../ui';
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
      <div className={styles['hero-container']}>
        {/* Left Content */}
        <div className={styles['hero-content']}>
          {/* Heading */}
          <FadeIn as="h1" className={styles['hero-heading']} delay={0.15} y={40} duration={0.7}>
            <span className={styles['heading-gradient']}>HI, I'M PALLAVI</span>
          </FadeIn>

          {/* Tagline */}
          <FadeIn as="p" className={styles['hero-tagline']} delay={0.35} y={20} duration={0.7}>
            A backend engineer building scalable platforms and AI-powered tools
          </FadeIn>

          {/* Buttons */}
          <FadeIn as="div" className={styles['hero-buttons']} delay={0.5} y={20} duration={0.7}>
            <ContactButton onClick={handleContactClick}>Contact Me</ContactButton>
            <GhostPill as="a" href="/Pallavi_Maralla_Satish_Resume.pdf" download onClick={handleResumeClick}>
              Resume
            </GhostPill>
          </FadeIn>
        </div>

        {/* Right Portrait */}
        <FadeIn as="div" className={styles['hero-portrait-container']} delay={0.6} y={30} duration={0.7}>
          <Magnet strength={0.3} padding={20}>
            <img
              src="/portrait.webp"
              alt="Pallavi Maralla Satish"
              className={styles['hero-portrait']}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Scroll Down Button */}
      <button
        className={styles['scroll-down-btn']}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to about"
      >
        <Icon name="FiArrowDown" size={20} />
      </button>
    </section>
  );
};

export default Hero;
