import { ArrowUpRight } from "lucide-react"
import type { Project, ProjectCategory } from "./projects-data"

const CATEGORY_COLORS: Record<ProjectCategory, { bg: string; text: string; border: string; accent: string }> = {
  "Health": { bg: "#FFFFFF", text: "#1F2937", border: "#E5E7EB", accent: "#4DC8E8" },
  "Nutrition": { bg: "#2ECC8A", text: "#FFFFFF", border: "#2ECC8A", accent: "#FFFFFF" },
  "Social Affairs": { bg: "#4DC8E8", text: "#FFFFFF", border: "#4DC8E8", accent: "#FFFFFF" },
  "Management": { bg: "#8B5CF6", text: "#FFFFFF", border: "#8B5CF6", accent: "#FFFFFF" },
  "Capacity Building": { bg: "#F59E0B", text: "#FFFFFF", border: "#F59E0B", accent: "#FFFFFF" },
}

export function ProjectCard({ project }: { project: Project }) {
  const { title, client, category, role, outcome } = project
  const colors = CATEGORY_COLORS[category]
  const isWhite = colors.bg === "#FFFFFF"
  
  return (
    <article 
      className="group relative flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden border-2"
      style={{ 
        backgroundColor: colors.bg, 
        borderColor: colors.border,
      }}
    >
      {/* Decorative gradient overlay on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: isWhite 
            ? "linear-gradient(135deg, rgba(77, 200, 232, 0.08) 0%, rgba(46, 204, 138, 0.08) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)"
        }}
      />
      
      <div className="relative flex items-center justify-between">
        <span 
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider"
          style={{ 
            backgroundColor: isWhite ? colors.accent : "rgba(255,255,255,0.2)",
            color: isWhite ? "#FFFFFF" : "#FFFFFF"
          }}
        >
          <span 
            className="inline-block h-2 w-2 rounded-full animate-pulse"
            style={{ backgroundColor: isWhite ? "#FFFFFF" : colors.accent }}
          />
          {category}
        </span>
        <ArrowUpRight 
          className="h-5 w-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110" 
          style={{ color: isWhite ? colors.accent : "rgba(255,255,255,0.8)" }}
        />
      </div>

      <h3 
        className="relative mt-5 text-xl font-bold tracking-tight"
        style={{ color: colors.text }}
      >
        {title}
      </h3>
      <p 
        className="relative mt-1 text-xs font-semibold uppercase tracking-widest"
        style={{ color: isWhite ? "#6B7280" : "rgba(255,255,255,0.75)" }}
      >
        {client}
      </p>

      <div className="relative mt-5 space-y-4 text-sm leading-relaxed flex-grow">
        <div>
          <div 
            className="text-[11px] font-bold uppercase tracking-widest"
            style={{ color: isWhite ? colors.accent : "rgba(255,255,255,0.9)" }}
          >
            Our role
          </div>
          <p className="mt-1" style={{ color: isWhite ? "#4B5563" : "rgba(255,255,255,0.85)" }}>
            {role}
          </p>
        </div>
        <div>
          <div 
            className="text-[11px] font-bold uppercase tracking-widest"
            style={{ color: isWhite ? colors.accent : "rgba(255,255,255,0.9)" }}
          >
            Outcome
          </div>
          <p className="mt-1" style={{ color: isWhite ? "#374151" : "rgba(255,255,255,0.95)" }}>
            {outcome}
          </p>
        </div>
      </div>

      {/* Bottom accent bar */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-b-2xl"
        style={{ backgroundColor: colors.accent }}
      />
    </article>
  )
}
