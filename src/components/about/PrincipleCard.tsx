import React, { useCallback, HTMLAttributes } from 'react';
import { Principle } from '@/data/about-principles';

interface PrincipleCardProps extends HTMLAttributes<HTMLDivElement> {
  principle: Principle;
  index: number;
  isVisible: boolean; // Controls animation state
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
  
  const { icon: Icon, gradient, title, description } = principle;

  // Combining base classes and dynamic state/style
  // w-full makes it responsive within the grid, mx-auto centers it if needed, no 'absolute' class
  const baseClasses = `w-full max-w-md mx-auto group cursor-pointer transition-all duration-700 
    hover:scale-105 
    ${activeCard === index ? 'z-20' : 'z-10'}`;

  // Styles driven by the isVisible prop for the animation (positioning logic removed)
  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    transitionDelay: `${index * 300}ms`
  };

  return (
    <div
      key={index}
      className={baseClasses}
      style={animationStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Card Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
      
      {/* Main Card Content */}
      <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-slate-100 group-hover:shadow-2xl group-hover:border-slate-200 transition-all duration-500">
        
        {/* Floating Icon */}
        <div className={`absolute -top-6 left-8 p-4 bg-gradient-to-r ${gradient} rounded-2xl shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        {/* Content */}
        <div className="pt-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Subtle Accent Line - FIX applied: Added mx-2 to constrain width inside rounded corners */}
        <div className={`absolute bottom-0 inset-x-0 mx-2 h-1 bg-gradient-to-r ${gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
      </div>
    </div>
  );
}