// lib/blogData.ts or utils/blogData.ts
// Create this file to share blog data between your listing and individual post pages

export interface BlogPost {
    id: number
    slug: string
    title: string
    excerpt: string
    content: string // Full HTML content for the individual post page
    author: {
      name: string
      avatar: string
      bio: string
      twitter: string
      linkedin: string
    }
    publishedAt: string
    updatedAt?: string
    readTime: string
    category: string
    tags: string[]
    featured: boolean
    views: number
    likes: number
    bookmarks: number
    comments: number
    image?: string
    color: string
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      slug: "building-scalable-react-applications",
      title: "Building Scalable React Applications: Advanced Patterns and Performance Optimization",
      excerpt: "A comprehensive guide to building large-scale React applications with advanced patterns, performance optimization techniques, and real-world examples.",
      content: `
        <div class="blog-content">
          <p>Building scalable React applications requires careful consideration of architecture, performance, and maintainability. In this comprehensive guide, we'll explore advanced patterns and techniques that will help you create robust applications that can grow with your business needs.</p>
          
          <h2>Understanding Component Architecture</h2>
          <p>The foundation of any scalable React application lies in its component architecture. Let's start by examining the key principles that guide effective component design.</p>
          
          <blockquote>
            "The key to building maintainable React applications is to think in components, not pages." - Dan Abramov
          </blockquote>
          
          <h3>Component Composition Patterns</h3>
          <p>One of the most powerful patterns in React is component composition. Instead of building monolithic components, we can create smaller, focused components that work together.</p>
          
          <pre><code class="language-jsx">
  // Bad: Monolithic component
  function UserProfile({ user }) {
    return (
      <div className="user-profile">
        <img src={user.avatar} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <div className="user-stats">
          <span>Posts: {user.postCount}</span>
          <span>Followers: {user.followerCount}</span>
        </div>
      </div>
    )
  }
  
  // Good: Composed components
  function UserProfile({ user }) {
    return (
      <div className="user-profile">
        <UserAvatar user={user} />
        <UserInfo user={user} />
        <UserStats user={user} />
      </div>
    )
  }
          </code></pre>
          
          <h2>Performance Optimization Strategies</h2>
          <p>Performance is crucial for user experience. Here are the key strategies we use in production applications:</p>
          
          <ul>
            <li><strong>Code Splitting:</strong> Break your application into smaller chunks that load on demand</li>
            <li><strong>Memoization:</strong> Use React.memo, useMemo, and useCallback strategically</li>
            <li><strong>Virtual Scrolling:</strong> Handle large lists efficiently</li>
            <li><strong>Image Optimization:</strong> Implement lazy loading and responsive images</li>
          </ul>
          
          <h3>Implementing Code Splitting</h3>
          <p>Code splitting is one of the most effective ways to improve your application's initial load time. Here's how to implement it effectively:</p>
          
          <pre><code class="language-jsx">
  import { lazy, Suspense } from 'react'
  
  // Lazy load components
  const Dashboard = lazy(() => import('./Dashboard'))
  const Profile = lazy(() => import('./Profile'))
  
  function App() {
    return (
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </Router>
    )
  }
          </code></pre>
          
          <div class="callout callout-info">
            <h4>💡 Pro Tip</h4>
            <p>Always measure performance before and after optimizations. Use React DevTools Profiler to identify bottlenecks in your application.</p>
          </div>
          
          <h2>State Management at Scale</h2>
          <p>As your application grows, managing state becomes increasingly complex. Let's explore patterns that help maintain sanity:</p>
          
          <h3>Context API Best Practices</h3>
          <p>The Context API is great for sharing state, but it can cause performance issues if not used carefully. Here's the right way to structure your contexts:</p>
          
          <pre><code class="language-jsx">
  // Separate contexts for different concerns
  const UserContext = createContext()
  const ThemeContext = createContext()
  const NotificationContext = createContext()
  
  // Combine providers at the root
  function AppProviders({ children }) {
    return (
      <UserProvider>
        <ThemeProvider>
          <NotificationProvider>
            {children}
          </NotificationProvider>
        </ThemeProvider>
      </UserProvider>
    )
  }
          </code></pre>
          
          <h2>Testing Strategies</h2>
          <p>A scalable application needs a comprehensive testing strategy. We recommend a testing pyramid approach:</p>
          
          <ol>
            <li><strong>Unit Tests:</strong> Test individual components and utilities</li>
            <li><strong>Integration Tests:</strong> Test component interactions</li>
            <li><strong>End-to-End Tests:</strong> Test complete user workflows</li>
          </ol>
          
          <div class="callout callout-warning">
            <h4>⚠️ Common Pitfall</h4>
            <p>Don't over-test implementation details. Focus on testing behavior and user interactions rather than internal component state.</p>
          </div>
          
          <h2>Conclusion</h2>
          <p>Building scalable React applications is both an art and a science. By following these patterns and continuously measuring performance, you can create applications that not only work well today but will continue to serve your users as they grow.</p>
          
          <p>Remember, the key to success is iterative improvement. Start with these patterns, measure their impact, and continuously refine your approach based on real-world usage.</p>
        </div>
      `,
      author: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
        bio: "Full-stack developer with 8+ years of experience building scalable web applications.",
        twitter: "@johndoe",
        linkedin: "johndoe"
      },
      publishedAt: "2024-08-20T10:00:00Z",
      updatedAt: "2024-08-21T15:30:00Z",
      readTime: "12 min read",
      category: "React",
      tags: ["React", "Performance", "Architecture", "Best Practices"],
      views: 2340,
      likes: 189,
      bookmarks: 45,
      comments: 23,
      featured: true,
      color: "from-blue-300/70 to-indigo-400/70"
    },
    {
      id: 2,
      slug: "web-development-trends-2024",
      title: "Web Development Trends 2024",
      excerpt: "Explore the latest trends shaping web development in 2024, from AI integration to new frameworks.",
      content: `
        <div class="blog-content">
          <p>The web development landscape continues to evolve at breakneck speed. As we navigate through 2024, several key trends are shaping how we build and deploy web applications.</p>
          
          <h2>AI Integration in Development</h2>
          <p>Artificial intelligence is no longer a futuristic concept—it's becoming an integral part of the development workflow.</p>
          
          <h3>AI-Powered Code Generation</h3>
          <p>Tools like GitHub Copilot and ChatGPT are revolutionizing how developers write code, offering intelligent suggestions and automating repetitive tasks.</p>
          
          <h2>The Rise of Edge Computing</h2>
          <p>Edge computing is bringing computation closer to users, reducing latency and improving performance across global applications.</p>
          
          <h2>WebAssembly Goes Mainstream</h2>
          <p>WebAssembly (WASM) is enabling high-performance applications in the browser, opening new possibilities for web development.</p>
        </div>
      `,
      author: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
        bio: "Full-stack developer with 8+ years of experience building scalable web applications.",
        twitter: "@johndoe",
        linkedin: "johndoe"
      },
      publishedAt: "2024-08-15T14:30:00Z",
      readTime: "8 min read",
      category: "Industry",
      tags: ["Trends", "Web Development", "AI", "Edge Computing"],
      views: 1890,
      likes: 156,
      bookmarks: 32,
      comments: 18,
      featured: false,
      color: "from-emerald-300/70 to-cyan-400/70"
    },
    {
      id: 3,
      slug: "database-query-optimization",
      title: "Database Query Optimization",
      excerpt: "Learn advanced techniques for optimizing database queries and improving application performance.",
      content: `
        <div class="blog-content">
          <p>Database performance is often the bottleneck in web applications. Understanding how to optimize queries can dramatically improve your application's response times and user experience.</p>
          
          <h2>Understanding Query Execution Plans</h2>
          <p>Before optimizing, you need to understand how your database executes queries. Most databases provide tools to analyze execution plans.</p>
          
          <h2>Indexing Strategies</h2>
          <p>Proper indexing is crucial for query performance. Here are the key strategies:</p>
          
          <ul>
            <li><strong>Primary Keys:</strong> Always use appropriate primary keys</li>
            <li><strong>Foreign Keys:</strong> Index foreign key columns</li>
            <li><strong>Composite Indexes:</strong> Use for multi-column searches</li>
            <li><strong>Partial Indexes:</strong> For conditional queries</li>
          </ul>
          
          <h2>Query Optimization Techniques</h2>
          <p>Learn practical techniques to write more efficient SQL queries and improve database performance.</p>
        </div>
      `,
      author: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
        bio: "Full-stack developer with 8+ years of experience building scalable web applications.",
        twitter: "@johndoe",
        linkedin: "johndoe"
      },
      publishedAt: "2024-08-10T09:15:00Z",
      readTime: "15 min read",
      category: "Backend",
      tags: ["Database", "Performance", "SQL", "Optimization"],
      views: 1240,
      likes: 98,
      bookmarks: 67,
      comments: 34,
      featured: false,
      color: "from-orange-300/70 to-amber-400/70"
    },
    {
      id: 4,
      slug: "mastering-css-grid-layouts",
      title: "Mastering CSS Grid Layouts",
      excerpt: "A complete guide to CSS Grid, from basics to advanced layout techniques for modern web design.",
      content: `
        <div class="blog-content">
          <p>CSS Grid has revolutionized web layout design, providing developers with unprecedented control over two-dimensional layouts. This comprehensive guide will take you from Grid basics to advanced techniques.</p>
          
          <h2>Grid Fundamentals</h2>
          <p>Understanding the core concepts of CSS Grid is essential for creating sophisticated layouts.</p>
          
          <h3>Grid Container and Items</h3>
          <p>Every Grid layout starts with a grid container and its direct children become grid items.</p>
          
          <pre><code class="language-css">
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 1rem;
  }
          </code></pre>
          
          <h2>Advanced Grid Techniques</h2>
          <p>Once you master the basics, these advanced techniques will help you create complex, responsive layouts with ease.</p>
          
          <h3>Named Grid Lines</h3>
          <p>Use named grid lines to make your layouts more semantic and easier to maintain.</p>
          
          <h3>Grid Areas</h3>
          <p>Define grid areas for intuitive layout control and better code readability.</p>
          
          <h2>Responsive Grid Patterns</h2>
          <p>Learn how to create responsive layouts that adapt seamlessly across different screen sizes using CSS Grid.</p>
        </div>
      `,
      author: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
        bio: "Full-stack developer with 8+ years of experience building scalable web applications.",
        twitter: "@johndoe",
        linkedin: "johndoe"
      },
      publishedAt: "2024-08-05T11:20:00Z",
      readTime: "10 min read",
      category: "CSS",
      tags: ["CSS", "Grid", "Layout", "Responsive Design"],
      views: 950,
      likes: 73,
      bookmarks: 41,
      comments: 19,
      featured: false,
      color: "from-purple-300/70 to-pink-400/70"
    }
  ]
  
  // Utility functions
  export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find(post => post.slug === slug)
  }
  
  export const getFeaturedPosts = (): BlogPost[] => {
    return blogPosts.filter(post => post.featured)
  }
  
  export const getPostsByCategory = (category: string): BlogPost[] => {
    return blogPosts.filter(post => post.category === category)
  }
  
  export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
    return blogPosts
      .filter(post => 
        post.id !== currentPost.id && 
        (post.category === currentPost.category || 
         post.tags.some(tag => currentPost.tags.includes(tag)))
      )
      .slice(0, limit)
  }