import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCode, FiLayout, FiServer, FiCloud, FiDatabase, FiTool,
} from 'react-icons/fi';
import './Skills.css';

interface SkillCategory {
  label: string;
  // react-icons IconType is incompatible with TS 4.x JSX, cast at usage
  icon: any;
  color: 'cyan' | 'purple' | 'green' | 'pink';
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    label: 'Languages',
    icon: FiCode,
    color: 'cyan',
    skills: ['JavaScript', 'TypeScript', 'Java', 'Kotlin', 'Python', 'C++', 'SQL', 'NoSQL', 'Bash Scripting'],
  },
  {
    label: 'Frontend',
    icon: FiLayout,
    color: 'purple',
    skills: ['React', 'TypeScript', 'HTML5 / CSS3', 'Framer Motion', 'Vite', 'Responsive Design'],
  },
  {
    label: 'Backend',
    icon: FiServer,
    color: 'green',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'RESTful APIs', 'GraphQL', 'Microservices', 'API Gateway', 'Zoho Creator', 'Message Queues', 'Distributed Systems'],
  },
  {
    label: 'Cloud & DevOps',
    icon: FiCloud,
    color: 'cyan',
    skills: ['AWS (S3, Route 53, Lambda, CodePipeline, CodeBuild)', 'GCP (Cloud Functions, Storage)', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Infrastructure as Code'],
  },
  {
    label: 'Databases & Messaging',
    icon: FiDatabase,
    color: 'purple',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'ScyllaDB', 'MySQL', 'Amazon DynamoDB', 'Azure SQL', 'Apache Kafka', 'Data Pipelines'],
  },
  {
    label: 'Security & API Design',
    icon: FiTool,
    color: 'green',
    skills: ['OAuth 2.0', 'JWT', 'AWS IAM', 'SSL/TLS', 'AWS KMS Encryption', 'HTTPS', 'Swagger/OpenAPI', 'Rate Limiting', 'Application Security', 'Data Encryption'],
  },
  {
    label: 'AI/LLM',
    icon: FiCode,
    color: 'pink',
    skills: ['Prompt Engineering', 'LLM Integration (Ollama/CodeLlama)', 'Claude API', 'Natural-Language-to-Code Pipelines', 'Sandboxed Code Execution', 'Vector Embeddings'],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Skills: React.FC = () => (
  <section id="skills" className="skills-section">
    <div className="section-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label mono">
          <span className="label-num">04.</span> Skills
        </div>
        <h2 className="section-title">Tech & Tools</h2>
        <div className="section-divider" />
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {categories.map(cat => (
          <motion.div
            key={cat.label}
            className={`skill-card skill-card-${cat.color} gradient-border`}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className={`skill-card-header skill-header-${cat.color}`}>
              {React.createElement(cat.icon, { size: 18 })}
              <span className="skill-category-label mono">{cat.label}</span>
            </div>
            <div className="skill-tags">
              {cat.skills.map(s => (
                <span key={s} className={`tag tag-${cat.color}`}>{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
