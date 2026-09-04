import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import './Projects.css';

interface Project {
  title: string;
  desc: string;
  tech: string[];
  repo?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: 'Query Plot',
    desc: 'Natural-language-to-chart pipeline supporting 7 distinct chart types generated without manual charting code. Built a prompt-engineered LLM integration (Ollama/CodeLlama) that converts plain-English queries into validated pandas/matplotlib/seaborn code. Architected secure execution for AI-generated code with a sandboxed Python subprocess, restricted builtins allowlist, and automated code-sanitization. Full-stack platform with React/TypeScript frontend and Node.js/Express backend with PostgreSQL history and Redis chart caching.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Ollama/CodeLlama'],
    repo: 'https://github.com/pallavimaralla/query-plot',
  },
  {
    title: 'GlowGraph - AI-Powered Skincare Storefront',
    desc: 'Agentic conversational AI system using Claude API with LangGraph-inspired state orchestration. Classifies user intent and routes queries to semantic search or direct recommendations, reducing latency by 40%. Built hybrid semantic search pipeline with constraint extraction for product filters using local text-based embeddings. Production-ready e-commerce with Firebase multi-provider authentication, Redis-backed cart state, and MongoDB order persistence across 51 products in 6 concern-based ranges.',
    tech: ['Node.js', 'Express', 'React', 'Vite', 'Claude API', 'Firebase', 'MongoDB', 'Redis', 'Docker'],
    repo: 'https://github.com/pallavimaralla/glowgraph',
  },
  {
    title: 'Portfolio Site',
    desc: 'This portfolio — built with React, Framer Motion, TypeScript, and an animated particle canvas. Fully responsive with a dark, tech-focused design and accessible component architecture.',
    tech: ['React', 'Framer Motion', 'TypeScript', 'CSS3'],
    repo: 'https://github.com/pallavimaralla/portfolio',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects: React.FC = () => (
  <section id="projects" className="projects-section">
    <div className="section-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label mono">
          <span className="label-num">03.</span> Projects
        </div>
        <h2 className="section-title">Selected Projects</h2>
        <div className="section-divider" />
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map(p => {
          const slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return (
            <motion.div
              key={p.title}
              id={`proj-${slug}`}
              className="project-card gradient-border"
              role="article"
              tabIndex={0}
              aria-labelledby={`proj-${slug}-title`}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="project-card-top">
                {React.createElement(FiFolder as any, { size: 28, className: 'project-folder-icon' })}
                <div className="project-links">
                  {p.repo && (
                    <a
                      aria-label={`Open ${p.title} repository`}
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      {React.createElement(FiGithub as any, { size: 18 })}
                    </a>
                  )}
                  {p.live && (
                    <a
                      aria-label={`Open ${p.title} live site`}
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      {React.createElement(FiExternalLink as any, { size: 18 })}
                    </a>
                  )}
                </div>
              </div>

              <h3 id={`proj-${slug}-title`} className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="project-tech">
                {p.tech.map(t => (
                  <span key={t} className="tag tag-cyan">{t}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Projects;
