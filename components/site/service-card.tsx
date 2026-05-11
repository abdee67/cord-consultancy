import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Service } from "./services-data"

interface ServiceCardProps {
  service: Service
  detailed?: boolean
  isLink?: boolean
}

export function ServiceCard({ service, detailed = false, isLink = false }: ServiceCardProps) {
  const { title, short, description, highlights, Icon, bgColor, slug } = service

  // All cards share a soft off-white surface so the colored title and icon
  // read clearly. Each service keeps its identity through the accent color
  // used on the title, icon tile, checkmarks, hover border and bottom bar.
  const accentColor = bgColor

  const content = (
    <div
      className="group relative flex h-full flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 border-border/60 overflow-hidden"
      style={{ backgroundColor: "#F1F5F9" }}
    >
      {/* Soft tinted hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${accentColor}0D 0%, ${accentColor}05 100%)`,
        }}
      />

      {/* Icon tile in the service's accent color */}
      <div
        className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
        style={{ backgroundColor: accentColor }}
      >
        <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
      </div>

      {/* Colored title */}
      <h3
        className="relative text-xl font-bold tracking-tight"
        style={{ color: accentColor }}
      >
        {title}
      </h3>

      <p className="relative mt-3 text-sm leading-relaxed text-foreground/70 flex-grow">
        {detailed ? description : short}
      </p>

      {detailed && (
        <ul className="relative mt-5 space-y-3">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-sm leading-relaxed text-foreground/85"
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 flex-none"
                strokeWidth={3}
                style={{ color: accentColor }}
              />
              {h}
            </li>
          ))}
        </ul>
      )}

      {isLink && (
        <div
          className="relative mt-6 flex items-center gap-2 text-sm font-semibold"
          style={{ color: accentColor }}
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
        </div>
      )}

      {/* Hover border accent */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ borderColor: accentColor }}
      />

      {/* Bottom accent bar */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-b-2xl"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  )

  if (isLink && slug) {
    return <Link href={`/services/${slug}`}>{content}</Link>
  }

  return content
}
