import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Service } from "./services-data"

interface ServiceCardProps {
  service: Service
  detailed?: boolean
  isLink?: boolean
}

export function ServiceCard({ service, detailed = false, isLink = false }: ServiceCardProps) {
  const { title, short, description, highlights, Icon, color, bgColor, borderColor, slug } = service
  
  // White cards need dark text, colored cards need white text
  const isWhiteCard = bgColor === "#FFFFFF"
  const textColor = isWhiteCard ? "#1F2937" : "#FFFFFF"
  const iconBg = isWhiteCard ? "#4DC8E8" : bgColor
  const accentColor = isWhiteCard ? "#4DC8E8" : "#FFFFFF"
  
  const content = (
    <div 
      className="group relative flex h-full flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 overflow-hidden"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
    >
      {/* Decorative gradient overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: isWhiteCard 
            ? "linear-gradient(135deg, rgba(77, 200, 232, 0.05) 0%, rgba(46, 204, 138, 0.05) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)"
        }}
      />
      
      {/* Icon tile with theme color */}
      <div
        className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
        style={{ backgroundColor: iconBg }}
      >
        <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
      </div>

      <h3 className="relative text-xl font-bold tracking-tight" style={{ color: textColor }}>
        {title}
      </h3>
      <p 
        className="relative mt-3 text-sm leading-relaxed flex-grow"
        style={{ color: isWhiteCard ? "#6B7280" : "rgba(255,255,255,0.9)" }}
      >
        {detailed ? description : short}
      </p>

      {detailed && (
        <ul className="relative mt-5 space-y-3">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-sm leading-relaxed"
              style={{ color: isWhiteCard ? "#374151" : "rgba(255,255,255,0.95)" }}
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
