import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SOCIAL } from '../../config/social';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
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
      <div className="navbar-inner">
        <a className="navbar-logo" href="#hero" onClick={() => handleNavClick('#hero')}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">PM</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <div className="navbar-links">
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
          <div className="navbar-socials">
            <a href={SOCIAL.github} target="_blank" rel="noreferrer" className="social-icon">
              {React.createElement(FiGithub as any)}
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="social-icon">
              {React.createElement(FiLinkedin as any)}
            </a>
          </div>
        </div>

        <button
          id="navbar-hamburger"
          className="hamburger"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? React.createElement(FiX as any, { size: 22 }) : React.createElement(FiMenu as any, { size: 22 })}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="menu"
            aria-hidden={!menuOpen}
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                className="mobile-nav-link"
                onClick={() => handleNavClick(link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="nav-index mono">0{i + 1}.</span>
                {link.label}
              </motion.button>
            ))}
            <div className="mobile-socials">
              <a href={SOCIAL.github} target="_blank" rel="noreferrer" className="social-icon">
                {React.createElement(FiGithub as any, { size: 20 })}
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="social-icon">
                {React.createElement(FiLinkedin as any, { size: 20 })}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
