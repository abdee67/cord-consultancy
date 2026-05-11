import { Award, Globe2, Network } from "lucide-react"
import { Reveal } from "@/components/site/reveal"

const ITEMS = [
  {
    Icon: Award,
    title: "International Accreditation",
    description:
      "Recognized and listed in international partner directories, affirming our commitment to global standards of excellence in health and nutrition consultancy.",
  },
  {
    Icon: Globe2,
    title: "Global Nutrition Network",
    description:
      "Active contributor to the leading independent assessment of the state of global nutrition, helping shape evidence-based dialogue and accountability.",
  },
  {
    Icon: Network,
    title: "SRHR Knowledge Platform",
    description:
      "Engaged member of a leading international knowledge platform for Sexual and Reproductive Health and Rights, sharing practice across the global community.",
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
        {ITEMS.map(({ Icon, title, description }, i) => {
          // Alternate blue / green / blue across the three cards
          const accent = i === 1 ? "#1E9E68" : "#0E4FA8"
          const tint = i === 1 ? "#2ECC8A" : "#0E4FA8"
          return (
            <Reveal key={title} delay={i * 0.08}>
              <div
                className="h-full rounded-2xl border-2 border-border/60 p-6 transition-all hover:shadow-md"
                style={{ backgroundColor: "#E2E8F0" }}
              >
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${tint}1F`, color: accent }}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3
                  className="mt-5 text-base font-bold tracking-tight"
                  style={{ color: accent }}
                >
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-800">
                  {description}
                </p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
