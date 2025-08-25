'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { 
  Code, 
  Smartphone, 
  Database, 
  Cloud,
  Wrench,
  Palette,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const services = [
  {
    id: 'frontend',
    icon: Code,
    title: 'Frontend Development',
    subtitle: 'Modern Web Applications',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    description: 'Crafting responsive, performant web applications with cutting-edge technologies and exceptional user experiences.',
    color: 'blue'
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Development',
    subtitle: 'Cross-Platform Apps',
    technologies: ['React Native', 'iOS', 'Android', 'Expo'],
    description: 'Building native-quality mobile applications that work seamlessly across all platforms and devices.',
    color: 'purple'
  },
  {
    id: 'backend',
    icon: Database,
    title: 'Backend Development',
    subtitle: 'Scalable Server Solutions',
    technologies: ['Node.js', 'NestJS', 'Python', 'PostgreSQL'],
    description: 'Developing robust APIs and server architectures that scale with your business growth.',
    color: 'emerald'
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'DevOps & Deployment',
    subtitle: 'Cloud Infrastructure',
    technologies: ['Docker', 'AWS', 'CI/CD', 'Monitoring'],
    description: 'Streamlining deployment processes and ensuring reliable, scalable cloud infrastructure.',
    color: 'orange'
  },
  {
    id: 'hardware',
    icon: Wrench,
    title: 'Hardware Integration',
    subtitle: 'System Optimization',
    technologies: ['IoT', 'Embedded Systems', 'Performance Tuning', 'Diagnostics'],
    description: 'Bridging software and hardware for optimal performance and seamless integration.',
    color: 'red'
  },
  {
    id: 'design',
    icon: Palette,
    title: 'UI/UX Design',
    subtitle: 'Digital Experiences',
    technologies: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    description: 'Creating intuitive, beautiful interfaces that users love and businesses depend on.',
    color: 'pink'
  }
]

const colorClasses = {
  blue: {
    bg: 'from-blue-50 to-blue-100',
    border: 'border-blue-200',
    icon: 'from-blue-500 to-blue-600',
    text: 'text-blue-700',
    hover: 'hover:border-blue-300',
    accent: 'bg-blue-500'
  },
  purple: {
    bg: 'from-purple-50 to-purple-100',
    border: 'border-purple-200',
    icon: 'from-purple-500 to-purple-600',
    text: 'text-purple-700',
    hover: 'hover:border-purple-300',
    accent: 'bg-purple-500'
  },
  emerald: {
    bg: 'from-emerald-50 to-emerald-100',
    border: 'border-emerald-200',
    icon: 'from-emerald-500 to-emerald-600',
    text: 'text-emerald-700',
    hover: 'hover:border-emerald-300',
    accent: 'bg-emerald-500'
  },
  orange: {
    bg: 'from-orange-50 to-orange-100',
    border: 'border-orange-200',
    icon: 'from-orange-500 to-orange-600',
    text: 'text-orange-700',
    hover: 'hover:border-orange-300',
    accent: 'bg-orange-500'
  },
  red: {
    bg: 'from-red-50 to-red-100',
    border: 'border-red-200',
    icon: 'from-red-500 to-red-600',
    text: 'text-red-700',
    hover: 'hover:border-red-300',
    accent: 'bg-red-500'
  },
  pink: {
    bg: 'from-pink-50 to-pink-100',
    border: 'border-pink-200',
    icon: 'from-pink-500 to-pink-600',
    text: 'text-pink-700',
    hover: 'hover:border-pink-300',
    accent: 'bg-pink-500'
  }
}

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-slate-700 font-medium text-sm">Our Services</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              What We
              <span className="block text-slate-500">
                Deliver
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to drive your business forward with 
              modern technology and expert craftsmanship.
            </p>
          </div>

          {/* Services Grid - Bento Box Style */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => {
              const colors = colorClasses[service.color as keyof typeof colorClasses]
              const isLarge = index === 0 || index === 2 // Make first and third items larger
              
              return (
                <div
                  key={service.id}
                  className={`group relative cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                    isLarge ? 'lg:col-span-2 lg:row-span-1' : 'lg:col-span-1'
                  }`}
                  style={{ 
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: `${index * 100}ms`
                  }}
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  {/* Background Card */}
                  <div className={`relative h-full bg-gradient-to-br ${colors.bg} border-2 ${colors.border} ${colors.hover} rounded-3xl p-8 transition-all duration-300 group-hover:shadow-xl overflow-hidden`}>
                    {/* Animated Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                      <div className={`w-full h-full ${colors.accent} rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700`}></div>
                    </div>
                    
                    {/* Service Icon */}
                    <div className={`inline-flex p-4 bg-gradient-to-r ${colors.icon} rounded-2xl text-white shadow-lg mb-6 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}>
                      <service.icon className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">
                          {service.title}
                        </h3>
                        <p className={`text-sm font-medium ${colors.text}`}>
                          {service.subtitle}
                        </p>
                      </div>

                      <p className="text-slate-700 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 text-xs font-medium ${colors.text} bg-white rounded-full border ${colors.border} transition-all duration-300 group-hover:scale-105`}
                            style={{ transitionDelay: `${techIndex * 50}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <div className={`flex items-center gap-2 ${colors.text} font-medium group-hover:gap-3 transition-all duration-300`}>
                        <span className="text-sm">Explore service</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-4 px-8 py-6 bg-white border-2 border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 group cursor-pointer">
              <CheckCircle className="w-6 h-6 text-emerald-600 group-hover:rotate-12 transition-transform duration-300" />
              <div className="text-left">
                <div className="text-lg font-semibold text-slate-900">
                  Need a custom solution?
                </div>
                <div className="text-slate-600 text-sm">
                  Let's discuss your specific requirements
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}