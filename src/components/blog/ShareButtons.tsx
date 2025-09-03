// =============================================================================
// SHARE BUTTONS COMPONENT
// =============================================================================
// Social media sharing functionality with responsive design
// Features: Twitter, Facebook, LinkedIn, copy link functionality
// =============================================================================

'use client'

import { useState } from 'react'
import { Twitter, Facebook, Linkedin, Link as LinkIcon, Check, Share2 } from 'lucide-react'
import { BlogPost } from '@/types/blog'
import { createShareLinks, copyToClipboard } from '@/lib/blog-utils'

interface ShareButtonsProps {
  post: BlogPost
  variant?: 'horizontal' | 'vertical'
  showLabel?: boolean
}

export function ShareButtons({ 
  post, 
  variant = 'horizontal', 
  showLabel = true 
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareLinks = createShareLinks(post.title, currentUrl)

  const handleCopyLink = async () => {
    const success = await copyToClipboard(currentUrl)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const shareButtons = [
    {
      name: 'Twitter',
      icon: Twitter,
      href: shareLinks.twitter,
      className: 'hover:text-blue-500 hover:bg-blue-50'
    },
    {
      name: 'Facebook', 
      icon: Facebook,
      href: shareLinks.facebook,
      className: 'hover:text-blue-600 hover:bg-blue-50'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin, 
      href: shareLinks.linkedin,
      className: 'hover:text-blue-700 hover:bg-blue-50'
    }
  ]

  // Mobile dropdown version
  if (variant === 'vertical') {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 sm:hidden"
          aria-label="Share options"
        >
          <Share2 className="w-4 h-4" />
        </button>
        
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 min-w-[160px]">
            {shareButtons.map((button) => (
              <a
                key={button.name}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <button.icon className="w-4 h-4" />
                <span className="text-sm">{button.name}</span>
              </a>
            ))}
            <button
              onClick={() => {
                handleCopyLink()
                setIsOpen(false)
              }}
              className="flex items-center gap-3 px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              {copied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
              <span className="text-sm">{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        )}
      </div>
    )
  }

  // Desktop horizontal version
  return (
    <div className="flex items-center gap-3">
      {showLabel && (
        <span className="text-sm font-medium text-gray-700 hidden sm:block">Share:</span>
      )}
      <div className="flex items-center gap-2">
        {shareButtons.map((button) => (
          <a
            key={button.name}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 text-gray-600 rounded-lg transition-all duration-200 ${button.className}`}
            aria-label={`Share on ${button.name}`}
          >
            <button.icon className="w-4 h-4" />
          </a>
        ))}
        <button
          onClick={handleCopyLink}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
          aria-label="Copy link"
        >
          {copied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}