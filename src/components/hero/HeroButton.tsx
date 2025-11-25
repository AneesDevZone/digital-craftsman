import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeroButtonProps {
  onClick: () => void;
  children: ReactNode;
  variant: 'primary' | 'secondary';
  icon?: ReactNode;
  trailingIcon?: ReactNode;
}

export function HeroButton({ onClick, children, variant, icon, trailingIcon }: HeroButtonProps) {
  
  const baseClasses = 'group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl';

  const primaryClasses = 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-blue-500/25';
  
  const secondaryClasses = 'bg-white/80 backdrop-blur-sm hover:bg-white text-gray-900 border-2 border-gray-200/50 hover:border-gray-300';
  
  return (
    <button 
      onClick={onClick}
      className={cn(
        baseClasses,
        variant === 'primary' ? primaryClasses : secondaryClasses
      )}
    >
      {icon}
      <span>{children}</span>
      {trailingIcon}
    </button>
  );
}