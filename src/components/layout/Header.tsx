"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Menu, X, Github, Linkedin } from "lucide-react"
import { Container } from "@/components/ui/Container"

/* ============================================
   TYPES & CONFIG
============================================ */
type NavItem = { name: string; href: string; id: string }

const NAVIGATION: NavItem[] = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Blog", href: "#blog", id: "blog" },
  { name: "Contact", href: "#contact", id: "contact" },
]

/* ============================================
   SUB COMPONENTS
============================================ */

/** Logo */
const Logo = () => (
  <Link href="#home" className="flex items-center gap-1 group">
    <div
      className="w-9 h-9 rounded-xs flex items-center justify-center font-black text-sm transition-transform group-hover:scale-105"
      style={{
        background: "var(--gradient-brand-primary)",
        color: "var(--color-text-inverse)",
      }}
    >
      SQ
    </div>
    <span className="hidden sm:block text-sm font-bold uppercase tracking-tight">
      Root Dev
    </span>
  </Link>
)

/** Desktop nav item */
const NavLink = ({ item, active }: { item: NavItem; active: boolean }) => (
  <a
    href={item.href}
    className={`
      relative px-4 py-2 text-[13px] font-semibold uppercase tracking-wide
      transition-colors duration-200
      ${
        active
          ? "text-[var(--color-brand-primary)]"
          : "text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)]"
      }
    `}
  >
    {item.name}

    {/* Active dot only */}
    {active && (
      <span
        className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
        style={{ background: "var(--color-brand-primary)" }}
      />
    )}
  </a>
)


/* ============================================
   MAIN HEADER
============================================ */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const observerRef = useRef<IntersectionObserver | null>(null)

  /* Scroll background effect */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* Intersection Observer for active section */
  useEffect(() => {
    const sections = NAVIGATION.map((n) =>
      document.getElementById(n.id)
    ).filter(Boolean) as HTMLElement[]

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )

    sections.forEach((section) =>
      observerRef.current?.observe(section)
    )

    return () => observerRef.current?.disconnect()
  }, [])

  /* Lock body scroll on mobile menu */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
  }, [isMenuOpen])

  return (
    <header
      className="fixed top-0 inset-x-0 z-[100] transition-all duration-300"
      style={{
        background: isScrolled
          ? "color-mix(in srgb, var(--color-bg-surface) 85%, transparent)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        borderBottom: isScrolled
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
      }}
    >
      <Container className="flex items-center justify-between py-4">
        {/* LEFT */}
        <Logo />

        {/* DESKTOP NAV */}
        <nav
          className="hidden lg:flex items-center gap-1 px-1 py-1 rounded-full border backdrop-blur-md"
          style={{
            background:
              "color-mix(in srgb, var(--color-bg-surface) 70%, transparent)",
            borderColor: "var(--color-border)",
          }}
        >
          {NAVIGATION.map((item) => (
            <NavLink
              key={item.id}
              item={item}
              active={activeSection === item.id}
            />
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* Socials */}
          <div className="hidden md:flex items-center gap-3 text-[var(--color-text-muted)]">
            <a
              href="https://github.com"
              aria-label="GitHub"
              className="hover:text-[var(--color-brand-primary)] transition"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-[var(--color-brand-primary)] transition"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-md transition-all hover:-translate-y-0.5"
            style={{
              background:
                "color-mix(in srgb, var(--color-bg-surface) 75%, transparent)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text-primary)",
            }}
          >
            Let’s Talk
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            background: "var(--color-bg-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <Container className="py-6 flex flex-col gap-2">
            {NAVIGATION.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-sm font-bold uppercase tracking-wide transition"
                style={{
                  color:
                    activeSection === item.id
                      ? "var(--color-brand-primary)"
                      : "var(--color-text-primary)",
                }}
              >
                {item.name}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  )
}
