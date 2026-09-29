export interface Job {
  company: string;
  domain: string;
  role: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  tech: string[];
  color: 'cyan' | 'purple' | 'green' | 'pink';
}

export const jobs: Job[] = [
  {
    company: 'Systems Engineering Research Center (SERC)',
    domain: 'DoD-Sponsored University Affiliated Research Center',
    role: 'DCTC IT Analyst',
    period: 'August 2026 – Present',
    location: 'Hoboken, New Jersey',
    type: 'Full-time',
    color: 'cyan',
    bullets: [
      'Lead IT operations and digital transformation initiatives across DCTC programs.',
      'Oversee infrastructure, security, and DevOps practices supporting research initiatives.',
      'Architect solutions for defense-related technology challenges.',
    ],
    tech: ['AWS', 'DevOps', 'Infrastructure', 'Security'],
  },
  {
    company: 'Systems Engineering Research Center (SERC)',
    domain: 'DoD-Sponsored University Affiliated Research Center',
    role: 'Full Stack Developer',
    period: 'June 2025 – May 2026',
    location: 'Hoboken, New Jersey',
    type: 'Full-time',
    color: 'cyan',
    bullets: [
      'Architected and engineered an internal workflow automation platform from the ground up, adopted across 500 users spanning SERC/AIRC staff, by independently owning system design, custom application logic, and deployment.',
      'Built custom backend logic beyond default no-code configuration, as measured by 6 forms, 10 views, and 15 reports powering the platform, by studying Zoho Creator\'s technical documentation.',
      'Drove continuous evolution of the platform through repeated feature additions, retirements, and re-optimizations without rebuild, by maintaining an extensible architecture.',
      'Provided infrastructure support for the platform through reliable data backup and domain resolution via AWS S3 and Route 53.',
    ],
    tech: ['Zoho Creator', 'AWS S3', 'AWS Route 53', 'Node.js', 'React', 'TypeScript'],
  },
  {
    company: 'Zee Entertainment Enterprises Limited',
    domain: 'Media & Entertainment Conglomerate, Parent of ZEE5 OTT Streaming Platform',
    role: 'Software Development Engineer - I',
    period: 'April 2022 – July 2024',
    location: 'Bangalore, India',
    type: 'Full-time',
    color: 'purple',
    bullets: [
      'Led migration of Watch History and Launch API from AWS to Google Cloud Platform, personally executing approximately 95% of the technical migration work.',
      'Modernized complex metadata queries, decreasing API response time by 35% through consolidating ten calls into two, allowing the API to scale to 5,000 req/s.',
      'Integrated the Music API with the Watch History service by designing and building the integration within a Java, ScyllaDB, and Confluent Kafka stack.',
      'Authored the first documentation for Watch History and Launch using Swagger/OpenAPI, achieving adoption across other backend teams and cross-functional QA/frontend teams.',
      'Owned production stability for Watch History and Launch API by resolving approximately 98% of bugs and Jira tickets, serving as first point of contact for incidents.',
    ],
    tech: ['GCP', 'Java', 'ScyllaDB', 'Confluent Kafka', 'Redis', 'Swagger/OpenAPI', 'Git', 'CI/CD'],
  },
  {
    company: 'JSW Pvt Ltd',
    domain: 'Steel and Infrastructure Conglomerate',
    role: 'Android App Developer',
    period: 'March 2021 – May 2021',
    location: 'Bellary, India',
    type: 'Internship',
    color: 'green',
    bullets: [
      'Built the MIS Generator Android application from scratch, delivering a fully functioning app as one of two interns with zero prior Android experience.',
      'Independently learned Kotlin development through documentation and self-directed research to complete the project.',
    ],
    tech: ['Kotlin', 'Android', 'Firebase'],
  },
];
