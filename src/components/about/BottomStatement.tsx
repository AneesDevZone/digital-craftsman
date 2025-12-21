'use client'
import React from 'react'
import { Terminal, ArrowRight } from 'lucide-react'

interface BottomStatementProps {
  isVisible: boolean
}

export function BottomStatement({ isVisible }: BottomStatementProps) {
  return (
    <div 
      className={`transform transition-all duration-1000 delay-700 
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
    >
      <div 
        className="group relative inline-flex items-center gap-6 p-3 pr-5 rounded-xl border transition-all duration-300 hover:shadow-lg"
        style={{ 
          backgroundColor: 'var(--color-bg-surface)',
          borderColor: 'var(--color-border)'
        }}
      >
        {/* Left: Icon & Text grouped */}
        <div className="flex items-center gap-4">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-500 group-hover:-rotate-6"
            style={{ 
              background: 'var(--color-bg-primary)',
              border: '1px solid var(--color-border)'
            }}
          >
            <Terminal className="w-5 h-5" style={{ color: 'var(--color-brand-primary)' }} />
          </div>
          
          <div className="whitespace-nowrap">
            <h4 className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>
              Initialize project? 
              <span className="ml-2 font-normal opacity-60 hidden md:inline" style={{ color: 'var(--color-text-secondary)' }}>
                Ready for deployment.
              </span>
            </h4>
          </div>
        </div>

        {/* Right: Action Button */}
        <button 
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-[10px] uppercase tracking-wider text-white transition-all hover:scale-105"
          style={{ background: 'var(--gradient-brand-primary)' }}
        >
          Start Build
          <ArrowRight className="w-3 h-3" />
        </button>

        {/* Decorative Tag */}
        <div 
          className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-md border text-[8px] font-mono opacity-60 select-none"
          style={{ 
            backgroundColor: 'var(--color-bg-primary)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text-secondary)'
          }}
        >
          v1.0.4
        </div>
      </div>
    </div>
  )
}