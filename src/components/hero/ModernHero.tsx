"use client"

import React from "react"
import { Sparkles, Layers, Zap, Shield } from "lucide-react"
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
    <div className="relative flex items-center justify-center min-h-[420px]">
      <Glass className="w-full max-w-md p-6 sm:p-8 hover:scale-[1.03]">
        <div className="flex items-center gap-2 mb-5">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[var(--color-danger)]" />
            <span className="w-3 h-3 rounded-full bg-[var(--color-warning)]" />
            <span className="w-3 h-3 rounded-full bg-[var(--color-success)]" />
          </div>
          <div className="ml-2 h-6 flex-1 rounded bg-[var(--color-bg-primary)]" />
        </div>

        <div className="space-y-4">
          <div
            className="h-8 rounded"
            style={{
              background: "var(--gradient-brand-primary)",
              width: "70%",
            }}
          />
          <div className="h-4 rounded bg-[var(--color-border)] w-[90%]" />
          <div className="h-4 rounded bg-[var(--color-border)] w-[75%]" />

          <div className="grid grid-cols-2 gap-3 pt-4">
            <div className="rounded-lg p-4 bg-[var(--color-bg-primary)]">
              <Layers className="w-5 h-5 text-[var(--color-brand-primary)]" />
              <div className="h-2 mt-3 rounded bg-[var(--color-border)] w-[80%]" />
            </div>
            <div className="rounded-lg p-4 bg-[var(--color-bg-primary)]">
              <Zap className="w-5 h-5 text-[var(--color-brand-accent)]" />
              <div className="h-2 mt-3 rounded bg-[var(--color-border)] w-[70%]" />
            </div>
          </div>
        </div>

        <Glass className="absolute -top-5 -right-5 w-14 h-14 flex items-center justify-center animate-float">
          <Shield className="w-7 h-7 text-[var(--color-brand-signature)]" />
        </Glass>

        <Glass className="absolute -bottom-4 -left-4 w-12 h-12 flex items-center justify-center animate-float-delayed">
          <Sparkles className="w-6 h-6 text-[var(--color-brand-accent)]" />
        </Glass>
      </Glass>
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