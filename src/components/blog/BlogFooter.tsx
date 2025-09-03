// =============================================================================
// BLOG FOOTER COMPONENT
// =============================================================================
// src/components/blog/BlogFooter.tsx
// Article footer with tags, author bio, and social links
// =============================================================================

'use client'

import { Tag, Twitter, Linkedin } from 'lucide-react'
import { BlogPost } from '@/types/blog'

interface BlogFooterProps {
  post: BlogPost
}

export function BlogFooter({ post }: BlogFooterProps) {
  return (
    <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 animate-fade-in-up delay-400 space-y-6">
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full hover:bg-blue-100 transition-colors duration-200 cursor-pointer"
          >
            <Tag className="w-3 h-3" />
            {tag}
          </span>
        ))}
      </div>

      {/* Author Bio */}
      <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 mx-auto sm:mx-0">
            {post.author.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-bold text-gray-900 mb-2">{post.author.name}</h3>
            {post.author.bio && (
              <p className="text-gray-600 mb-3 text-sm sm:text-base">{post.author.bio}</p>
            )}
            {post.author.social && (
              <div className="flex items-center justify-center sm:justify-start gap-3">
                {post.author.social.twitter && (
                  <a
                    href={`https://twitter.com/${post.author.social.twitter.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                    aria-label="Twitter profile"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {post.author.social.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${post.author.social.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
