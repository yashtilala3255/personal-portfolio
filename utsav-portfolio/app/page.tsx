'use client'

import { HeroSection } from '@/components/hero'
import { AboutSection } from '@/components/about'
import { SkillsSection } from '@/components/skills'
import { ProjectsSection } from '@/components/projects'
import { EducationSection } from '@/components/education'
import { ContactSection } from '@/components/contact'
import { Navigation } from '@/components/navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  )
}
