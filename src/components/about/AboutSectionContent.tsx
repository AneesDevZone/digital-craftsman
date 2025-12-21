'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { Terminal, Sparkles, ArrowRight } from 'lucide-react'
import { ABOUT_PRINCIPLES } from '@/data/about-principles'
import { PrincipleCard } from '@/components/about/PrincipleCard'
import { BottomStatement } from './BottomStatement'

/* ============================================================================
   HELPERS
   ============================================================================ */
const getStaggerClass = (index: number): string => {
  switch (index) {
    case 1: return 'lg:translate-y-12' 
    case 2: return 'lg:translate-y-6'
    default: return 'lg:translate-y-0'
  }
}

function useIntersectionObserver(options: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(element)
      }
    }, options)
    observer.observe(element)
    return () => observer.disconnect()
  }, [options])
  return [ref, isVisible] as const
}

/* ============================================================================
   MAIN COMPONENT
   ============================================================================ */
export default function AboutSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])
  const animationIsReady = isVisible && isMounted

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative min-h-screen flex items-center overflow-hidden border-t py-20"
      style={{ backgroundColor: 'var(--color-bg-primary)', borderColor: 'var(--color-border)' }}
    >
      {/* Background Tech Details */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
           style={{ backgroundImage: `radial-gradient(var(--color-text-primary) 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px]"
             style={{ background: 'var(--color-brand-primary)' }} />
      </div>

      <Container size="xl" className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 rounded-md border border-[var(--color-border)] bg-[var(--color-bg-surface)] flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-[var(--color-brand-accent)]" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-60">
                  Core.v1.0 // Identity
                </span>
              </div>
              <div className="h-px w-16 bg-[var(--color-border)]" />
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black tracking-tighter mb-4 text-[var(--color-text-primary)] leading-tight">
              Digital <span style={{ background: 'var(--gradient-brand-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Engineering.</span>
            </h2>
            
            <p className="text-base lg:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
              We replace standard layouts with <span className="text-[var(--color-text-primary)]">mathematical precision.</span> High-performance assets engineered for scale.
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {ABOUT_PRINCIPLES.map((principle, index) => (
              <div 
                key={index} 
                className={`relative transition-all duration-1000 ${animationIsReady ? 'opacity-100' : 'opacity-0 translate-y-10'} ${getStaggerClass(index)}`}
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

          {/* Bottom Statement Anchor */}
          <div className="max-w-3xl border-l-2 border-[var(--color-brand-primary)] pl-6 lg:pl-10">
            <BottomStatement isVisible={animationIsReady} />
          </div>
        </div>
      </Container>
    </section>
  )
}