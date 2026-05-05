import Image from "next/image"
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
        <div className="absolute inset-x-0 top-0 h-[640px] brand-gradient opacity-60" />
        <div className="absolute inset-x-0 top-0 h-[640px] bg-gradient-to-b from-transparent via-background/40 to-background" />
        <div className="absolute -top-32 left-1/4 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-[-120px] top-40 h-[280px] w-[420px] rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            USAID-registered partner · Global Nutrition Report member
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            A coalition for{" "}
            <span className="brand-text-gradient">health, nutrition</span>, and
            development that works.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            CORD Consultancy partners with governments, NGOs, and private-sector
            leaders to deliver evidence-based assessments, training, and
            market-ready solutions across Ethiopia and beyond.
          </p>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
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
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium tracking-widest text-muted-foreground/80 uppercase">
            <span>USAID Partner</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span>Global Nutrition Report</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-block" />
            <span>Share-Net Netherlands</span>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-muted">
            <Image
              src="/images/hero-portrait.jpg"
              alt="A CORD Consultancy advisor in a bright modern office"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Floating mini stat card */}
          <div className="absolute -bottom-6 -left-4 hidden w-56 rounded-2xl border border-border bg-background/95 p-4 shadow-lg backdrop-blur sm:block">
            <div className="text-xs font-medium uppercase tracking-widest text-secondary">
              Engagements delivered
            </div>
            <div className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
              13+ projects
            </div>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Across SRH, AYH, ECD, nutrition, and healthcare innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
