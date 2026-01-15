import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ServicesPreview } from "@/components/services-preview"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesPreview />
      <CTASection />
      <Footer />
    </main>
  )
}
