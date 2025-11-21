import { BlogPost } from '@/types/blog'
import { blogCategories } from '@/data/blog-posts'
import { 
  Code2, 
  Lightbulb, 
  TrendingUp, 
  Zap, 
  BookOpen 
} from 'lucide-react'
// =============================================================================
// BLOG UTILITY FUNCTIONS
// =============================================================================
// Reusable utility functions for blog functionality
// Usage: Import these functions across blog components to maintain consistency
// =============================================================================
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

export const formatDateShort = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  })
}

// =============================================================================
// CATEGORY HELPERS
// =============================================================================

export const getCategoryIcon = (category: string) => {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    'Development': Code2,
    'Design': Lightbulb,
    'Business': TrendingUp,
    'Technology': Zap
  }
  return icons[category] || BookOpen
}

export const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Development': 'text-blue-600',
    'Design': 'text-purple-600',
    'Business': 'text-green-600',
    'Technology': 'text-orange-600'
  }
  return colors[category] || 'text-gray-600'
}

export const getCategoryBg = (category: string) => {
  const backgrounds: Record<string, string> = {
    'Development': 'bg-blue-50 border-blue-200',
    'Design': 'bg-purple-50 border-purple-200',
    'Business': 'bg-green-50 border-green-200',
    'Technology': 'bg-orange-50 border-orange-200'
  }
  return backgrounds[category] || 'bg-gray-50 border-gray-200'
}

// =============================================================================
// SHARE UTILITIES
// =============================================================================

export const createShareLinks = (title: string, url: string) => {
  return {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  }
}

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy to clipboard:', err)
    return false
  }
}

// =============================================================================
// READING TIME CALCULATOR
// =============================================================================

export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

// =============================================================================
// VALIDATION HELPERS
// =============================================================================

export const isValidSlug = (slug: string): boolean => {
  return /^[a-z0-9-]+$/.test(slug)
}

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// Blog configuration
export const blogConfig = {
  postsPerPage: 6,
  categories: ['Web Development', 'UI/UX Design', 'Mobile Apps', 'Performance'],
  author: 'Square Root Dev'
}