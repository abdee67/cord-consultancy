import type { Metadata } from "next"
import { PageHeader } from "@/components/site/page-header"
import { OurStory } from "@/components/site/our-story"
import { Pillars } from "@/components/site/pillars"
import { Recognition } from "@/components/site/recognition"
import { OrgChart } from "@/components/site/org-chart"
import { Gallery } from "@/components/site/gallery"
import { FinalCTA } from "@/components/site/final-cta"
import { Reveal } from "@/components/site/reveal"
import { Target, Eye, Sparkles, TrendingUp } from "lucide-react"

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
        <Reveal>
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
        </Reveal>
      </section>

      {/* Story */}
      <section className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <OurStory />
        </div>
      </section>

      {/* Mission & Vision - Vibrant Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="mb-3 text-xs font-medium uppercase tracking-widest text-primary text-center">
            Our Purpose
          </div>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl text-center">
            Driven by Mission. Guided by Vision.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#4DC8E8] via-[#3BA8D4] to-[#2BBFB0] p-1 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <div className="h-full rounded-[22px] bg-white/95 dark:bg-gray-900/95 p-8 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4DC8E8] to-[#2BBFB0] text-white shadow-lg">
                    <Target className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#2BBFB0]">
                      Mission
                    </div>
                    <h3 className="mt-1 text-xl font-bold tracking-tight text-foreground">
                      Catalyze Coalitions. Deliver Impact.
                    </h3>
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  To catalyze public-private coalitions, deliver high-impact consultancy and training services, and drive measurable improvements in nutrition, health outcomes, and socio-economic development.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Coalitions", "Training", "Impact", "Development"].map((tag) => (
                    <span key={tag} className="rounded-full bg-[#4DC8E8]/10 px-3 py-1 text-xs font-medium text-[#2BBFB0]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#2ECC8A] via-[#25B077] to-[#1E9E68] p-1 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <div className="h-full rounded-[22px] bg-white/95 dark:bg-gray-900/95 p-8 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2ECC8A] to-[#1E9E68] text-white shadow-lg">
                    <Eye className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#2ECC8A]">
                      Vision
                    </div>
                    <h3 className="mt-1 text-xl font-bold tracking-tight text-foreground">
                      A Premier Center of Alliance.
                    </h3>
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  To be a premier Center for Alliance and Coalition for Nutrition, Health, and Development — delivering innovative, sustainable private-sector solutions that improve health, nutrition, and livelihoods.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Innovation", "Sustainability", "Excellence", "Livelihoods"].map((tag) => (
                    <span key={tag} className="rounded-full bg-[#2ECC8A]/10 px-3 py-1 text-xs font-medium text-[#2ECC8A]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Value proposition cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Reveal delay={0.2}>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F59E0B]/10 text-[#F59E0B]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Value Proposition</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  A private-sector-led, metrics-driven consultancy hub that combines evidence-based knowledge with practical, market-ready strategies.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6]">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Strategic Direction</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Transform health systems, empower women and youth, integrate digital solutions, and drive private-sector growth with sustainability.
                </p>
              </div>
            </div>
          </Reveal>
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
