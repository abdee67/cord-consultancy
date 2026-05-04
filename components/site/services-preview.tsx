import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "./section-header"
import { ServiceCard } from "./service-card"
import { SERVICES } from "./services-data"

export function ServicesPreview() {
  // Show 3 on the home page
  const featured = SERVICES.slice(0, 3)

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="What we do"
            title="Focused services, built for outcomes."
            description="Senior consultants embedded with your team. No bloated decks — just clear thinking and execution that compounds."
          />
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View all services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
