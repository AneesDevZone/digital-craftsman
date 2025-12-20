"use client"

import React from "react"
import { Sparkles, Layers, Zap, Shield, Layout, Terminal } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Button } from "../ui/Button"

/* ============================================================================
   PRIMITIVES (UNCHANGED)
============================================================================ */

const Glass = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div
    className={`relative backdrop-blur-xl border transition-all duration-300 ${className}`}
    style={{
      backgroundColor: "color-mix(in srgb, var(--color-bg-surface) 70%, transparent)",
      borderColor: "var(--color-border)",
      boxShadow: "var(--shadow-lg)",
      borderRadius: "var(--radius-lg)",
    }}
  >
    {children}
  </div>
)

/* ============================================================================
   ILLUSTRATION (UNCHANGED)
============================================================================ */
const BusinessIllustration = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[500px] w-full">
      
      {/* 1. THE CODE WINDOW (Top-Left) */}
      <div className="absolute top-4 left-0 z-30 animate-slow-float">
        <div className="w-64 p-4 rounded-xl bg-[#0F172A] border border-white/10 font-mono text-[10px] shadow-2xl">
          <div className="flex gap-1.5 mb-3">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-amber-500/50" />
            <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
          </div>
          <p className="text-blue-400">
            <span className="text-purple-400">export default</span> function <span className="text-emerald-400">SquareRoot</span>() {'{'}
          </p>
          <p className="pl-4 text-gray-400">return ({'{'}</p>
          <p className="pl-8 text-blue-300">engine: <span className="text-amber-400">"Next.js 15"</span>,</p>
          <p className="pl-8 text-blue-300">speed: <span className="text-amber-400">"99/100"</span>,</p>
          <p className="pl-4 text-gray-400">{'}'})</p>
          <p className="text-blue-400">{'}'}</p>
        </div>
      </div>

      {/* 2. THE MAIN PRODUCT UI (Central) */}
      <Glass className="relative z-20 w-full max-w-[340px] p-0 overflow-hidden shadow-2xl border-white/20">
        <div className="h-10 border-b border-[var(--color-border)] bg-[var(--color-bg-surface)]/80 flex items-center px-4 justify-between">
           <div className="flex gap-1">
             <div className="h-1.5 w-8 rounded-full bg-[var(--color-border)]" />
             <div className="h-1.5 w-4 rounded-full bg-[var(--color-border)] opacity-50" />
           </div>
           <Zap className="w-3.5 h-3.5 text-[var(--color-brand-primary)]" />
        </div>
        
        <div className="p-6 space-y-6">
          <div className="space-y-3">
            <div className="h-4 w-3/4 rounded bg-[var(--gradient-brand-primary)]" />
            <div className="h-2 w-full rounded bg-[var(--color-border)]" />
            <div className="h-2 w-5/6 rounded bg-[var(--color-border)] opacity-60" />
          </div>


        <div className="grid grid-cols-2 gap-3">
          {/* Template Selection Representation */}
          <div className="aspect-square rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex flex-col items-center justify-center p-2 group hover:border-[var(--color-brand-primary)] transition-colors">
            <div className="relative mb-2">
              <Layout className="w-5 h-5 text-[var(--color-brand-primary)]" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 border border-white" />
            </div>
            <div className="text-[8px] font-bold uppercase tracking-tighter text-[var(--color-text-secondary)]">Templates</div>
          </div>

          {/* Custom Build Representation */}
          <div className="aspect-square rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex flex-col items-center justify-center p-2 group hover:border-[var(--color-brand-primary)] transition-colors">
            <div className="mb-2">
              <Terminal className="w-5 h-5 text-[var(--color-brand-accent)]" />
            </div>
            <div className="text-[8px] font-bold uppercase tracking-tighter text-[var(--color-text-secondary)]">Bespoke</div>
          </div>
        </div>
        </div>
      </Glass>

      {/* 3. PERFORMANCE ANALYTICS (Bottom-Right) */}
      <div className="absolute bottom-8 right-0 z-30 animate-slow-float-delayed">
        <Glass className="px-5 py-4 shadow-2xl border-emerald-500/20">
          <div className="flex items-center gap-4">
            <div className="relative flex items-center justify-center">
              <svg className="w-12 h-12 transform -rotate-90">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-[var(--color-border)]" />
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-emerald-500" strokeDasharray="125.6" strokeDashoffset="25.12" />
              </svg>
              <span className="absolute text-[10px] font-bold">100</span>
            </div>
            <div>
              <div className="text-[10px] font-bold text-[var(--color-text-secondary)] uppercase tracking-tighter leading-tight">Core Web<br/>Vitals</div>
              <div className="text-xs font-black text-emerald-500 uppercase">Optimized</div>
            </div>
          </div>
        </Glass>
      </div>

      <style jsx>{`
        @keyframes slow-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-slow-float { 
          animation: slow-float 6s ease-in-out infinite; 
        }
        .animate-slow-float-delayed { 
          animation: slow-float 6s ease-in-out infinite 1s; 
        }
      `}</style>
    </div>
  )
}
/* ============================================================================
   NEW "STUNNING" BACKGROUND
   Purpose: Create depth and texture to fix "boring" light mode
============================================================================ */

const StunningBackground = () => (
  <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-[var(--color-bg-primary)]">
    
    {/* 1. The Prism Beam (Central Focus) */}
    {/* A large, soft conical gradient that rotates slowly */}
    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow opacity-40">
      <div 
        className="absolute inset-0 blur-[100px]"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, 
            var(--color-bg-primary) 0deg, 
            var(--color-brand-primary) 60deg, 
            var(--color-bg-primary) 120deg, 
            var(--color-brand-accent) 180deg, 
            var(--color-bg-primary) 240deg, 
            var(--color-brand-signature) 300deg, 
            var(--color-bg-primary) 360deg)`
        }}
      />
    </div>

    {/* 2. The Noise Texture (The "Premium" Feel) */}
    {/* This fixes the flat/boring look on white screens */}
    <div 
      className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
      style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
      }} 
    />

    {/* 3. Soft Vignette (Focuses eye on center) */}
    <div 
      className="absolute inset-0"
      style={{
        background: "radial-gradient(circle at center, transparent 0%, var(--color-bg-primary) 100%)"
      }}
    />
  </div>
)

/* ============================================================================
   HERO SECTION
============================================================================ */

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* New Background Implementation */}
      <StunningBackground />

      <Container size="xl" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-8">
            
            {/* BADGE (Unchanged) */}
            <Glass className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">
                Available for New Projects
              </span>
            </Glass>

            {/* TEXT (Unchanged) */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.1] text-[var(--color-text-primary)]">
              Smart Websites. <br />
              <span
                style={{
                  background: "var(--gradient-brand-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Simply Done.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
              Square Root Dev builds your website. 
              Launch fast with our ready-made designs. 
              Or let us build something unique. 
              We make high-quality tech easy for you.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-md">
              {[
                { icon: Layers, label: "Full-Stack" },
                { icon: Zap, label: "Fast" },
                { icon: Shield, label: "Secure" },
              ].map(({ icon: Icon, label }) => (
                <Glass key={label} className="p-4 text-center">
                  <Icon className="w-6 h-6 mx-auto mb-2 text-[var(--color-brand-primary)]" />
                  <div className="text-sm font-semibold">{label}</div>
                </Glass>
              ))}
            </div>

            {/* BUTTONS (Unchanged) */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button onClick={() => scrollTo("contact")}>
                Build Your Product
              </Button>

              <Button variant="secondary" onClick={() => scrollTo("projects")}>
                View Portfolio
              </Button>
            </div>
          </div>

          <BusinessIllustration />
        </div>
      </Container>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </section>
  )
}