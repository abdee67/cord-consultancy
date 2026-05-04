import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  showWordmark?: boolean
}

/**
 * Brand logo: a minimal "ascending" mark made of two strokes
 * (light blue + green) with a clean wordmark.
 * Designed to scale cleanly in navbars, footers and hero sections.
 */
export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="8"
          className="fill-primary/10"
        />
        {/* Light blue ascending stroke */}
        <path
          d="M7 21 L13 14 L17 18"
          className="stroke-primary"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Green continuation stroke */}
        <path
          d="M17 18 L21 13 L25 9"
          className="stroke-secondary"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Endpoint dot */}
        <circle cx="25" cy="9" r="2" className="fill-secondary" />
      </svg>
      {showWordmark && (
        <span className="text-[17px] font-semibold tracking-tight text-foreground">
          Northveil
          <span className="text-muted-foreground font-normal"> Consulting</span>
        </span>
      )}
    </div>
  )
}
