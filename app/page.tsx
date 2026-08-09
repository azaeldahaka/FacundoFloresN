import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { MethodologySection } from '@/components/methodology-section'
import { TechSection } from '@/components/tech-section'
import { ProjectsSection } from '@/components/projects-section'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen space-bg">
      {/* Fixed grid overlay */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 grid-bg opacity-60" />

      <div className="relative">
        <SiteHeader />
        <main>
          <HeroSection />
          <AboutSection />
          <MethodologySection />
          <TechSection />
          <ProjectsSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
