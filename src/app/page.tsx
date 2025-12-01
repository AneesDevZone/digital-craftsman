import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ClientScrollHandler } from '@/components/layout/ClientScrollHandler' 

import ContactSection from '@/app/contact/page'
import { AboutSection } from '@/app/about/page'
import { ServicesSection } from '@/app/services/page'
import { BlogSection } from './blog/page'
import { ModernHero } from '@/components/hero/ModernHero'
import { ProjectsSection } from '@/app/projects/page'

export default function HomePage() {
  return (
    <>
      {/* Add the client-side scroll handler. 
          It runs on the client and scrolls to the hash in the URL on page load. */}
      <ClientScrollHandler />
      
      <Header />
      <main className="flex-1">
        {/* Wrapped each section and assign a unique 'id'. 
          These IDs MUST match the '#hash' values used in Header navigation links.
        */}
        <section id="home"> 
          <ModernHero />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="blog">
          <BlogSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  )
}