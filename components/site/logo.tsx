import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  showWordmark?: boolean
}

/**
 * CORD Consultancy logo.
 *
 * The mark is a soft blue "C" arc embracing two interlocking green figures —
 * a minimal nod to the original brand description: "two stylized figures in
 * green with a blue C and wheat motif". A small wheat-stalk accent sits at
 * the lower right of the arc.
 */
export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Soft tinted disc backdrop */}
        <circle cx="20" cy="20" r="19" className="fill-primary/8" />

        {/* Blue "C" arc — open on the right */}
        <path
          d="M30 11 A12 12 0 1 0 30 29"
          className="stroke-primary"
          strokeWidth="3.25"
          strokeLinecap="round"
          fill="none"
        />

        {/* Two interlocking green figures inside the C */}
        {/* Left figure: head + shoulders */}
        <circle cx="16.5" cy="16.5" r="2.6" className="fill-secondary" />
        <path
          d="M11.5 25.5 C 12.5 21.5, 20.5 21.5, 21.5 25.5"
          className="stroke-secondary"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right figure: head + shoulders, slightly offset and overlapping */}
        <circle cx="22.5" cy="15.5" r="2.6" className="fill-secondary/85" />
        <path
          d="M17.5 24.5 C 18.5 20.5, 26.5 20.5, 27.5 24.5"
          className="stroke-secondary/85"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Wheat-stalk accent */}
        <path
          d="M32 30 L34 26"
          className="stroke-secondary"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M32.6 28.4 L34.4 28.6 M31.6 29.6 L33.4 29.8"
          className="stroke-secondary"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>

      {showWordmark && (
        <span className="flex items-baseline gap-1.5 text-[17px] font-semibold tracking-tight text-foreground">
          CORD
          <span className="text-muted-foreground font-normal">Consultancy</span>
        </span>
      )}
    </div>
  )
}
