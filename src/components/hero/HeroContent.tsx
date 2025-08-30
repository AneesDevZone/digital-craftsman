'use client'

import React from 'react'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { TypingAnimation } from '@/components/hero/TypingAnimation'
import { SocialLinks } from '@/components/hero/SocailLinks'

export function HeroContent() {
  return (
    <div className="text-center lg:text-left space-y-8 relative z-10">
      
      {/* Available Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-blue-100 rounded-full text-blue-700 text-sm font-medium shadow-sm animate-fade-in">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span>Available for new projects</span>
      </div>

      {/* Main Headlines */}
      <div className="space-y-6 animate-fade-in-up delay-200">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
          We're{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Square Root Studio
          </span>
        </h1>

        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 h-16 flex items-center">
          We create{' '}
          <TypingAnimation 
            texts={[
              "stunning websites",
              "mobile apps", 
              "digital experiences",
              "innovative solutions"
            ]}
            className="ml-3 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          />
        </div>

        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
          Transforming ideas into exceptional digital experiences through 
          <span className="font-semibold text-gray-800"> creative design</span>, 
          <span className="font-semibold text-gray-800"> clean code</span>, and 
          <span className="font-semibold text-gray-800"> innovative thinking</span>.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-600">
        <button 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-blue-500/25"
        >
          <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
          <span>View My Work</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="group inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-200/50 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          <span>Let's Talk</span>
        </button>
      </div>

      {/* Social Links */}
      <div className="animate-fade-in-up delay-800">
        <SocialLinks />
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200/50 animate-fade-in-up delay-1000">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
          <div className="text-gray-600 text-sm">Projects</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
          <div className="text-gray-600 text-sm">Satisfaction</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-1">7+</div>
          <div className="text-gray-600 text-sm">Years Exp</div>
        </div>
      </div>
    </div>
  )
}