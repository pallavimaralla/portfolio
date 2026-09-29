export interface Project {
  title: string;
  desc: string;
  tech: string[];
  repo?: string;
  live?: string;
}

export const projects: Project[] = [
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
