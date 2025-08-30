// =============================================================================
// SERVICES SECTION COMPONENT
// =============================================================================
// A comprehensive services showcase with interactive cards and detailed views
// Features: Responsive grid layout, smooth animations, service details panel
// =============================================================================

'use client'

import React, { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Globe, 
  Zap, 
  Shield,
  ArrowRight,
  X
} from 'lucide-react'

// =============================================================================
// TYPES & INTERFACES
// =============================================================================

interface Service {
  id: string
  title: string
  description: string
  shortFeatures: string[] // New: Short features for card display
  icon: React.ComponentType<any>
  gradient: string
  hoverGradient: string
  theme: {
    primary: string
    secondary: string
    accent: string
    background: string
  }
  details: {
    overview: string
    features: string[]
    technologies: string[]
    process: string[]
  }
}

// =============================================================================
// SERVICES DATA
// =============================================================================

const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    shortFeatures: ['Responsive Design', 'SEO Optimized', 'Fast Performance'],
    icon: Code2,
    gradient: 'from-blue-500 to-cyan-500',
    hoverGradient: 'from-blue-600 to-cyan-600',
    theme: {
      primary: 'from-blue-600 to-cyan-600',
      secondary: 'from-blue-50 to-cyan-50',
      accent: 'text-blue-600',
      background: 'bg-gradient-to-br from-blue-50/50 to-cyan-50/50'
    },
    details: {
      overview: 'We create powerful, scalable web applications that deliver exceptional user experiences and drive business growth.',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'SEO Friendly',
        'Cross-browser Compatibility',
        'Modern UI/UX'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      process: [
        'Requirements Analysis',
        'Design & Prototyping',
        'Development & Testing',
        'Deployment & Optimization'
      ]
    }
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that create meaningful connections between users and products.',
    shortFeatures: ['User Research', 'Prototyping', 'Design Systems'],
    icon: Palette,
    gradient: 'from-purple-500 to-pink-500',
    hoverGradient: 'from-purple-600 to-pink-600',
    theme: {
      primary: 'from-purple-600 to-pink-600',
      secondary: 'from-purple-50 to-pink-50',
      accent: 'text-purple-600',
      background: 'bg-gradient-to-br from-purple-50/50 to-pink-50/50'
    },
    details: {
      overview: 'Our design process focuses on creating user-centered experiences that are both beautiful and functional.',
      features: [
        'User Research',
        'Wireframing',
        'Visual Design',
        'Prototyping',
        'Design Systems'
      ],
      technologies: ['Figma', 'Adobe Creative Suite', 'Principle', 'InVision', 'Sketch'],
      process: [
        'Discovery & Research',
        'Ideation & Concepts',
        'Design & Iterate',
        'Testing & Refinement'
      ]
    }
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    shortFeatures: ['iOS & Android', 'Cross-platform', 'App Store Ready'],
    icon: Smartphone,
    gradient: 'from-emerald-500 to-teal-500',
    hoverGradient: 'from-emerald-600 to-teal-600',
    theme: {
      primary: 'from-emerald-600 to-teal-600',
      secondary: 'from-emerald-50 to-teal-50',
      accent: 'text-emerald-600',
      background: 'bg-gradient-to-br from-emerald-50/50 to-teal-50/50'
    },
    details: {
      overview: 'We develop high-performance mobile applications that provide seamless experiences across all devices.',
      features: [
        'Native Performance',
        'Offline Capabilities',
        'Push Notifications',
        'App Store Optimization',
        'Analytics Integration'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      process: [
        'Platform Strategy',
        'Architecture Planning',
        'Development & Testing',
        'Store Submission'
      ]
    }
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Complete online stores with payment integration and inventory management systems.',
    shortFeatures: ['Payment Gateway', 'Inventory System', 'Analytics'],
    icon: Globe,
    gradient: 'from-orange-500 to-red-500',
    hoverGradient: 'from-orange-600 to-red-600',
    theme: {
      primary: 'from-orange-600 to-red-600',
      secondary: 'from-orange-50 to-red-50',
      accent: 'text-orange-600',
      background: 'bg-gradient-to-br from-orange-50/50 to-red-50/50'
    },
    details: {
      overview: 'Build your online presence with our comprehensive e-commerce solutions that drive sales and growth.',
      features: [
        'Shopping Cart',
        'Payment Processing',
        'Inventory Management',
        'Order Tracking',
        'Analytics Dashboard'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Mailchimp'],
      process: [
        'Store Planning',
        'Design & Development',
        'Payment Setup',
        'Launch & Marketing'
      ]
    }
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    description: 'Speed up your applications with advanced optimization techniques and monitoring.',
    shortFeatures: ['Speed Boost', 'Core Web Vitals', 'Monitoring'],
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-500',
    hoverGradient: 'from-yellow-600 to-orange-600',
    theme: {
      primary: 'from-yellow-600 to-orange-600',
      secondary: 'from-yellow-50 to-orange-50',
      accent: 'text-yellow-600',
      background: 'bg-gradient-to-br from-yellow-50/50 to-orange-50/50'
    },
    details: {
      overview: 'Maximize your application\'s performance with our comprehensive optimization strategies and monitoring solutions.',
      features: [
        'Speed Optimization',
        'Code Splitting',
        'Image Optimization',
        'Caching Strategies',
        'Performance Monitoring'
      ],
      technologies: ['Lighthouse', 'WebPageTest', 'GTMetrix', 'New Relic', 'DataDog'],
      process: [
        'Performance Audit',
        'Optimization Strategy',
        'Implementation',
        'Monitoring & Maintenance'
      ]
    }
  },
  {
    id: 'security',
    title: 'Security & Maintenance',
    description: 'Comprehensive security audits and ongoing maintenance to keep your applications safe.',
    shortFeatures: ['Security Audit', 'Regular Updates', '24/7 Support'],
    icon: Shield,
    gradient: 'from-indigo-500 to-purple-500',
    hoverGradient: 'from-indigo-600 to-purple-600',
    theme: {
      primary: 'from-indigo-600 to-purple-600',
      secondary: 'from-indigo-50 to-purple-50',
      accent: 'text-indigo-600',
      background: 'bg-gradient-to-br from-indigo-50/50 to-purple-50/50'
    },
    details: {
      overview: 'Protect your digital assets with our comprehensive security solutions and proactive maintenance services.',
      features: [
        'Security Audits',
        'Vulnerability Assessment',
        'Regular Updates',
        'Backup Solutions',
        '24/7 Monitoring'
      ],
      technologies: ['SSL/TLS', 'OWASP', 'Cloudflare', 'AWS Security', 'Docker'],
      process: [
        'Security Assessment',
        'Implementation Plan',
        'Ongoing Monitoring',
        'Regular Maintenance'
      ]
    }
  }
]

// =============================================================================
// MAIN SERVICES SECTION COMPONENT
// =============================================================================

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // Handle service selection with smooth transition
  const handleServiceClick = (service: Service) => {
    if (selectedService?.id === service.id) {
      setSelectedService(null)
      return
    }

    setIsAnimating(true)
    setTimeout(() => {
      setSelectedService(service)
      setIsAnimating(false)
    }, 150)
  }

  const closeDetails = () => {
    setSelectedService(null)
  }

  return (
    <section className="py-24 relative overflow-hidden" id="services">
      {/* =================================================================== */}
      {/* BACKGROUND ELEMENTS */}
      {/* =================================================================== */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-emerald-100/20 to-cyan-100/20 rounded-full blur-3xl" />

      <Container>
        {/* =============================================================== */}
        {/* SECTION HEADER */}
        {/* =============================================================== */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-gray-300/60 rounded-full text-gray-700 text-sm font-medium mb-6 shadow-sm">
            <Zap className="w-4 h-4" />
            <span>What We Offer</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            We provide comprehensive digital solutions to transform your ideas into 
            exceptional experiences that drive growth and success.
          </p>
        </div>

        {/* =============================================================== */}
        {/* RESPONSIVE LAYOUT SYSTEM */}
        {/* =============================================================== */}
        <div className="relative">
          {/* ========================================================= */}
          {/* DESKTOP LAYOUT (lg+) */}
          {/* ========================================================= */}
          <div className="hidden lg:block">
            <div className={`grid transition-all duration-500 ease-in-out ${
              selectedService 
                ? 'grid-cols-12 gap-8' 
                : 'grid-cols-3 gap-8'
            }`}>
              
              {/* Services Grid */}
              <div className={`transition-all duration-500 ease-in-out ${
                selectedService ? 'col-span-6' : 'col-span-12'
              }`}>
                <div className={`grid gap-6 ${
                  selectedService 
                    ? 'grid-cols-2' 
                    : 'grid-cols-3'
                }`}>
                  {services.map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      isSelected={selectedService?.id === service.id}
                      isCompact={!!selectedService}
                      onClick={() => handleServiceClick(service)}
                      delay={index * 100}
                    />
                  ))}
                </div>
              </div>

              {/* Service Details Panel */}
              {selectedService && (
                <div className={`col-span-6 transition-all duration-500 ease-out ${
                  isAnimating 
                    ? 'opacity-0 translate-x-8' 
                    : 'opacity-100 translate-x-0'
                }`}>
                  <ServiceDetails 
                    service={selectedService} 
                    onClose={closeDetails}
                    isAnimating={isAnimating}
                  />
                </div>
              )}
            </div>
          </div>

          {/* ========================================================= */}
          {/* TABLET LAYOUT (md to lg) */}
          {/* ========================================================= */}
          <div className="hidden md:block lg:hidden">
            <div className={`transition-all duration-500 ease-in-out ${
              selectedService ? 'grid grid-cols-12 gap-6' : ''
            }`}>
              
              <div className={selectedService ? 'col-span-4' : ''}>
                <div className={`grid gap-6 ${
                  selectedService ? 'grid-cols-1' : 'grid-cols-2'
                }`}>
                  {services.map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      isSelected={selectedService?.id === service.id}
                      isCompact={!!selectedService}
                      onClick={() => handleServiceClick(service)}
                      delay={index * 100}
                    />
                  ))}
                </div>
              </div>

              {selectedService && (
                <div className={`col-span-8 transition-all duration-500 ease-out ${
                  isAnimating 
                    ? 'opacity-0 translate-x-8' 
                    : 'opacity-100 translate-x-0'
                }`}>
                  <ServiceDetails 
                    service={selectedService} 
                    onClose={closeDetails}
                    isAnimating={isAnimating}
                  />
                </div>
              )}
            </div>
          </div>

          {/* ========================================================= */}
          {/* MOBILE LAYOUT (sm and below) */}
          {/* ========================================================= */}
          <div className="md:hidden">
            {!selectedService ? (
              <div className="grid grid-cols-1 gap-6">
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    isSelected={false}
                    isCompact={false}
                    onClick={() => handleServiceClick(service)}
                    delay={index * 100}
                  />
                ))}
              </div>
            ) : (
              <div className={`transition-all duration-500 ease-out ${
                isAnimating 
                  ? 'opacity-0 translate-y-8' 
                  : 'opacity-100 translate-y-0'
              }`}>
                <ServiceDetails 
                  service={selectedService} 
                  onClose={closeDetails}
                  isAnimating={isAnimating}
                />
              </div>
            )}
          </div>
        </div>
        {/* Mobile Layout */}
          <div className="md:hidden">
            {!selectedService ? (
              <div className="grid grid-cols-1 gap-6">
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    isSelected={false}
                    isCompact={false}
                    onClick={() => handleServiceClick(service)}
                    delay={index * 100}
                  />
                ))}
              </div>
            ) : (
              <div className={`transition-all duration-500 ease-out ${
                isAnimating 
                  ? 'opacity-0 translate-y-8' 
                  : 'opacity-100 translate-y-0'
              }`}>
                <ServiceDetails 
                  service={selectedService} 
                  onClose={closeDetails}
                  isAnimating={isAnimating}
                />
              </div>
            )}
          </div>
      </Container>
    </section>
  )
}

// =============================================================================
// SERVICE CARD COMPONENT
// =============================================================================
// Individual service card with icon, content, and interactive states
// Features: Staggered animations, hover effects, responsive design
// =============================================================================

interface ServiceCardProps {
  service: Service
  isSelected: boolean
  isCompact: boolean
  onClick: () => void
  delay: number
}

function ServiceCard({ service, isSelected, isCompact, onClick, delay }: ServiceCardProps) {
  const Icon = service.icon
  const [isVisible, setIsVisible] = useState(false)

  // Staggered animation trigger on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`group relative cursor-pointer transition-all duration-500 ease-out hover:scale-105 ${
        isCompact ? 'aspect-square' : 'aspect-[4/3]'
      } ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? '0ms' : `${delay}ms` }}
      onClick={onClick}
    >
      {/* ============================================================= */}
      {/* CARD BACKGROUND & STRUCTURE */}
      {/* ============================================================= */}
      <div className={`
        relative h-full w-full rounded-3xl transition-all duration-500
        ${isSelected 
          ? `bg-gradient-to-br ${service.theme.secondary} border-2 border-current ${service.theme.accent} shadow-xl` 
          : 'bg-white/80 backdrop-blur-sm border border-gray-200/60 hover:bg-white/90 hover:border-gray-300/60 hover:shadow-xl'
        }
      `}>
        
        {/* ======================================================= */}
        {/* OVERLAPPING ICON */}
        {/* ======================================================= */}
        <div className={`
          absolute -top-4 left-6 w-12 h-12 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1
          ${isSelected 
            ? `bg-gradient-to-r ${service.theme.primary} shadow-lg` 
            : `bg-gradient-to-r ${service.gradient} group-hover:bg-gradient-to-r group-hover:${service.hoverGradient} shadow-lg`
          }
          flex items-center justify-center z-10
        `}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* ======================================================= */}
        {/* CARD CONTENT */}
        {/* ======================================================= */}
        <div className="p-6 pt-8 h-full flex flex-col justify-between">
          {/* Top Section - Title & Description */}
          <div className="flex-1">
            <h3 className={`
              font-bold text-lg mb-4 mt-4 line-clamp-1 transition-colors duration-300
              ${isSelected ? service.theme.accent : 'text-gray-900 group-hover:text-gray-800'}
            `}>
              {service.title}
            </h3>
            
            <p className={`
              text-sm leading-relaxed line-clamp-2 mb-4 transition-colors duration-300
              ${isSelected ? 'text-gray-700' : 'text-gray-600 group-hover:text-gray-700'}
            `}>
              {service.description}
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {service.shortFeatures.map((feature, index) => (
                <span 
                  key={index}
                  className={`
                    px-2.5 py-1 text-xs rounded-lg font-medium transition-all duration-300
                    ${isSelected 
                      ? `bg-gradient-to-r ${service.theme.primary} text-white shadow-sm` 
                      : 'bg-gray-100/80 text-gray-700 group-hover:bg-gray-200/80'
                    }
                  `}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Section - Arrow Button */}
          <div className="flex justify-end">
            <div className={`
              w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110
              ${isSelected 
                ? `bg-gradient-to-r ${service.theme.primary} text-white shadow-sm` 
                : 'bg-gray-100/80 text-gray-600 group-hover:bg-gray-200/80'
              }
            `}>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>

        {/* ======================================================= */}
        {/* HOVER EFFECTS */}
        {/* ======================================================= */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  )
}

// =============================================================================
// SERVICE DETAILS COMPONENT
// =============================================================================
// Detailed view panel showing comprehensive service information
// Features: Themed styling, structured content layout, smooth transitions
// =============================================================================

interface ServiceDetailsProps {
  service: Service
  onClose: () => void
  isAnimating: boolean
}

function ServiceDetails({ service, onClose, isAnimating }: ServiceDetailsProps) {
  const Icon = service.icon

  return (
    <div className={`
      relative h-full min-h-[600px] rounded-3xl transition-all duration-500
      ${service.theme.background} border border-gray-200/60 shadow-xl overflow-hidden
      ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
    `}>
      
      {/* ============================================================= */}
      {/* HEADER SECTION */}
      {/* ============================================================= */}
      <div className={`relative p-8 bg-gradient-to-r ${service.theme.primary} text-white overflow-hidden`}>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, white 2px, transparent 2px)`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="relative z-10 flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Icon className="w-8 h-8 text-white" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-white/90 leading-relaxed">{service.details.overview}</p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ============================================================= */}
      {/* CONTENT SECTIONS */}
      {/* ============================================================= */}
      <div className="p-8 space-y-8">
        
        {/* ======================================================= */}
        {/* KEY FEATURES SECTION */}
        {/* ======================================================= */}
        <div>
          <h4 className={`text-lg font-semibold mb-4 ${service.theme.accent}`}>Key Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.details.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.theme.primary}`} />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================= */}
        {/* TECHNOLOGIES SECTION */}
        {/* ======================================================= */}
        <div>
          <h4 className={`text-lg font-semibold mb-4 ${service.theme.accent}`}>Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {service.details.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-white/80 border border-gray-200/50 rounded-full text-sm text-gray-700 hover:border-gray-300 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ======================================================= */}
        {/* PROCESS SECTION */}
        {/* ======================================================= */}
        <div>
          <h4 className={`text-lg font-semibold mb-4 ${service.theme.accent}`}>Our Process</h4>
          <div className="space-y-3">
            {service.details.process.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`
                  w-8 h-8 rounded-full bg-gradient-to-r ${service.theme.primary} 
                  flex items-center justify-center text-white text-sm font-semibold
                `}>
                  {index + 1}
                </div>
                <span className="text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}