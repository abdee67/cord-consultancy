import { Sparkle } from "lucide-react"

const PARTNERS = [
  "USAID",
  "Global Nutrition Report",
  "Share-Net Netherlands",
  "FGAE",
  "SOS Children's Villages Ethiopia",
  "OICE",
  "SCOPUS",
  "Aleph Medical & Health Trading",
  "Fetan Transport & Logistics",
  "Life Addis Specialty Center",
  "Addis Ababa Health Bureau",
  "Commercial Bank of Ethiopia",
]

export function BrandStrip() {
  return (
    <section
      aria-labelledby="brand-strip-heading"
      className="relative border-y border-border/60 bg-muted/40"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
        <h2
          id="brand-strip-heading"
          className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
        >
          Trusted by partners across the public, private, and development sectors
        </h2>

        {/* Marquee viewport */}
        <div className="group relative overflow-hidden">
          {/* Edge fade overlays */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-muted/40 to-transparent md:w-32"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-muted/40 to-transparent md:w-32"
          />

          {/* Track: two identical halves create a seamless 0% → -50% loop */}
          <div className="flex w-max animate-marquee items-center will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            <BrandRow />
            <BrandRow ariaHidden />
          </div>
        </div>
      </div>
    </section>
  )
}

function BrandRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10 md:gap-14 md:pr-14"
    >
      {PARTNERS.map((name, i) => (
        <li
          key={`${name}-${i}-${ariaHidden ? "b" : "a"}`}
          className="flex shrink-0 items-center gap-3"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full brand-gradient ring-1 ring-border">
            <Sparkle
              className="h-3.5 w-3.5 text-primary"
              strokeWidth={2}
              aria-hidden="true"
            />
          </span>
          <span className="whitespace-nowrap text-base font-semibold tracking-tight text-foreground/85 md:text-lg">
            {name}
          </span>
          <span
            aria-hidden="true"
            className="ml-10 hidden h-1.5 w-1.5 rounded-full bg-secondary/60 md:ml-14 md:inline-block"
          />
        </li>
      ))}
    </ul>
  )
}
