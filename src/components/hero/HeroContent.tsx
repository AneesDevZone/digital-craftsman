'use client';

import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { TypingAnimation } from '@/components/hero/TypingAnimation';
import { SocialLinks } from '@/components/hero/SocailLinks';

import { HeroButton } from './HeroButton';
import { StatItem } from './StatItem';

// --- DATA CONSTANTS (DRY) ---
const TYPING_TEXTS = [
  "stunning websites",
  "mobile apps", 
  "digital experiences",
  "innovative solutions"
];

const STATS_DATA = [
  { value: "50+", label: "Projects" },
  { value: "98%", label: "Satisfaction" },
  { value: "7+", label: "Years Exp" },
];

// Helper to scroll smoothly (can be moved to a 'utils' file)
const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export function HeroContent() {
  return (
    <div className="text-center lg:text-left space-y-8 relative z-10">
      
      {/* 1. Available Badge - Clean */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-blue-100 rounded-full text-blue-700 text-sm font-medium shadow-sm animate-fade-in">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span>Available for new projects</span>
      </div>

      {/* 2. Main Headlines */}
      <div className="space-y-6 animate-fade-in-up delay-200">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
          We are{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Square Root Dev
          </span>
        </h1>

        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 h-16 flex items-center">
          We create{' '}
          <TypingAnimation 
            texts={TYPING_TEXTS} // Using constant here
            className="ml-3 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          />
        </div>

        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
          Transforming ideas into exceptional digital experiences through 
          <span className="font-semibold text-gray-800"> creative design</span>, 
          <span className="font-semibold text-gray-800"> clean code</span>, and 
          <span className="font-semibold text-gray-800"> innovative thinking</span>.
        </p>
      </div>

      {/* 3. Action Buttons - Cleaner with HeroButton component */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-600">
        <HeroButton 
          variant="primary"
          onClick={() => scrollToSection('projects')}
          icon={<Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />}
          trailingIcon={<ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />}
        >
          View Our Work
        </HeroButton>
        
        <HeroButton 
          variant="secondary"
          onClick={() => scrollToSection('contact')}
          icon={<Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />}
        >
          Let's Talk
        </HeroButton>
      </div>

      {/* 4. Social Links */}
      <div className="animate-fade-in-up delay-800">
        <SocialLinks />
      </div>
      
      {/* 5. Stats - Cleaner with StatItem component */}
      <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200/50 animate-fade-in-up delay-1000">
        {STATS_DATA.map((stat) => (
          <StatItem key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>
  );
}