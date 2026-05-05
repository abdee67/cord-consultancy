import { Reveal } from "@/components/site/reveal"

const TIMELINE = [
  {
    year: "2024",
    title: "Foundations",
    description:
      "CORD Consultancy traces its beginnings to 2024, founded on the conviction that health, nutrition, and development must be advanced together — not in silos.",
  },
  {
    year: "2025",
    title: "Building the coalition",
    description:
      "Early engagements across SRH, AYH, ECD, and nutrition initiatives demonstrated the value of an integrated, evidence-based approach in real Ethiopian contexts.",
  },
  {
    year: "2026",
    title: "A reinvigorated identity",
    description:
      "Re-registered as CORD Nutrition and Health Trading PLC under Ethiopia's new trade laws, formalizing our role as a private-sector-led consultancy hub.",
  },
  {
    year: "Today",
    title: "An international footprint",
    description:
      "Recognized as a USAID partner, member of the Global Nutrition Report, and active participant in Share-Net Netherlands — a credible voice on the global stage.",
  },
]

export function OurStory() {
  return (
    <div>
      <Reveal>
        <div className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
          Our story
        </div>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          The meaning of <span className="brand-text-gradient">CORD</span>.
        </h2>
        <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
          Our name is both an acronym and a metaphor. As an acronym, CORD stands
          for our defining promise:{" "}
          <span className="font-medium text-foreground">
            Center for Alliance &amp; Coalition for Professional Excellence
          </span>
          . As a metaphor, the cord — like the spinal cord — is what connects
          body to mind, person to community, decision to outcome.
        </p>
      </Reveal>

      <ol className="mt-10 space-y-8 border-l border-border pl-6 md:pl-8">
        {TIMELINE.map((item, i) => (
          <Reveal as="li" key={item.year} delay={i * 0.1} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-8 top-1.5 inline-flex h-4 w-4 items-center justify-center md:-left-10"
            >
              <span className="absolute inset-0 rounded-full bg-primary/15" />
              <span className="relative h-2 w-2 rounded-full bg-primary" />
            </span>
            <div className="text-xs font-medium uppercase tracking-widest text-secondary">
              {item.year}
            </div>
            <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
              {item.description}
            </p>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}
