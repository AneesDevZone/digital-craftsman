'use client'

import React from 'react'
import { Container } from '@/components/ui/Container'
import { 
    ArrowRight, 
    Play, 
    Sparkles, 
    Code, 
    Smartphone, 
    Globe,
    Zap,
    Palette,
    Database,
    Layers,
    Rocket,
    Star,
    Cpu,
    Monitor,
    Wifi
  } from 'lucide-react'

  const floatingElements = [
    // Top row
    { icon: Code, delay: '0s', position: 'top-32 left-8', size: 'w-6 h-6', color: 'text-blue-400/50' },
    { icon: Rocket, delay: '0.3s', position: 'top-24 left-1/4', size: 'w-8 h-8', color: 'text-purple-400/40' },
    { icon: Smartphone, delay: '0.6s', position: 'top-48 right-32', size: 'w-7 h-7', color: 'text-green-400/45' },
    { icon: Star, delay: '0.9s', position: 'top-32 right-8', size: 'w-5 h-5', color: 'text-yellow-400/60' },
    
    // Middle row
    { icon: Globe, delay: '1.2s', position: 'top-1/2 left-12', size: 'w-6 h-6', color: 'text-cyan-400/50' },
    { icon: Zap, delay: '1.5s', position: 'top-1/2 right-20', size: 'w-7 h-7', color: 'text-orange-400/45' },
    { icon: Layers, delay: '1.8s', position: 'top-1/3 left-20', size: 'w-6 h-6', color: 'text-indigo-400/40' },
    { icon: Monitor, delay: '2.1s', position: 'top-1/3 right-12', size: 'w-8 h-8', color: 'text-slate-400/35' },
    
    // Bottom row
    { icon: Database, delay: '2.4s', position: 'bottom-56 left-16', size: 'w-6 h-6', color: 'text-emerald-400/50' },
    { icon: Palette, delay: '2.7s', position: 'bottom-32 left-8', size: 'w-7 h-7', color: 'text-pink-400/45' },
    { icon: Sparkles, delay: '3s', position: 'bottom-44 right-10', size: 'w-5 h-5', color: 'text-violet-400/55' },
    { icon: Cpu, delay: '3.3s', position: 'bottom-28 right-16', size: 'w-6 h-6', color: 'text-red-400/40' },
    { icon: Wifi, delay: '3.9s', position: 'bottom-48 left-1/3', size: 'w-6 h-6', color: 'text-teal-400/45' },
  ]

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating Icons - Enhanced */}
    {floatingElements.map((element, index) => (
    <div
        key={index}
        className={`absolute hidden lg:block ${element.position} ${element.color} animate-bounce hover:scale-125 transition-transform duration-300`}
        style={{ 
        animationDelay: element.delay, 
        animationDuration: '4s',
        animationIterationCount: 'infinite'
        }}
    >
        <element.icon className={element.size} />
    </div>
    ))}

      <Container size="xl">
        <div className="text-center space-y-8 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Innovative Digital Solutions</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 animate-fade-in-up delay-200">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              We Create{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Innovative
              </span>
              <br />
              Digital Experiences
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into powerful web and mobile solutions that drive business growth and deliver exceptional user experiences
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in-up delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600 text-sm md:text-base">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">98%</div>
              <div className="text-gray-600 text-sm md:text-base">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">3+</div>
              <div className="text-gray-600 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-600 text-sm md:text-base">Support</div>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-600">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-blue-500/25"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Start Your Project</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 animate-fade-in-up delay-800">
            <p className="text-gray-500 text-sm mb-6">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {/* Placeholder for company logos */}
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center"
                >
                  <div className="w-16 h-6 bg-gray-300 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-ping" />
        </div>
      </div>
    </section>
  )
}