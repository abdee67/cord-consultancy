import { Award, Globe2, Network } from "lucide-react"
import { Reveal } from "@/components/site/reveal"

const ITEMS = [
  {
    Icon: Award,
    title: "International Accreditation",
    description:
      "Recognized and listed in international partner directories, affr commitment to global standards of excellence in health and nutrition consultancy.",
  },
  {
    Icon: Globe2,
    title: "Global Nutrition Report",
    description:
      "Active member of the world's leading independent assessment of the state of global nutrition.",
  },
  {
    Icon: Network,
    title: "Share-Net Netherlands",
    description:
      "Like-minded member of the Dutch knowledge platform for Sexual and Reproductive Health and Rights.",
  },
]

export function Recognition() {
  return (
    <div>
      <Reveal>
        <div className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
          Recognition
        </div>
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Trusted by international and national institutions.
        </h2>
        <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
          Our visibility is our success journey. CORD Consultancy has been invited
          to &quot;Invest in Ethiopia,&quot; the Ethiopian Finance Forum, and the African
          Climate Summit in Addis Ababa.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {ITEMS.map(({ Icon, title, description }, i) => (
          <Reveal key={title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/12 text-secondary">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">
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
