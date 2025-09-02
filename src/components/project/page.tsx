'use client'

import React, { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { 
  ExternalLink, 
  Github, 
  ChevronLeft,
  ChevronRight,
  Code, 
  Palette, 
  Smartphone, 
  Globe,
  Zap,
  Star,
  Eye,
  Calendar,
  Users,
  Play,
  ArrowUpRight,
  Layers,
  Box,
  Sparkles
} from 'lucide-react'

// =============================================================================
// TYPES & INTERFACES
// =============================================================================
// Move to: src/types/projects.ts

interface Project {
  id: string
  title: string
  description: string
  category: 'web' | 'mobile' | 'design' | 'fullstack'
  technologies: string[]
  status: 'completed' | 'in-progress' | 'concept'
  year: string
  demoUrl?: string
  githubUrl?: string
  stats: {
    views?: number
    stars?: number
  }
  gradient: string
  backgroundPattern: string
}

// =============================================================================
// MOCK DATA
// =============================================================================
// Move to: src/data/projects.ts

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and sales tracking.',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    status: 'completed',
    year: '2024',
    demoUrl: '#',
    githubUrl: '#',
    stats: { views: 1200, stars: 45 },
    gradient: 'from-blue-500 to-blue-600',
    backgroundPattern: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(147, 197, 253, 0.08) 0%, transparent 50%)'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Cross-platform mobile application for team collaboration with offline synchronization and real-time updates.',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Redux'],
    status: 'completed',
    year: '2024',
    demoUrl: '#',
    githubUrl: '#',
    stats: { views: 890, stars: 32 },
    gradient: 'from-emerald-500 to-emerald-600',
    backgroundPattern: 'radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(5, 150, 105, 0.1) 0%, transparent 50%), linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, transparent 50%)'
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website with advanced animations and performance optimizations for creative professionals.',
    category: 'web',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion'],
    status: 'completed',
    year: '2024',
    demoUrl: '#',
    githubUrl: '#',
    stats: { views: 2100, stars: 67 },
    gradient: 'from-purple-500 to-purple-600',
    backgroundPattern: 'radial-gradient(circle at 30% 70%, rgba(147, 51, 234, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), conic-gradient(from 45deg at 50% 50%, rgba(139, 92, 246, 0.08) 0deg, transparent 120deg)'
  },
  {
    id: '4',
    title: 'SaaS Landing Page',
    description: 'High-converting landing page with integrated payment system and automated email sequences for better conversions.',
    category: 'web',
    technologies: ['React', 'Next.js', 'Stripe', 'Tailwind'],
    status: 'completed',
    year: '2023',
    demoUrl: '#',
    githubUrl: '#',
    stats: { views: 3400, stars: 89 },
    gradient: 'from-orange-500 to-orange-600',
    backgroundPattern: 'radial-gradient(circle at 40% 20%, rgba(251, 146, 60, 0.15) 0%, transparent 50%), radial-gradient(circle at 60% 80%, rgba(249, 115, 22, 0.1) 0%, transparent 50%), linear-gradient(45deg, rgba(245, 158, 11, 0.08) 0%, transparent 50%)'
  },
  {
    id: '5',
    title: 'Design System Library',
    description: 'Comprehensive component library and design system for consistent user interfaces across multiple products.',
    category: 'design',
    technologies: ['Figma', 'Storybook', 'React'],
    status: 'in-progress',
    year: '2024',
    githubUrl: '#',
    stats: { views: 670, stars: 34 },
    gradient: 'from-pink-500 to-pink-600',
    backgroundPattern: 'radial-gradient(circle at 50% 30%, rgba(236, 72, 153, 0.15) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(219, 39, 119, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(244, 114, 182, 0.08) 0%, transparent 50%)'
  }
]

const categoryIcons = {
  web: Code,
  mobile: Smartphone,
  design: Palette,
  fullstack: Zap
}

// =============================================================================
// PROJECT CARD COMPONENT
// =============================================================================
// Move to: src/components/projects/ProjectCard.tsx

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const CategoryIcon = categoryIcons[project.category]
  
  const statusConfig = {
    completed: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', label: 'Completed' },
    'in-progress': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', label: 'In Progress' },
    concept: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', label: 'Concept' }
  }

  const status = statusConfig[project.status]

  return (
    <div 
      className={`
        relative bg-white rounded-3xl shadow-lg border border-gray-100/60 overflow-hidden
        transition-all duration-500 transform-gpu h-96
        ${isHovered ? 'scale-[1.02] shadow-2xl border-gray-200/80' : 'scale-100'}
        animate-fade-in-up
      `}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Background Pattern with Overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ background: project.backgroundPattern }}
      />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-white/90" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`
          absolute top-1 right-1 w-16 h-16 rounded-full bg-gradient-to-r ${project.gradient} opacity-10
          transition-all duration-700 ${isHovered ? 'scale-150 rotate-180' : 'scale-100'}
        `} />
        <div className={`
          absolute bottom-24 left-4 w-8 h-8 rounded-lg bg-gradient-to-r ${project.gradient} opacity-15
          transition-all duration-500 ${isHovered ? 'scale-125 rotate-45' : 'scale-100'}
        `} />
        <div className={`
          absolute top-2/5 left-4/5 w-24 h-24 rounded-full bg-gradient-to-r ${project.gradient} opacity-5
          transition-all duration-1000 transform -translate-x-1/2 -translate-y-1/2
          ${isHovered ? 'scale-200 rotate-90' : 'scale-120'}
        `} />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className={`
            p-3 rounded-2xl bg-gradient-to-r ${project.gradient} text-white shadow-lg
            transition-all duration-300 ${isHovered ? 'scale-110 rotate-6' : 'scale-100'}
          `}>
            <CategoryIcon className="w-6 h-6" />
          </div>

          <div className="text-right">
            <div className={`
              inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border
              ${status.bg} ${status.text} ${status.border}
            `}>
              {status.label}
            </div>
            <div className="text-xs text-gray-500 mt-1 font-medium">{project.year}</div>
          </div>
        </div>

        {/* Title & Description */}
        <div className="flex-1 mb-6">
          <h3 className={`
            text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight
            transition-colors duration-300 ${isHovered ? 'text-gray-800' : ''}
          `}>
            {project.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <span 
                key={techIndex}
                className={`
                  px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-gray-700 
                  text-xs rounded-lg font-semibold border border-gray-200/50
                  transition-all duration-300 ${isHovered ? 'bg-opacity-15 scale-105' : ''}
                `}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-lg font-semibold">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="space-y-4">
          {/* Stats */}
          <div className="flex items-center justify-center gap-6 text-xs text-gray-500 font-medium">
            {project.stats.views && (
              <div className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                <span>{project.stats.views.toLocaleString()}</span>
              </div>
            )}
            {project.stats.stars && (
              <div className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5" />
                <span>{project.stats.stars}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {project.demoUrl && (
              <a 
                href={project.demoUrl}
                className={`
                  flex-1 flex items-center justify-center gap-2 px-4 py-3
                  bg-gradient-to-r ${project.gradient} text-white rounded-xl
                  font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg
                  hover:shadow-xl
                `}
              >
                <Play className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                className="flex items-center justify-center px-4 py-3 bg-gray-900 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Hover overlay effect */}
        <div className={`
          absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5
          transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}
          pointer-events-none rounded-3xl
        `} />
      </div>
    </div>
  )
}

// =============================================================================
// CAROUSEL CONTROLS COMPONENT
// =============================================================================
// Move to: src/components/projects/CarouselControls.tsx

interface CarouselControlsProps {
  currentPage: number
  totalPages: number
  onPrevious: () => void
  onNext: () => void
  onPageClick: (page: number) => void
}

function CarouselControls({ currentPage, totalPages, onPrevious, onNext, onPageClick }: CarouselControlsProps) {
  return (
    <div className="flex items-center justify-between animate-fade-in-up delay-300">
      
      {/* Navigation Arrows */}
      <div className="flex gap-3">
        <button
          onClick={onPrevious}
          disabled={currentPage === 0}
          className={`
            p-4 rounded-2xl border transition-all duration-300 hover:scale-105
            ${currentPage === 0 
              ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:shadow-lg'
            }
          `}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={onNext}
          disabled={currentPage === totalPages - 1}
          className={`
            p-4 rounded-2xl border transition-all duration-300 hover:scale-105
            ${currentPage === totalPages - 1 
              ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:shadow-lg'
            }
          `}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Page Indicators */}
      <div className="flex gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageClick(index)}
            className={`
              transition-all duration-300 rounded-full
              ${index === currentPage 
                ? 'w-10 h-4 bg-gradient-to-r from-blue-600 to-purple-600' 
                : 'w-4 h-4 bg-gray-300 hover:bg-gray-400'
              }
            `}
          />
        ))}
      </div>

      {/* Page Counter */}
      <div className="text-sm text-gray-600 font-semibold bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
        {currentPage + 1} of {totalPages}
      </div>
    </div>
  )
}

// =============================================================================
// MAIN PROJECTS SECTION COMPONENT
// =============================================================================
// Main file: src/components/projects/ProjectsSection.tsx

export function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  const CARDS_PER_PAGE = 3
  const totalPages = Math.ceil(mockProjects.length / CARDS_PER_PAGE)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalPages])

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
    setIsAutoPlaying(false)
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
    setIsAutoPlaying(false)
  }

  const getCurrentProjects = () => {
    const startIndex = currentPage * CARDS_PER_PAGE
    return mockProjects.slice(startIndex, startIndex + CARDS_PER_PAGE)
  }

  return (
    <section id="projects" className="relative py-20 min-h-screen flex items-center overflow-hidden">
      
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Primary Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }} />
        
        {/* Subtle Mesh Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 20px 20px'
          }}
        />
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path 
            d="M0 300 Q300 100 600 300 T1200 300" 
            stroke="url(#lineGradient)" 
            strokeWidth="1" 
            fill="none"
            strokeDasharray="4,8"
            className="animate-pulse"
          />
          <path 
            d="M0 500 Q400 200 800 500 T1200 500" 
            stroke="url(#lineGradient)" 
            strokeWidth="1" 
            fill="none"
            strokeDasharray="6,12"
            className="animate-pulse"
            style={{ animationDelay: '2s' }}
          />
        </svg>
      </div>

      <Container size="xl">
        <div className="relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full text-blue-700 text-sm font-semibold mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Featured Work</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Our{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Discover innovative solutions I've crafted across web development, mobile applications, and design systems.
            </p>
          </div>

          {/* Auto-play Indicator */}
          {isAutoPlaying && (
            <div className="flex justify-center mb-6 animate-fade-in">
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-full font-medium shadow-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Auto-playing
              </div>
            </div>
          )}

          {/* Projects Grid with proper margins */}
          <div className="px-4 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
              {getCurrentProjects().map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  project={project} 
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="px-4 mb-12">
            <CarouselControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPrevious={goToPrevious}
              onNext={goToNext}
              onPageClick={goToPage}
            />
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in-up delay-600">
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-blue-500/25">
              <span>View All Projects</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}