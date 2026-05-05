/**
 * CORD Nutrition and Health Trading PLC — Organogram.
 *
 * Hierarchy:
 *   Board
 *    └─ Managing Director
 *         ├─ Strategic & Legal Advisor (side branch)
 *         └─ Communication & Partnership Deputy Director
 *              ├─ Administration & Finance Manager
 *              │     ├─ Admin & Human Resources Assistant
 *              │     ├─ Finance Officer
 *              │     └─ Cash and Accounting Assistant
 *              ├─ Program Manager
 *              │     ├─ Health & Nutrition Consultancy Officer
 *              │     ├─ Social Affairs Consultancy Officer
 *              │     ├─ Hotel and Tourism Consultancy Officer
 *              │     └─ Management Consultancy Officer
 *              └─ MEARL Manager
 *                    ├─ Research, Knowledge Management & Learning Officer
 *                    └─ Monitoring, Reporting & Evaluation Officer
 */

const COLUMNS = [
  {
    manager: "Administration & Finance Manager",
    reports: [
      "Admin & Human Resources Assistant",
      "Finance Officer",
      "Cash and Accounting Assistant",
    ],
  },
  {
    manager: "Program Manager",
    reports: [
      "Health & Nutrition Consultancy Officer",
      "Social Affairs Consultancy Officer",
      "Hotel and Tourism Consultancy Officer",
      "Management Consultancy Officer",
    ],
  },
  {
    manager: "MEARL Manager",
    reports: [
      "Research, Knowledge Management & Learning Officer",
      "Monitoring, Reporting & Evaluation Officer",
    ],
  },
]

export function OrgChart() {
  return (
    <div>
      <div className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
        Organizational structure
      </div>
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Organogram — CORD Nutrition and Health Trading PLC
      </h2>
      <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
        Governed as a private limited company with a Board, Managing Director,
        and three operating verticals — Administration & Finance, Program, and
        Monitoring, Evaluation, Accountability, Research & Learning (MEARL).
      </p>

      <div className="mt-12 rounded-3xl border border-border bg-primary/[0.04] p-6 md:p-10">
        {/* Board */}
        <div className="mx-auto flex max-w-[220px] justify-center">
          <Node label="Board" tone="primary" />
        </div>

        <Connector />

        {/* Managing Director */}
        <div className="mx-auto flex max-w-[260px] justify-center">
          <Node label="Managing Director" tone="primary" />
        </div>

        {/* MD → Strategic Advisor (side) + Deputy Director (down) */}
        <div className="mx-auto mt-4 grid max-w-3xl items-start gap-4 md:grid-cols-[1fr_auto_1fr]">
          {/* left: Strategic Advisor */}
          <div className="flex justify-center md:justify-end">
            <div className="flex items-center gap-3">
              <Node label="Strategic & Legal Advisor" tone="muted" />
              <span className="hidden h-px w-8 bg-border md:block" />
            </div>
          </div>

          {/* center: vertical line */}
          <span className="mx-auto hidden h-full w-px bg-border md:block" />

          {/* right: spacer for symmetry */}
          <div className="hidden md:block" />
        </div>

        <Connector compact />

        {/* Communication & Partnership Deputy Director */}
        <div className="mx-auto flex max-w-sm justify-center">
          <Node
            label="Communication & Partnership Deputy Director"
            tone="primary"
          />
        </div>

        <Connector />

        {/* Three managers */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-6">
          {COLUMNS.map((col) => (
            <div key={col.manager} className="flex flex-col items-stretch">
              <Node label={col.manager} tone="secondary" />
              {/* vertical line linking manager to first report */}
              <span className="mx-auto h-4 w-px bg-border" />
              <ul className="flex flex-col gap-2.5">
                {col.reports.map((report, i) => (
                  <li key={report} className="relative">
                    {/* connector tick */}
                    {i > 0 && (
                      <span className="absolute -top-2.5 left-1/2 h-2.5 w-px -translate-x-1/2 bg-border" />
                    )}
                    <Node label={report} small />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Connector({ compact = false }: { compact?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={[
        "mx-auto w-px bg-border",
        compact ? "h-4" : "h-6",
      ].join(" ")}
    />
  )
}

function Node({
  label,
  tone,
  small = false,
}: {
  label: string
  tone?: "primary" | "secondary" | "muted"
  small?: boolean
}) {
  const toneClasses =
    tone === "primary"
      ? "border-primary/30 bg-primary/10 text-primary-foreground/0"
      : tone === "secondary"
        ? "border-secondary/40 bg-secondary/10"
        : tone === "muted"
          ? "border-border bg-card"
          : "border-border bg-card"

  return (
    <div
      className={[
        "w-full rounded-xl border text-center transition-colors",
        small ? "px-3 py-2.5" : "px-4 py-3.5",
        toneClasses,
      ].join(" ")}
    >
      <div
        className={[
          "font-semibold tracking-tight text-foreground",
          small ? "text-[12.5px] leading-snug" : "text-sm leading-snug",
        ].join(" ")}
      >
        {label}
      </div>
    </div>
  )
}
