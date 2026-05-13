import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { AnimatedMetric } from "./animated-metric"
import { Reveal } from "./reveal"

const POINTS = [
  "Public health expertise paired with private-sector agility",
  "Locally rooted in Ethiopia, with international partnerships",
  "Evidence-based, results-driven, and ethically governed",
]

export function AboutSummary() {
  return (
    <section className="relative border-y border-border/60 bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
        <Reveal>
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              About CORD
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              <span className="brand-text-gradient">
                Center for Alliance & Coalition
              </span>{" "}
              for Professional Excellence.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground md:text-lg">
              CORD Consultancy is a private limited company re-registered in
              2026 as CORD Nutrition and Health Trading PLC. We bring together
              specialists in nutrition, health, and development to deliver
              integrated consultancy, training, nutrition and diet therapy, and capacity-building services
              to ambitious organizations.
            </p>

            <ul className="mt-8 space-y-3">
              {POINTS.map((p, i) => {
                const accent = i % 2 === 0 ? "#0E4FA8" : "#1E9E68"
                return (
                  <li
                    key={p}
                    className="flex items-start gap-3 rounded-xl border-2 border-border/60 p-4"
                    style={{ backgroundColor: "#E2E8F0" }}
                  >
                    <span
                      className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${accent}1F`, color: accent }}
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-slate-900 font-medium">
                      {p}
                    </span>
                  </li>
                )
              })}
            </ul>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Learn our story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="pb-14 md:pb-16">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-background shadow-2xl">
              <Image
                src="/images/hero-background.jpg"
                alt="Sorghum field representing CORD nutrition and agri-food health work"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E4FA8]/75 via-[#0E4FA8]/10 to-transparent" />
            </div>

            <div
              className="absolute -bottom-8 left-4 right-4 rounded-3xl border border-white/60 bg-white/90 p-4 shadow-2xl backdrop-blur-xl md:left-8 md:right-8 md:p-5"
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <AnimatedMetric
                  value={13}
                  label="Engagements"
                  accent="#0E4FA8"
                  className="bg-white/80 p-4"
                  valueClassName="text-3xl md:text-4xl"
                />
                <AnimatedMetric
                  value={5}
                  label="Domains"
                  accent="#1E9E68"
                  className="bg-white/80 p-4"
                  valueClassName="text-3xl md:text-4xl"
                />
                <AnimatedMetric
                  value={67}
                  suffix="%"
                  label="Female-led"
                  accent="#0E4FA8"
                  className="bg-white/80 p-4"
                  valueClassName="text-3xl md:text-4xl"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
