import React from 'react';
import { AnimatedText, ContactButton, FadeIn } from '../../ui';
import { profile } from '../../../data/profile';
import styles from './About.module.css';

const About: React.FC = () => {
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className={styles['about-section']}>
      <div className={styles['section-container']}>
        {/* Giant centered gradient heading */}
        <FadeIn as="h2" className={styles['about-heading']} delay={0} y={20} duration={0.7}>
          <span className={styles['heading-gradient']}>ABOUT ME</span>
        </FadeIn>

        {/* About summary with AnimatedText */}
        <div className={styles['about-text-wrapper']}>
          <AnimatedText text={profile.aboutSummary} className={styles['about-text']} />
        </div>

        {/* Contact button */}
        <FadeIn as="div" className={styles['button-wrapper']} delay={0.15} y={20} duration={0.7}>
          <ContactButton onClick={handleContactClick}>Contact Me</ContactButton>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
