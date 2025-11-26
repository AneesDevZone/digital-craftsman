'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { Sparkles } from 'lucide-react'
import { ABOUT_PRINCIPLES } from '@/data/about-principles' 
import { PrincipleCard } from '@/components/about/PrincipleCard'
import { BottomStatement } from '@/components/about/BottomStatement'

// Helper function to get the staggering class
const getStaggerClass = (index: number) => {
  // Sets a vertical offset on large screens to create the staggered/floating look
  switch (index) {
    case 1:
      return 'lg:translate-y-8';
    case 2:
      return 'lg:-translate-y-4';
    default:
      return 'lg:translate-y-0';
  }
};

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  // State to track if the client component has mounted (FIX for hydration error)
  const [isMounted, setIsMounted] = useState(false);

  // Intersection Observer
  useEffect(() => {
    // 1. Set isMounted to true immediately on client mount/hydration.
    setIsMounted(true); 
    
    // 2. Set up Intersection Observer for visible animation trigger
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
         observer.unobserve(sectionRef.current);
      }
      observer.disconnect()
    }
  }, [])
  
  // The animation state only flips to true if the client is mounted AND the section is in view.
  const animationIsReady = isVisible && isMounted;

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse delay-2000"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Minimal Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-8 group hover:bg-slate-200 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-slate-600" />
              <span className="text-slate-700 font-medium text-sm">About Us</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Digital
              <span className="block text-slate-400">
                Framework
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We craft exceptional digital experiences through innovation, precision, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Responsive Cards Layout - Now using Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 pt-8">
            {ABOUT_PRINCIPLES.map((principle, index) => (
              <div 
                key={index} 
                className={`relative transition-transform duration-700 ${getStaggerClass(index)}`}
              >
                <PrincipleCard
                  principle={principle}
                  index={index}
                  isVisible={animationIsReady}
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                />
              </div>
            ))}
          </div>

          {/* Simple Bottom Statement - Now a reusable component */}
          <BottomStatement isVisible={animationIsReady} />
        </div>
      </Container>
    </section>
  )
}