import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  showWordmark?: boolean
  size?: number
}

/**
 * Official CORD Consultancy logo — two stylized figures (blue C + blue W
 * forms) filled with green wheat stalks, topped by two green circles.
 * Rendered from the official PNG asset to preserve brand fidelity.
 */
export function Logo({
  className,
  showWordmark = true,
  size = 40,
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/images/cord-logo.png"
        alt="CORD Consultancy"
        width={size}
        height={size}
        priority
        className="shrink-0 object-contain"
        style={{ width: size, height: size }}
      />
      {showWordmark && (
        <span className="flex items-baseline gap-1.5 text-[17px] font-semibold tracking-tight text-foreground">
          CORD
          <span className="text-muted-foreground font-normal">Consultancy</span>
        </span>
      )}
    </div>
  )
}
