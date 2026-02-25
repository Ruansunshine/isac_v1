import { Navbar } from "@/views/components/navbar"
import { ScrollProgress } from "@/views/components/scroll-progress"
import { FloatingSocialButtons } from "@/views/components/social-buttons"
import { HeroSection } from "@/views/sections/hero-section"
import { AboutSection } from "@/views/sections/about-section"
import { MethodSection } from "@/views/sections/method-section"
import { BenefitsSection } from "@/views/sections/benefits-section"
import { CtaBannerSection } from "@/views/sections/cta-banner-section"
import { PlansSection } from "@/views/sections/plans-section"
import { ContactSection } from "@/views/sections/contact-section"
import { Footer } from "@/views/sections/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MethodSection />
      <BenefitsSection />
      <CtaBannerSection />
      <PlansSection />
      <ContactSection />
      <Footer />
      <FloatingSocialButtons />
    </main>
  )
}
