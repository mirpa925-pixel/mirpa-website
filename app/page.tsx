import { SiteHeader } from "@/components/site-header"
import { HeroBanner } from "@/components/hero-banner"
import { AboutSection } from "@/components/about-section"
import { CoreOperations } from "@/components/core-operations"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroBanner />
        <AboutSection />
        <CoreOperations />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
