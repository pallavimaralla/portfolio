export type HighlightColor = 'cyan' | 'purple' | 'green' | 'pink';

export type HighlightIconName = 'FiServer' | 'FiCloud' | 'FiZap' | 'FiLayers';

export interface Highlight {
  icon: HighlightIconName;
  title: string;
  desc: string;
  color: HighlightColor;
}

export const highlights: Highlight[] = [
  {
    icon: 'FiServer',
    title: 'Backend Engineering',
    desc: 'Building production services across streaming, media, and research platforms using Node.js, Java, Spring Boot, and Python. Architecting microservices, APIs, and distributed systems at scale.',
    color: 'cyan',
  },
  {
    icon: 'FiCloud',
    title: 'Cloud & DevOps',
    desc: 'AWS-to-GCP cloud migrations, infrastructure management, and DevOps. Reduced costs by 15% and scaled services to 5K req/s through query optimization and CI/CD automation.',
    color: 'purple',
  },
  {
    icon: 'FiZap',
    title: 'AI/LLM Integration',
    desc: 'Hands-on prompt engineering and LLM integration (Ollama, Claude API). Built natural-language-to-code pipelines and agentic AI systems with secure sandboxed execution.',
    color: 'green',
  },
  {
    icon: 'FiLayers',
    title: 'Full Stack Development',
    desc: 'End-to-end platform ownership — React/TypeScript frontends, Node.js/Express backends, and PostgreSQL/MongoDB data layers deployed on Docker and Kubernetes.',
    color: 'pink',
  },
];
