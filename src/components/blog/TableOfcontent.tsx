
// =============================================================================
// TABLE OF CONTENTS COMPONENT
// =============================================================================
// src/components/blog/TableOfContents.tsx
// Sticky navigation for article sections with active highlighting
// =============================================================================

'use client'

import { useState, useEffect } from 'react'
import { BookOpen } from 'lucide-react'
import { TOCItem } from '@/types/blog'

interface TableOfContentsProps {
  items: TOCItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
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
    <div className="bg-gray-50 rounded-xl p-4 sm:p-6 sticky top-24">
      <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2 text-sm sm:text-base">
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

