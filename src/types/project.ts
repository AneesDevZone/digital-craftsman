import { LucideIcon } from 'lucide-react';

export type ProjectCategory = 'web' | 'mobile' | 'design' | 'fullstack';
export type ProjectStatus = 'completed' | 'in-progress' | 'concept';

// Defines the structure for a single project artifact.
export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  status: ProjectStatus;
  year: string;
  demoUrl?: string;
  githubUrl?: string;
  stats: {
    views?: number;
    stars?: number;
  };
  gradient: string; // Tailwind gradient class names
  backgroundPattern: string; // CSS style string for background pattern
}

// Map for category icons
export type CategoryIconMap = {
  [key in ProjectCategory]: LucideIcon;
};
