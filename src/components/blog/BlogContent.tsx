// =============================================================================
// BLOG CONTENT COMPONENT
// =============================================================================
// Main article content with responsive design and rich content support
// Features: Responsive typography, code highlighting, mobile-optimized layout
// =============================================================================

'use client'

import { useEffect } from 'react'
import { BlogPost } from '@/types/blog'
import { BlogMeta } from './BlogMeta'
import { BlogFooter } from './BlogFooter'

interface BlogContentProps {
  post: BlogPost
  liked: boolean
  onLike: () => void
}

export function BlogContent({ post, liked, onLike }: BlogContentProps) {
  
  // Add copy functionality to code blocks
  useEffect(() => {
    const addCopyButtons = () => {
      const codeBlocks = document.querySelectorAll('.code-block')
      codeBlocks.forEach((block) => {
        const copyBtn = block.querySelector('.copy-btn')
        const code = block.querySelector('code')
        
        if (copyBtn && code) {
          copyBtn.addEventListener('click', async () => {
            try {
              await navigator.clipboard.writeText(code.textContent || '')
              copyBtn.innerHTML = `
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              `
              setTimeout(() => {
                copyBtn.innerHTML = `
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                `
              }, 2000)
            } catch (err) {
              console.error('Failed to copy code:', err)
            }
          })
        }
      })
    }

    const timer = setTimeout(addCopyButtons, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <article className="max-w-none">
      {/* Article Header - Responsive */}
      <header className="mb-6 sm:mb-8 animate-fade-in">
        <BlogMeta 
          post={post} 
          liked={liked} 
          onLike={onLike}
        />
      </header>

      {/* Article Content - Responsive Typography */}
      <div 
        className="prose prose-sm sm:prose-base lg:prose-lg max-w-none animate-fade-in-up delay-200"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Article Footer */}
      <BlogFooter post={post} />
    </article>
  )
}