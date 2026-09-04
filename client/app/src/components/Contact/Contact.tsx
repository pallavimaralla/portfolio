import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { SOCIAL } from '../../config/social';
import './Contact.css';

// EmailJS config — fill these in after setting up emailjs.com
const EMAILJS_SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID  || '';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY  || '';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email me directly.');
    }
  };

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label mono">
            <span className="label-num">06.</span> Contact
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="contact-blurb">
              I'm currently open to new opportunities. Whether it's a full-time role, a
              collaboration, or just a question — my inbox is always open.
            </p>

            <div className="contact-links">
              <a href={SOCIAL.mailto} className="contact-link-item">
                <div className="contact-link-icon icon-cyan">
                  {React.createElement(FiMail as any, { size: 18 })}
                </div>
                <div>
                  <div className="contact-link-label mono">Email</div>
                  <div className="contact-link-value">{SOCIAL.email}</div>
                </div>
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-link-item"
              >
                <div className="contact-link-icon icon-purple">
                  {React.createElement(FiLinkedin as any, { size: 18 })}
                </div>
                <div>
                  <div className="contact-link-label mono">LinkedIn</div>
                  <div className="contact-link-value">pallavi-maralla</div>
                </div>
              </a>
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noreferrer"
                className="contact-link-item"
              >
                <div className="contact-link-icon icon-green">
                  {React.createElement(FiGithub as any, { size: 18 })}
                </div>
                <div>
                  <div className="contact-link-label mono">GitHub</div>
                  <div className="contact-link-value">pallavimaralla</div>
                </div>
              </a>
              <div className="contact-link-item no-hover">
                <div className="contact-link-icon icon-pink">
                  {React.createElement(FiMapPin as any, { size: 18 })}
                </div>
                <div>
                  <div className="contact-link-label mono">Location</div>
                  <div className="contact-link-value">New Jersey, USA · Open to Relocation</div>
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
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label mono">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Jane Smith"
                  className="form-input"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label mono">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="form-input"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-message" className="form-label mono">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about the opportunity or project..."
                className="form-input form-textarea"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            {status === 'error' && errorMsg && (
              <p className="form-error">{errorMsg}</p>
            )}

            <button
              type="submit"
              className={`btn-primary contact-submit ${!isValid ? 'btn-disabled' : ''}`}
              disabled={!isValid || status === 'sending'}
            >
              {status === 'sending' ? (
                <span className="sending-spinner" />
              ) : status === 'sent' ? (
                '✓ Message Sent!'
              ) : (
                <>
                  {React.createElement(FiSend as any, { size: 15 })}
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
