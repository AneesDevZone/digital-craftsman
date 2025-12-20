import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  const variants = {
    primary: "text-white shadow-md hover:shadow-[var(--color-brand-primary)]/20",
    secondary: "border border-[var(--color-border)] bg-[var(--color-bg-surface)]/50 backdrop-blur-md text-[var(--color-text-primary)] hover:border-[var(--color-brand-primary)]/40"
  }

  return (
    <button
      className={cn(
        "px-7 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 active:scale-95 hover:-translate-y-0.5",
        variants[variant],
        className
      )}
      style={variant === 'primary' ? { background: "var(--gradient-brand-primary)" } : {}}
      {...props}
    >
      {children}
    </button>
  )
}