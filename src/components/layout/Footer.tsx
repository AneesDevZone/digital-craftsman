"use client"
import React, { useState } from 'react'
import { Github, Linkedin, Mail, Send, MapPin } from 'lucide-react'

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

type ContactInfo = {
  icon: React.ElementType;
  text: string;
  href?: string;
}

// ============================================
// CONFIGURATION
// ============================================
const footerNavigation: NavItem[] = [
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

const contactInfo: ContactInfo[] = [
  { 
    icon: Mail, 
    text: 'anees.ahmad1107@gmail.com', 
    href: 'mailto:anees.ahmad1107@gmail.com' 
  },
  { 
    icon: MapPin, 
    text: 'Enschede, Netherlands' 
  },
]

const legalLinks: NavItem[] = [
  { name: 'Privacy Policy', href: '#privacy' },
  { name: 'Terms of Service', href: '#terms' },
]

// ============================================
// REUSABLE COMPONENTS
// ============================================
const Container = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto px-6 lg:px-12 max-w-[1400px] ${className}`}>
    {children}
  </div>
)

const FooterLogo = () => (
  <div className="group flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-105">
          <span className="text-white font-bold text-xl">SQ</span>
        </div>
        <div className="absolute inset-0 bg-neutral-900 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 tracking-tight">Root Dev</h3>
        <p className="text-xs text-neutral-500 mt-0.5">Building Digital Excellence</p>
      </div>
    </div>
    <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
      Crafting innovative web solutions with modern technologies. Let's build something amazing together.
    </p>
  </div>
)

const FooterNavLink = ({ item }: { item: NavItem }) => {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''))
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <li>
      <button
        onClick={() => scrollToSection(item.href)}
        className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200 inline-block"
      >
        {item.name}
      </button>
    </li>
  )
}

const SocialIconFooter = ({ social }: { social: SocialLink }) => (
  <a
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    className="group w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-white bg-neutral-100 hover:bg-neutral-900 transition-all duration-300 rounded-lg"
    aria-label={social.label}
  >
    <social.icon className="w-5 h-5" strokeWidth={1.5} />
  </a>
)

const ContactItem = ({ info }: { info: ContactInfo }) => {
  const content = (
    <>
      <info.icon className="w-4 h-4 text-neutral-400 flex-shrink-0" strokeWidth={1.5} />
      <span className="text-sm text-neutral-600">{info.text}</span>
    </>
  )

  if (info.href) {
    return (
      <a
        href={info.href}
        className="flex items-center gap-3 hover:text-neutral-900 transition-colors duration-200 group"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="flex items-center gap-3">
      {content}
    </div>
  )
}

const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim() && email.includes('@')) {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    } else {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 2000)
    }
  }

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-neutral-900">Stay Updated</h4>
      <p className="text-sm text-neutral-600">
        Subscribe to our newsletter for the latest updates and insights.
      </p>
      <div className="space-y-2">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e)
              }
            }}
            placeholder="Enter your email"
            className={`w-full px-4 py-2.5 pr-12 text-sm bg-white border rounded-lg outline-none transition-all duration-200 ${
              status === 'error'
                ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                : 'border-neutral-200 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-100'
            }`}
            aria-label="Email address"
          />
          <button
            onClick={handleSubmit}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-all duration-200 hover:scale-105"
            aria-label="Subscribe"
          >
            <Send className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
        {status === 'success' && (
          <p className="text-xs text-green-600 animate-fadeIn">
            Thank you for subscribing!
          </p>
        )}
        {status === 'error' && (
          <p className="text-xs text-red-600 animate-fadeIn">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </div>
  )
}

const FooterSection = ({ 
  title, 
  children 
}: { 
  title: string; 
  children: React.ReactNode 
}) => (
  <div className="space-y-4">
    <h4 className="text-sm font-semibold text-neutral-900">{title}</h4>
    {children}
  </div>
)

// ============================================
// MAIN FOOTER COMPONENT
// ============================================
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <FooterLogo />
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <FooterSection title="Quick Links">
                <nav>
                  <ul className="space-y-3">
                    {footerNavigation.map((item) => (
                      <FooterNavLink key={item.name} item={item} />
                    ))}
                  </ul>
                </nav>
              </FooterSection>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <FooterSection title="Get in Touch">
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <ContactItem key={index} info={info} />
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="flex items-center gap-2 mt-6">
                  {socialLinks.map((social) => (
                    <SocialIconFooter key={social.label} social={social} />
                  ))}
                </div>
              </FooterSection>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-3">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-neutral-200 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <p className="text-sm text-neutral-500 text-center md:text-left">
              © {currentYear} Root Dev. All rights reserved.
            </p>

            {/* Legal Links */}
            <nav className="flex items-center gap-6">
              {legalLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    const element = document.getElementById(item.href.replace('#', ''))
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
            >
              Back to top
              <span className="inline-block transition-transform duration-200 group-hover:-translate-y-1">
                ↑
              </span>
            </button>
          </div>
        </div>
      </Container>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </footer>
  )
}