import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
          {/* Soft brand wash */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 brand-gradient opacity-60"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Let&apos;s build a coalition for your next initiative.
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
              Tell us about your program, your community, or your venture. We
              respond within one business day with a focused proposal — no
              obligation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-border bg-background/80 px-6 text-foreground backdrop-blur hover:bg-background"
              >
                <Link href="/projects">See our work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
