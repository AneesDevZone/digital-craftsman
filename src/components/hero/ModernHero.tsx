'use client'

import React, { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { HeroContent } from '@/components/hero/HeroContent'
import { HeroImage } from '@/components/hero/HeroImage'
import { AnimatedBackground } from '@/components/hero/AnimatedBackground'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'
import { 
  Code, 
  Palette, 
  Zap,
  Star,
  Circle,
  Triangle
} from 'lucide-react'

// Floating shapes configuration
const floatingShapes = [
  { icon: Code, delay: '0s', position: 'top-20 left-16', size: 'w-8 h-8', color: 'text-blue-400/40', animation: 'animate-bounce' },
  { icon: Palette, delay: '0.5s', position: 'top-32 right-20', size: 'w-6 h-6', color: 'text-purple-400/50', animation: 'animate-pulse' },
  { icon: Zap, delay: '1s', position: 'bottom-32 left-20', size: 'w-7 h-7', color: 'text-yellow-400/45', animation: 'animate-spin' },
  { icon: Star, delay: '1.5s', position: 'bottom-40 right-16', size: 'w-5 h-5', color: 'text-pink-400/60', animation: 'animate-ping' },
  { icon: Circle, delay: '2s', position: 'top-1/2 left-8', size: 'w-6 h-6', color: 'text-emerald-400/40', animation: 'animate-bounce' },
  { icon: Triangle, delay: '2.5s', position: 'top-1/3 right-12', size: 'w-8 h-8', color: 'text-cyan-400/35', animation: 'animate-pulse' },
]

export function ModernHero() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about, #projects, #services, #blog')
    nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  
  if (!mounted) return null
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 lg:pt-20 justify-center overflow-hidden bg-white">
      
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Floating Elements */}
      {floatingShapes.map((element, index) => (
        <div
          key={index}
          className={`absolute hidden lg:block ${element.position} ${element.color} ${element.animation}`}
          style={{ 
            animationDelay: element.delay,
            animationDuration: '3s',
            animationIterationCount: 'infinite'
          }}
        >
          <element.icon className={element.size} />
        </div>
      ))}

      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <HeroContent />

          {/* Right Column - Hero Image */}
          <HeroImage />
        </div>
      </Container>

      {/* Scroll Indicator */}
      <ScrollIndicator onClick={scrollToNext} />

      {/* Custom CSS for Additional Animations */}
      <style jsx global>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-15px) translateX(10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .delay-200 { animation-delay: 200ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-800 { animation-delay: 800ms; }
        .delay-1000 { animation-delay: 1000ms; }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}