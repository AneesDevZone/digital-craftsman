// src/lib/blog-utils.ts
// =============================================================================
// BLOG UTILITIES
// =============================================================================
// Utility functions for blog functionality
// =============================================================================

import { BlogPost } from '@/types/blog'
import { blogCategories } from '@/data/blog-posts'
import { BookOpen } from 'lucide-react'

// Date formatting utility
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

// Get category icon
export const getCategoryIcon = (category: string) => {
  const categoryData = blogCategories.find(cat => cat.name === category)
  return categoryData ? categoryData.icon : BookOpen
}

// Get category color
export const getCategoryColor = (category: string) => {
  const categoryData = blogCategories.find(cat => cat.name === category)
  return categoryData ? categoryData.color : 'text-gray-600'
}

// Blog configuration
export const blogConfig = {
  postsPerPage: 6,
  categories: ['Web Development', 'UI/UX Design', 'Mobile Apps', 'Performance'],
  author: 'Square Root Studio'
}