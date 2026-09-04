import React, { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import './BackToTop.css';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      {React.createElement(FiArrowUp as any, { size: 20 })}
    </button>
  );
};

export default BackToTop;
