"use client"

import React from "react"
import {
  ArrowRight,
  Sparkles,
  Layers,
  Zap,
  Shield,
} from "lucide-react"
// Import your refined container
import { Container } from "@/components/ui/Container"

/* ============================================================================
   PRIMITIVES (DRY)
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

const Glow = ({
  className = "",
  color,
}: {
  className?: string
  color: string
}) => (
  <div
    className={`absolute rounded-full blur-3xl opacity-40 ${className}`}
    style={{ background: color }}
  />
)

/* ============================================================================
   ILLUSTRATION
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

      <Glow
        className="inset-0 -z-10"
        color="radial-gradient(circle, var(--color-brand-primary), transparent 70%)"
      />
    </div>
  )
}

/* ============================================================================
   HERO
============================================================================ */

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
      style={{
        background: `linear-gradient(
          135deg,
          var(--color-bg-primary),
          var(--color-bg-surface),
          var(--color-bg-primary)
        )`,
      }}
    >
      <Glow
        className="top-24 right-20 w-96 h-96"
        color="radial-gradient(circle, var(--color-brand-primary), transparent 70%)"
      />
      <Glow
        className="bottom-20 left-16 w-80 h-80"
        color="radial-gradient(circle, var(--color-brand-accent), transparent 70%)"
      />

      {/* Using the refined Container here */}
      <Container size="xl" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-8">
            <Glass className="inline-flex items-center gap-2 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-signature)] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
                Premium Digital Solutions
              </span>
            </Glass>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.1]">
              Craft Digital Excellence{" "}
              <span
                className="block"
                style={{
                  background: "var(--gradient-brand-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                That Delivers
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-xl">
              Modern web and mobile solutions.
              Built with production-grade technology.
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

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 rounded-[var(--radius-md)] font-semibold text-[var(--color-text-inverse)] hover:-translate-y-1 transition"
                style={{
                  background: "var(--gradient-brand-primary)",
                  boxShadow: "0 10px 30px rgba(79,107,237,.35)",
                }}
              >
                <span className="flex items-center gap-2 justify-center">
                  Get Started <ArrowRight className="w-5 h-5" />
                </span>
              </button>

              <Glass className="rounded-[var(--radius-md)]">
                <button
                  onClick={() => scrollTo("projects")}
                  className="px-8 py-4 w-full font-semibold"
                >
                  View Projects →
                </button>
              </Glass>
            </div>
          </div>

          <BusinessIllustration />
        </div>
      </Container>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float 4s ease-in-out infinite; }
      `}</style>
    </section>
  )
}