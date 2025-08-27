import { LucideIcon } from 'lucide-react'

export interface BlogCategory {
  name: string
  slug: string
  icon: LucideIcon
  color: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string // Rich content with HTML/Markdown
  author: Author
  publishedAt: string
  updatedAt?: string
  readTime: number
  tags: string[]
  category: string
  featured: boolean
  coverImage?: string
  slug: string
  views?: number
  likes?: number
  tableOfContents?: TOCItem[]
}

export interface Author {
  name: string
  avatar?: string
  bio?: string
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
    website?: string
  }
}

export interface TOCItem {
  id: string
  title: string
  level: number
}

export interface RelatedPost {
  id: string
  title: string
  excerpt: string
  slug: string
  category: string
  publishedAt: string
  readTime: number
}

export interface BlogFilter {
  category?: string
  tag?: string
  search?: string
  featured?: boolean
}

export interface BlogPagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface BlogListResponse {
  posts: BlogPost[]
  pagination: BlogPagination
  categories: BlogCategory[]
  tags: string[]
}