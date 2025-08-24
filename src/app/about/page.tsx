'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { 
  Code2, 
  Zap, 
  Award, 
  Users,
  Sparkles,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'Full-Stack Expertise',
    description: 'Complete web and mobile solutions from concept to deployment',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50'
  },
  {
    icon: Zap,
    title: 'Rapid Development',
    description: 'Fast turnaround times without compromising on quality',
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50'
  },
  {
    icon: Award,
    title: '6+ Years Experience',
    description: 'Proven track record with 50+ successful projects delivered',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50'
  },
  {
    icon: Users,
    title: 'Client-Focused Approach',
    description: 'Building long-term partnerships through exceptional results',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Clean, scalable code with comprehensive testing and documentation',
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-50 to-purple-50'
  },
  {
    icon: Clock,
    title: 'Always Available',
    description: '24/7 support and communication throughout the project lifecycle',
    gradient: 'from-rose-500 to-pink-500',
    bgGradient: 'from-rose-50 to-pink-50'
  }
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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
      className="py-24 lg:py-32 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/5 to-orange-600/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-8 group hover:shadow-lg transition-all duration-300">
            <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-blue-800 font-semibold">Why Choose Digital Craftsman</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-slate-800 mb-8 leading-tight">
            Premium Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Solutions
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Delivering exceptional web and mobile applications with cutting-edge technology, 
            rapid development cycles, and unwavering commitment to excellence.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { number: '6+', label: 'Years Experience', icon: Clock },
            { number: '50+', label: 'Projects Completed', icon: Award },
            { number: '100%', label: 'Client Satisfaction', icon: Users },
            { number: '24/7', label: 'Support Available', icon: Shield },
          ].map((stat, index) => (
            <div 
              key={index}
              className="group text-center transform transition-all duration-500 hover:scale-110"
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="relative mb-4 mx-auto w-16 h-16 lg:w-20 lg:h-20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-white rounded-2xl m-1 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600" />
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative cursor-pointer transform transition-all duration-500 hover:scale-[1.02]"
              style={{ 
                animationDelay: `${(index + 2) * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              {/* Animated Border Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-all duration-300 blur-sm`}></div>
              
              {/* Card Content */}
              <div className={`relative bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg group-hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                {/* Floating Background Element */}
                <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-full opacity-10 group-hover:scale-150 group-hover:opacity-20 transition-all duration-500`}></div>
                
                <div className="relative z-10 flex items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl text-white shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center mt-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative inline-block group cursor-pointer">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            
            {/* Main Button */}
            <div className="relative bg-gradient-to-r from-slate-800 to-slate-700 text-white px-12 py-6 rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex items-center gap-4">
                <TrendingUp className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="text-left">
                  <div className="text-xl font-bold mb-1">Ready to Elevate Your Business?</div>
                  <div className="text-slate-300 text-sm">Transform your ideas into powerful digital solutions</div>
                </div>
              </div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}