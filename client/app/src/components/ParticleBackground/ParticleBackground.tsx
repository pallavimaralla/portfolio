import React, { useEffect, useRef } from 'react';
import styles from './ParticleBackground.module.css';
import { usePrefersReducedMotion } from '../../hooks';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const getComputedColor = (cssVar: string): string => {
      const value = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
      return value || '#00d4ff';
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = [
      getComputedColor('--accent-cyan'),
      getComputedColor('--accent-purple'),
      getComputedColor('--accent-green-bright'),
      getComputedColor('--syntax-pink'),
    ];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * (canvas!.width / (window.devicePixelRatio || 1));
        this.y = Math.random() * (canvas!.height / (window.devicePixelRatio || 1));
        this.vx = prefersReduced ? 0 : (Math.random() - 0.5) * 0.4;
        this.vy = prefersReduced ? 0 : (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        if (!prefersReduced) {
          this.x += this.vx;
          this.y += this.vy;
        }
        const w = canvas!.width / (window.devicePixelRatio || 1);
        const h = canvas!.height / (window.devicePixelRatio || 1);
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }

    const drawConnections = () => {
      if (prefersReduced) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = colors[0];
            ctx.globalAlpha = (1 - dist / 120) * 0.08;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [prefersReduced]);

  return <canvas ref={canvasRef} className={styles["particle-canvas"]} />;
};

export default ParticleBackground;
