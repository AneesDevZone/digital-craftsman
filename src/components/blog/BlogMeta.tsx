// =============================================================================
// BLOG META COMPONENT
// =============================================================================
// Article metadata: title, author, date, reading time, engagement stats
// Features: Fully responsive design, mobile-optimized layout
// =============================================================================

'use client'

import { Eye, Heart, User, Clock, Calendar } from 'lucide-react'
import { BlogPost } from '@/types/blog'
import { formatDate, getCategoryIcon, getCategoryColor } from '@/lib/blog-utils'

interface BlogMetaProps {
  post: BlogPost
  liked: boolean
  onLike: () => void
}

export function BlogMeta({ post, liked, onLike }: BlogMetaProps) {
  const CategoryIcon = getCategoryIcon(post.category)
  const categoryColor = getCategoryColor(post.category)

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Category and Date - Mobile Optimized */}
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <div className="flex items-center gap-2">
          <CategoryIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${categoryColor}`} />
          <span className={`font-medium ${categoryColor}`}>{post.category}</span>
        </div>
        <span className="text-gray-400">•</span>
        <div className="flex items-center gap-1 text-gray-600">
          <Calendar className="w-4 h-4" />
          <time>{formatDate(post.publishedAt)}</time>
        </div>
        {post.updatedAt && (
          <>
            <span className="text-gray-400 hidden sm:inline">•</span>
            <span className="text-xs sm:text-sm text-gray-500 w-full sm:w-auto">
              Updated {formatDate(post.updatedAt)}
            </span>
          </>
        )}
      </div>

      {/* Title - Responsive Typography */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        {post.title}
      </h1>

      {/* Excerpt - Mobile Optimized */}
      <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
        {post.excerpt}
      </p>

      {/* Author and Stats - Responsive Layout */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Author Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base">
            {post.author.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="font-medium text-gray-900 text-sm sm:text-base">
              {post.author.name}
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>

        {/* Engagement Stats - Mobile Optimized */}
        <div className="flex items-center gap-4 sm:gap-6">
          {post.views && (
            <div className="flex items-center gap-1.5 text-gray-600">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">
                {post.views.toLocaleString()}
              </span>
            </div>
          )}
          <button
            onClick={onLike}
            className={`flex items-center gap-1.5 transition-all duration-200 ${
              liked 
                ? 'text-red-500 hover:text-red-600' 
                : 'text-gray-600 hover:text-red-500'
            }`}
            aria-label={liked ? 'Unlike post' : 'Like post'}
          >
            <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
            <span className="text-sm font-medium">
              {(post.likes || 0) + (liked ? 1 : 0)}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}