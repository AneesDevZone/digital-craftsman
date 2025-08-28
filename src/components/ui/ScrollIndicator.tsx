'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

interface ScrollIndicatorProps {
  onClick?: () => void
  className?: string
}

export function ScrollIndicator({ onClick, className = "" }: ScrollIndicatorProps) {
  return (
    <button 
      onClick={onClick}
      className={`
        absolute bottom-8 left-1/2 transform -translate-x-1/2 
        animate-bounce cursor-pointer group z-10
        ${className}
      `}
      aria-label="Scroll to next section"
    >
      {/* Mouse scroll indicator */}
      <div className="w-8 h-12 border-2 border-gray-300 rounded-full flex justify-center group-hover:border-gray-500 transition-colors duration-300 mb-2">
        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-ping group-hover:bg-gray-600" />
      </div>
      
      {/* Arrow indicator */}
      <ChevronDown className="w-5 h-5 text-gray-400 mx-auto group-hover:text-gray-600 transition-all duration-300 group-hover:translate-y-1" />
      
      {/* Subtle text hint */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Scroll down
      </div>
    </button>
  )
}