import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
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
              A{" "}
              <span className="brand-text-gradient">
                Center for Alliance & Coalition
              </span>{" "}
              for Professional Excellence.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground md:text-lg">
              CORD Consultancy is a private limited company re-registered in
              2026 as CORD Nutrition and Health Trading PLC. We bring together
              specialists in nutrition, health, and development to deliver
              integrated consultancy, training, and capacity-building services
              to ambitious organizations.
            </p>

            <ul className="mt-8 space-y-3">
              {POINTS.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">
                    {p}
                  </span>
                </li>
              ))}
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

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-background">
              <Image
                src="/images/strategy-session.jpg"
                alt="CORD consultants in a strategy session"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border bg-background/95 p-5 shadow-sm backdrop-blur">
              <div className="grid grid-cols-3 gap-3">
                <Stat value="13+" label="Engagements" />
                <Stat value="5" label="Domains" />
                <Stat value="67%" label="Female-led" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold tracking-tight text-foreground">
        {value}
      </div>
      <div className="mt-0.5 text-xs text-muted-foreground">{label}</div>
    </div>
  )
}
