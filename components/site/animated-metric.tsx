"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type AnimatedMetricProps = {
  value: number
  label: string
  suffix?: string
  duration?: number
  accent?: string
  className?: string
  valueClassName?: string
  labelClassName?: string
}

type FloatingMetricBadgeProps = AnimatedMetricProps & {
  eyebrow?: string
  body?: string
  dark?: boolean
}

function useCountUp(value: number, duration = 2200) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const startCounting = () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }

      setDisplay(0)
      const startedAt = performance.now()

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(Math.round(value * eased))

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick)
        }
      }

      frameRef.current = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting()
        } else if (frameRef.current) {
          cancelAnimationFrame(frameRef.current)
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [duration, value])

  return { display, ref }
}

export function AnimatedMetric({
  value,
  label,
  suffix = "",
  duration,
  accent = "#0E4FA8",
  className,
  valueClassName,
  labelClassName,
}: AnimatedMetricProps) {
  const { display, ref } = useCountUp(value, duration)

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_18px_60px_-28px_rgba(14,79,168,0.55)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-26px_rgba(14,79,168,0.65)]",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ backgroundColor: accent }}
      />
      <div
        className={cn("text-4xl font-extrabold tracking-tight", valueClassName)}
        style={{ color: accent }}
      >
        {display}
        {suffix}
      </div>
      <div
        className={cn(
          "mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-700",
          labelClassName
        )}
      >
        {label}
      </div>
    </div>
  )
}

export function FloatingMetricBadge({
  value,
  suffix = "",
  label,
  eyebrow,
  body,
  duration,
  accent = "#2ECC8A",
  dark = true,
  className,
}: FloatingMetricBadgeProps) {
  const { display, ref } = useCountUp(value, duration)

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-2xl border p-5 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]",
        dark
          ? "border-white/30 bg-white/10 text-white hover:bg-white/15"
          : "border-white/70 bg-white/90 text-slate-950 hover:bg-white",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-20 blur-2xl transition-transform duration-500 group-hover:scale-125"
        style={{ backgroundColor: accent }}
      />
      {eyebrow && (
        <div className="relative flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full animate-pulse"
            style={{ backgroundColor: accent }}
          />
          <div
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: accent }}
          >
            {eyebrow}
          </div>
        </div>
      )}
      <div className="relative mt-2 text-3xl font-extrabold tracking-tight">
        {display}
        {suffix}{" "}
        <span className={cn("text-lg font-medium", dark ? "text-white/80" : "text-slate-600")}>
          {label}
        </span>
      </div>
      {body && (
        <p className={cn("relative mt-2 text-sm leading-relaxed", dark ? "text-white/85" : "text-slate-700")}>
          {body}
        </p>
      )}
    </div>
  )
}
