'use client'

import React from 'react'
import { Github, Linkedin, Mail, Globe } from 'lucide-react'

// Define a professional and DRY structure for link data
const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/AneesDevZone", 
    label: "GitHub", 
    hoverColor: "hover:text-[#181717]", // Darker color for GitHub
    description: "Codebase Access"
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/-anees-ahmad/", 
    label: "LinkedIn", 
    hoverColor: "hover:text-blue-600",
    description: "Connect via LinkedIn"
  },
  { 
    icon: Mail, 
    href: "mailto:anees.ahmad1107@gmail.com", 
    label: "Email", 
    hoverColor: "hover:text-red-500",
    description: "Send a message"
  },
  { 
    icon: Globe, 
    href: "#", 
    label: "Portfolio", 
    hoverColor: "hover:text-emerald-500",
    description: "Explore My Work"
  },
]

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4 p-4">
      {socialLinks.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          // 1. CRITICAL FIX: Explicitly set a base text color (text-gray-700)
          //    This forces the SVG icon (which uses currentColor) to be dark 
          //    consistently across Chrome, Edge, and other browsers.
          className={`
            group relative p-3 sm:p-4 bg-white/70 backdrop-blur-md 
            rounded-full transition-all duration-300 shadow-md 
            text-gray-700 focus:outline-none focus:ring-4 focus:ring-indigo-300
            ${link.hoverColor} hover:shadow-xl hover:scale-110 
            hover:-translate-y-1 transform
          `}
          // Use index for staggered animation delay
          style={{ animationDelay: `${100 * index}ms` }}
          // Conditional attributes for external links (professional and secure)
          target={link.href.startsWith('http') ? "_blank" : undefined}
          rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
          aria-label={link.label}
        >
          {/* Icon inherits color from parent <a> */}
          <link.icon className="w-5 h-5 transition duration-300" />
          
          {/* Tooltip (Enhanced contrast and position) */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                        px-3 py-1 bg-gray-800 text-white text-xs font-medium rounded-lg 
                        whitespace-nowrap opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 pointer-events-none z-10">
            {link.description}
            {/* Tooltip arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 
                          w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </a>
      ))}
    </div>
  )
}