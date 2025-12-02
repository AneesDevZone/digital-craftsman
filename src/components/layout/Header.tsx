"use client"
import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

// ============================================
// TYPES
// ============================================
type NavItem = {
  name: string;
  href: string;
}

type SocialLink = {
  icon: React.ElementType;
  href: string;
  label: string;
}

// ============================================
// CONFIGURATION
// ============================================
const navigation: NavItem[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks: SocialLink[] = [
  { icon: Github, href: 'https://github.com/AneesDevZone', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/-anees-ahmad/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:anees.ahmad1107@gmail.com', label: 'Email' },
]

// ============================================
// REUSABLE COMPONENTS
// ============================================
const Container = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto px-6 lg:px-12 max-w-[1400px] ${className}`}>
    {children}
  </div>
)

const Logo = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="group relative flex items-center gap-3 transition-all duration-300"
  >
    <div className="relative">
      <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:rounded-xl group-hover:scale-105">
        <span className="text-white font-bold text-lg">SQ</span>
      </div>
      <div className="absolute inset-0 bg-neutral-900 rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
    </div>
    <span className="text-xl font-semibold text-neutral-900 tracking-tight hidden sm:block">
      Root Dev
    </span>
  </button>
)

const NavLink = ({ 
  item, 
  isActive, 
  onClick 
}: { 
  item: NavItem; 
  isActive: boolean; 
  onClick: () => void 
}) => (
  <button
    onClick={onClick}
    className="group relative px-4 py-2 transition-all duration-200"
  >
    <span className={`text-[15px] font-medium transition-colors duration-200 ${
      isActive 
        ? 'text-neutral-900' 
        : 'text-neutral-500 group-hover:text-neutral-900'
    }`}>
      {item.name}
    </span>
    
    <div className={`absolute bottom-0 left-4 right-4 h-[2px] bg-neutral-900 transition-all duration-300 ${
      isActive 
        ? 'opacity-100 scale-x-100' 
        : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
    }`} />
  </button>
)

const SocialIcon = ({ social }: { social: SocialLink }) => (
  <a
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative w-9 h-9 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-all duration-200 rounded-lg hover:bg-neutral-100"
    aria-label={social.label}
  >
    <social.icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
  </a>
)

const MobileNavItem = ({ 
  item, 
  isActive, 
  onClick 
}: { 
  item: NavItem; 
  isActive: boolean; 
  onClick: () => void 
}) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-6 py-4 text-base font-medium transition-all duration-200 border-l-2 ${
      isActive 
        ? 'text-neutral-900 border-neutral-900 bg-neutral-50' 
        : 'text-neutral-500 border-transparent hover:text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50'
    }`}
  >
    {item.name}
  </button>
)

const CTAButton = () => (
  <button className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-all duration-200 hover:shadow-lg hover:shadow-neutral-900/20 hover:-translate-y-0.5">
    Let's Talk
    <span className="text-lg leading-none">→</span>
  </button>
)

// ============================================
// CUSTOM HOOKS
// ============================================
const useScrollAndSection = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const sections = navigation.map(item => item.href.replace('#', ''))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom >= 120
        }
        return false
      })
      
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { isScrolled, activeSection }
}

// ============================================
// MAIN HEADER COMPONENT
// ============================================
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { isScrolled, activeSection } = useScrollAndSection()

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''))
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsOpen(false)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-neutral-200/60' 
          : 'bg-white/60 backdrop-blur-md border-b border-transparent'
      }`}>
        <Container>
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            <Logo onClick={() => scrollToSection('#hero')} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  item={item}
                  isActive={activeSection === item.href.replace('#', '')}
                  onClick={() => scrollToSection(item.href)}
                />
              ))}
            </nav>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-1 mr-2">
                {socialLinks.map((social) => (
                  <SocialIcon key={social.label} social={social} />
                ))}
              </div>
              <div className="w-px h-6 bg-neutral-200" />
              <CTAButton />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-neutral-700 hover:text-neutral-900 transition-colors duration-200 rounded-lg hover:bg-neutral-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </Container>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-xl shadow-lg animate-fadeIn">
            <Container className="py-4">
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <MobileNavItem
                    key={item.name}
                    item={item}
                    isActive={activeSection === item.href.replace('#', '')}
                    onClick={() => scrollToSection(item.href)}
                  />
                ))}
              </nav>
              
              <div className="flex items-center justify-center gap-2 pt-6 mt-6 border-t border-neutral-200">
                {socialLinks.map((social) => (
                  <SocialIcon key={social.label} social={social} />
                ))}
              </div>

              <div className="mt-6 px-6">
                <button className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-all duration-200">
                  Let's Talk
                  <span className="text-lg leading-none">→</span>
                </button>
              </div>
            </Container>
          </div>
        )}
      </header>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #fafafa;
        }
      `}</style>
    </>
  )
}