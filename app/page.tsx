import { Hero } from "@/components/site/hero"
import { ServicesPreview } from "@/components/site/services-preview"
import { AboutSummary } from "@/components/site/about-summary"
import { FinalCTA } from "@/components/site/final-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutSummary />
      <FinalCTA />
    </>
  )
}
