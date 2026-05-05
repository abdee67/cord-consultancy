const PARTNERS = [
  { name: "USAID", mark: "USAID", tone: "primary" as const },
  { name: "Global Nutrition Report", mark: "GNR", tone: "secondary" as const },
  { name: "Share-Net Netherlands", mark: "SN", tone: "primary" as const },
  { name: "FGAE", mark: "FGAE", tone: "secondary" as const },
  { name: "SOS Children's Villages", mark: "SOS", tone: "primary" as const },
  { name: "OICE", mark: "OICE", tone: "secondary" as const },
  { name: "SCOPUS", mark: "SCO", tone: "primary" as const },
  { name: "Aleph Medical", mark: "AM", tone: "secondary" as const },
  { name: "Fetan Logistics", mark: "FT", tone: "primary" as const },
  { name: "Life Addis Specialty", mark: "LA", tone: "secondary" as const },
  { name: "Addis Ababa Health Bureau", mark: "AAHB", tone: "primary" as const },
  { name: "Commercial Bank of Ethiopia", mark: "CBE", tone: "secondary" as const },
]

export function BrandStrip() {
  return (
    <section
      aria-labelledby="brand-strip-heading"
      className="relative border-y border-border/60 bg-muted/40"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <h2
          id="brand-strip-heading"
          className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:mb-12"
        >
          Trusted by partners across the public, private, and development sectors
        </h2>

        {/* Marquee viewport */}
        <div className="group relative overflow-hidden">
          {/* Edge fade overlays */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-muted/60 to-transparent md:w-40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-muted/60 to-transparent md:w-40"
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
      className="flex shrink-0 items-start gap-10 pr-10 md:gap-14 md:pr-14"
    >
      {PARTNERS.map((p, i) => (
        <li
          key={`${p.name}-${i}-${ariaHidden ? "b" : "a"}`}
          className="flex w-32 shrink-0 flex-col items-center gap-3 md:w-40"
        >
          <PartnerMark mark={p.mark} tone={p.tone} />
          <span className="whitespace-nowrap text-center text-[13px] font-semibold tracking-tight text-foreground/85 md:text-sm">
            {p.name}
          </span>
        </li>
      ))}
    </ul>
  )
}

function PartnerMark({
  mark,
  tone,
}: {
  mark: string
  tone: "primary" | "secondary"
}) {
  // Logo-style monogram tile: rounded square with a subtle brand gradient
  // and a colored monogram. Visually consistent in lieu of real partner logos.
  const tint =
    tone === "primary"
      ? "from-primary/15 to-primary/5 text-primary ring-primary/20"
      : "from-secondary/15 to-secondary/5 text-secondary ring-secondary/20"

  // Constrain size — long marks like "AAHB" / "USAID" still fit cleanly.
  const fontSize =
    mark.length >= 5 ? "text-[11px]" : mark.length >= 4 ? "text-xs" : "text-sm"

  return (
    <span
      aria-hidden="true"
      className={[
        "relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ring-1 md:h-16 md:w-16",
        tint,
      ].join(" ")}
    >
      {/* Subtle inner highlight */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/50 to-transparent opacity-60" />
      <span
        className={[
          "relative font-bold uppercase tracking-tight",
          fontSize,
        ].join(" ")}
      >
        {mark}
      </span>
    </span>
  )
}
