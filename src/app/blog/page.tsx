'use client'
import { formatDate, getCategoryIcon, getCategoryColor } from '@/lib/blog-utils'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { blogCategories, blogPosts } from '@/data/blog-posts'
import { BlogPost } from '@/types/blog'
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


// ============================================
// BLOG CARD COMPONENT - Move to components/blog/BlogCard.tsx later
// ============================================

interface BlogCardProps {
  post: BlogPost
  index: number
  onReadMore: (slug: string) => void
  isListView?: boolean
}

function BlogCard({ post, index, onReadMore, isListView = false }: BlogCardProps) {
  const CategoryIcon = getCategoryIcon(post.category)
  const categoryColor = getCategoryColor(post.category)

  // Generate a placeholder image pattern based on post title
  const getPlaceholderPattern = (title: string) => {
    const patterns = [
      'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)',
      'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
      'conic-gradient(from 45deg at 50% 50%, rgba(99, 102, 241, 0.1) 0deg, transparent 120deg, rgba(168, 85, 247, 0.1) 240deg, transparent 360deg)',
      'radial-gradient(ellipse at top left, rgba(16, 185, 129, 0.1) 0%, transparent 50%), linear-gradient(45deg, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
    ]
    const hash = title.split('').reduce((a, b) => a + b.charCodeAt(0), 0)
    return patterns[hash % patterns.length]
  }

  if (isListView) {
    return (
      <article 
        className="group bg-white rounded-xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden animate-fade-in-up flex"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Placeholder Image */}
        <div 
          className="w-48 h-32 flex-shrink-0 relative overflow-hidden"
          style={{ background: getPlaceholderPattern(post.title) }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <CategoryIcon className="w-8 h-8 text-gray-300" />
          </div>
        </div>

        <div className="flex-1 p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className={`p-1 rounded ${categoryColor}`}>
              <CategoryIcon className="w-3 h-3" />
            </div>
            <span className={`text-xs font-medium ${categoryColor}`}>{post.category}</span>
            <span className="text-xs text-gray-400">•</span>
            <time className="text-xs text-gray-500">{formatDate(post.publishedAt)}</time>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2 truncate group-hover:text-blue-600 transition-colors duration-300">
            {post.title}
          </h3>

          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>{post.readTime} min read</span>
              <span>{post.author.name}</span>
            </div>
            <button
              onClick={() => onReadMore(post.slug)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Read More
            </button>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article 
      className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden animate-fade-in-up relative"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Card Image/Placeholder with Texture */}
      <div 
        className="h-48 relative overflow-hidden"
        style={{ background: getPlaceholderPattern(post.title) }}
      >
        {/* Animated Texture Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 animate-pulse" />
          <div className="absolute bottom-6 left-6 w-8 h-8 rounded bg-white/10 animate-bounce" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-12 h-12 rounded-lg bg-white/10 animate-ping" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
        
        {/* Placeholder Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <CategoryIcon className="w-12 h-12 text-gray-300/60" />
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <div className={`inline-flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full ${categoryColor}`}>
            <CategoryIcon className="w-3 h-3" />
            {post.category}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Calendar className="w-3 h-3" />
          <time>{formatDate(post.publishedAt)}</time>
          <span>•</span>
          <Clock className="w-3 h-3" />
          <span>{post.readTime} min read</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 truncate group-hover:text-blue-600 transition-colors duration-300" title={post.title}>
          {post.title}
        </h3>

        <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 2).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-md"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Users className="w-4 h-4" />
            <span>{post.author.name}</span>
          </div>

          <button
            onClick={() => onReadMore(post.slug)}
            className="group/btn inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300"
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </article>
  )
}

// ============================================
// MAIN BLOG SECTION COMPONENT
// ============================================

export function BlogSection() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isListView, setIsListView] = useState(false)
  
  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const handleReadMore = (slug: string) => {
    router.push(`/blog/${slug}`)
  }

  const handleViewAllBlogs = () => {
    // Later this will navigate to the blog listing page
    console.log('Navigate to all blogs page')
  }

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName)
    // Later: filter posts by category
  }

  return (
    <section id="blog" className="relative min-h-screen flex items-center py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-100/15 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #64748b 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <Container size="xl">
        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Latest Insights</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Knowledge Hub
              </span>
            </h2>
          </div>

          {/* Categories and Controls */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8 animate-fade-in-up delay-200">
            {/* Categories */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <button
                onClick={() => handleCategorySelect('All')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  selectedCategory === 'All' 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                All Posts
              </button>
              {blogCategories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.slug}
                    onClick={() => handleCategorySelect(category.name)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                      selectedCategory === category.name 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </button>
                )
              })}
            </div>

            {/* Search and View Toggle */}
            <div className="flex items-center gap-4">
              {/* Search Box */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors duration-300"
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center bg-white border border-gray-200 rounded-lg p-1">
                <button
                  onClick={() => setIsListView(false)}
                  className={`p-2 rounded-md transition-colors duration-300 ${
                    !isListView ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsListView(true)}
                  className={`p-2 rounded-md transition-colors duration-300 ${
                    isListView ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid/List */}
          <div className={`mb-12 ${
            isListView 
              ? 'space-y-4' 
              : 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
          }`}>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  index={index}
                  onReadMore={handleReadMore}
                  isListView={isListView}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">
                  {searchQuery ? `No articles match "${searchQuery}"` : 'No articles in this category'}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('All')
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in-up delay-600">
            <button
              onClick={handleViewAllBlogs}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-blue-500/25"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}