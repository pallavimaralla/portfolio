export interface Profile {
  name: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  domain: string;
  location: string;
  aboutSummary: string;
}

export const profile: Profile = {
  name: 'Pallavi Maralla Satish',
  email: 'pallavimarallas@gmail.com',
  phone: '+1 (551) 229-1836',
  github: 'https://github.com/pallavimaralla',
  linkedin: 'https://www.linkedin.com/in/pallavi-maralla/',
  domain: 'pallavi-maralla.vercel.app',
  location: 'New Jersey, USA',
  aboutSummary: 'Backend-focused software engineer with 3+ years owning production services across streaming, media and research platforms. At Zee Entertainment (100M+ users) I led the AWS-to-GCP migration of core APIs and scaled them to 5K req/s. At SERC I built a workflow automation platform used by 500 staff. Master\'s in Computer Science from Stevens. Let\'s build something reliable together.',
};
