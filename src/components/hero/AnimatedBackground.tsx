'use client'

import React from 'react'

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Meshes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-purple-400/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-emerald-400/15 via-cyan-400/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-pink-400/10 via-orange-400/5 to-transparent rounded-full blur-3xl animate-pulse delay-2000 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] animate-pulse"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #3b82f6 1px, transparent 1px),
            linear-gradient(0deg, #3b82f6 1px, transparent 1px),
            radial-gradient(circle at 100px 100px, #8b5cf6 2px, transparent 0)
          `,
          backgroundSize: '100px 100px, 100px 100px, 200px 200px',
          animation: 'grid-move 20s linear infinite'
        }}
      />
      
      {/* Floating Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}
        />
      ))}
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/4 left-1/6 w-4 h-4 border-2 border-blue-300/30 rotate-45 animate-spin" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border-2 border-purple-300/25 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
      <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-emerald-300/40 rotate-45 animate-bounce" style={{ animationDuration: '2s' }} />
    </div>
  )
}