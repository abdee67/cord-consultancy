import type { Metadata } from "next"
import { PageHeader } from "@/components/site/page-header"
import { ServiceCard } from "@/components/site/service-card"
import { SERVICES } from "@/components/site/services-data"
import { FinalCTA } from "@/components/site/final-cta"
import { Reveal } from "@/components/site/reveal"

export const metadata: Metadata = {
  title: "Services — CORD Consultancy",
  description:
    "Health, nutrition, social affairs, management, and hotel & tourism consultancy services delivered by senior CORD practitioners.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Five domains. Integrated, evidence-based, and outcome-driven."
        description="Each engagement is scoped to a clear outcome and led end-to-end by senior practitioners. Pick a starting point — we'll shape the rest with you."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} detailed />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 rounded-2xl border border-border bg-muted/40 p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-3 md:gap-10">
              <Item
                title="Hybrid delivery"
                body="On-site engagements, remote advisory, and scalable digital toolkits — co-created with you."
              />
              <Item
                title="Senior-led"
                body="The people you meet are the people who do the work. No bait-and-switch staffing."
              />
              <Item
                title="Outcome accountability"
                body="We scope to outcomes and tie our success to yours — not to hours or activity."
              />
            </div>
          </div>
        </Reveal>
      </section>

      <FinalCTA />
    </>
  )
}

function Item({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-widest text-primary">
        {title}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {body}
      </p>
    </div>
  )
}
