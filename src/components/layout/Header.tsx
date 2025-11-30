"use client"
import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail, Zap } from 'lucide-react'

// ============================================
// DEPENDENCY: Container (Defined inline for single-file structure)
// ============================================
type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: 'xl' | 'lg';
};

const Container = ({ children, className = '', size = 'xl' }: ContainerProps) => {
  const maxWidthClass = size === 'xl' ? 'max-w-7xl' : 'max-w-4xl';
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClass} ${className}`}>
      {children}
    </div>
  );
};

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
  { icon: Github, href: 'https://github.com/AneesDevZone', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/-anees-ahmad/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:anees.ahmad1107@gmail.com', label: 'Email' },
]

// ============================================
// MAIN HEADER COMPONENT (UPDATED)
// ============================================
export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Scroll and Active Section Detection Logic (Unchanged)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const sections = ['hero', 'about', 'projects', 'services', 'blog', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Check if the section is visible in the viewport with a slight offset
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
          fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
          ${isScrolled
            // SCROLLED: Defined white background with strong blur and crisp shadow
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-gray-100/70' 
            // UNSCROLLED: More transparent white with light blur and subtle border
            : 'bg-white/70 backdrop-blur-md border-transparent'
          }
        `}
      >
        <Container>
          <div className="flex items-center justify-between h-18 lg:h-20">
            
            {/* Logo - Now Dark Text on Light Background */}
            <button
              onClick={() => scrollToSection('#hero')}
              className="group relative text-xl lg:text-2xl font-black tracking-tight transition-all duration-300 hover:scale-[1.02]"
            >
              <span
                className="relative text-gray-900 transition-all duration-300 group-hover:text-blue-600"
                style={{
                  // Removed complex text-shadow for a clean look
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                }}
              >
                SqRoot Dev
                <Zap className="inline-block w-5 h-5 ml-2 text-blue-500 animate-pulse" />
              </span>
            </button>

            {/* Desktop Navigation - Clean, Modern Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="group relative px-4 py-2 transition-all duration-300 rounded-lg hover:bg-gray-50"
                  >
                    {/* Main Text - Clean Text with Color */}
                    <span
                      className={`
                        relative z-10 text-sm font-semibold tracking-wide transition-all duration-200
                        ${isActive 
                          ? 'text-blue-600' 
                          : 'text-gray-600 group-hover:text-gray-800'
                        }
                      `}
                    >
                      {item.name}
                    </span>
                    
                    {/* Active/Hover Indicator - Solid, clean underline */}
                    <div 
                      className={`
                        absolute bottom-0 left-1/2 h-0.5 bg-blue-500 rounded-full
                        transition-all duration-300 transform -translate-x-1/2
                        ${isActive 
                          ? 'w-full opacity-100' 
                          : 'w-0 opacity-0 group-hover:w-2/3 group-hover:opacity-100'
                        }
                      `}
                    />
                  </button>
                )
              })}
            </nav>

            {/* Social Icons - Clean and Colorful */}
            <div className="hidden lg:flex items-center space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 text-gray-500 hover:text-blue-600 transition-all duration-300 hover:scale-110 rounded-full hover:bg-gray-100"
                  aria-label={social.label}
                >
                  <social.icon 
                    className="w-5 h-5 transition-all duration-300"
                  />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden relative p-3 text-gray-800 hover:text-blue-600 transition-all duration-300 group rounded-lg hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative z-10">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>

          {/* Mobile Navigation - Now Light Glassmorphism */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-200/50">
              <div 
                className="px-4 py-4 space-y-2"
                style={{
                  // Light Glassmorphism for mobile menu
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
                }}
              >
                {navigation.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '')
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`
                        block w-full text-left px-4 py-3 text-base font-semibold tracking-wide
                        transition-all duration-200 rounded-lg relative
                        ${isActive
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-700 hover:bg-gray-100'
                        }
                      `}
                    >
                      {item.name}
                      
                      {/* Active indicator */}
                      {isActive && (
                        <div 
                          className="absolute right-0 top-1/2 w-1 h-6 bg-blue-500 rounded-l transform -translate-y-1/2"
                        />
                      )}
                    </button>
                  )
                })}
                
                {/* Mobile Social Links */}
                <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-200">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-500 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
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

      {/* Custom Styles (Keep these in your main application CSS/style block) */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
      `}</style>
    </>
  )
}