import React from 'react';
import { motion } from 'framer-motion';
import { Icon, FadeIn, ContactButton } from '../../ui';
import { profile } from '../../../data/profile';
import { useContactForm } from '../../../hooks';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const { form, status, errorMsg, isValid, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className={styles["contact-section"]}>
      <div className={styles["section-container"]}>
        {/* Giant centered heading */}
        <FadeIn as="h2" className={styles["contact-heading"]} delay={0} y={20} duration={0.7}>
          <span className={styles["heading-gradient"]}>CONTACT</span>
        </FadeIn>

        <FadeIn as="div" className={styles["contact-grid"]} delay={0.15} y={20} duration={0.7}>
          <motion.div
            className={styles["contact-info"]}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className={styles["contact-blurb"]}>
              I'm currently open to new opportunities. Whether it's a full-time role, a
              collaboration, or just a question — my inbox is always open.
            </p>

            <div className={styles["contact-links"]}>
              <a href={`mailto:${profile.email}`} className={styles["contact-link-item"]}>
                <div className={`${styles["contact-link-icon"]} icon-cyan`}>
                  <Icon name="FiMail" size={18} />
                </div>
                <div>
                  <div className={`${styles["contact-link-label"]} mono`}>Email</div>
                  <div className={styles["contact-link-value"]}>{profile.email}</div>
                </div>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles["contact-link-item"]}
              >
                <div className={`${styles["contact-link-icon"]} icon-purple`}>
                  <Icon name="FiLinkedin" size={18} />
                </div>
                <div>
                  <div className={`${styles["contact-link-label"]} mono`}>LinkedIn</div>
                  <div className={styles["contact-link-value"]}>pallavi-maralla</div>
                </div>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className={styles["contact-link-item"]}
              >
                <div className={`${styles["contact-link-icon"]} icon-green`}>
                  <Icon name="FiGithub" size={18} />
                </div>
                <div>
                  <div className={`${styles["contact-link-label"]} mono`}>GitHub</div>
                  <div className={styles["contact-link-value"]}>pallavimaralla</div>
                </div>
              </a>
              <div className={`${styles["contact-link-item"]} no-hover`}>
                <div className={`${styles["contact-link-icon"]} icon-pink`}>
                  <Icon name="FiMapPin" size={18} />
                </div>
                <div>
                  <div className={`${styles["contact-link-label"]} mono`}>Location</div>
                  <div className={styles["contact-link-value"]}>{profile.location} · Open to Relocation</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form gradient-border"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label htmlFor="contact-name" className={`${styles["form-label"]} mono`}>Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Jane Smith"
                  className={styles["form-input"]}
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="contact-email" className={`${styles["form-label"]} mono`}>Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  className={styles["form-input"]}
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="contact-message" className={`${styles["form-label"]} mono`}>Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about the opportunity or project..."
                className={`${styles["form-input"]} ${styles["form-textarea"]}`}
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            {status === 'error' && errorMsg && (
              <p className={styles["form-error"]}>{errorMsg}</p>
            )}

            <button
              type="submit"
              className={styles["contact-submit"]}
              disabled={!isValid || status === 'sending'}
              style={{
                background: 'var(--gradient-cta)',
                color: 'var(--surface-light)',
                border: '2px solid var(--surface-light)',
                borderRadius: '999px',
                padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(2rem, 3vw, 3rem)',
                fontFamily: "'Kanit', sans-serif",
                fontWeight: '500',
                fontSize: 'clamp(0.75rem, 1vw, 1rem)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                cursor: !isValid || status === 'sending' ? 'not-allowed' : 'pointer',
                opacity: !isValid || status === 'sending' ? '0.5' : '1',
                transition: 'all 0.3s ease',
                boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721b1 inset',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
              }}
            >
              {status === 'sending' ? (
                <>
                  <span className={styles["sending-spinner"]} />
                  Sending...
                </>
              ) : status === 'sent' ? (
                '✓ Message Sent!'
              ) : (
                'Send Message'
              )}
            </button>
          </motion.form>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
