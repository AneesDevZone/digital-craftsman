'use client'

import React, { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { 
  Code, 
  Calculator, 
  Layers, 
  GitBranch, 
  Zap, 
  Infinity,
  Triangle,
  Square,
  Circle,
  ArrowRight,
  Sparkles
} from 'lucide-react'

// Different interpretations of "Square Root"
const concepts = [
  {
    title: "Mathematical Foundation",
    symbol: "√",
    description: "Finding the perfect solution through mathematical precision",
    icon: Calculator,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50"
  },
  {
    title: "Code Architecture", 
    symbol: "{ }",
    description: "Building structured solutions from fundamental building blocks",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    title: "Creative Roots",
    symbol: "⚡",
    description: "Every great design grows from a solid creative foundation",
    icon: Layers,
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50"
  },
  {
    title: "Problem Solving",
    symbol: "∞",
    description: "Breaking down complex challenges into manageable components",
    icon: GitBranch,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50"
  }
]

function AnimatedSymbol({ symbol, delay = 0 }: { symbol: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])
  
  return (
    <div 
      className={`
        absolute text-6xl font-bold opacity-10 transition-all duration-1000
        ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {symbol}
    </div>
  )
}

function GeometricShape({ type, className, delay = 0 }: { 
  type: 'square' | 'circle' | 'triangle'; 
  className: string; 
  delay?: number 
}) {
  const shapes = {
    square: <Square className="w-full h-full" />,
    circle: <Circle className="w-full h-full" />,
    triangle: <Triangle className="w-full h-full" />
  }
  
  return (
    <div 
      className={`animate-bounce ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationDuration: `${3 + Math.random() * 2}s`
      }}
    >
      {shapes[type]}
    </div>
  )
}

function ConceptCard({ concept, index, isActive, onClick }: {
  concept: typeof concepts[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`
        group relative cursor-pointer transition-all duration-700 transform
        ${isActive ? 'scale-105 z-10' : 'scale-100 hover:scale-102'}
      `}
      onClick={onClick}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Card Background */}
      <div className={`
        relative bg-gradient-to-br ${concept.bgColor} backdrop-blur-sm 
        rounded-3xl p-6 border border-white/50 shadow-lg overflow-hidden
        transition-all duration-500
        ${isActive ? 'shadow-2xl border-white/70' : 'hover:shadow-xl'}
      `}>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`
            absolute -top-10 -right-10 w-20 h-20 rounded-full
            bg-gradient-to-r ${concept.color} opacity-20 blur-xl
            transition-all duration-1000
            ${isActive ? 'scale-150 opacity-30' : 'scale-100'}
          `} />
          <div className={`
            absolute -bottom-5 -left-5 w-16 h-16 rotate-45
            bg-gradient-to-r ${concept.color} opacity-15
            transition-all duration-700
            ${isActive ? 'scale-125 rotate-90' : 'scale-100 rotate-45'}
          `} />
        </div>

        {/* Icon */}
        <div className={`
          inline-flex p-3 rounded-2xl bg-gradient-to-r ${concept.color} 
          text-white shadow-lg mb-4 transition-all duration-500 transform
          ${isActive ? 'scale-110 rotate-6' : 'group-hover:scale-105 group-hover:rotate-3'}
        `}>
          <concept.icon className="w-6 h-6" />
        </div>

        {/* Content */}
        <h3 className={`
          text-xl font-bold text-gray-900 mb-2 transition-colors duration-300
          ${isActive ? 'text-gray-800' : ''}
        `}>
          {concept.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {concept.description}
        </p>

        {/* Symbol */}
        <div className={`
          text-4xl font-bold bg-gradient-to-r ${concept.color} 
          bg-clip-text text-transparent transition-all duration-500
          ${isActive ? 'scale-110' : 'group-hover:scale-105'}
        `}>
          {concept.symbol}
        </div>

        {/* Hover Effect */}
        <div className={`
          absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
          transition-transform duration-1000 skew-x-12
          ${isActive ? 'translate-x-full' : '-translate-x-full group-hover:translate-x-full'}
        `} />
      </div>
    </div>
  )
}

export function SquareRootHero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [phase, setPhase] = useState<'forming' | 'growing' | 'complete'>('forming')

  // Cycle through concepts
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % concepts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Phase animation
  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('growing'), 1000)
    const timer2 = setTimeout(() => setPhase('complete'), 2000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      
      {/* Complex Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mathematical Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #64748b 1px, transparent 1px),
              linear-gradient(0deg, #64748b 1px, transparent 1px),
              radial-gradient(circle at 50px 50px, #3b82f6 2px, transparent 0)
            `,
            backgroundSize: '50px 50px, 50px 50px, 100px 100px'
          }}
        />

        {/* Floating Mathematical Symbols */}
        <div className="absolute top-20 left-20">
          <AnimatedSymbol symbol="√" delay={0} />
        </div>
        <div className="absolute top-40 right-32">
          <AnimatedSymbol symbol="∫" delay={500} />
        </div>
        <div className="absolute bottom-40 left-32">
          <AnimatedSymbol symbol="∑" delay={1000} />
        </div>
        <div className="absolute bottom-20 right-20">
          <AnimatedSymbol symbol="∞" delay={1500} />
        </div>

        {/* Geometric Shapes */}
        <GeometricShape 
          type="square" 
          className="absolute top-32 left-1/4 w-8 h-8 text-blue-300/30" 
          delay={2000} 
        />
        <GeometricShape 
          type="circle" 
          className="absolute bottom-32 right-1/4 w-12 h-12 text-purple-300/30" 
          delay={2500} 
        />
        <GeometricShape 
          type="triangle" 
          className="absolute top-1/2 right-16 w-6 h-6 text-emerald-300/30" 
          delay={3000} 
        />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-gradient-to-br from-blue-200/20 via-purple-200/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-to-tl from-emerald-200/15 via-cyan-200/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Container size="xl" className="relative z-10">
        {/* Main Logo/Brand Section */}
        <div className="text-center mb-16">
          
          {/* Animated Logo Formation */}
          <div className="relative mb-8 flex items-center justify-center">
            
            {/* Square Symbol Animation */}
            <div className={`
              relative transition-all duration-2000 transform
              ${phase === 'forming' ? 'scale-0 rotate-180' : 
                phase === 'growing' ? 'scale-100 rotate-0' : 'scale-110 rotate-0'}
            `}>
              <div className="w-32 h-32 border-4 border-blue-600 rounded-2xl relative">
                {/* Animated Roots Growing */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className={`
                      absolute w-1 bg-gradient-to-b from-emerald-500 to-emerald-700
                      transition-all duration-1000 origin-top
                      ${phase === 'complete' ? 'h-12 opacity-100' : 'h-0 opacity-0'}
                    `}
                    style={{
                      bottom: '-48px',
                      left: `${12 + i * 14}px`,
                      transitionDelay: `${i * 200}ms`,
                      transform: `rotate(${(i - 4) * 5}deg)`
                    }}
                  />
                ))}
                
                {/* Mathematical Symbol Overlay */}
                <div className={`
                  absolute inset-0 flex items-center justify-center
                  text-6xl font-bold text-blue-600 transition-all duration-1000
                  ${phase === 'complete' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                `}>
                  √
                </div>
              </div>
            </div>
          </div>

          {/* Brand Name with Typewriter Effect */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Square
            </span>
            <br />
            <span className="relative">
              Root
              {/* Underline Animation */}
              <div className={`
                absolute bottom-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-emerald-500
                transition-all duration-2000
                ${phase === 'complete' ? 'w-full opacity-100' : 'w-0 opacity-0'}
              `} />
            </span>
          </h1>

          {/* Dynamic Tagline */}
          <div className="text-xl md:text-2xl text-gray-600 mb-8 h-16 flex items-center justify-center">
            <span className={`
              transition-all duration-500 
              ${activeIndex === 0 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}
            `}>
              {activeIndex === 0 && "Where logic meets creativity"}
            </span>
            <span className={`
              absolute transition-all duration-500 
              ${activeIndex === 1 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}
            `}>
              {activeIndex === 1 && "Building solutions from the ground up"}
            </span>
            <span className={`
              absolute transition-all duration-500 
              ${activeIndex === 2 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}
            `}>
              {activeIndex === 2 && "Rooted in innovation, squared in execution"}
            </span>
            <span className={`
              absolute transition-all duration-500 
              ${activeIndex === 3 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}
            `}>
              {activeIndex === 3 && "Every complex problem has an elegant solution"}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-blue-500/25">
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Calculator className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Calculate Success</span>
            </button>
          </div>
        </div>

        {/* Interactive Concept Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {concepts.map((concept, index) => (
            <ConceptCard
              key={index}
              concept={concept}
              index={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Mathematical Expression */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg">
            <span className="text-2xl font-mono text-gray-700">
              √(
            </span>
            <span className="text-lg text-blue-600 font-semibold">
              Ideas²
            </span>
            <span className="text-lg text-gray-500">+</span>
            <span className="text-lg text-purple-600 font-semibold">
              Code²
            </span>
            <span className="text-lg text-gray-500">+</span>
            <span className="text-lg text-emerald-600 font-semibold">
              Design²
            </span>
            <span className="text-2xl font-mono text-gray-700">
              ) = 
            </span>
            <span className="text-xl text-gray-900 font-bold">
              Perfect Solution
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}