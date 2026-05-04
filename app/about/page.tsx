import type { Metadata } from "next"
import { PageHeader } from "@/components/site/page-header"
import { FinalCTA } from "@/components/site/final-cta"

export const metadata: Metadata = {
  title: "About — Northveil Consulting",
  description:
    "A senior-led consultancy helping leaders turn ambition into clear strategy and durable execution.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Senior-led consulting, built for the way teams actually work."
        description="We&apos;re a small group of strategists and operators who&apos;ve led at the companies we now advise. We bring the same rigor — without the overhead of a traditional firm."
      />

      <section className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
        <div className="space-y-14">
          <Block
            label="Overview"
            title="Independent. Senior. Embedded."
          >
            <p>
              Northveil was founded on a simple idea: leadership teams deserve
              partners who think clearly, move quickly, and stay accountable to
              outcomes. We&apos;ve spent careers inside operating roles —
              shipping products, restructuring teams, leading turnarounds — and
              we bring that perspective to every engagement.
            </p>
            <p>
              We work with a small number of clients at any given time. That
              constraint is intentional: it&apos;s how we stay close to the
              work, close to the people, and close to the outcome.
            </p>
          </Block>

          <Block label="Mission" title="Help leaders make better decisions, faster.">
            <p>
              Our mission is to give leadership teams a sharper edge in
              moments that matter — strategic inflection points, market
              entries, restructurings, and growth phases where clarity is the
              difference between momentum and drift.
            </p>
            <p>
              We measure ourselves by one thing: did our work meaningfully
              change what you decided, built, or shipped?
            </p>
          </Block>

          <Block label="Vision" title="A new standard for advisory work.">
            <p>
              We believe the next generation of consulting is smaller, more
              senior, and more accountable. Less theater, more substance. Fewer
              decks, more decisions. We&apos;re building Northveil to be the
              firm we always wished we could hire.
            </p>
          </Block>

          <Block label="Principles" title="How we work.">
            <ul className="grid gap-3 sm:grid-cols-2">
              {PRINCIPLES.map((p) => (
                <li
                  key={p.title}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <h3 className="text-sm font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}

const PRINCIPLES = [
  {
    title: "Clarity over volume",
    description:
      "A short, sharp recommendation beats a 60-page deck. We optimize for the decision, not the deliverable.",
  },
  {
    title: "Senior throughout",
    description:
      "The people you meet are the people who do the work. No bait-and-switch staffing.",
  },
  {
    title: "Outcome accountability",
    description:
      "We scope to outcomes and tie our success to yours — not to hours or activity.",
  },
  {
    title: "Honest counsel",
    description:
      "We'll tell you what we actually think. That's the whole reason to hire an outside partner.",
  },
]

function Block({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
        {label}
      </div>
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
        {children}
      </div>
    </div>
  )
}
