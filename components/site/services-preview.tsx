import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "./section-header"
import { ServiceCard } from "./service-card"
import { SERVICES } from "./services-data"
import { Reveal } from "./reveal"

export function ServicesPreview() {
  // Featured 3 on the home page
  const featured = SERVICES.slice(0, 3)

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="What we do"
              title="Five domains. One coalition."
              description="An integrated, multi-disciplinary capability spanning health, nutrition, social affairs, management, and hospitality consultancy — delivered by senior practitioners."
            />
            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              View all services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
