import { ArrowUpRight } from "lucide-react"
import type { Project, ProjectCategory } from "./projects-data"

// Brand rule:
//   - Health (and related) → WHITE text on a deep-blue surface
//   - Nutrition (and related) → GREEN text on an off-white surface
//   - All other categories → BLUE text on an off-white surface
const HEALTH_CATEGORIES: ProjectCategory[] = ["Health"]
const NUTRITION_CATEGORIES: ProjectCategory[] = ["Nutrition"]

const BRAND_BLUE = "#0E4FA8"
const BRAND_GREEN = "#1E9E68"
const OFF_WHITE = "#E2E8F0"

export function ProjectCard({ project }: { project: Project }) {
  const { title, category, role, outcome } = project

  const healthMode = HEALTH_CATEGORIES.includes(category)
  const nutritionMode = NUTRITION_CATEGORIES.includes(category)

  // Surface + accent driven by the category mode
  const surface = healthMode ? BRAND_BLUE : OFF_WHITE
  const accent = healthMode ? "#FFFFFF" : nutritionMode ? BRAND_GREEN : BRAND_BLUE
  const bodyText = healthMode ? "text-white/85" : "text-slate-800"
  const outcomeText = healthMode ? "text-white" : "text-slate-900"
  const borderTone = healthMode ? "border-white/15" : "border-border/60"

  // Category pill — inverted on health so it pops against the blue surface
  const pillBg = healthMode ? "#FFFFFF" : accent
  const pillText = healthMode ? BRAND_BLUE : "#FFFFFF"
  const pillDot = healthMode ? BRAND_BLUE : "#FFFFFF"

  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden border-2 ${borderTone}`}
      style={{ backgroundColor: surface }}
    >
      {/* Soft tinted hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: healthMode
            ? "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)"
            : `linear-gradient(135deg, ${accent}14 0%, ${accent}08 100%)`,
        }}
      />

      <div className="relative flex items-center justify-between">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider"
          style={{ backgroundColor: pillBg, color: pillText }}
        >
          <span
            className="inline-block h-2 w-2 rounded-full animate-pulse"
            style={{ backgroundColor: pillDot }}
          />
          {category}
        </span>
        <ArrowUpRight
          className="h-5 w-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110"
          style={{ color: accent }}
        />
      </div>

      {/* Title in the rule-driven accent color */}
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
          <p className={`mt-1 ${bodyText}`}>{role}</p>
        </div>
        <div>
          <div
            className="text-[11px] font-bold uppercase tracking-widest"
            style={{ color: accent }}
          >
            Progress &amp; Outcome
          </div>
          <p className={`mt-1 font-medium ${outcomeText}`}>{outcome}</p>
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
