import React from 'react';
import { motion } from 'framer-motion';
import { Icon, FadeIn } from '../../ui';
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
              className={`btn-primary contact-submit ${!isValid ? 'btn-disabled' : ''}`}
              disabled={!isValid || status === 'sending'}
            >
              {status === 'sending' ? (
                <span className={styles["sending-spinner"]} />
              ) : status === 'sent' ? (
                '✓ Message Sent!'
              ) : (
                <>
                  <Icon name="FiSend" size={15} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
