import { BlogCategory, BlogPost } from '@/types/blog'
import { 
    ArrowRight, 
    Calendar, 
    Clock, 
    Tag,
    BookOpen,
    Code2,
    Lightbulb,
    Rocket,
    Users,
    TrendingUp,
    Zap,
    Heart,
    Search,
    Grid3X3,
    List,
    Image as ImageIcon
  } from 'lucide-react'
  
  
  export const blogCategories: BlogCategory[] = [
    { name: 'Development', slug: 'development', icon: Code2, color: 'text-blue-600' },
    { name: 'Design', slug: 'design', icon: Lightbulb, color: 'text-purple-600' },
    { name: 'Business', slug: 'business', icon: TrendingUp, color: 'text-green-600' },
    { name: 'Technology', slug: 'technology', icon: Zap, color: 'text-orange-600' },
  ]
  
export const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Building Scalable React Applications with Modern Architecture',
      excerpt: 'Learn how to structure React applications for long-term maintainability and performance. We explore component patterns, state management, and testing strategies.',
      content: 'Full blog content will go here...', // Will be expanded later
      author: {
        name: 'John Doe',
      },
      publishedAt: '2024-03-15',
      readTime: 8,
      tags: ['React', 'Architecture', 'Performance'],
      category: 'Development',
      featured: true,
      slug: 'building-scalable-react-applications',
    },
    {
      id: '2',
      title: 'The Future of Web Design: Trends and Predictions for 2024',
      excerpt: 'Explore the latest design trends shaping the digital landscape. From micro-interactions to AI-driven personalization, discover what\'s next in web design.',
      content: 'Full blog content will go here...',
      author: {
        name: 'Jane Smith',
      },
      publishedAt: '2024-03-10',
      readTime: 6,
      tags: ['Design', 'Trends', 'UI/UX'],
      category: 'Design',
      featured: true,
      slug: 'future-of-web-design-2024',
    },
    {
      id: '3',
      title: 'Optimizing Business Growth Through Digital Transformation',
      excerpt: 'Discover how modern businesses are leveraging technology to streamline operations, enhance customer experiences, and drive sustainable growth.',
      content: 'Full blog content will go here...',
      author: {
        name: 'Mike Johnson',
      },
      publishedAt: '2024-03-05',
      readTime: 5,
      tags: ['Business', 'Growth', 'Digital Transformation'],
      category: 'Business',
      featured: false,
      slug: 'optimizing-business-growth-digital-transformation',
    },
  ]