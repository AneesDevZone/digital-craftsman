// =============================================================================
// RELATED POSTS COMPONENT
// =============================================================================
// src/components/blog/RelatedPosts.tsx
// Related articles with responsive grid layout
// =============================================================================

'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { RelatedPost } from '@/types/blog'
import { formatDate, getCategoryIcon, getCategoryColor } from '@/lib/blog-utils'

interface RelatedPostsProps {
  posts: RelatedPost[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  const router = useRouter()

  const handlePostClick = (slug: string) => {
    router.push(`/blog/${slug}`)
  }

  return (
    <section className="mt-12 sm:mt-16 border-t border-gray-200 pt-12 sm:pt-16">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Related Articles</h2>
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
        {posts.map((post, index) => {
          const CategoryIcon = getCategoryIcon(post.category)
          const categoryColor = getCategoryColor(post.category)
          
          return (
            <article
              key={post.id}
              className="group bg-white border border-gray-100 hover:border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handlePostClick(post.slug)}
            >
              <div className="flex items-center gap-2 mb-3">
                <CategoryIcon className={`w-4 h-4 ${categoryColor}`} />
                <span className={`text-sm font-medium ${categoryColor}`}>
                  {post.category}
                </span>
                <span className="text-gray-400">•</span>
                <time className="text-sm text-gray-500">{formatDate(post.publishedAt)}</time>
              </div>
              
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{post.readTime} min read</span>
                <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

