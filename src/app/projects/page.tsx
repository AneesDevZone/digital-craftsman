'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container'; // Assuming this component exists
import { mockProjects } from '@/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { CarouselControls } from '@/components/projects/CarouselControls';

// =============================================================================
// MAIN PROJECTS SECTION COMPONENT
// =============================================================================

export function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  
  // Define how many cards fit on a page (responsive breakpoints are handled below)
  const CARDS_PER_PAGE = 3; 
  const totalPages = Math.ceil(mockProjects.length / CARDS_PER_PAGE);

  // --- Auto-play functionality is completely removed as requested ---
  // isAutoPlaying state and the auto-play useEffect are discarded.

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const getCurrentProjects = () => {
    const startIndex = currentPage * CARDS_PER_PAGE;
    // Uses slice to get the correct subset of projects for the current page
    return mockProjects.slice(startIndex, startIndex + CARDS_PER_PAGE);
  };

  // CONDENSED SUBHEADING
  const subHeadingText = "A curated collection of innovative work spanning web, mobile, and design systems.";

  return (
    <section 
      id="projects" 
      // FIX 1 (Height): Reduced vertical padding (py-10 -> py-8) and mb-12 -> mb-10 in header
      // to help content fit within 100vh on smaller viewports.
      className="relative py-8 min-h-screen flex items-center overflow-hidden"
    >
      
      {/* Enhanced Background (DRY, simplified structure) */}
      <div className="absolute inset-0">
        {/* Primary Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50" />
        
        {/* Floating Orbs (Animations kept for flair) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '2s' }} />
        
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
      </div>

      <Container size="xl" className="w-full">
        <div className="relative z-10 w-full">
          
          {/* Section Header */}
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full text-blue-700 text-sm font-semibold mb-4 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Featured Work</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
            Our{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            {/* FIX 3: Condensed subheading */}
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-normal font-medium line-clamp-1">
              {subHeadingText}
            </p>
          </div>

          {/* Projects Grid */}
          {/* Removed redundant px-4 on wrapper div and reduced margin-bottom */}
          <div className="mb-8"> 
            {/* FIX 2 (Responsiveness): 1 column on mobile, 2 columns on medium screens, 3 columns on large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4 justify-center">
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
          <div className="px-4 mb-8">
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
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-blue-500/25 active:scale-[0.98]">
              <span>View All Projects</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}