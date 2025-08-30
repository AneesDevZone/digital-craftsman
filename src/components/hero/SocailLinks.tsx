'use client'

import React from 'react'
import { Github, Linkedin, Mail, Globe } from 'lucide-react'

const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/AneesDevZone", 
    label: "GitHub", 
    color: "hover:text-gray-900",
    description: "View my code"
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/-anees-ahmad/", 
    label: "LinkedIn", 
    color: "hover:text-blue-600",
    description: "Connect with me"
  },
  { 
    icon: Mail, 
    href: "mailto:anees.ahmad1107@gmail.com", 
    label: "Email", 
    color: "hover:text-red-500",
    description: "Send me a message"
  },
  { 
    icon: Globe, 
    href: "#", 
    label: "Portfolio", 
    color: "hover:text-emerald-500",
    description: "Explore my work"
  },
]

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          className={`
            group relative p-3 bg-white/80 backdrop-blur-sm border border-gray-200/50 
            rounded-xl shadow-sm transition-all duration-300 
            ${link.color} hover:shadow-lg hover:scale-110 hover:-translate-y-1
            animate-fade-in-up
          `}
          style={{ animationDelay: `${1200 + index * 100}ms` }}
          target={link.href.startsWith('http') ? "_blank" : undefined}
          rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
          aria-label={link.label}
        >
          <link.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          
          {/* Tooltip */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {link.description}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
          
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-xl bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </a>
      ))}
    </div>
  )
}