const DOMAINS = [
  {
    name: "Health",
    description:
      "Health system strengthening, SRHR, maternal & adolescent health.",
  },
  {
    name: "Nutrition",
    description:
      "Programming, BCC, school & community nutrition, GMP guidance.",
  },
  {
    name: "Social Affairs",
    description:
      "Social protection, gender & youth empowerment, community engagement.",
  },
  {
    name: "Management",
    description:
      "Strategy, governance, organizational development, PMO setup.",
  },
  {
    name: "Hotel & Tourism",
    description:
      "Feasibility, hospitality operations, brand & guest experience.",
  },
]

export function OrgChart() {
  return (
    <div>
      <div className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
        Organizational structure
      </div>
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        A senior core team supported by roving specialists.
      </h2>
      <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
        Governed as a private limited company with an executive leadership team,
        a strategic advisory board, and a robust risk-management framework.
        Female representation across leadership is{" "}
        <span className="font-medium text-foreground">67%</span>.
      </p>

      <div className="mt-12">
        {/* Top: Leadership */}
        <div className="mx-auto max-w-md">
          <Node
            label="Executive Leadership"
            sub="CEO · Strategic Advisory Board"
            tone="primary"
          />
        </div>

        {/* Connectors */}
        <div className="relative mx-auto mt-6 hidden h-10 max-w-5xl md:block">
          <div className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-border" />
          <div className="absolute left-[10%] right-[10%] top-5 h-px bg-border" />
          <div className="absolute left-[10%] top-5 h-5 w-px bg-border" />
          <div className="absolute left-[30%] top-5 h-5 w-px bg-border" />
          <div className="absolute left-1/2 top-5 h-5 w-px -translate-x-1/2 bg-border" />
          <div className="absolute left-[70%] top-5 h-5 w-px bg-border" />
          <div className="absolute right-[10%] top-5 h-5 w-px bg-border" />
        </div>

        {/* Domains */}
        <div className="mt-6 grid gap-3 md:grid-cols-5 md:gap-4">
          {DOMAINS.map((d) => (
            <Node key={d.name} label={d.name} sub={d.description} />
          ))}
        </div>

        {/* Connectors */}
        <div className="relative mx-auto mt-6 hidden h-10 max-w-5xl md:block">
          <div className="absolute left-[10%] top-0 h-5 w-px bg-border" />
          <div className="absolute left-[30%] top-0 h-5 w-px bg-border" />
          <div className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-border" />
          <div className="absolute left-[70%] top-0 h-5 w-px bg-border" />
          <div className="absolute right-[10%] top-0 h-5 w-px bg-border" />
          <div className="absolute left-[10%] right-[10%] top-5 h-px bg-border" />
          <div className="absolute left-1/2 top-5 h-5 w-px -translate-x-1/2 bg-border" />
        </div>

        {/* Shared services */}
        <div className="mx-auto mt-6 max-w-xl">
          <Node
            label="Roving specialists & shared services"
            sub="Monitoring & Evaluation · Training & Curriculum · Digital Platforms"
            tone="secondary"
          />
        </div>
      </div>
    </div>
  )
}

function Node({
  label,
  sub,
  tone,
}: {
  label: string
  sub: string
  tone?: "primary" | "secondary"
}) {
  return (
    <div
      className={[
        "rounded-2xl border bg-card p-5 text-center transition-colors",
        tone === "primary"
          ? "border-primary/30 bg-primary/5"
          : tone === "secondary"
            ? "border-secondary/30 bg-secondary/5"
            : "border-border hover:border-primary/30",
      ].join(" ")}
    >
      <div className="text-sm font-semibold tracking-tight text-foreground">
        {label}
      </div>
      <div className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
        {sub}
      </div>
    </div>
  )
}
