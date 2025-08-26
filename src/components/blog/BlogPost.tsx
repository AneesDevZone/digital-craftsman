'use client'

import React, { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { 
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  BookOpen,
  ChevronRight,
  Copy,
  Check,
  Eye,
  Heart,
  MessageCircle,
  Twitter,
  Facebook,
  Linkedin,
  Link as LinkIcon,
  Code2,
  Lightbulb,
  TrendingUp,
  Zap,
  ChevronUp,
  ArrowRight
} from 'lucide-react'

// ============================================
// INTERFACES - Move to types/blog.ts later
// ============================================

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string // Rich content with HTML/Markdown
  author: {
    name: string
    avatar?: string
    bio?: string
    social?: {
      twitter?: string
      linkedin?: string
    }
  }
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

interface TOCItem {
  id: string
  title: string
  level: number
}

interface RelatedPost {
  id: string
  title: string
  excerpt: string
  slug: string
  category: string
  publishedAt: string
  readTime: number
}

// ============================================
// SAMPLE DATA - Move to data/blog-posts.ts later
// ============================================

const sampleBlogPost: BlogPost = {
  id: '1',
  title: 'Building Scalable React Applications with Modern Architecture',
  excerpt: 'Learn how to structure React applications for long-term maintainability and performance. We explore component patterns, state management, and testing strategies.',
  content: `
    <h2 id="introduction">Introduction</h2>
    <p>Building scalable React applications requires careful planning and architectural decisions. In this comprehensive guide, we'll explore modern patterns and best practices that will help you create maintainable, performant applications.</p>
    
    <blockquote>
      <p>"The key to building scalable applications is not just writing code that works, but writing code that can evolve with your business needs." - Dan Abramov</p>
    </blockquote>
    
    <h2 id="component-architecture">Component Architecture</h2>
    <p>A well-structured component architecture is the foundation of any scalable React application. Let's explore the key principles:</p>
    
    <h3 id="composition-over-inheritance">Composition Over Inheritance</h3>
    <p>React favors composition over inheritance, and for good reason. Here's how to implement effective composition patterns:</p>
    
    <div class="code-block">
      <div class="code-header">
        <span>components/Button/Button.tsx</span>
        <button class="copy-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
        </button>
      </div>
      <pre><code class="language-tsx">interface ButtonProps extends React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt; {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200'
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
    outline: 'border-2 border-gray-300 hover:border-gray-400 text-gray-700'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl'
  }

  return (
    &lt;button
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className}\`}
      disabled={disabled || loading}
      {...props}
    &gt;
      {loading ? (
        &lt;Spinner className="w-4 h-4 mr-2" /&gt;
      ) : leftIcon ? (
        &lt;span className="mr-2"&gt;{leftIcon}&lt;/span&gt;
      ) : null}
      {children}
      {rightIcon && !loading && (
        &lt;span className="ml-2"&gt;{rightIcon}&lt;/span&gt;
      )}
    &lt;/button&gt;
  )
}</code></pre>
    </div>
    
    <h3 id="custom-hooks">Custom Hooks for Logic Reuse</h3>
    <p>Custom hooks are powerful tools for sharing stateful logic between components. Here's an example of a data fetching hook:</p>
    
    <div class="code-block">
      <div class="code-header">
        <span>hooks/useApi.ts</span>
        <button class="copy-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
        </button>
      </div>
      <pre><code class="language-typescript">export function useApi&lt;T&gt;(url: string) {
  const [data, setData] = useState&lt;T | null&gt;(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState&lt;Error | null&gt;(null)

  useEffect(() =&gt; {
    const fetchData = async () =&gt; {
      try {
        setLoading(true)
        const response = await fetch(url)
        if (!response.ok) throw new Error('Failed to fetch')
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error, refetch: () =&gt; fetchData() }
}</code></pre>
    </div>
    
    <h2 id="state-management">State Management Strategies</h2>
    <p>Choosing the right state management approach depends on your application's complexity and requirements. Let's compare different strategies:</p>
    
    <div class="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Strategy</th>
            <th>Use Case</th>
            <th>Pros</th>
            <th>Cons</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>useState + Context</strong></td>
            <td>Small to medium apps</td>
            <td>Built-in, Simple API</td>
            <td>Performance issues with large state</td>
          </tr>
          <tr>
            <td><strong>Zustand</strong></td>
            <td>Medium apps</td>
            <td>Minimal boilerplate, TypeScript friendly</td>
            <td>Less ecosystem than Redux</td>
          </tr>
          <tr>
            <td><strong>Redux Toolkit</strong></td>
            <td>Large, complex apps</td>
            <td>Mature ecosystem, DevTools</td>
            <td>More boilerplate</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="callout callout-info">
      <h4>💡 Pro Tip</h4>
      <p>Start with React's built-in state management and only introduce external libraries when you face specific limitations. Over-engineering early can slow down development.</p>
    </div>
    
    <h2 id="performance-optimization">Performance Optimization</h2>
    <p>Performance is crucial for user experience. Here are key optimization techniques:</p>
    
    <ul>
      <li><strong>Code Splitting:</strong> Use dynamic imports to split your bundle</li>
      <li><strong>Memoization:</strong> React.memo, useMemo, and useCallback</li>
      <li><strong>Virtual Scrolling:</strong> For large lists</li>
      <li><strong>Image Optimization:</strong> WebP format and lazy loading</li>
    </ul>
    
    <div class="image-container">
      <div class="placeholder-image">
        <div class="placeholder-content">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <p class="text-gray-500 mt-2">Performance metrics comparison chart</p>
        </div>
      </div>
      <p class="image-caption">Figure 1: Performance improvements after implementing optimization strategies</p>
    </div>
    
    <h2 id="conclusion">Conclusion</h2>
    <p>Building scalable React applications requires a thoughtful approach to architecture, state management, and performance. By following these patterns and best practices, you'll create applications that can grow with your business needs while maintaining code quality and developer productivity.</p>
    
    <div class="callout callout-success">
      <h4>🎉 Key Takeaways</h4>
      <ul>
        <li>Favor composition over inheritance</li>
        <li>Use custom hooks for logic reuse</li>
        <li>Choose state management based on complexity</li>
        <li>Optimize performance from the start</li>
      </ul>
    </div>
  `,
  author: {
    name: 'John Doe',
    bio: 'Senior Frontend Developer with 8+ years of experience building scalable web applications. Passionate about React, TypeScript, and modern web technologies.',
    social: {
      twitter: '@johndoe',
      linkedin: 'johndoe'
    }
  },
  publishedAt: '2024-03-15',
  updatedAt: '2024-03-20',
  readTime: 8,
  tags: ['React', 'Architecture', 'Performance', 'TypeScript'],
  category: 'Development',
  featured: true,
  slug: 'building-scalable-react-applications',
  views: 1247,
  likes: 89,
  tableOfContents: [
    { id: 'introduction', title: 'Introduction', level: 2 },
    { id: 'component-architecture', title: 'Component Architecture', level: 2 },
    { id: 'composition-over-inheritance', title: 'Composition Over Inheritance', level: 3 },
    { id: 'custom-hooks', title: 'Custom Hooks for Logic Reuse', level: 3 },
    { id: 'state-management', title: 'State Management Strategies', level: 2 },
    { id: 'performance-optimization', title: 'Performance Optimization', level: 2 },
    { id: 'conclusion', title: 'Conclusion', level: 2 }
  ]
}

const relatedPosts: RelatedPost[] = [
  {
    id: '2',
    title: 'The Future of Web Design: Trends and Predictions for 2024',
    excerpt: 'Explore the latest design trends shaping the digital landscape.',
    slug: 'future-of-web-design-2024',
    category: 'Design',
    publishedAt: '2024-03-10',
    readTime: 6
  },
  {
    id: '3',
    title: 'Optimizing Business Growth Through Digital Transformation',
    excerpt: 'Discover how modern businesses are leveraging technology.',
    slug: 'optimizing-business-growth-digital-transformation',
    category: 'Business',
    publishedAt: '2024-03-05',
    readTime: 5
  }
]

// ============================================
// UTILITY FUNCTIONS - Move to lib/blog-utils.ts later
// ============================================

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const getCategoryIcon = (category: string) => {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    'Development': Code2,
    'Design': Lightbulb,
    'Business': TrendingUp,
    'Technology': Zap
  }
  return icons[category] || BookOpen
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Development': 'text-blue-600',
    'Design': 'text-purple-600',
    'Business': 'text-green-600',
    'Technology': 'text-orange-600'
  }
  return colors[category] || 'text-gray-600'
}

// ============================================
// COMPONENTS - Move to separate files later
// ============================================

// Share Buttons Component
function ShareButtons({ post }: { post: BlogPost }) {
  const [copied, setCopied] = useState(false)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-700">Share:</span>
      <div className="flex items-center gap-2">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-200"
        >
          <Twitter className="w-4 h-4" />
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <button
          onClick={copyLink}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
        >
          {copied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}

// Table of Contents Component
function TableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0% -35% 0%' }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
      <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <BookOpen className="w-4 h-4" />
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToHeading(item.id)}
                className={`text-left w-full text-sm transition-colors duration-200 hover:text-blue-600 ${
                  activeId === item.id ? 'text-blue-600 font-medium' : 'text-gray-600'
                } ${item.level === 3 ? 'pl-4' : ''}`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

// Related Posts Component
function RelatedPosts({ posts }: { posts: RelatedPost[] }) {
  const handlePostClick = (slug: string) => {
    console.log('Navigate to:', slug)
    // Later: navigate to post
  }

  return (
    <section className="mt-16 border-t border-gray-200 pt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, index) => {
          const CategoryIcon = getCategoryIcon(post.category)
          const categoryColor = getCategoryColor(post.category)
          
          return (
            <article
              key={post.id}
              className="group bg-white border border-gray-100 hover:border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in-up"
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

// Scroll to Top Component  
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  )
}

// ============================================
// MAIN BLOG POST COMPONENT
// ============================================

interface BlogPostProps {
  slug?: string // Will come from Next.js params
}

export default function BlogPost({ slug = 'building-scalable-react-applications' }: BlogPostProps) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    // Simulate API call - replace with real data fetching
    const fetchPost = async () => {
      setLoading(true)
      // In real app: const response = await fetch(`/api/posts/${slug}`)
      // const postData = await response.json()
      
      // For demo, use sample data
      setTimeout(() => {
        setPost(sampleBlogPost)
        setLoading(false)
      }, 500)
    }

    fetchPost()
  }, [slug])

  const handleBack = () => {
    console.log('Navigate back to blog list')
    // Later: router.push('/blog')
  }

  const handleLike = () => {
    setLiked(!liked)
    // Later: API call to update likes
  }

  useEffect(() => {
    // Add copy functionality to code blocks
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

    if (post && !loading) {
      setTimeout(addCopyButtons, 100)
    }
  }, [post, loading])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Post not found</h1>
          <p className="text-gray-600 mb-4">The blog post you're looking for doesn't exist.</p>
          <button 
            onClick={handleBack}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    )
  }

  const CategoryIcon = getCategoryIcon(post.category)
  const categoryColor = getCategoryColor(post.category)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 backdrop-blur-sm bg-white/90">
        <Container>
          <div className="flex items-center justify-between py-4">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Blog</span>
            </button>
            
            <div className="flex items-center gap-4">
              <ShareButtons post={post} />
            </div>
          </div>
        </Container>
      </header>

      <Container size="xl">
        <div className="py-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3">
              {/* Article Header */}
              <header className="mb-8 animate-fade-in">
                <div className="flex items-center gap-2 mb-4">
                  <CategoryIcon className={`w-5 h-5 ${categoryColor}`} />
                  <span className={`font-medium ${categoryColor}`}>{post.category}</span>
                  <span className="text-gray-400">•</span>
                  <time className="text-gray-600">{formatDate(post.publishedAt)}</time>
                  {post.updatedAt && (
                    <>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-500">Updated {formatDate(post.updatedAt)}</span>
                    </>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {post.author.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{post.author.name}</div>
                        <div className="text-sm text-gray-600">{post.readTime} min read</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{post.views?.toLocaleString()}</span>
                    </div>
                    <button
                      onClick={handleLike}
                      className={`flex items-center gap-1 transition-colors duration-200 ${
                        liked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                      <span className="text-sm">{(post.likes || 0) + (liked ? 1 : 0)}</span>
                    </button>
                  </div>
                </div>
              </header>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none animate-fade-in-up delay-200"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Article Footer */}
              <footer className="mt-12 pt-8 border-t border-gray-200 animate-fade-in-up delay-400">
                <div className="flex flex-wrap gap-2 mb-6">
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
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {post.author.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{post.author.name}</h3>
                      {post.author.bio && (
                        <p className="text-gray-600 mb-3">{post.author.bio}</p>
                      )}
                      {post.author.social && (
                        <div className="flex items-center gap-3">
                          {post.author.social.twitter && (
                            <a
                              href={`https://twitter.com/${post.author.social.twitter.replace('@', '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
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

              {/* Related Posts */}
              <RelatedPosts posts={relatedPosts} />
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {post.tableOfContents && post.tableOfContents.length > 0 && (
                <TableOfContents items={post.tableOfContents} />
              )}
            </aside>
          </div>
        </div>
      </Container>

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Global Styles for Rich Content */}
      <style jsx global>{`
        .prose {
          color: rgb(55, 65, 81);
          line-height: 1.75;
        }
        
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
          text-align: justify;
        }
        
        .prose ul, .prose ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        .prose li {
          margin-bottom: 0.5rem;
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
        
        .code-block {
          background: rgb(15, 23, 42);
          border-radius: 0.75rem;
          overflow: hidden;
          margin: 2rem 0;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .code-header {
          background: rgb(30, 41, 59);
          padding: 0.75rem 1.5rem;
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
          padding: 1.5rem;
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
        
        .comparison-table {
          margin: 2rem 0;
          overflow-x: auto;
        }
        
        .comparison-table table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .comparison-table th {
          background: rgb(59, 130, 246);
          color: white;
          padding: 1rem;
          text-align: left;
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }
        
        .comparison-table td {
          padding: 1rem;
          border-bottom: 1px solid rgb(229, 231, 235);
          font-size: 0.875rem;
        }
        
        .comparison-table tr:last-child td {
          border-bottom: none;
        }
        
        .comparison-table tr:nth-child(even) {
          background: rgb(249, 250, 251);
        }
        
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
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .callout p, .callout ul {
          margin-bottom: 0;
        }
        
        .image-container {
          margin: 2.5rem 0;
        }
        
        .placeholder-image {
          width: 100%;
          height: 300px;
          background: linear-gradient(135deg, rgb(243, 244, 246) 0%, rgb(229, 231, 235) 100%);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px dashed rgb(156, 163, 175);
          margin-bottom: 0.75rem;
        }
        
        .placeholder-content {
          text-align: center;
        }
        
        .image-caption {
          font-size: 0.875rem;
          color: rgb(107, 114, 128);
          text-align: center;
          font-style: italic;
        }
        
        /* Animation Classes */
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
        
        /* Line clamping */
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
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .prose h2 {
            font-size: 1.5rem;
          }
          
          .prose h3 {
            font-size: 1.25rem;
          }
          
          .code-header {
            padding: 0.5rem 1rem;
            font-size: 0.75rem;
          }
          
          .code-block pre {
            padding: 1rem;
            font-size: 0.75rem;
          }
          
          .comparison-table {
            font-size: 0.75rem;
          }
          
          .comparison-table th,
          .comparison-table td {
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}