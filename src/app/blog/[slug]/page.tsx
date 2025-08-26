import BlogPost from '@/components/blog/BlogPost'

interface BlogPageProps {
    params: Promise<{
      slug: string
    }>
  }
  
  export default async function BlogPage({ params }: BlogPageProps) {
    const { slug } = await params
    return <BlogPost slug={slug} />
  }
  
  // Optional: Generate metadata for SEO
  export async function generateMetadata({ params }: BlogPageProps) {
    const { slug } = await params
    
    // In a real app, you'd fetch the blog post data here
    // const post = await fetchBlogPost(slug)
    
    return {
      title: 'Blog Post Title', // Replace with actual post title
      description: 'Blog post description', // Replace with actual post excerpt
    }
  }