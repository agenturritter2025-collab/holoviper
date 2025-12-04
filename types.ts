export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  targetAudience: string;
  benefits: string[];
  iconName: 'Bot' | 'GraduationCap' | 'Cpu' | 'Workflow';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  metrics?: string;
}

export interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: 'Instagram' | 'Facebook' | 'Globe';
}