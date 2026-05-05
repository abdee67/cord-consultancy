"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  /** Delay in seconds (use small staggers like 0.05 / 0.1 / 0.15 for grid items). */
  delay?: number
  /** Y offset in pixels for the initial state. Defaults to 40. */
  y?: number
  /** Animation duration in seconds. Defaults to 0.6. */
  duration?: number
  /** Fraction of the element that must be visible to trigger. Defaults to 0.2. */
  amount?: number
  /** Optional className passed to the underlying motion element. */
  className?: string
  /** Render as a different element when needed (e.g. "li", "section"). */
  as?: "div" | "section" | "article" | "li" | "ul" | "header" | "main"
}

/**
 * Reveal — a reusable, viewport-triggered fade + slide-up wrapper.
 *
 * - Triggers via Intersection Observer (Framer Motion `whileInView`)
 * - Animates only once (`viewport.once: true`)
 * - Subtle, ease-out motion
 * - Honors `prefers-reduced-motion`
 */
export function Reveal({
  children,
  delay = 0,
  y = 40,
  duration = 0.6,
  amount = 0.2,
  className,
  as = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : y,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : duration,
        ease: [0.16, 1, 0.3, 1], // smooth ease-out (cubic-bezier)
        delay: shouldReduceMotion ? 0 : delay,
      },
    },
  }

  const MotionTag = motion[as] as typeof motion.div

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "0px 0px -10% 0px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}
