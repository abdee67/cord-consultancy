import type { Metadata } from "next"
import { PageHeader } from "@/components/site/page-header"
import { ServiceCard } from "@/components/site/service-card"
import { SERVICES } from "@/components/site/services-data"
import { FinalCTA } from "@/components/site/final-cta"

export const metadata: Metadata = {
  title: "Services — Northveil Consulting",
  description:
    "Strategy, growth, operations, transformation, risk, and innovation services delivered by senior consultants.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Focused engagements. Senior thinking. Real outcomes."
        description="Each engagement is scoped to a clear outcome and led end-to-end by a senior consultant. Pick a starting point — we&apos;ll shape the rest with you."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
