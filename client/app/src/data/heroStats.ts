export interface Stat {
  value: string;
  label: string;
}

export interface FloatingBadge {
  label: string;
  cls: string;
  y: number;
  dur: number;
  delay: number;
}

export const roles: string[] = [
  'Full Stack Developer',
  'Backend Engineer',
  'Software Development Engineer (SDE)',
  'Java Backend Developer',
  'Node.js Developer',
  'API Developer',
  'Android Developer',
];

export const heroStats: Stat[] = [
  { value: '3+', label: 'Years Exp.' },
  { value: 'AI', label: 'LLM & Embeddings' },
  { value: 'CI/CD', label: 'Jenkins & Git' },
  { value: 'Agile', label: 'Scrum & Sprints' },
];

export const floatingBadges: FloatingBadge[] = [
  { label: '☕ Java', cls: 'badge-java', y: 8, dur: 3.0, delay: 0.00 },
  { label: '🔺 Vert.x', cls: 'badge-vertx', y: 10, dur: 3.5, delay: 0.40 },
  { label: '📨 Kafka', cls: 'badge-kafka', y: 7, dur: 2.8, delay: 0.80 },
  { label: '🐍 Python', cls: 'badge-python', y: 9, dur: 3.3, delay: 0.20 },
  { label: '🟢 Node.js', cls: 'badge-node', y: 8, dur: 3.1, delay: 0.60 },
  { label: '⚛️ React.js', cls: 'badge-react', y: 9, dur: 3.2, delay: 0.10 },
  { label: '🗄️ Redis', cls: 'badge-redis', y: 6, dur: 2.9, delay: 1.00 },
  { label: '🔧 Git', cls: 'badge-git', y: 9, dur: 3.4, delay: 0.30 },
  { label: '⚙️ CI/CD', cls: 'badge-cicd', y: 7, dur: 3.0, delay: 0.70 },
  { label: '📱 Kotlin', cls: 'badge-kotlin', y: 8, dur: 3.2, delay: 0.50 },
  { label: '🔥 Firebase', cls: 'badge-firebase', y: 10, dur: 3.6, delay: 0.90 },
  { label: '☁️ GCP', cls: 'badge-gcp', y: 7, dur: 3.1, delay: 1.20 },
  { label: '🌩️ AWS', cls: 'badge-aws', y: 8, dur: 2.9, delay: 0.35 },
  { label: '🐳 Docker', cls: 'badge-docker', y: 9, dur: 3.3, delay: 0.65 },
  { label: '🌀 Spring Boot', cls: 'badge-spring', y: 6, dur: 3.0, delay: 1.10 },
  { label: '🔷 TypeScript', cls: 'badge-ts', y: 8, dur: 3.4, delay: 0.45 },
  { label: '🛢️ PostgreSQL', cls: 'badge-postgres', y: 7, dur: 2.8, delay: 0.85 },
  { label: '🍃 MongoDB', cls: 'badge-mongo', y: 9, dur: 3.1, delay: 0.25 },
  { label: '🪸 ScyllaDB', cls: 'badge-scylla', y: 8, dur: 3.0, delay: 1.30 },
  { label: '📋 Zoho', cls: 'badge-zoho', y: 7, dur: 2.9, delay: 0.55 },
  { label: '📖 Swagger', cls: 'badge-swagger', y: 9, dur: 3.2, delay: 0.95 },
];
