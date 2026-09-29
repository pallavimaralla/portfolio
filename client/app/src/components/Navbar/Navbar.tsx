import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../ui';
import { profile } from '../../data/profile';
import { sections } from '../../data/sections';
import { useActiveSection } from '../../hooks';
import styles from './Navbar.module.css';

const navLinks = sections.map(s => ({ label: s.label, href: `#${s.id}` }));

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      role="navigation"
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles["navbar-inner"]}>
        <a className={styles["navbar-logo"]} href="#hero" onClick={() => handleNavClick('#hero')}>
          <span className={styles["logo-bracket"]}>&lt;</span>
          <span className={styles["logo-text"]}>PM</span>
          <span className={styles["logo-bracket"]}>/&gt;</span>
        </a>

        <div className={styles["navbar-links"]}>
          {navLinks.map((link, i) => (
            <motion.button
              key={link.label}
              className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
              onClick={() => handleNavClick(link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <span className="nav-index mono">0{i + 1}.</span>
              {link.label}
            </motion.button>
          ))}
          <div className={styles["navbar-socials"]}>
            <a href={profile.github} target="_blank" rel="noreferrer" className={styles["social-icon"]}>
              <Icon name="FiGithub" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles["social-icon"]}>
              <Icon name="FiLinkedin" />
            </a>
          </div>
        </div>

        <button
          id="navbar-hamburger"
          className={styles["hamburger"]}
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <Icon name="FiX" size={22} /> : <Icon name="FiMenu" size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="menu"
            aria-hidden={!menuOpen}
            className={styles["mobile-menu"]}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                className={styles["mobile-nav-link"]}
                onClick={() => handleNavClick(link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="nav-index mono">0{i + 1}.</span>
                {link.label}
              </motion.button>
            ))}
            <div className={styles["mobile-socials"]}>
              <a href={profile.github} target="_blank" rel="noreferrer" className={styles["social-icon"]}>
                <Icon name="FiGithub" size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles["social-icon"]}>
                <Icon name="FiLinkedin" size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
