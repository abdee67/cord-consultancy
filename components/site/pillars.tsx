import { Link2, HeartHandshake, Sprout, Compass } from "lucide-react"
import { Reveal } from "@/components/site/reveal"

const PILLARS = [
  {
    title: "Trust in the CORD of Connection",
    description:
      "Just as the spinal cord connects body and mind, we trust in nutrition and care to connect us emotionally, spiritually, and physically across generations.",
    Icon: Link2,
  },
  {
    title: "Emotional, Spiritual & Nutritional Integration",
    description:
      "True wellness goes beyond the physical. We nurture the emotional and spiritual health of each person, recognizing they are inseparable from nutrition and well-being.",
    Icon: HeartHandshake,
  },
  {
    title: "Interconnectedness of Life",
    description:
      "Health begins at the roots of our body's interconnected systems. Nutrition is the foundation of life — nurturing harmony from conception to age.",
    Icon: Sprout,
  },
  {
    title: "Commitment to Development & Sustainability",
    description:
      "We advance human development through personalized, compassionate solutions rooted in trust — fostering sustainable growth for individuals and communities.",
    Icon: Compass,
  },
]

export function Pillars() {
  return (
    <div>
      <Reveal>
        <div className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
          Our pillars
        </div>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Four pillars guide everything we do.
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {PILLARS.map(({ title, description, Icon }, i) => (
          <Reveal key={title} delay={i * 0.08}>
            <div className="group relative h-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-secondary/15 group-hover:text-secondary">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
