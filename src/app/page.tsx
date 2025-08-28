// src/app/page.tsx
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import ContactSection from '@/app/contact/page'
import { AboutSection } from '@/app/about/page'
import { ServicesSection } from '@/app/services/page'
import { BlogSection } from './blog/page'
import { SquareRootHero } from './projects/page'
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <BlogSection />
        <ContactSection />
        <SquareRootHero />
      </main>
      <Footer />
    </>
  )
}