import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

const POINTS = [
  "Senior-led engagements — no junior handoffs",
  "Outcome-based scopes with clear success metrics",
  "Embedded with your team, accountable to your results",
]

export function AboutSummary() {
  return (
    <section className="relative border-y border-border/60 bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            About us
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            A consultancy built for the way{" "}
            <span className="brand-text-gradient">decisions are made today</span>
            .
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground md:text-lg">
            We&apos;re a small, senior team of strategists and operators. We
            partner with leaders who need sharp thinking, calm execution, and a
            real point of view — not another deck.
          </p>

          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            More about Northveil
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <ul className="space-y-3">
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

          <div className="mt-2 grid grid-cols-3 gap-4 rounded-xl border border-border bg-background p-5">
            <Stat value="120+" label="Engagements" />
            <Stat value="12" label="Countries" />
            <Stat value="94%" label="Repeat clients" />
          </div>
        </div>
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
