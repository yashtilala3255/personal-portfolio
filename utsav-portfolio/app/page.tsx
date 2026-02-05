'use client'

import { HeroSection } from '@/components/hero'
import { AboutSection } from '@/components/about'
import { SkillsSection } from '@/components/skills'
import { ProjectsSection } from '@/components/projects'
import { EducationSection } from '@/components/education'
import { CertificatesSection } from '@/components/certificates'
import { ContactSection } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { ScrollToTop } from '@/components/scroll-to-top'
import { PerformanceMonitor } from '@/components/performance-monitor'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <CertificatesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
    </div>
  )
}
