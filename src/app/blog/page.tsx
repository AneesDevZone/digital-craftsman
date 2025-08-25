'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation' // Add this import
import { Container } from '@/components/ui/Container'
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag, 
  TrendingUp,
  BookOpen,
  Eye,
  Heart,
  Filter,
  Search,
  ChevronRight,
  Grid,
  List,
  ExternalLink,
  Code2,
  Palette,
  Database,
  Layers
} from 'lucide-react'

// Updated blog data with slugs - IMPORTANT: Add slugs to your data
const blogPosts = [
  {
    id: 1,
    slug: "building-scalable-react-applications", // Add this field
    title: "Building Scalable React Applications: Advanced Patterns and Performance",
    excerpt: "A comprehensive guide to building large-scale React applications with advanced patterns, performance optimization techniques, and real-world examples.",
    author: "John Doe",
    publishedAt: "2024-08-20",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "Architecture", "Performance"],
    featured: true,
    views: 1240,
    likes: 89,
    image: "",
    color: "from-blue-300/70 to-indigo-400/70"
  },
  {
    id: 2,
    slug: "web-development-trends-2024", // Add this field
    title: "Web Development Trends 2024",
    excerpt: "Explore the latest trends shaping web development in 2024, from AI integration to new frameworks.",
    author: "John Doe", 
    publishedAt: "2024-08-15",
    readTime: "6 min read",
    category: "Industry",
    tags: ["Trends", "Web Development"],
    featured: false,
    views: 950,
    likes: 67,
    image: "",
    color: "from-emerald-300/70 to-cyan-400/70"
  },
  {
    id: 3,
    slug: "database-query-optimization", // Add this field
    title: "Database Query Optimization",
    excerpt: "Learn advanced techniques for optimizing database queries and improving application performance.",
    author: "John Doe",
    publishedAt: "2024-08-10", 
    readTime: "12 min read",
    category: "Backend",
    tags: ["Database", "Performance"],
    featured: false,
    views: 780,
    likes: 52,
    image: "",
    color: "from-orange-300/70 to-amber-400/70"
  },
  {
    id: 4,
    slug: "mastering-css-grid-layouts", // Add this field
    title: "Mastering CSS Grid Layouts",
    excerpt: "A complete guide to CSS Grid, from basics to advanced layout techniques for modern web design.",
    author: "John Doe",
    publishedAt: "2024-08-05",
    readTime: "10 min read", 
    category: "CSS",
    tags: ["CSS", "Grid", "Layout"],
    featured: false,
    views: 650,
    likes: 43,
    image: "",
    color: "from-purple-300/70 to-pink-400/70"
  }
]

const categories = ["All", "React", "Industry", "Backend", "CSS", "JavaScript", "Design"]

const categoryIcons = {
  React: Code2,
  Industry: TrendingUp,
  Backend: Database,
  CSS: Palette,
  JavaScript: Code2,
  Design: Layers
}

interface BlogPost {
  id: number
  slug: string // Add this field to interface
  title: string
  excerpt?: string // Add this optional field
  author: string
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
  featured: boolean
  views: number
  likes: number
  image: string
  color: string
}

export function BlogSection() {
  const router = useRouter() // Add this hook
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<'preview' | 'all'>('preview')
  const [listView, setListView] = useState(false)
  
  // Add navigation function
  const handlePostClick = (slug: string) => {
    router.push(`/blog/${slug}`)
  }
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find(post => post.featured)
  const previewPosts = viewMode === 'preview' ? filteredPosts.filter(post => !post.featured).slice(0, 3) : filteredPosts

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  const generateTexture = (seed: number) => {
    const patterns = [
      `radial-gradient(circle at ${20 + (seed * 15) % 40}% ${30 + (seed * 20) % 40}%, rgba(255,255,255,0.1) 2px, transparent 2px),
       radial-gradient(circle at ${60 + (seed * 25) % 30}% ${70 + (seed * 15) % 20}%, rgba(255,255,255,0.08) 1px, transparent 1px)`,
      
      `linear-gradient(${seed * 45}deg, rgba(255,255,255,0.1) 1px, transparent 1px),
       linear-gradient(${(seed * 45) + 90}deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
      
      `radial-gradient(ellipse ${100 + (seed * 50) % 100}% ${80 + (seed * 40) % 60}% at ${seed * 20 % 100}% ${seed * 30 % 100}%, rgba(255,255,255,0.1) 0%, transparent 50%),
       radial-gradient(ellipse ${80 + (seed * 30) % 80}% ${100 + (seed * 20) % 50}% at ${(seed * 40) % 100}% ${(seed * 50) % 100}%, rgba(255,255,255,0.08) 0%, transparent 50%)`,
      
      `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
       linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`
    ]
    
    const sizes = [
      '40px 40px, 60px 60px',
      '30px 30px, 45px 45px', 
      '120px 80px, 90px 120px',
      '20px 20px, 20px 20px'
    ]
    
    const patternIndex = seed % patterns.length
    return {
      backgroundImage: patterns[patternIndex],
      backgroundSize: sizes[patternIndex]
    }
  }

  const PlaceholderImage = ({ post, className = "" }: { post: BlogPost, className?: string }) => {
    const Icon = categoryIcons[post.category as keyof typeof categoryIcons] || BookOpen
    const texture = generateTexture(post.id)
    
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br ${post.color} ${className}`}>
        <div 
          className="absolute inset-0 opacity-50 animate-pulse"
          style={{
            ...texture,
            animation: 'textureFloat 8s ease-in-out infinite alternate'
          }}
        />
        
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.15)_0%,transparent_50%)] opacity-40"
          style={{
            animation: 'gradientMove1 6s ease-in-out infinite alternate'
          }}
        />
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-30"
          style={{
            animation: 'gradientMove2 8s ease-in-out infinite alternate-reverse'
          }}
        />
        
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px',
            animation: 'noiseMove 10s linear infinite'
          }}
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-12 h-12 text-white/80 drop-shadow-lg" />
        </div>
        
        <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping" />
        <div className="absolute top-1/3 right-6 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-6 left-4 w-1 h-1 bg-white/30 rounded-full animate-bounce delay-500" />
      </div>
    )
  }

  // Updated FeaturedPostCard with click handler
  const FeaturedPostCard = ({ post }: { post: BlogPost }) => (
    <article 
      className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
      onClick={() => handlePostClick(post.slug)} // Add click handler
    >
      <div className="lg:grid lg:grid-cols-5 lg:gap-0">
        <div className="lg:col-span-3 relative overflow-hidden h-64 lg:h-80">
          {post.image ? (
            <img
              src={post.image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <PlaceholderImage post={post} className="w-full h-full" />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/60" />
          
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-lg shadow-lg">
              <TrendingUp className="w-3 h-3 text-orange-500" />
              Featured
            </span>
          </div>
        </div>
        
        <div className="lg:col-span-2 p-6 flex flex-col justify-center relative">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {post.views}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {post.likes}
            </span>
          </div>
          
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          
          {/* Add excerpt if available */}
          {post.excerpt && (
            <p className="text-gray-600 mb-4 text-sm line-clamp-2">
              {post.excerpt}
            </p>
          )}
          
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            
            <button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md"
              onClick={(e) => {
                e.stopPropagation() // Prevent double navigation
                handlePostClick(post.slug)
              }}
            >
              Read
            </button>
          </div>
        </div>
      </div>
    </article>
  )

  // Updated RegularPostCard with click handler
  const RegularPostCard = ({ post }: { post: BlogPost }) => (
    <article 
      className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group hover:-translate-y-1 cursor-pointer"
      onClick={() => handlePostClick(post.slug)} // Add click handler
    >
      <div className="relative h-64">
        {post.image ? (
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <PlaceholderImage post={post} className="w-full h-full" />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute top-4 right-4 flex items-center gap-3 text-xs text-white/80">
          <span className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">
            <Eye className="w-3 h-3" />
            {post.views}
          </span>
          <span className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">
            <Heart className="w-3 h-3" />
            {post.likes}
          </span>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-purple-200 transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-white/70">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
            
            <button 
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 border border-white/30"
              onClick={(e) => {
                e.stopPropagation() // Prevent double navigation
                handlePostClick(post.slug)
              }}
            >
              Read
            </button>
          </div>
        </div>
      </div>
    </article>
  )

  return (
    <section id="blog" className="relative py-16 bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-200/15 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl animate-pulse delay-1500" />
        <div 
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <Container size="xl">
        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Weekly Insights & Learning</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest from{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent">
              My Blog
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Weekly posts sharing insights, lessons learned, and deep dives into web development and emerging technologies.
          </p>
        </div>

        {viewMode === 'all' && (
          <>
            {/* Search and Filter */}
            <div className="mb-8 relative z-10">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="relative w-full lg:w-80">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1">
                    <button
                      onClick={() => setListView(false)}
                      className={`p-1.5 rounded transition-colors duration-200 ${!listView ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setListView(true)}
                      className={`p-1.5 rounded transition-colors duration-200 ${listView ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 overflow-x-auto">
                    <Filter className="text-gray-400 w-4 h-4 flex-shrink-0" />
                    <div className="flex gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-3 py-1.5 rounded-md font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                            selectedCategory === category
                              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {viewMode === 'preview' && (
          <div className="mb-8 relative z-10">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 overflow-x-auto">
                <Filter className="text-gray-400 w-4 h-4 flex-shrink-0" />
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1.5 rounded-md font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts */}
        <div className="relative z-10">
          {viewMode === 'preview' ? (
            <div className="space-y-12">
              {featuredPost && (
                <FeaturedPostCard post={featuredPost} />
              )}
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {previewPosts.map((post) => (
                  <RegularPostCard key={post.id} post={post} />
                ))}
              </div>

              <div className="text-center pt-4">
                <button
                  onClick={() => setViewMode('all')}
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>View All Posts</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">All Posts ({filteredPosts.length})</h3>
                <button
                  onClick={() => setViewMode('preview')}
                  className="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors duration-300"
                >
                  ← Back to Preview
                </button>
              </div>

              {listView ? (
                <div className="space-y-4">
                  {filteredPosts.map((post) => (
                    <div 
                      key={post.id} 
                      className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300 p-4 border border-gray-100 cursor-pointer"
                      onClick={() => handlePostClick(post.slug)} // Add click handler
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          {post.image ? (
                            <img
                              src={post.image}
                              alt=""
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                          ) : (
                            <PlaceholderImage post={post} className="w-16 h-16 rounded-lg" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 truncate mb-1">{post.title}</h4>
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span>{post.category}</span>
                            <span>{formatDate(post.publishedAt)}</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <RegularPostCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {viewMode === 'preview' && (
          <div className="text-center pt-8 relative z-10">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 max-w-lg mx-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Updated</h3>
              <p className="text-gray-600 text-sm mb-4">Get notified about new articles</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>

      <style jsx>{`
        @keyframes textureFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-5px) scale(1.02); }
        }
        
        @keyframes gradientMove1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, -10px) rotate(180deg); }
        }
        
        @keyframes gradientMove2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-10px, 10px) rotate(-180deg); }
        }
        
        @keyframes noiseMove {
          0% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>
    </section>
  )
}