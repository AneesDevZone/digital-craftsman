// =============================================================================
// BLOG HEADER COMPONENT
// =============================================================================
// Header with back navigation and share functionality
// Features: Working back button, responsive design, share buttons
// =============================================================================

'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { BlogPost } from '@/types/blog'
import { ShareButtons } from './ShareButtons'

interface BlogHeaderProps {
  post: BlogPost
}

export function BlogHeader({ post }: BlogHeaderProps) {
  const router = useRouter()

  const handleBack = () => {
    // Check if there's previous page in history
    if (window.history.length > 1) {
      router.back()
    } else {
      // Fallback to blog listing page
      router.push('/blog')
    }
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40">
      <Container>
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform duration-200" />
            <span className="font-medium text-sm sm:text-base hidden sm:block">Back to Blog</span>
            <span className="font-medium text-sm sm:hidden">Back</span>
          </button>
          
          {/* Share Buttons - Hidden on mobile to save space */}
          <div className="hidden sm:flex">
            <ShareButtons post={post} />
          </div>
        </div>
      </Container>
    </header>
  )
}