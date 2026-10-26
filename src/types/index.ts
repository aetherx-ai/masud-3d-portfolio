export type SectionId = 
  | 'void'
  | 'identity'
  | 'philosophy'
  | 'lumoclip'
  | 'projects'
  | 'lab'
  | 'ai'
  | 'services'
  | 'process'
  | 'contact';

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  technologies: string[];
  metrics: string;
  description: string;
  highlights: string[];
  imagePath: string;
  externalUrl?: string;
  demoUrl?: string;
}

export interface LabNode {
  id: string;
  label: string;
  category: 'core' | 'ai' | 'frontend' | 'backend' | 'systems';
  description: string;
  deepDive: string;
  technologies: string[];
  stats: string;
  orbitRadius: number;
  orbitSpeed: number;
  color: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStage {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}
