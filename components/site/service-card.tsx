import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Service } from "./services-data"

interface ServiceCardProps {
  service: Service
  detailed?: boolean
  isLink?: boolean
}

// Brand rule:
//   - Health (and related) → WHITE text, displayed on a deep-blue surface
//   - Nutrition (and related) → GREEN text on an off-white surface
//   - All other services → BLUE text on an off-white surface
const isHealth = (slug: string) =>
  slug === "health" || slug.startsWith("health")
const isNutrition = (slug: string) =>
  slug === "nutrition" || slug.startsWith("nutrition")

export function ServiceCard({ service, detailed = false, isLink = false }: ServiceCardProps) {
  const { title, short, description, highlights, Icon, slug } = service

  const healthMode = isHealth(slug)
  const nutritionMode = isNutrition(slug)

  // Surface, accent and text tokens
  const surface = healthMode ? "#0E4FA8" : "#E2E8F0"
  const accent = healthMode ? "#FFFFFF" : nutritionMode ? "#1E9E68" : "#0E4FA8"
  const bodyText = healthMode ? "text-white/90" : "text-slate-700"
  const listText = healthMode ? "text-white" : "text-slate-800"
  const borderTone = healthMode ? "border-white/15" : "border-border/60"

  // Icon tile sits on top of an inverse tone so it stays prominent
  const iconTileBg = healthMode ? "#FFFFFF" : accent
  const iconTileFg = healthMode ? "#0E4FA8" : "#FFFFFF"

  const content = (
    <div
      className={`group relative flex h-full flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 ${borderTone} overflow-hidden`}
      style={{ backgroundColor: surface }}
    >
      {/* Soft tinted hover overlay (subtle on dark, soft tint on light) */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: healthMode
            ? "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)"
            : `linear-gradient(135deg, ${accent}14 0%, ${accent}08 100%)`,
        }}
      />

      {/* Icon tile */}
      <div
        className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
        style={{ backgroundColor: iconTileBg }}
      >
        <Icon className="h-7 w-7" strokeWidth={1.75} style={{ color: iconTileFg }} />
      </div>

      {/* Title in the rule-driven accent color */}
      <h3
        className="relative text-xl font-bold tracking-tight"
        style={{ color: accent }}
      >
        {title}
      </h3>

      <p className={`relative mt-3 text-sm leading-relaxed ${bodyText} flex-grow`}>
        {detailed ? description : short}
      </p>

      {detailed && (
        <ul className="relative mt-5 space-y-3">
          {highlights.map((h) => (
            <li
              key={h}
              className={`flex items-start gap-2 text-sm leading-relaxed ${listText}`}
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 flex-none"
                strokeWidth={3}
                style={{ color: accent }}
              />
              {h}
            </li>
          ))}
        </ul>
      )}

      {isLink && (
        <div
          className="relative mt-6 flex items-center gap-2 text-sm font-semibold"
          style={{ color: accent }}
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
        </div>
      )}

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
    </div>
  )

  if (isLink && slug) {
    return <Link href={`/services/${slug}`}>{content}</Link>
  }

  return content
}
