import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Service } from "./services-data"

interface ServiceCardProps {
  service: Service
  detailed?: boolean
  isLink?: boolean
}

export function ServiceCard({ service, detailed = false, isLink = false }: ServiceCardProps) {
  const { title, short, description, highlights, Icon, color, slug } = service
  
  const content = (
    <div className={`group relative flex h-full flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-2`}
      style={{
        backgroundColor: `${color}15`,
        borderColor: color,
      }}
    >
      {/* Icon tile with theme color */}
      <div
        className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 text-white"
        style={{ backgroundColor: color }}
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>

      <h3 className="text-xl font-bold tracking-tight" style={{ color }}>
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground/75 flex-grow">
        {detailed ? description : short}
      </p>

      {detailed && (
        <ul className="mt-5 space-y-3">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-sm leading-relaxed text-foreground"
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 flex-none"
                strokeWidth={3}
                style={{ color }}
              />
              {h}
            </li>
          ))}
        </ul>
      )}

      {isLink && (
        <div className="mt-6 flex items-center gap-2 text-sm font-semibold" style={{ color }}>
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      )}

      {/* Bottom accent bar */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-b-2xl"
        style={{ backgroundColor: color }}
      />
    </div>
  )

  if (isLink && slug) {
    return <Link href={`/services/${slug}`}>{content}</Link>
  }

  return content
}
