import { Zap, Target, Users, LucideIcon } from 'lucide-react';

// Define the shape of our data (Positioning data removed)
export interface Principle {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string; // Tailwind gradient classes
}

// Full data set
export const ABOUT_PRINCIPLES: Principle[] = [
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'Cutting-edge solutions for modern challenges',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'Every project delivers measurable business value',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    icon: Users,
    title: 'Client Focused',
    description: 'Building lasting partnerships through excellence',
    gradient: 'from-emerald-500 to-teal-600',
  }
];