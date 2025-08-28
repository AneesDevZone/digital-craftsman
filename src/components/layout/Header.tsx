'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail, Zap } from 'lucide-react'
import { Container } from '@/components/ui/Container'

// ============================================
// NAVIGATION DATA
// ============================================
const navigation = [
  { name: 'HOME', href: '#hero' },
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'SERVICES', href: '#services' },
  { name: 'BLOG', href: '#blog' },
  { name: 'CONTACT', href: '#contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
]

// ============================================
// MAIN HEADER COMPONENT
// ============================================
export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Active section detection
      const sections = ['hero', 'about', 'projects', 'services', 'blog', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${isScrolled
            ? 'bg-gradient-to-r from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl shadow-2xl' 
            : 'bg-gradient-to-r from-slate-800/80 via-gray-800/80 to-slate-800/80 backdrop-blur-sm'
          }
        `}
        style={{
          background: isScrolled 
            ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(17, 24, 39, 0.95) 50%, rgba(15, 23, 42, 0.95) 100%)'
            : 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(31, 41, 55, 0.8) 50%, rgba(30, 41, 59, 0.8) 100%)',
          boxShadow: isScrolled 
            ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
            : '0 4px 16px rgba(0, 0, 0, 0.2)'
        }}
      >
        <Container>
          <div className="flex items-center justify-between h-18 lg:h-20">
            
            {/* Logo with Embossed Effect */}
            <button
              onClick={() => scrollToSection('#hero')}
              className="group relative text-xl lg:text-2xl font-black tracking-tight transition-all duration-300 hover:scale-105"
            >
              <span
                className="relative text-white transition-all duration-300 group-hover:text-blue-300"
                style={{
                  textShadow: `
                    0 1px 0 rgba(0, 0, 0, 0.8),
                    0 2px 0 rgba(0, 0, 0, 0.6),
                    0 3px 0 rgba(0, 0, 0, 0.4),
                    0 4px 8px rgba(0, 0, 0, 0.5),
                    0 0 20px rgba(59, 130, 246, ${isScrolled ? '0.3' : '0.1'})
                  `,
                  filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.4))'
                }}
              >
                SQUARE ROOT
                <Zap className="inline-block w-5 h-5 ml-2 animate-pulse" />
              </span>
            </button>

            {/* Desktop Navigation with Engraved Text Effect */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="group relative px-6 py-3 transition-all duration-300 hover:scale-105"
                  >
                    {/* Main Text - Engraved/Carved Effect */}
                    <span
                      className={`
                        relative z-10 text-sm font-bold tracking-widest transition-all duration-300
                        ${isActive 
                          ? 'text-blue-300' 
                          : 'text-gray-300 group-hover:text-blue-200'
                        }
                      `}
                      style={{
                        textShadow: isActive
                          ? `
                            inset 0 1px 2px rgba(0, 0, 0, 0.8),
                            0 1px 0 rgba(255, 255, 255, 0.1),
                            0 0 15px rgba(59, 130, 246, 0.6),
                            0 0 30px rgba(59, 130, 246, 0.3)
                          `
                          : `
                            inset 0 1px 2px rgba(0, 0, 0, 0.6),
                            0 1px 0 rgba(255, 255, 255, 0.05)
                          `,
                        transform: isActive ? 'translateY(1px)' : 'translateY(0)'
                      }}
                    >
                      {item.name}
                    </span>
                    
                    {/* Glowing Underline */}
                    <div 
                      className={`
                        absolute bottom-1 left-1/2 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent
                        transition-all duration-500 transform -translate-x-1/2
                        ${isActive 
                          ? 'w-4/5 opacity-100 shadow-lg' 
                          : 'w-0 opacity-0 group-hover:w-3/5 group-hover:opacity-80'
                        }
                      `}
                      style={{
                        boxShadow: '0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.4)'
                      }}
                    />
                    
                    {/* Subtle Background Glow */}
                    {isActive && (
                      <div 
                        className="absolute inset-0 rounded-lg opacity-20 animate-pulse"
                        style={{
                          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
                        }}
                      />
                    )}
                  </button>
                )
              })}
            </nav>

            {/* Social Icons with Neon Glow */}
            <div className="hidden lg:flex items-center space-x-2">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 text-gray-400 hover:text-blue-300 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.2))'
                  }}
                >
                  <social.icon 
                    className="w-5 h-5 transition-all duration-300 group-hover:rotate-12"
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))'
                    }}
                  />
                  
                  {/* Icon Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"
                    style={{
                      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                      transform: 'scale(1.5)'
                    }}
                  />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button with Cyber Effect */}
            <button
              type="button"
              className="lg:hidden relative p-3 text-white hover:text-blue-300 transition-all duration-300 group"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div 
                className="relative z-10"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))'
                }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
              
              {/* Button Cyber Glow */}
              <div 
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                  boxShadow: 'inset 0 0 20px rgba(59, 130, 246, 0.2)'
                }}
              />
            </button>
          </div>

          {/* Mobile Navigation with Dark Cyber Theme */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-600/50 mt-2">
              <div 
                className="px-4 py-6 space-y-3 rounded-b-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(17, 24, 39, 0.98) 100%)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: `
                    inset 0 1px 2px rgba(255, 255, 255, 0.1),
                    0 20px 40px rgba(0, 0, 0, 0.6),
                    0 0 20px rgba(59, 130, 246, 0.1)
                  `
                }}
              >
                {navigation.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '')
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`
                        block w-full text-left px-4 py-3 text-base font-bold tracking-widest
                        transition-all duration-300 rounded-xl group relative
                        ${isActive
                          ? 'text-blue-300' 
                          : 'text-gray-300 hover:text-blue-200'
                        }
                      `}
                      style={{
                        textShadow: isActive
                          ? `
                            inset 0 1px 2px rgba(0, 0, 0, 0.8),
                            0 1px 0 rgba(255, 255, 255, 0.1),
                            0 0 15px rgba(59, 130, 246, 0.6)
                          `
                          : `
                            inset 0 1px 2px rgba(0, 0, 0, 0.6),
                            0 1px 0 rgba(255, 255, 255, 0.05)
                          `,
                        background: isActive
                          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'
                          : 'transparent'
                      }}
                    >
                      {item.name}
                      
                      {/* Active indicator */}
                      {isActive && (
                        <div 
                          className="absolute left-0 top-1/2 w-1 h-6 bg-blue-400 rounded-r transform -translate-y-1/2"
                          style={{
                            boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)'
                          }}
                        />
                      )}
                    </button>
                  )
                })}
                
                {/* Mobile Social Links */}
                <div className="flex items-center justify-center space-x-6 pt-6 border-t border-gray-600/50">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-400 hover:text-blue-300 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                      style={{
                        filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))'
                      }}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Container>
      </header>

      {/* Custom Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
      `}</style>
    </>
  )
}