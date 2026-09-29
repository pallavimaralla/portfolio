import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon, FadeIn } from '../ui';
import { sections } from '../../data/sections';
import { usePrefersReducedMotion } from '../../hooks';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'PM', href: '#hero' },
  ...sections.map(s => ({ label: s.label, href: `#${s.id}` })),
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
      hamburgerRef.current?.focus();
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [menuOpen]);

  const closedMenu = () => {
    setMenuOpen(false);
    hamburgerRef.current?.focus();
  };

  return (
    <FadeIn as="nav" className={styles.navbar} delay={0} y={-20} duration={0.7}>
      <div className={styles.container}>
        {/* Logo */}
        <a
          href="#hero"
          className={styles.logo}
          onClick={() => handleNavClick('#hero')}
        >
          PM
        </a>

        {/* Desktop Links */}
        <div className={styles.links}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.link}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'FiX' : 'FiMenu'} size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={styles.mobileLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: prefersReduced ? 0 : i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </FadeIn>
  );
};

export default Navbar;
