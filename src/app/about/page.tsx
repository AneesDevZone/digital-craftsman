'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { 
  Zap, 
  Target, 
  Users,
  Sparkles
} from 'lucide-react'

const principles = [
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'Cutting-edge solutions for modern challenges',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'Every project delivers measurable business value',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    icon: Users,
    title: 'Client Focused',
    description: 'Building lasting partnerships through excellence',
    gradient: 'from-emerald-500 to-teal-600'
  }
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

    return () => observer.disconnect()
  }, [])

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
                Craftsman
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We craft exceptional digital experiences through innovation, 
              precision, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Floating Cards Layout */}
          <div className="relative h-96 lg:h-80">
            {principles.map((principle, index) => {
              const positions = [
                { top: '20%', left: '5%' }, // Top left
                { top: '10%', right: '5%' }, // Top right  
                { bottom: '20%', left: '50%', transform: 'translateX(-50%)' } // Bottom center
              ]

              return (
                <div
                  key={index}
                  className={`absolute w-80 group cursor-pointer transition-all duration-700 hover:scale-110 ${
                    activeCard === index ? 'z-20' : 'z-10'
                  }`}
                  style={{
                    ...positions[index],
                    opacity: isVisible ? 1 : 0,
                    transform: `${positions[index].transform || ''} ${isVisible ? 'translateY(0)' : 'translateY(50px)'}`,
                    transitionDelay: `${index * 300}ms`
                  }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Card Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${principle.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-slate-100 group-hover:shadow-2xl group-hover:border-slate-200 transition-all duration-500">
                    {/* Floating Icon */}
                    <div className={`absolute -top-6 left-8 p-4 bg-gradient-to-r ${principle.gradient} rounded-2xl shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                      <principle.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="pt-8">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300">
                        {principle.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {principle.description}
                      </p>
                    </div>

                    {/* Subtle Accent Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${principle.gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Simple Bottom Statement */}
          <div className={`text-center mt-20 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-6 px-8 py-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all duration-300 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                DC
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-slate-900">
                  Ready to transform your vision?
                </div>
                <div className="text-slate-600 text-sm">
                  Let's build something extraordinary together
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}