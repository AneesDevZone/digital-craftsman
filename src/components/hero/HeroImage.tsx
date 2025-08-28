'use client'

import React, { useState, useEffect } from 'react'
import { Code, Palette, Zap, Star } from 'lucide-react'

export function HeroImage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('hero-image')?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
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
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Container - Increased Size */}
        <div className="relative w-96 h-96 lg:w-[480px] lg:h-[480px] mx-auto">
          
          {/* 3D Floating Cards Background */}
          <div className="absolute inset-0">
            {/* Skill Cards */}
            <div 
              className="absolute top-8 left-4 w-20 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl flex items-center justify-center transform rotate-12 transition-all duration-700"
              style={{ 
                transform: `rotate(12deg) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.3}px) ${isHovered ? 'translateZ(20px) scale(1.1)' : ''}`
              }}
            >
              <Code className="w-8 h-8 text-white" />
            </div>
            
            <div 
              className="absolute top-16 right-6 w-18 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-xl flex items-center justify-center transform -rotate-6 transition-all duration-700"
              style={{ 
                transform: `rotate(-6deg) translate(${mousePosition.x * -0.4}px, ${mousePosition.y * 0.6}px) ${isHovered ? 'translateZ(15px) scale(1.05)' : ''}`
              }}
            >
              <Palette className="w-7 h-7 text-white" />
            </div>
            
            <div 
              className="absolute bottom-20 left-2 w-16 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-xl flex items-center justify-center transform rotate-45 transition-all duration-700"
              style={{ 
                transform: `rotate(45deg) translate(${mousePosition.x * 0.7}px, ${mousePosition.y * -0.4}px) ${isHovered ? 'translateZ(25px) scale(1.15)' : ''}`
              }}
            >
              <Zap className="w-6 h-6 text-white" />
            </div>
            
            <div 
              className="absolute bottom-8 right-4 w-14 h-18 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-xl flex items-center justify-center transform -rotate-12 transition-all duration-700"
              style={{ 
                transform: `rotate(-12deg) translate(${mousePosition.x * -0.6}px, ${mousePosition.y * 0.5}px) ${isHovered ? 'translateZ(18px) scale(1.08)' : ''}`
              }}
            >
              <Star className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Glassmorphism Container - Increased Size */}
          <div className="absolute inset-6 rounded-[3rem] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden group-hover:bg-white/15 transition-all duration-700">
            
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0">
              <div 
                className="absolute inset-0 opacity-60 transition-all duration-1000"
                style={{
                  background: `
                    radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, #3b82f6 0%, transparent 50%),
                    radial-gradient(circle at ${30 - mousePosition.x * 0.5}% ${70 - mousePosition.y * 0.5}%, #8b5cf6 0%, transparent 50%),
                    radial-gradient(circle at ${70 + mousePosition.x * 0.3}% ${30 + mousePosition.y * 0.7}%, #06b6d4 0%, transparent 50%),
                    linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)
                  `
                }}
              />
            </div>

            {/* Fancy Tech Image */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
              <div 
                className="relative w-full h-full max-w-80 max-h-80 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-105"
                style={{
                  transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`
                }}
              >
                {/* Tech-themed SVG Illustration */}
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
                  
                  {/* Animated Circuit Pattern */}
                  <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
                    <defs>
                      <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                    
                    {/* Circuit lines */}
                    <g stroke="url(#circuitGradient)" strokeWidth="2" fill="none">
                      <path d="M50 50 L150 50 L150 150 L250 150 L250 100 L350 100" className="animate-pulse">
                        <animate attributeName="stroke-dasharray" values="0 300;150 150;300 0" dur="3s" repeatCount="indefinite" />
                      </path>
                      <path d="M100 200 L200 200 L200 300 L300 300" className="animate-pulse" style={{ animationDelay: '1s' }}>
                        <animate attributeName="stroke-dasharray" values="0 200;100 100;200 0" dur="3s" repeatCount="indefinite" />
                      </path>
                      <path d="M50 300 L100 250 L200 250 L250 200 L350 200" className="animate-pulse" style={{ animationDelay: '2s' }}>
                        <animate attributeName="stroke-dasharray" values="0 250;125 125;250 0" dur="3s" repeatCount="indefinite" />
                      </path>
                    </g>
                    
                    {/* Circuit nodes */}
                    <g fill="url(#circuitGradient)">
                      <circle cx="150" cy="50" r="4" className="animate-pulse" />
                      <circle cx="250" cy="150" r="4" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <circle cx="200" cy="200" r="4" className="animate-pulse" style={{ animationDelay: '1s' }} />
                      <circle cx="300" cy="300" r="4" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                      <circle cx="100" cy="250" r="4" className="animate-pulse" style={{ animationDelay: '2s' }} />
                    </g>
                  </svg>

                  {/* Central Tech Element */}
                  <div className="relative z-10 w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden">
                      {/* Animated tech symbols */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl lg:text-5xl text-white font-bold opacity-90">
                          &lt;/&gt;
                        </div>
                      </div>
                      
                      {/* Scanning line effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000" />
                    </div>
                  </div>
                  
                  {/* Floating tech particles */}
                  <div className="absolute inset-0">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-float"
                        style={{
                          left: `${15 + (i * 8) % 70}%`,
                          top: `${10 + (i * 12) % 80}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: `${2 + Math.random() * 3}s`,
                          transform: `translate(${mousePosition.x * (0.1 + i * 0.03)}px, ${mousePosition.y * (0.1 + i * 0.03)}px)`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>

            {/* Interactive Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/40 rounded-full animate-float opacity-60"
                  style={{
                    left: `${20 + (i * 15) % 60}%`,
                    top: `${15 + (i * 20) % 70}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                    transform: `translate(${mousePosition.x * (0.1 + i * 0.05)}px, ${mousePosition.y * (0.1 + i * 0.05)}px)`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Ambient Light Effect */}
          <div 
            className="absolute inset-0 rounded-full opacity-20 blur-3xl transition-all duration-1000 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, #3b82f6 0%, transparent 70%)`,
              transform: `scale(${isHovered ? '1.2' : '1'})`
            }}
          />
        </div>
      </div>
    </div>
  )
}