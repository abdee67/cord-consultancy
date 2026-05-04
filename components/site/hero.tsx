import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Very subtle brand gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-x-0 top-0 h-[520px] brand-gradient opacity-60" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-transparent via-background/40 to-background" />
        {/* Soft blue blur */}
        <div className="absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        {/* Soft green blur */}
        <div className="absolute right-[-120px] top-40 h-[280px] w-[420px] rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:px-10 md:pb-32 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            Now accepting Q3 engagements
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Strategic clarity for{" "}
            <span className="brand-text-gradient">complex decisions</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            We partner with leadership teams to turn ambition into focused
            strategy, measurable execution, and durable growth.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group h-12 rounded-full bg-primary px-6 text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              <Link href="/contact">
                Start a conversation
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-12 rounded-full px-6 text-foreground hover:bg-muted"
            >
              <Link href="/services">Explore services</Link>
            </Button>
          </div>

          {/* Trust strip */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs font-medium tracking-widest text-muted-foreground/80 uppercase">
            <span>Fortune 500</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span>Series B–D Scaleups</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span>Public Sector</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span>Private Equity</span>
          </div>
        </div>
      </div>
    </section>
  )
}
