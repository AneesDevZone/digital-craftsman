'use client';

import React, { useState } from 'react';
import { Github, Play, Star, Eye } from 'lucide-react';
import { Project, ProjectStatus } from '@/types/project';
import { categoryIcons } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Configuration for project status badge
const statusConfig: Record<ProjectStatus, { bg: string, text: string, border: string, label: string }> = {
  completed: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', label: 'Completed' },
  'in-progress': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', label: 'In Progress' },
  concept: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', label: 'Concept' }
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const CategoryIcon = categoryIcons[project.category];
  const status = statusConfig[project.status];

  return (
    <div
      className={`
        relative bg-white rounded-3xl shadow-lg border border-gray-100/60 overflow-hidden
        transition-all duration-500 transform-gpu h-96 cursor-pointer
        ${isHovered ? 'scale-[1.02] shadow-2xl border-gray-200/80' : 'scale-100'}
        animate-fade-in-up
      `}
      // The animation delay for staggered entrance is kept, but hover effects are client-side only.
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
      
      {/* Floating Elements (Visual Flair) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`
          absolute top-1 right-1 w-16 h-16 rounded-full bg-gradient-to-r ${project.gradient} opacity-10
          transition-all duration-700 ${isHovered ? 'scale-150 rotate-180' : 'scale-100'}
        `} />
        <div className={`
          absolute bottom-24 left-4 w-8 h-8 rounded-lg bg-gradient-to-r ${project.gradient} opacity-15
          transition-all duration-500 ${isHovered ? 'scale-125 rotate-45' : 'scale-100'}
        `} />
        {/* Third floating element - simplified scale for less jitter */}
        <div className={`
          absolute top-2/5 left-4/5 w-24 h-24 rounded-full bg-gradient-to-r ${project.gradient} opacity-5
          transition-all duration-1000 transform -translate-x-1/2 -translate-y-1/2
          ${isHovered ? 'scale-150 rotate-90' : 'scale-100'}
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
                  px-3 py-1 text-xs rounded-lg font-semibold border border-gray-200/50
                  bg-white shadow-sm text-gray-700
                  transition-all duration-300 ${isHovered ? 'shadow-md border-gray-300' : ''}
                `}
                style={{
                  boxShadow: `0 0 0 1px rgba(0,0,0,0.05) inset, 0 1px 2px 0 rgba(0,0,0,0.05)`,
                  // Use gradient color for subtle border/text on hover for better flair
                }}
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
                <span>{project.stats.views.toLocaleString()} Views</span>
              </div>
            )}
            {project.stats.stars && (
              <div className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5" />
                <span>{project.stats.stars} Stars</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {project.demoUrl && (
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex-1 flex items-center justify-center gap-2 px-4 py-3
                  bg-gradient-to-r ${project.gradient} text-white rounded-xl
                  font-semibold text-sm transition-all duration-300 hover:scale-[1.03] shadow-lg
                  hover:shadow-xl hover:ring-2 ring-offset-2 ring-opacity-50 ring-current
                `}
              >
                <Play className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center justify-center px-4 py-3 bg-gray-900 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-xl
                  ${!project.demoUrl ? 'flex-1' : ''}
                `}
              >
                <Github className="w-4 h-4" />
                {/* Only show text if no demo link is present */}
                {!project.demoUrl && 'Source Code'}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}