"use client"

import React, { useState, useEffect } from "react"
import { Menu, X, ArrowRight, Github, Linkedin } from "lucide-react"

/* ============================================
   TYPES & CONFIG
============================================ */
type NavItem = { name: string; href: string }

const NAVIGATION: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

/* ============================================
   SUB-COMPONENTS
============================================ */

/**
 * Clean SQ Logo
 */
const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div 
      className="w-9 h-9 flex items-center justify-center rounded-md font-sans text-sm font-black tracking-tighter transition-transform duration-300 group-hover:scale-105"
      style={{ 
        background: "var(--gradient-brand-primary)", 
        color: "var(--color-text-inverse)" 
      }}
    >
      SQ
    </div>
    {/* Hidden on mobile, visible on desktop */}
    <span className="hidden sm:block text-sm font-bold tracking-tight uppercase" style={{ color: "var(--color-text-primary)" }}>
      Square Root Dev
    </span>
  </div>
)

/**
 * Refined Nav Item
 */
const NavLink = ({ item, active }: { item: NavItem; active: boolean }) => (
  <a
    href={item.href}
    className="relative px-4 py-2 text-[13px] font-semibold transition-colors duration-200 uppercase tracking-wide hover:text-[var(--color-brand-primary)]"
    style={{ color: active ? "var(--color-brand-primary)" : "var(--color-text-secondary)" }}
  >
    {item.name}
    {active && (
      <span 
        className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
        style={{ background: "var(--color-brand-primary)" }}
      />
    )}
  </a>
)

/* ============================================
   MAIN HEADER COMPONENT
============================================ */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const sections = NAVIGATION.map(n => n.href.substring(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section)
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
      style={{
        paddingTop: isScrolled ? "10px" : "20px",
        paddingBottom: isScrolled ? "10px" : "20px",
        background: isScrolled ? "var(--color-bg-surface)" : "transparent",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        boxShadow: isScrolled ? "var(--shadow-sm)" : "none"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <Logo />

        {/* Desktop Navigation Group */}
        <div className="hidden lg:flex items-center gap-1 bg-[var(--color-bg-primary)] p-1 rounded-full border border-[var(--color-border)]">
          {NAVIGATION.map((item) => (
            <NavLink 
              key={item.name} 
              item={item} 
              active={activeSection === item.href.substring(1)} 
            />
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3 pr-3 border-r border-[var(--color-border)] text-[var(--color-text-secondary)]">
             <a href="https://github.com" className="hover:text-[var(--color-brand-primary)] transition-colors">
               <Github size={18} />
             </a>
             <a href="https://linkedin.com" className="hover:text-[var(--color-brand-primary)] transition-colors">
               <Linkedin size={18} />
             </a>
          </div>

          <button
            className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-md text-[11px] md:text-[12px] font-bold uppercase tracking-widest transition-transform hover:scale-105 active:scale-95"
            style={{ 
              background: "var(--color-text-primary)", 
              color: "var(--color-text-inverse)" 
            }}
          >
            Connect
            <ArrowRight size={14} className="hidden xs:block" />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: "var(--color-text-primary)" }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div 
          className="absolute top-full left-0 right-0 p-6 flex flex-col gap-1 lg:hidden border-b border-[var(--color-border)] animate-in slide-in-from-top-2"
          style={{ background: "var(--color-bg-surface)" }}
        >
          {NAVIGATION.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-bold uppercase tracking-wide py-3 border-b border-[var(--color-bg-primary)] last:border-0"
              style={{ color: activeSection === item.href.substring(1) ? "var(--color-brand-primary)" : "var(--color-text-primary)" }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}