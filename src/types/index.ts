export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'technical' | 'soft' | 'tool';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  codeUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}