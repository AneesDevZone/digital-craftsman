'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { Sparkles } from 'lucide-react'
import { ABOUT_PRINCIPLES } from '@/data/about-principles'
import { PrincipleCard } from '@/components/about/PrincipleCard'
import { BottomStatement } from '@/components/about/BottomStatement'

// Custom hook to handle Intersection Observer logic
function useIntersectionObserver(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window.IntersectionObserver === 'undefined') {
        setIsVisible(true);
        return;
    }
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (ref.current) {
            observer.unobserve(ref.current); 
        }
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
}

// Helper function to get the staggering class
const getStaggerClass = (index) => {
  switch (index) {
    case 1:
      return 'lg:translate-y-12'; // Increased stagger for better look
    case 2:
      return 'lg:-translate-y-8';
    default:
      return 'lg:translate-y-0';
  }
};

export function AboutSectionContent() {
  const [activeCard, setActiveCard] = useState(null)
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); 
  }, []);
  
  const animationIsReady = isVisible && isMounted;

  return (
    <section 
      ref={sectionRef}
      id="about" 
      // Changed bg-white to bg-zinc-50 for a subtle off-white and added border for depth
      className="py-24 bg-zinc-50 relative overflow-hidden border-t border-b border-gray-100"
    >
      {/* Dynamic Abstract Background Elements */}
      {/* Replaced small dots with larger, subtle shapes for a modern, flowing look */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle, rotating blue glow */}
        <div className="absolute top-0 -left-1/4 w-80 h-80 bg-blue-300 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-spin-slow"></div>
        {/* Subtle, floating violet glow */}
        <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-violet-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-spin-slow-reverse"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-20">
            {/* Elevated Accent Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full mb-8 shadow-xl ring-2 ring-violet-100 transition-all duration-300 hover:ring-violet-300">
              <Sparkles className="w-5 h-5 text-violet-600 animate-pulse" />
              <span className="text-gray-800 font-semibold text-sm uppercase tracking-wider">Our Vision</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-extrabold text-zinc-900 mb-6 leading-tight">
              Digital
              <span className="block text-violet-500/90 font-black">
                Framework
              </span>
            </h2>
            
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto font-light">
              We craft exceptional digital experiences through innovation, precision, and <span className="font-semibold text-violet-600">unwavering commitment to excellence.</span>
            </p>
          </div>

          {/* Responsive Cards Layout */}
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

          {/* Simple Bottom Statement */}
          <BottomStatement isVisible={animationIsReady} />
        </div>
      </Container>
    </section>
  )
}