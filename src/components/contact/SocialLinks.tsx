'use client'

import React, { useState } from 'react'
import { Github, Linkedin, Twitter, Instagram, Globe, Mail } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/yourusername',
    color: 'hover:text-gray-900',
    bg: 'hover:bg-gray-100'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/yourusername',
    color: 'hover:text-blue-600',
    bg: 'hover:bg-blue-50'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/yourusername',
    color: 'hover:text-sky-500',
    bg: 'hover:bg-sky-50'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/yourusername',
    color: 'hover:text-pink-600',
    bg: 'hover:bg-pink-50'
  },
  {
    name: 'Portfolio',
    icon: Globe,
    href: '#',
    color: 'hover:text-purple-600',
    bg: 'hover:bg-purple-50'
  }
]

interface SocialLinkProps {
  link: typeof socialLinks[0]
  index: number
}

function SocialLink({ link, index }: SocialLinkProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className="animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.name}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          group relative w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm 
          border border-gray-200/50 shadow-sm flex items-center justify-center
          transition-all duration-300 transform-gpu
          ${link.color} ${link.bg}
          hover:shadow-lg hover:scale-110 hover:-translate-y-1
          ${isHovered ? 'border-gray-300/70' : ''}
        `}
      >
        {/* Icon */}
        <link.icon className={`
          w-5 h-5 text-gray-600 transition-all duration-300
          ${isHovered ? 'scale-110' : 'scale-100'}
        `} />
        
        {/* Animated background circle */}
        <div className={`
          absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-transparent
          transition-all duration-500 opacity-0 group-hover:opacity-100
          ${isHovered ? 'scale-110' : 'scale-100'}
        `} />
        
        {/* Hover tooltip */}
        <div className={`
          absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 
          bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap
          transition-all duration-300 pointer-events-none
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        `}>
          {link.name}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
        </div>
        
        {/* Pulse effect */}
        <div className={`
          absolute inset-0 rounded-xl border-2 border-current opacity-20
          transition-all duration-300 ${isHovered ? 'scale-150 opacity-0' : 'scale-100'}
        `} />
      </a>
    </div>
  )
}

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-3 animate-fade-in">
      <div className="flex items-center gap-2 px-3 py-2 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-full shadow-sm">
        <Mail className="w-4 h-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Follow me</span>
      </div>
      
      <div className="flex items-center gap-2">
        {socialLinks.map((link, index) => (
          <SocialLink key={link.name} link={link} index={index} />
        ))}
      </div>
    </div>
  )
}