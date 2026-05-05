import { ArrowUpRight } from "lucide-react"
import type { Project } from "./projects-data"

export function ProjectCard({ project }: { project: Project }) {
  const { title, client, category, role, outcome } = project
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_30px_-12px_rgba(56,170,212,0.25)]">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/30 bg-secondary/8 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-secondary">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
          {category}
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {client}
      </p>

      <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-widest text-foreground">
            Our role
          </div>
          <p className="mt-1">{role}</p>
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-widest text-foreground">
            Outcome
          </div>
          <p className="mt-1 text-foreground/80">{outcome}</p>
        </div>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-300 group-hover:scale-x-100"
      />
    </article>
  )
}
