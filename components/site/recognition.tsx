import { Award, Globe2, Network } from "lucide-react"

const ITEMS = [
  {
    Icon: Award,
    title: "USAID Partner",
    description:
      "Accepted and registered as a USAID partner, listed in the official USAID partner directory.",
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
      <div className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
        Recognition
      </div>
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Trusted by international and national institutions.
      </h2>
      <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
        Our visibility is our success journey. CORD Consultancy has been invited
        to "Invest in Ethiopia," the Ethiopian Finance Forum, and the African
        Climate Summit in Addis Ababa.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {ITEMS.map(({ Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-card p-6"
          >
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
        ))}
      </div>
    </div>
  )
}
