import React from 'react';
import { SectionHeader, FadeIn } from '../../ui';
import { profile } from '../../../data/profile';
import { sections } from '../../../data/sections';
import styles from './About.module.css';

const aboutSection = sections.find(s => s.id === 'about')!;

const About: React.FC = () => {
  return (
    <section id="about" className={styles['about-section']}>
      <div className={styles['section-container']}>
        <FadeIn as="div" delay={0} y={20} duration={0.7}>
          <SectionHeader num={aboutSection.number} label={aboutSection.label} title={aboutSection.title} />
        </FadeIn>

        <div className={styles['about-content']}>
          <FadeIn as="div" className={styles['about-text']} delay={0.15} y={20} duration={0.7}>
            <p>{profile.aboutSummary}</p>
          </FadeIn>

          <FadeIn as="div" className={styles['about-info-grid']} delay={0.3} y={20} duration={0.7}>
            <div className={styles['info-item']}>
              <span className={styles['info-label']}>Location</span>
              <span className={styles['info-value']}>{profile.location}</span>
            </div>
            <div className={styles['info-item']}>
              <span className={styles['info-label']}>Email</span>
              <a href={`mailto:${profile.email}`} className={styles['info-link']}>
                {profile.email}
              </a>
            </div>
            <div className={styles['info-item']}>
              <span className={styles['info-label']}>Phone</span>
              <span className={styles['info-value']}>{profile.phone}</span>
            </div>
            <div className={styles['info-item']}>
              <span className={styles['info-label']}>Status</span>
              <span className={styles['info-available']}>
                <span className={styles['status-dot']} />
                Open to Opportunities
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
