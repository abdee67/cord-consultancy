import type { Service } from "./services-data"

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { title, description, Icon } = service
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_30px_-12px_rgba(56,170,212,0.25)]">
      {/* Icon tile */}
      <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-secondary/15 group-hover:text-secondary">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      {/* Subtle bottom accent on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-300 group-hover:scale-x-100"
      />
    </div>
  )
}
