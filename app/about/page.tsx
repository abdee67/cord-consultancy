import type { Metadata } from "next"
import { PageHeader } from "@/components/site/page-header"
import { OurStory } from "@/components/site/our-story"
import { Pillars } from "@/components/site/pillars"
import { Recognition } from "@/components/site/recognition"
import { OrgChart } from "@/components/site/org-chart"
import { Gallery } from "@/components/site/gallery"
import { FinalCTA } from "@/components/site/final-cta"

export const metadata: Metadata = {
  title: "About — CORD Consultancy",
  description:
    "CORD Nutrition and Health Trading PLC: a private-sector-led consultancy hub for health, nutrition, social affairs, management, and hotel & tourism advisory.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A coalition for nutrition, health, and development."
        description="CORD Consultancy is a private-sector-led consultancy hub combining public health expertise with private-sector agility — driving evidence-based impact across Ethiopia and beyond."
      />

      {/* Overview */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-24">
        <div className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
          Overview
        </div>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Independent. Senior. Locally rooted.
        </h2>
        <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
          <p>
            CORD Nutrition and Health Trading PLC — operating as CORD
            Consultancy — was re-registered in 2026 under Ethiopia&apos;s new
            trade laws and directives. We are a private limited company
            delivering integrated consultancy, training, and capacity-building
            services across five core domains.
          </p>
          <p>
            Our team brings together specialists in public health, nutrition,
            food science, reproductive health, and management — combining the
            rigor of evidence-based practice with the agility of the private
            sector. We are committed to women and youth empowerment,
            sustainable value chains, and market-driven health and nutrition
            solutions.
          </p>
        </div>
      </section>

      {/* Story / CORD meaning */}
      <section className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <OurStory />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-8 md:grid-cols-2">
          <MissionVision
            label="Mission"
            title="Catalyze coalitions. Deliver impact."
            body="To catalyze public-private coalitions, deliver high-impact consultancy and training services, and drive measurable improvements in nutrition, health outcomes, and socio-economic development."
          />
          <MissionVision
            label="Vision"
            title="A premier center of alliance."
            body="To be a premier Center for Alliance and Coalition for Nutrition, Health, and Development — delivering innovative, sustainable private-sector solutions that improve health, nutrition, and livelihoods."
          />
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-border/60 bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <Pillars />
        </div>
      </section>

      {/* Recognition */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Recognition />
      </section>

      {/* Org chart */}
      <section className="border-t border-border/60 bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <OrgChart />
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Gallery />
      </section>

      <FinalCTA />
    </>
  )
}

function MissionVision({
  label,
  title,
  body,
}: {
  label: string
  title: string
  body: string
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
      <div className="mb-3 text-xs font-medium uppercase tracking-widest text-secondary">
        {label}
      </div>
      <h3 className="text-balance text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
        {body}
      </p>
    </div>
  )
}
