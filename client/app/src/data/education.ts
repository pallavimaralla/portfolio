export interface Degree {
  degree: string;
  school: string;
  period: string;
  location: string;
  badge: string;
  badgeColor: 'cyan' | 'purple';
  courses?: string[];
}

const msCourses = [
  'Prompt Engineering',
  'Applied AI / AI Technology Management',
  'Agile Software Development',
  'DevOps Principles',
];

const beCourses = [
  'Software Development',
  'Algorithm Design & Analysis',
  'Object-Oriented Programming (Java)',
  'Database Management Systems (DBMS)',
];

export const degrees: Degree[] = [
  {
    degree: 'Master of Science — Computer Science',
    school: 'Stevens Institute of Technology',
    period: 'September 2024 – May 2026',
    location: 'Hoboken, NJ',
    badge: 'Completed',
    badgeColor: 'cyan',
    courses: msCourses,
  },
  {
    degree: 'Bachelor of Engineering — Computer Science & Engineering',
    school: 'Dayananda Sagar College of Engineering',
    period: 'July 2018 – July 2022',
    location: 'Bangalore, India',
    badge: 'Completed',
    badgeColor: 'purple',
    courses: beCourses,
  },
];
