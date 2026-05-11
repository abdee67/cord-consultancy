import { ArrowUpRight } from "lucide-react"
import type { Project, ProjectCategory } from "./projects-data"

// Each category keeps its identity through an accent color used on the
// title, category pill, role/outcome labels and the bottom accent bar.
// All cards share a darker off-white surface so colored titles read clearly.
// Palette is restricted to brand deep-blue and brand green.
const CATEGORY_ACCENTS: Record<ProjectCategory, string> = {
  "Health": "#0E4FA8",
  "Nutrition": "#2ECC8A",
  "Social Affairs": "#0E4FA8",
  "Management": "#2ECC8A",
  "Capacity Building": "#2ECC8A",
}

export function ProjectCard({ project }: { project: Project }) {
  const { title, category, role, outcome } = project
  const accent = CATEGORY_ACCENTS[category]

  return (
    <article
      className="group relative flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden border-2 border-border/60"
      style={{ backgroundColor: "#E2E8F0" }}
    >
      {/* Soft tinted hover overlay in the category accent */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${accent}14 0%, ${accent}08 100%)`,
        }}
      />

      <div className="relative flex items-center justify-between">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white"
          style={{ backgroundColor: accent }}
        >
          <span className="inline-block h-2 w-2 rounded-full bg-white animate-pulse" />
          {category}
        </span>
        <ArrowUpRight
          className="h-5 w-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110"
          style={{ color: accent }}
        />
      </div>

      {/* Colored title */}
      <h3
        className="relative mt-5 text-xl font-bold tracking-tight"
        style={{ color: accent }}
      >
        {title}
      </h3>

      <div className="relative mt-5 space-y-4 text-sm leading-relaxed flex-grow">
        <div>
          <div
            className="text-[11px] font-bold uppercase tracking-widest"
            style={{ color: accent }}
          >
            Activities Accomplished
          </div>
          <p className="mt-1 text-slate-800">{role}</p>
        </div>
        <div>
          <div
            className="text-[11px] font-bold uppercase tracking-widest"
            style={{ color: accent }}
          >
            Progress &amp; Outcome
          </div>
          <p className="mt-1 text-slate-900 font-medium">{outcome}</p>
        </div>
      </div>

      {/* Hover border accent */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ borderColor: accent }}
      />

      {/* Bottom accent bar */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-b-2xl"
        style={{ backgroundColor: accent }}
      />
    </article>
  )
}
