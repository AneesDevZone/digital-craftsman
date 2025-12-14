import { ClientScrollHandler } from '@/components/layout/ClientScrollHandler' 

import ContactSection from '@/app/contact/page'
import AboutPage from '@/app/about/page'
import { ServicesSection } from '@/app/services/page'
import { BlogSection } from './blog/page'
import { ModernHero } from '@/components/hero/ModernHero'
import { ProjectsSection } from '@/app/projects/page'

export default function HomePage() {
  return (
    <>
      {/* The client-side scroll handler. 
          It runs on the client and scrolls to the hash in the URL on page load. */}
      <ClientScrollHandler />
      
      <main className="flex-1">
        
        <section id="home"> 
          <ModernHero />
        </section>
        
        <section id="about" className="scroll-mt-16">
          <AboutPage />
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
    </>
  )
}