// app/blog/[slug]/page.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { getBlogPostBySlug, getRelatedPosts } from '@/lib/blogData' // Import your blog data
import { 
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  Heart,
  Share2,
  Bookmark,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  Check,
  User,
  Tag,
  MessageCircle,
  ThumbsUp,
  ExternalLink
} from 'lucide-react'

interface BlogPageProps {
  params: {
    slug: string
  }
}

interface ReadingPointerProps {
  isVisible: boolean
  position: number
}

const ReadingPointer: React.FC<ReadingPointerProps> = ({ isVisible, position }) => {
  if (!isVisible) return null
  
  return (
    <div 
      className="fixed left-4 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full shadow-lg transition-all duration-300 z-50"
      style={{ 
        top: `${position}px`, 
        height: '24px',
        transform: 'translateY(-12px)' 
      }}
    >
      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg border-2 border-white">
        <div className="absolute inset-1 bg-white rounded-full animate-pulse" />
      </div>
    </div>
  )
}

export function BlogPage({ params }: BlogPageProps) {
  const router = useRouter()
  const { slug } = params
  
  // Get blog post data
  const blogPost = getBlogPostBySlug(slug)
  
  // State management
  const [readingPointer, setReadingPointer] = useState({ isVisible: false, position: 0 })
  const [highlightedLine, setHighlightedLine] = useState<number | null>(null)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [showShare, setShowShare] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  
  const contentRef = useRef<HTMLDivElement>(null)
  
  // If blog post not found, show 404
  if (!blogPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 flex items-center justify-center">
        <Container size="sm">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
            <button
              onClick={() => router.push('/blog')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>
          </div>
        </Container>
      </div>
    )
  }

  const relatedPosts = getRelatedPosts(blogPost)
  
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return
      
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Calculate scroll progress
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(100, Math.max(0, progress)))
      
      // Find the line at the center of viewport
      const viewportCenter = scrollTop + windowHeight / 2
      const contentRect = contentRef.current.getBoundingClientRect()
      const contentTop = scrollTop + contentRect.top
      
      if (viewportCenter >= contentTop && viewportCenter <= contentTop + contentRect.height) {
        const relativePosition = viewportCenter - contentTop
        const lineHeight = 28 // Approximate line height
        const lineIndex = Math.floor(relativePosition / lineHeight)
        
        setHighlightedLine(lineIndex)
        setReadingPointer({
          isVisible: true,
          position: viewportCenter
        })
      } else {
        setReadingPointer({ isVisible: false, position: 0 })
        setHighlightedLine(null)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  
  const handleShare = async (platform: string) => {
    const url = window.location.href
    const text = `Check out this article: ${blogPost.title}`
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`)
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)
        break
      case 'copy':
        try {
          await navigator.clipboard.writeText(url)
          setCopySuccess(true)
          setTimeout(() => setCopySuccess(false), 2000)
        } catch (err) {
          console.error('Failed to copy URL')
        }
        break
    }
  }
  
  const goBack = () => {
    router.push('/blog')
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Reading Pointer */}
      <ReadingPointer {...readingPointer} />
      
      <Container size="lg">
        <div className="py-8">
          {/* Back Navigation */}
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </button>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-3">
              {/* Article Header */}
              <header className="mb-8">
                {blogPost.featured && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full mb-4">
                    <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                    Featured Article
                  </div>
                )}
                
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-md font-medium">
                    {blogPost.category}
                  </span>
                  <span>•</span>
                  <span>{formatDate(blogPost.publishedAt)}</span>
                  <span>•</span>
                  <span>{blogPost.readTime}</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  {blogPost.title}
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  {blogPost.excerpt}
                </p>
                
                {/* Article Meta */}
                <div className="flex items-center justify-between py-6 border-y border-gray-200">
                  <div className="flex items-center gap-4">
                    <img
                      src={blogPost.author.avatar}
                      alt={blogPost.author.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{blogPost.author.name}</div>
                      <div className="text-sm text-gray-500">Author</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {blogPost.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {blogPost.comments}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsLiked(!isLiked)}
                        className={`p-2 rounded-lg transition-colors duration-300 ${
                          isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                      </button>
                      
                      <button
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        className={`p-2 rounded-lg transition-colors duration-300 ${
                          isBookmarked ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                      </button>
                      
                      <div className="relative">
                        <button
                          onClick={() => setShowShare(!showShare)}
                          className="p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors duration-300"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                        
                        {showShare && (
                          <div className="absolute right-0 top-12 bg-white rounded-lg shadow-xl border border-gray-200 p-2 z-10 min-w-[200px]">
                            <button
                              onClick={() => handleShare('twitter')}
                              className="flex items-center gap-3 w-full px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors duration-200"
                            >
                              <Twitter className="w-4 h-4 text-blue-400" />
                              <span className="text-sm">Share on Twitter</span>
                            </button>
                            <button
                              onClick={() => handleShare('facebook')}
                              className="flex items-center gap-3 w-full px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors duration-200"
                            >
                              <Facebook className="w-4 h-4 text-blue-600" />
                              <span className="text-sm">Share on Facebook</span>
                            </button>
                            <button
                              onClick={() => handleShare('linkedin')}
                              className="flex items-center gap-3 w-full px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors duration-200"
                            >
                              <Linkedin className="w-4 h-4 text-blue-700" />
                              <span className="text-sm">Share on LinkedIn</span>
                            </button>
                            <button
                              onClick={() => handleShare('copy')}
                              className="flex items-center gap-3 w-full px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors duration-200"
                            >
                              {copySuccess ? (
                                <Check className="w-4 h-4 text-green-600" />
                              ) : (
                                <Copy className="w-4 h-4 text-gray-600" />
                              )}
                              <span className="text-sm">
                                {copySuccess ? 'Link Copied!' : 'Copy Link'}
                              </span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              
              {/* Article Content */}
              <div 
                ref={contentRef}
                className={`prose prose-lg max-w-none ${highlightedLine !== null ? 'reading-mode' : ''}`}
                style={{
                  '--highlighted-line': highlightedLine
                } as React.CSSProperties}
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
                <div className="flex items-start gap-4">
                  <img
                    src={blogPost.author.avatar}
                    alt={blogPost.author.name}
                    className="w-16 h-16 rounded-full flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      About {blogPost.author.name}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {blogPost.author.bio}
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href={`https://twitter.com/${blogPost.author.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                      >
                        <Twitter className="w-4 h-4" />
                        Follow on Twitter
                      </a>
                      <a
                        href={`https://linkedin.com/in/${blogPost.author.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Related Articles</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {relatedPosts.slice(0, 2).map((post) => (
                      <article
                        key={post.id}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
                        onClick={() => router.push(`/blog/${post.slug}`)}
                      >
                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                              {post.category}
                            </span>
                            <span className="text-xs text-gray-500">{post.readTime}</span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {post.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="w-3 h-3" />
                              {post.likes}
                            </span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </article>
            
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Table of Contents */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4">Table of Contents</h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#understanding" className="block text-gray-600 hover:text-purple-600 transition-colors duration-200">
                      Understanding Component Architecture
                    </a>
                    <a href="#performance" className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 ml-3">
                      Component Composition Patterns
                    </a>
                    <a href="#optimization" className="block text-gray-600 hover:text-purple-600 transition-colors duration-200">
                      Performance Optimization
                    </a>
                    <a href="#code-splitting" className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 ml-3">
                      Implementing Code Splitting
                    </a>
                    <a href="#state-management" className="block text-gray-600 hover:text-purple-600 transition-colors duration-200">
                      State Management at Scale
                    </a>
                    <a href="#testing" className="block text-gray-600 hover:text-purple-600 transition-colors duration-200">
                      Testing Strategies
                    </a>
                  </nav>
                </div>
                
                {/* Reading Progress */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4">Reading Progress</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{Math.round(scrollProgress)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${scrollProgress}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500">
                      Keep reading to complete this article
                    </div>
                  </div>
                </div>
                
                {/* More Related Articles in Sidebar */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4">More Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.slice(2, 5).map((post) => (
                        <button
                          key={post.id}
                          onClick={() => router.push(`/blog/${post.slug}`)}
                          className="block group text-left w-full"
                        >
                          <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-200 text-sm mb-1 line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{post.category}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </Container>
      
      {/* Custom Styles for Rich Content */}
      <style jsx>{`
        :global(.blog-content) {
          line-height: 1.75;
        }
        
        :global(.blog-content h2) {
          font-size: 1.875rem;
          font-weight: 700;
          color: #1f2937;
          margin-top: 3rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #e5e7eb;
        }
        
        :global(.blog-content h3) {
          font-size: 1.5rem;
          font-weight: 600;
          color: #374151;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        :global(.blog-content p) {
          margin-bottom: 1.5rem;
          color: #4b5563;
        }
        
        :global(.blog-content blockquote) {
          border-left: 4px solid #8b5cf6;
          background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
          margin: 2rem 0;
          padding: 1.5rem;
          border-radius: 0.5rem;
          font-style: italic;
          color: #374151;
        }
        
        :global(.blog-content pre) {
          background: #1f2937;
          color: #f9fafb;
          padding: 1.5rem;
          border-radius: 0.75rem;
          overflow-x: auto;
          margin: 2rem 0;
          font-size: 0.875rem;
          line-height: 1.5;
        }
        
        :global(.blog-content code) {
          background: #f3f4f6;
          color: #dc2626;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }
        
        :global(.blog-content pre code) {
          background: transparent;
          color: inherit;
          padding: 0;
        }
        
        :global(.blog-content ul, .blog-content ol) {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        :global(.blog-content li) {
          margin-bottom: 0.5rem;
          color: #4b5563;
        }
        
        :global(.callout) {
          padding: 1.5rem;
          border-radius: 0.75rem;
          margin: 2rem 0;
          border-left: 4px solid;
        }
        
        :global(.callout-info) {
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
          border-left-color: #3b82f6;
          color: #1e40af;
        }
        
        :global(.callout-warning) {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          border-left-color: #f59e0b;
          color: #92400e;
        }
        
        :global(.callout h4) {
          margin: 0 0 0.5rem 0;
          font-weight: 600;
        }
        
        :global(.callout p) {
          margin: 0;
        }
        
        :global(.reading-mode .blog-content p:nth-child(var(--highlighted-line))) {
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  )
}