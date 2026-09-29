export interface Section {
  id: string;
  number: string;
  label: string;
  title: string;
}

export const sections: Section[] = [
  { id: 'about', number: '01', label: 'About Me', title: 'Who I Am' },
  { id: 'experience', number: '02', label: 'Experience', title: 'Work Experience' },
  { id: 'projects', number: '03', label: 'Projects', title: 'Selected Projects' },
  { id: 'skills', number: '04', label: 'Skills', title: 'Tech Stack' },
  { id: 'education', number: '05', label: 'Education', title: 'Education' },
  { id: 'contact', number: '06', label: 'Contact', title: 'Get In Touch' },
];
