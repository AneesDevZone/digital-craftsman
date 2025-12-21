import React, { useCallback, HTMLAttributes } from 'react';
import { Principle } from '@/data/about-principles';

interface PrincipleCardProps extends HTMLAttributes<HTMLDivElement> {
  principle: Principle;
  index: number;
  isVisible: boolean;
  activeCard: number | null;
  setActiveCard: (index: number | null) => void;
}

export function PrincipleCard({
  principle,
  index,
  isVisible,
  activeCard,
  setActiveCard,
  ...props
}: PrincipleCardProps) {

  const handleMouseEnter = useCallback(() => setActiveCard(index), [setActiveCard, index]);
  const handleMouseLeave = useCallback(() => setActiveCard(null), [setActiveCard]);
  
  const { icon: Icon, title, description } = principle;

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transitionDelay: `${index * 150}ms`
  };

  return (
    <div
      className={`relative w-full transition-all duration-500 ${activeCard === index ? 'z-20 scale-[1.02]' : 'z-10'}`}
      style={animationStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* 1. Technical Glow (Now matches your brand variables) */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500"
        style={{ background: 'var(--gradient-brand-primary)' }}
      />
      
      {/* 2. Glass Card Body */}
      <div 
        className="relative backdrop-blur-md rounded-2xl p-6 border transition-all duration-500 overflow-hidden h-full shadow-sm group-hover:shadow-md"
        style={{ 
          backgroundColor: 'color-mix(in srgb, var(--color-bg-surface) 60%, transparent)',
          borderColor: 'var(--color-border)'
        }}
      >
        {/* 3. Small "Code-like" Badge Icon */}
        <div className="flex items-center gap-3 mb-4">
          <div 
            className="p-2.5 rounded-lg border shadow-inner transition-transform duration-500 group-hover:rotate-6"
            style={{ 
              background: 'var(--color-bg-primary)',
              borderColor: 'var(--color-border)'
            }}
          >
            <Icon className="w-5 h-5" style={{ color: 'var(--color-brand-primary)' }} />
          </div>
          <div className="h-px flex-1" style={{ background: 'var(--color-border)' }} />
          <span className="text-[10px] font-mono opacity-30">0{index + 1}</span>
        </div>
        
        {/* 4. Text Content */}
        <h3 className="text-lg font-bold mb-2 tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {description}
        </p>

        {/* 5. Animated Bottom Border */}
        <div 
          className="absolute bottom-0 left-0 h-1 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          style={{ background: 'var(--gradient-brand-primary)' }}
        />
      </div>
    </div>
  );
}