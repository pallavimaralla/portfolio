export type SkillColor = 'cyan' | 'purple' | 'green' | 'pink';

export type SkillIconName = 'FiCode' | 'FiLayout' | 'FiServer' | 'FiCloud' | 'FiDatabase' | 'FiTool';

export interface SkillCategory {
  label: string;
  icon: SkillIconName;
  color: SkillColor;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    icon: 'FiCode',
    color: 'cyan',
    skills: ['JavaScript', 'TypeScript', 'Java', 'Kotlin', 'Python', 'C++', 'SQL', 'NoSQL', 'Bash Scripting'],
  },
  {
    label: 'Frontend',
    icon: 'FiLayout',
    color: 'purple',
    skills: ['React', 'TypeScript', 'HTML5 / CSS3', 'Framer Motion', 'Vite', 'Responsive Design'],
  },
  {
    label: 'Backend',
    icon: 'FiServer',
    color: 'green',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'RESTful APIs', 'GraphQL', 'Microservices', 'API Gateway', 'Zoho Creator', 'Message Queues', 'Distributed Systems'],
  },
  {
    label: 'Cloud & DevOps',
    icon: 'FiCloud',
    color: 'cyan',
    skills: ['AWS (S3, Route 53, Lambda, CodePipeline, CodeBuild)', 'GCP (Cloud Functions, Storage)', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Infrastructure as Code'],
  },
  {
    label: 'Databases & Messaging',
    icon: 'FiDatabase',
    color: 'purple',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'ScyllaDB', 'MySQL', 'Amazon DynamoDB', 'Azure SQL', 'Apache Kafka', 'Data Pipelines'],
  },
  {
    label: 'Security & API Design',
    icon: 'FiTool',
    color: 'green',
    skills: ['OAuth 2.0', 'JWT', 'AWS IAM', 'SSL/TLS', 'AWS KMS Encryption', 'HTTPS', 'Swagger/OpenAPI', 'Rate Limiting', 'Application Security', 'Data Encryption'],
  },
  {
    label: 'AI/LLM',
    icon: 'FiCode',
    color: 'pink',
    skills: ['Prompt Engineering', 'LLM Integration (Ollama/CodeLlama)', 'Claude API', 'Natural-Language-to-Code Pipelines', 'Sandboxed Code Execution', 'Vector Embeddings'],
  },
];
