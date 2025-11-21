'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export function HeroImage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Track mouse movement for subtle interactions
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('hero-image')?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 10,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 10
        })
      }
    }

    const heroImage = document.getElementById('hero-image')
    if (heroImage) {
      heroImage.addEventListener('mousemove', handleMouseMove)
      return () => heroImage.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="relative animate-fade-in-up delay-400" id="hero-image">
      <div 
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Clean, Professional Container - Large and Responsive */}
        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
          
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 z-0">
            {/* Soft ambient glow behind image */}
            <div 
              className="absolute top-1/2 left-1/2 w-4/5 h-4/5 transform -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl transition-all duration-1000"
              style={{
                background: `radial-gradient(ellipse, #3b82f6 0%, #8b5cf6 50%, transparent 70%)`,
                transform: `translate(-50%, -50%) scale(${isHovered ? '1.2' : '1'})`
              }}
            />
            
            {/* Additional background blur layer */}
            <div 
              className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 opacity-5 blur-2xl"
              style={{
                background: `radial-gradient(circle, #3b82f6 0%, transparent 60%)`,
              }}
            />
            
            {/* Subtle floating particles */}
            <div className="absolute inset-0">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float"
                  style={{
                    left: `${20 + (i * 15) % 60}%`,
                    top: `${20 + (i * 20) % 60}%`,
                    animationDelay: `${i * 1.5}s`,
                    animationDuration: `${6 + Math.random() * 4}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Main Image Container with Soft Edges */}
          <div className="relative z-10 w-full aspect-square">
            {/* Outer container with subtle border radius for edge softening */}
            <div 
              className="relative w-full h-full transition-all duration-700 ease-out"
              style={{
                transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px) scale(${isHovered ? '1.02' : '1'})`,
                filter: `drop-shadow(0 20px 40px rgba(0, 0, 0, 0.08)) ${isHovered ? 'drop-shadow(0 25px 50px rgba(59, 130, 246, 0.12))' : ''}`,
                borderRadius: '8%', // Subtle rounded corners for edge softening
              }}
            >
              {/* Image with soft edges using multiple techniques */}
              <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: '8%' }}>
                <Image
                  src="/herobg.png"
                  alt="Professional portrait"
                  fill
                  className="object-contain transition-all duration-700"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, (max-width: 1024px) 80vw, (max-width: 1280px) 75vw, 70vw"
                  style={{
                    filter: `brightness(${isHovered ? '1.03' : '1'}) contrast(${isHovered ? '1.01' : '1'}) saturate(${isHovered ? '1.05' : '1'})`
                  }}
                />
                
                {/* Edge softening overlay - creates fade effect at borders */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `
                      linear-gradient(0deg, rgba(248,250,252,0.1) 0%, transparent 10%, transparent 90%, rgba(248,250,252,0.1) 100%),
                      linear-gradient(90deg, rgba(248,250,252,0.1) 0%, transparent 10%, transparent 90%, rgba(248,250,252,0.1) 100%)
                    `,
                    borderRadius: '8%'
                  }}
                />
              </div>

              {/* Subtle interactive glow overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 70%)`,
                  borderRadius: '8%'
                }}
              />
            </div>
          </div>

          {/* Minimal Professional Elements */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {/* Professional skill indicators - minimal dots */}
            <div 
              className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-300"
              style={{ 
                transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * 0.1}px)`
              }}
            >
              <div className="flex flex-col gap-2">
                <div className="w-2 h-2 bg-blue-500/60 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '2s' }} />
                <div className="w-2 h-2 bg-purple-500/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '2s' }} />
                <div className="w-2 h-2 bg-cyan-500/60 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '2s' }} />
              </div>
            </div>

            {/* Availability badge */}
            <div 
              className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-500"
              style={{ 
                transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * -0.1}px)`
              }}
            >
              <div className="px-4 py-2 bg-white/95 backdrop-blur-sm border border-gray-200/60 rounded-full shadow-lg">
                <span className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Available for Projects
                </span>
              </div>
            </div>

            {/* Geometric accent - very subtle */}
            <div 
              className="absolute top-12 left-8 opacity-0 group-hover:opacity-60 transition-all duration-1000 delay-700"
              style={{ 
                transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px) rotate(${mousePosition.x * 0.3}deg)`
              }}
            >
              <div className="w-4 h-4 border border-blue-300/40 transform rotate-45" />
            </div>

            {/* Experience indicator */}
            <div 
              className="absolute top-1/2 right-6 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-400"
              style={{ 
                transform: `translateY(-50%) translate(${mousePosition.x * -0.1}px, ${mousePosition.y * 0.2}px)`
              }}
            >
              <div className="flex flex-col items-end gap-1 text-right">
                <div className="text-xs text-gray-500 font-medium">7+ Years</div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500/60 to-purple-500/60 rounded-full" />
                <div className="text-xs text-gray-500 font-medium">Experience</div>
              </div>
            </div>
          </div>

          {/* Very subtle scan line effect */}
          <div 
            className="absolute inset-0 pointer-events-none z-15 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          >
            <div 
              className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse"
              style={{ 
                animationDuration: '4s',
                transform: `translateY(${50 + mousePosition.y * 2}%)` 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}