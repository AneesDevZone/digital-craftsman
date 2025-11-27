// Project data will go here
import { Code, Palette, Smartphone, Zap, LucideIcon } from 'lucide-react';
import { Project, ProjectCategory, CategoryIconMap } from '@/types/project';

// Mapping category strings to Lucide icons
export const categoryIcons: CategoryIconMap = {
  web: Code,
  mobile: Smartphone,
  design: Palette,
  fullstack: Zap
};

// Mock data for the projects section
export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and sales tracking.',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    status: 'completed',
    year: '2024',
    demoUrl: '#',
    githubUrl: '#',
    stats: { views: 1200, stars: 45 },
    gradient: 'from-blue-500 to-blue-600',
    backgroundPattern: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(147, 197, 253, 0.08) 0%, transparent 50%)'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Cross-platform mobile application for team collaboration with offline synchronization and real-time updates.',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Redux'],
    status: 'completed',
    year: '2024',
    demoUrl: '#',
    githubUrl: '#',
    stats: { views: 890, stars: 32 },
    gradient: 'from-emerald-500 to-emerald-600',
    backgroundPattern: 'radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(5, 150, 105, 0.1) 0%, transparent 50%), linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, transparent 50%)'
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website with advanced animations and performance optimizations for creative professionals.',
    category: 'web',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion'],
    status: 'completed',
    year: '2024',
    demoUrl: '#',
    githubUrl: '#',
    stats: { views: 2100, stars: 67 },
    gradient: 'from-purple-500 to-purple-600',
    backgroundPattern: 'radial-gradient(circle at 30% 70%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), conic-gradient(from 45deg at 50% 50%, rgba(139, 92, 246, 0.08) 0deg, transparent 120deg)'
  },
  {
    id: '4',
    title: 'SaaS Landing Page',
    description: 'High-converting landing page with integrated payment system and automated email sequences for better conversions.',
    category: 'web',
    technologies: ['React', 'Next.js', 'Stripe', 'Tailwind'],
    status: 'completed',
    year: '2023',
    demoUrl: '#',
    githubUrl: '#',
    stats: { views: 3400, stars: 89 },
    gradient: 'from-orange-500 to-orange-600',
    backgroundPattern: 'radial-gradient(circle at 40% 20%, rgba(251, 146, 60, 0.15) 0%, transparent 50%), radial-gradient(circle at 60% 80%, rgba(249, 115, 22, 0.1) 0%, transparent 50%), linear-gradient(45deg, rgba(245, 158, 11, 0.08) 0%, transparent 50%)'
  },
  {
    id: '5',
    title: 'Design System Library',
    description: 'Comprehensive component library and design system for consistent user interfaces across multiple products.',
    category: 'design',
    technologies: ['Figma', 'Storybook', 'React'],
    status: 'in-progress',
    year: '2024',
    githubUrl: '#',
    stats: { views: 670, stars: 34 },
    gradient: 'from-pink-500 to-pink-600',
    backgroundPattern: 'radial-gradient(circle at 50% 30%, rgba(236, 72, 153, 0.15) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(219, 39, 119, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(244, 114, 182, 0.08) 0%, transparent 50%)'
  }
];