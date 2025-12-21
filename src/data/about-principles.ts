import { Zap, Cpu, Code2 } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Principle {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string; // Keeping this for the hover glow logic
}

export const ABOUT_PRINCIPLES: Principle[] = [
  {
    icon: Code2,
    title: "Precision Code",
    description: "Every line is optimized for speed and SEO. Like a square root, we reduce complexity to find the most efficient solution.",
    gradient: "from-blue-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Hybrid Strategy",
    description: "Choose speed with our premium templates or power with bespoke Next.js builds. We bridge the gap between quality and time.",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Cpu,
    title: "Root Scalability",
    description: "We build architectures that don't just work today, but scale tomorrow. Your growth is engineered into our foundation.",
    gradient: "from-violet-500 to-purple-500"
  }
];