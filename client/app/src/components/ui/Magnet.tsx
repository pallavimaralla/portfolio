import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const prefersReduced = usePrefersReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const distX = Math.abs(mouseX - centerX);
    const distY = Math.abs(mouseY - centerY);

    const isWithinPadding = distX < centerX + padding && distY < centerY + padding;

    if (isWithinPadding) {
      setIsActive(true);
      setX((mouseX - centerX) / strength);
      setY((mouseY - centerY) / strength);
    } else {
      setIsActive(false);
      setX(0);
      setY(0);
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setX(0);
    setY(0);
  };

  if (prefersReduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{
        duration: isActive ? 0.3 : 0.6,
        ease: isActive ? 'easeOut' : 'easeInOut',
      }}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
};
