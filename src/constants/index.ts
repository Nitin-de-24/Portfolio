import { NavItem, Skill, Project, SocialLink } from '../types';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'JavaScript', level: 50, category: 'technical' },
  { name: 'React', level: 55, category: 'technical' },
  { name: 'TypeScript', level: 50, category: 'technical' },
  { name: 'Node.js', level: 55, category: 'technical' },
  { name: 'CSS/SCSS', level: 55, category: 'technical' },
  { name: 'UI/UX Design', level: 45,category: 'technical' },
  { name: 'Problem Solving', level: 95, category: 'soft' },
  { name: 'Communication', level: 90, category: 'soft' },
  { name: 'Team Collaboration', level: 85, category: 'soft' },
  { name: 'Git', level: 80, category: 'tool' },
  { name: 'Docker', level: 70, category: 'tool' },
  { name: 'Figma', level: 4, category: 'tool' },
];

export const PROJECTS: Project[] = [
 
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/Nitin-de-24',
    icon: 'Github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://in.linkedin.com/in/nitin-desai-7b68371ba',
    icon: 'Linkedin',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/nitidesai247',
    icon: 'Twitter',
  },
  {
    platform: 'Email',
    url: 'nitinsdesai10@gmail.com',
    icon: 'Mail',
  },
];

export const SOCIAL_ICONS: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};