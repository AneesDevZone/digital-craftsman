// =============================================================================
// MAIN BLOG POST PAGE COMPONENT
// =============================================================================
// Refactored, DRY, and fully responsive blog post component
// Features: Component composition, proper error handling, mobile optimization
// =============================================================================

'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { BlogPost, BlogPostProps } from '@/types/blog'
import { sampleBlogPost, relatedPosts } from '@/data/blog-posts'
import { BlogHeader } from '@/components/blog/BlogHeader'
import { BlogContent } from '@/components/blog/BlogContent'
import { TableOfContents } from '@/components/blog/TableOfcontent'
import { RelatedPosts } from '@/components/blog/RelatedPosts'
import { ScrollToTop } from '@/components/blog/ScrollToTop'
import { ShareButtons } from '@/components/blog/ShareButtons'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { ErrorMessage } from '@/components/ui/ErrorMessage'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [liked, setLiked] = useState(false)

  // Extract slug to avoid dependency issues
  const { slug } = params

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Simulate API call - replace with real data fetching
        // const response = await fetch(`/api/posts/${slug}`)
        // if (!response.ok) throw new Error('Post not found')
        // const postData = await response.json()
        
        // For demo, use sample data
        await new Promise(resolve => setTimeout(resolve, 500))
        
        if (slug === sampleBlogPost.slug) {
          setPost(sampleBlogPost)
        } else {
          throw new Error('Post not found')
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load post')
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug]) // Use extracted slug instead of params.slug

  const handleLike = () => {
    setLiked(!liked)
    // TODO: API call to update likes
  }

  // Loading state
  if (loading) {
    return <LoadingSpinner />
  }

  // Error state
  if (error || !post) {
    return <ErrorMessage message={error || 'Post not found'} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
      {/* Header with Back Button */}
      <BlogHeader post={post} />

      {/* Main Content */}
      <Container size="xl">
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-12">
            {/* Article Content */}
            <main className="lg:col-span-3 order-2 lg:order-1">
              <BlogContent 
                post={post} 
                liked={liked} 
                onLike={handleLike} 
              />
              
              {/* Mobile Share Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-200 sm:hidden">
                <ShareButtons post={post} variant="vertical" />
              </div>

              {/* Related Posts */}
              <RelatedPosts posts={relatedPosts} />
            </main>

            {/* Sidebar */}
            <aside className="lg:col-span-1 order-1 lg:order-2">
              {post.tableOfContents && post.tableOfContents.length > 0 && (
                <div className="lg:sticky lg:top-24">
                  <TableOfContents items={post.tableOfContents} />
                </div>
              )}
            </aside>
          </div>
        </div>
      </Container>

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Global Styles for Rich Content */}
      <style jsx global>{`
        /* =================================================================== */
        /* RESPONSIVE PROSE STYLES */
        /* =================================================================== */
        .prose {
          color: rgb(55, 65, 81);
          line-height: 1.75;
        }
        
        /* Mobile Typography */
        @media (max-width: 640px) {
          .prose h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: rgb(17, 24, 39);
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
            line-height: 1.3;
          }
          
          .prose h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: rgb(17, 24, 39);
            margin-top: 1.25rem;
            margin-bottom: 0.5rem;
            line-height: 1.4;
          }
          
          .prose p {
            margin-bottom: 1rem;
            font-size: 0.875rem;
            line-height: 1.6;
          }
          
          .prose blockquote {
            border-left: 3px solid rgb(59, 130, 246);
            padding-left: 1rem;
            margin: 1.5rem 0;
            font-style: italic;
            font-size: 1rem;
            color: rgb(75, 85, 99);
            background: rgb(249, 250, 251);
            padding: 1rem;
            border-radius: 0.5rem;
          }
        }
        
        /* Tablet Typography */
        @media (min-width: 641px) and (max-width: 1024px) {
          .prose h2 {
            font-size: 1.75rem;
            font-weight: 700;
            color: rgb(17, 24, 39);
            margin-top: 1.75rem;
            margin-bottom: 0.875rem;
            line-height: 1.25;
          }
          
          .prose h3 {
            font-size: 1.375rem;
            font-weight: 600;
            color: rgb(17, 24, 39);
            margin-top: 1.5rem;
            margin-bottom: 0.625rem;
            line-height: 1.35;
          }
          
          .prose p {
            margin-bottom: 1.25rem;
            font-size: 1rem;
            line-height: 1.7;
          }
        }
        
        /* Desktop Typography */
        @media (min-width: 1025px) {
          .prose h2 {
            font-size: 1.875rem;
            font-weight: 700;
            color: rgb(17, 24, 39);
            margin-top: 2rem;
            margin-bottom: 1rem;
            line-height: 1.2;
          }
          
          .prose h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: rgb(17, 24, 39);
            margin-top: 1.75rem;
            margin-bottom: 0.75rem;
            line-height: 1.3;
          }
          
          .prose p {
            margin-bottom: 1.5rem;
            font-size: 1.125rem;
            line-height: 1.75;
          }
          
          .prose blockquote {
            border-left: 4px solid rgb(59, 130, 246);
            padding-left: 1.5rem;
            margin: 2rem 0;
            font-style: italic;
            font-size: 1.125rem;
            color: rgb(75, 85, 99);
            background: rgb(249, 250, 251);
            padding: 1.5rem;
            border-radius: 0.5rem;
          }
        }
        
        /* Common Styles */
        .prose ul, .prose ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        .prose li {
          margin-bottom: 0.5rem;
        }
        
        /* =================================================================== */
        /* RESPONSIVE CODE BLOCKS */
        /* =================================================================== */
        .code-block {
          background: rgb(15, 23, 42);
          border-radius: 0.75rem;
          overflow: hidden;
          margin: 1.5rem 0;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .code-header {
          background: rgb(30, 41, 59);
          padding: 0.75rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
          color: rgb(148, 163, 184);
          border-bottom: 1px solid rgb(51, 65, 85);
        }
        
        .copy-btn {
          background: transparent;
          border: none;
          color: rgb(148, 163, 184);
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 0.25rem;
          transition: all 0.2s;
        }
        
        .copy-btn:hover {
          color: rgb(226, 232, 240);
          background: rgb(51, 65, 85);
        }
        
        .code-block pre {
          padding: 1rem;
          margin: 0;
          overflow-x: auto;
          font-family: 'JetBrains Mono', 'Monaco', 'Consolas', monospace;
          font-size: 0.875rem;
          line-height: 1.6;
        }
        
        .code-block code {
          color: rgb(226, 232, 240);
          background: transparent;
          padding: 0;
          border-radius: 0;
          font-weight: 400;
        }
        
        /* Mobile Code Blocks */
        @media (max-width: 640px) {
          .code-header {
            padding: 0.5rem 0.75rem;
            font-size: 0.75rem;
          }
          
          .code-block pre {
            padding: 0.75rem;
            font-size: 0.75rem;
            line-height: 1.5;
          }
          
          .code-block {
            margin: 1rem -1rem;
            border-radius: 0;
          }
        }
        
        /* =================================================================== */
        /* RESPONSIVE TABLES */
        /* =================================================================== */
        .comparison-table {
          margin: 2rem 0;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        
        .comparison-table table {
          width: 100%;
          min-width: 600px;
          border-collapse: collapse;
          background: white;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .comparison-table th {
          background: rgb(59, 130, 246);
          color: white;
          padding: 0.75rem;
          text-align: left;
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }
        
        .comparison-table td {
          padding: 0.75rem;
          border-bottom: 1px solid rgb(229, 231, 235);
          font-size: 0.875rem;
        }
        
        @media (max-width: 640px) {
          .comparison-table th,
          .comparison-table td {
            padding: 0.5rem;
            font-size: 0.75rem;
          }
        }
        
        /* =================================================================== */
        /* CALLOUTS & IMAGE CONTAINERS */
        /* =================================================================== */
        .callout {
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin: 2rem 0;
          border-left: 4px solid;
        }
        
        .callout-info {
          background: rgb(239, 246, 255);
          border-color: rgb(59, 130, 246);
        }
        
        .callout-success {
          background: rgb(240, 253, 244);
          border-color: rgb(34, 197, 94);
        }
        
        .callout h4 {
          margin: 0 0 0.75rem 0;
          font-size: 1rem;
          font-weight: 600;
        }
        
        @media (max-width: 640px) {
          .callout {
            padding: 1rem;
            margin: 1.5rem -1rem;
            border-radius: 0;
          }
        }
        
        .image-container {
          margin: 2rem 0;
        }
        
        .placeholder-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, rgb(243, 244, 246) 0%, rgb(229, 231, 235) 100%);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px dashed rgb(156, 163, 175);
          margin-bottom: 0.75rem;
        }
        
        @media (min-width: 641px) {
          .placeholder-image {
            height: 300px;
          }
        }
        
        .image-caption {
          font-size: 0.875rem;
          color: rgb(107, 114, 128);
          text-align: center;
          font-style: italic;
        }
        
        /* =================================================================== */
        /* ANIMATIONS */
        /* =================================================================== */
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-400 {
          animation-delay: 400ms;
        }
        
        /* =================================================================== */
        /* UTILITY CLASSES */
        /* =================================================================== */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}