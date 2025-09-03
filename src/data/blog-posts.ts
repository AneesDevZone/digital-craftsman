// =============================================================================
// BLOG SAMPLE DATA
// =============================================================================
// Mock data for blog posts - replace with actual API calls in production
// Usage: Import and use for development/testing purposes
// =============================================================================

import { BlogPost, RelatedPost } from '@/types/blog'
import { Code2, Palette, Smartphone, Globe, Zap, BookOpen } from 'lucide-react'

// =============================================================================
// BLOG CATEGORIES
// =============================================================================

export const blogCategories = [
  { 
    id: 'all', 
    name: 'All Posts', 
    slug: 'all',
    icon: BookOpen, 
    color: 'text-gray-600',
    count: 6 
  },
  { 
    id: 'development', 
    name: 'Development', 
    slug: 'development',
    icon: Code2, 
    color: 'text-blue-600',
    count: 3 
  },
  { 
    id: 'design', 
    name: 'UI/UX Design', 
    slug: 'design',
    icon: Palette, 
    color: 'text-purple-600',
    count: 2 
  },
  { 
    id: 'mobile', 
    name: 'Mobile Apps', 
    slug: 'mobile',
    icon: Smartphone, 
    color: 'text-green-600',
    count: 1 
  },
  { 
    id: 'business', 
    name: 'Business', 
    slug: 'business',
    icon: Globe, 
    color: 'text-orange-600',
    count: 1 
  },
  { 
    id: 'technology', 
    name: 'Technology', 
    slug: 'technology',
    icon: Zap, 
    color: 'text-indigo-600',
    count: 1 
  }
]

// =============================================================================
// SAMPLE BLOG POST
// =============================================================================

export const sampleBlogPost: BlogPost = {
  id: '1',
  title: 'Building Scalable React Applications with Modern Architecture',
  excerpt: 'Learn how to structure React applications for long-term maintainability and performance. We explore component patterns, state management, and testing strategies.',
  content: `
    <h2 id="introduction">Introduction</h2>
    <p>Building scalable React applications requires careful planning and architectural decisions. In this comprehensive guide, we'll explore modern patterns and best practices that will help you create maintainable, performant applications.</p>
    
    <blockquote>
      <p>"The key to building scalable applications is not just writing code that works, but writing code that can evolve with your business needs." - Dan Abramov</p>
    </blockquote>
    
    <h2 id="component-architecture">Component Architecture</h2>
    <p>A well-structured component architecture is the foundation of any scalable React application. Let's explore the key principles:</p>
    
    <h3 id="composition-over-inheritance">Composition Over Inheritance</h3>
    <p>React favors composition over inheritance, and for good reason. Here's how to implement effective composition patterns:</p>
    
    <div class="code-block">
      <div class="code-header">
        <span>components/Button/Button.tsx</span>
        <button class="copy-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
        </button>
      </div>
      <pre><code class="language-tsx">interface ButtonProps extends React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt; {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200'
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
    outline: 'border-2 border-gray-300 hover:border-gray-400 text-gray-700'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl'
  }

  return (
    &lt;button
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className}\`}
      disabled={disabled || loading}
      {...props}
    &gt;
      {loading ? (
        &lt;Spinner className="w-4 h-4 mr-2" /&gt;
      ) : leftIcon ? (
        &lt;span className="mr-2"&gt;{leftIcon}&lt;/span&gt;
      ) : null}
      {children}
      {rightIcon && !loading && (
        &lt;span className="ml-2"&gt;{rightIcon}&lt;/span&gt;
      )}
    &lt;/button&gt;
  )
}</code></pre>
    </div>
    
    <h2 id="conclusion">Conclusion</h2>
    <p>Building scalable React applications requires a thoughtful approach to architecture, state management, and performance. By following these patterns and best practices, you'll create applications that can grow with your business needs while maintaining code quality and developer productivity.</p>
  `,
  author: {
    name: 'John Doe',
    bio: 'Senior Frontend Developer with 8+ years of experience building scalable web applications. Passionate about React, TypeScript, and modern web technologies.',
    social: {
      twitter: '@johndoe',
      linkedin: 'johndoe'
    }
  },
  publishedAt: '2024-03-15',
  updatedAt: '2024-03-20',
  readTime: 8,
  tags: ['React', 'Architecture', 'Performance', 'TypeScript'],
  category: 'Development',
  featured: true,
  slug: 'building-scalable-react-applications',
  views: 1247,
  likes: 89,
  tableOfContents: [
    { id: 'introduction', title: 'Introduction', level: 2 },
    { id: 'component-architecture', title: 'Component Architecture', level: 2 },
    { id: 'composition-over-inheritance', title: 'Composition Over Inheritance', level: 3 },
    { id: 'conclusion', title: 'Conclusion', level: 2 }
  ]
}

// =============================================================================
// ALL BLOG POSTS ARRAY
// =============================================================================

export const blogPosts: BlogPost[] = [
  sampleBlogPost,
  {
    id: '2',
    title: 'The Future of Web Design: Trends and Predictions for 2024',
    excerpt: 'Explore the latest design trends shaping the digital landscape and learn how to implement them in your projects.',
    content: '<h2>Design trends content...</h2><p>Coming soon...</p>',
    author: {
      name: 'Jane Smith',
      bio: 'UI/UX Designer with 6+ years of experience in creating user-centered digital experiences.',
      social: {
        twitter: '@janesmith',
        linkedin: 'janesmith'
      }
    },
    publishedAt: '2024-03-10',
    readTime: 6,
    tags: ['Design', 'UI/UX', 'Trends', 'Web Design'],
    category: 'Design',
    featured: false,
    slug: 'future-of-web-design-2024',
    views: 892,
    likes: 45
  },
  {
    id: '3',
    title: 'Optimizing Business Growth Through Digital Transformation',
    excerpt: 'Discover how modern businesses are leveraging technology to accelerate growth and improve efficiency.',
    content: '<h2>Business transformation content...</h2><p>Coming soon...</p>',
    author: {
      name: 'Mike Johnson',
      bio: 'Business strategist helping companies navigate digital transformation.',
      social: {
        linkedin: 'mikejohnson'
      }
    },
    publishedAt: '2024-03-05',
    readTime: 5,
    tags: ['Business', 'Strategy', 'Digital Transformation'],
    category: 'Business',
    featured: false,
    slug: 'optimizing-business-growth-digital-transformation',
    views: 654,
    likes: 28
  }
]

// =============================================================================
// RELATED POSTS
// =============================================================================

export const relatedPosts: RelatedPost[] = [
  {
    id: '2',
    title: 'The Future of Web Design: Trends and Predictions for 2024',
    excerpt: 'Explore the latest design trends shaping the digital landscape.',
    slug: 'future-of-web-design-2024',
    category: 'Design',
    publishedAt: '2024-03-10',
    readTime: 6
  },
  {
    id: '3',
    title: 'Optimizing Business Growth Through Digital Transformation',
    excerpt: 'Discover how modern businesses are leveraging technology.',
    slug: 'optimizing-business-growth-digital-transformation',
    category: 'Business',
    publishedAt: '2024-03-05',
    readTime: 5
  }
]