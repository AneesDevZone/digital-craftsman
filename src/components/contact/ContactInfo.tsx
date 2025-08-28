'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Calendar, Zap } from 'lucide-react'

const contactItems = [
  {
    icon: Mail,
    title: 'Email Me',
    value: 'hello@digitalcraftsman.dev',
    href: 'mailto:hello@digitalcraftsman.dev',
    description: 'Get a quick response',
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'from-blue-50 to-cyan-50'
  },
  {
    icon: Phone,
    title: 'Call Direct',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    description: 'Available Mon-Fri',
    gradient: 'from-emerald-500 to-teal-500',
    bg: 'from-emerald-50 to-teal-50'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'San Francisco, CA',
    href: '#',
    description: 'Work globally',
    gradient: 'from-purple-500 to-pink-500',
    bg: 'from-purple-50 to-pink-50'
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: '< 2 hours',
    href: '#',
    description: 'Rapid replies',
    gradient: 'from-orange-500 to-red-500',
    bg: 'from-orange-50 to-red-50'
  }
]

interface ContactItemProps {
  item: typeof contactItems[0]
  index: number
}

function ContactItem({ item, index }: ContactItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className="group animate-fade-in-up"
      style={{ animationDelay: `${800 + index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={item.href}
        className="block relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 transform-gpu"
      >
        {/* Animated background with gradient */}
        <div className={`
          absolute inset-0 bg-gradient-to-br ${item.bg} 
          transition-all duration-500 opacity-80
          ${isHovered ? 'opacity-100 scale-110' : ''}
        `} />
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`
            absolute -top-4 -right-4 w-8 h-8 rounded-full 
            bg-gradient-to-r ${item.gradient} opacity-20
            transition-all duration-700 transform
            ${isHovered ? 'scale-150 rotate-180' : 'scale-100 rotate-0'}
          `} />
          <div className={`
            absolute -bottom-2 -left-2 w-6 h-6 rotate-45
            bg-gradient-to-r ${item.gradient} opacity-15
            transition-all duration-500 transform
            ${isHovered ? 'scale-125 -rotate-45' : 'scale-100 rotate-45'}
          `} />
          <div className={`
            absolute top-1/2 left-1/2 w-12 h-12 rounded-full
            bg-gradient-to-r ${item.gradient} opacity-5 blur-sm
            transition-all duration-1000 transform -translate-x-1/2 -translate-y-1/2
            ${isHovered ? 'scale-200' : 'scale-100'}
          `} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-6">
          <div className="flex items-start gap-4">
            {/* Icon with enhanced animation */}
            <div className={`
              p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white 
              shadow-lg transition-all duration-500 transform
              ${isHovered ? 'scale-110 rotate-12 shadow-xl' : 'scale-100 rotate-0'}
            `}>
              <item.icon className="w-5 h-5" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className={`
                font-bold text-gray-900 mb-1 transition-all duration-300
                ${isHovered ? 'text-lg' : 'text-base'}
              `}>
                {item.title}
              </h4>
              <p className={`
                font-semibold bg-gradient-to-r ${item.gradient} 
                bg-clip-text text-transparent mb-2 transition-all duration-300
                ${isHovered ? 'text-base' : 'text-sm'}
              `}>
                {item.value}
              </p>
              <p className="text-xs text-gray-600 flex items-center gap-1">
                <Zap className="w-3 h-3" />
                {item.description}
              </p>
            </div>
            
            {/* Arrow indicator with animation */}
            <div className={`
              w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm 
              flex items-center justify-center transition-all duration-300 shadow-sm
              ${isHovered ? 'translate-x-2 bg-white shadow-lg' : 'translate-x-0'}
            `}>
              <div className={`
                w-3 h-3 border-t-2 border-r-2 border-gray-400 
                transition-all duration-300 transform rotate-45
                ${isHovered ? 'border-gray-700 scale-110' : ''}
              `} />
            </div>
          </div>
        </div>
        
        {/* Hover shimmer effect */}
        <div className={`
          absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
          transition-transform duration-1000 ${isHovered ? 'translate-x-full' : '-translate-x-full'}
          skew-x-12
        `} />
        
        {/* Border glow */}
        <div className={`
          absolute inset-0 rounded-2xl border-2 border-transparent 
          bg-gradient-to-r ${item.gradient} bg-clip-border
          transition-all duration-300 ${isHovered ? 'opacity-30' : 'opacity-0'}
        `} style={{ 
          mask: 'linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)',
          maskComposite: 'xor'
        }} />
      </a>
    </div>
  )
}

export function ContactInfo() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="text-center lg:text-left mb-8 animate-fade-in-up delay-700">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3 justify-center lg:justify-start">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Calendar className="w-4 h-4 text-white" />
          </div>
          Get in Touch
        </h3>
        <p className="text-gray-600">Choose your preferred way to connect</p>
      </div>
      
      {/* Contact Items */}
      <div className="space-y-3">
        {contactItems.map((item, index) => (
          <ContactItem key={index} item={item} index={index} />
        ))}
      </div>
      
      {/* Call-to-action */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl border border-blue-100/50 animate-fade-in-up delay-1200">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <p className="font-semibold text-gray-900 mb-2">Ready to start immediately?</p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group"
          >
            <span>Schedule a free consultation</span>
            <div className="w-4 h-4 border-t border-r border-current rotate-45 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  )
}