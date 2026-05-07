import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width hero image */}
      <div className="relative h-[580px] w-full md:h-[680px] lg:h-[720px]">
        <Image
          src="/images/hero-business-city.jpg"
          alt="Business professionals and city skyline — CORD Consultancy"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay: dark teal gradient for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0d4a4a]/85 via-[#0d4a4a]/60 to-transparent"
        />

        {/* Hero content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2ECC8A]/80" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2ECC8A]" />
                </span>
                USAID-registered partner · Global Nutrition Report member
              </div>

              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                A coalition for{" "}
                <span className="text-[#4DC8E8]">health, nutrition</span>
                {", "}
                and development that works.
              </h1>

              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/80 md:text-lg">
                CORD Consultancy partners with governments, NGOs, and
                private-sector leaders to deliver evidence-based assessments,
                training, and market-ready solutions across Ethiopia and beyond.
              </p>

              <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="group h-12 rounded-full bg-[#2ECC8A] px-6 text-white shadow-sm transition-all hover:bg-[#2ECC8A]/90 hover:shadow-md"
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
                  className="h-12 rounded-full border border-white/30 px-6 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/services">Explore services</Link>
                </Button>
              </div>

              {/* Trust strip */}
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-medium tracking-widest text-white/60 uppercase">
                <span>USAID Partner</span>
                <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
                <span>Global Nutrition Report</span>
                <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
                <span>Share-Net Netherlands</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stat card — bottom right */}
        <div className="absolute bottom-6 right-6 hidden w-56 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md sm:block">
          <div className="text-xs font-medium uppercase tracking-widest text-[#4DC8E8]">
            Engagements delivered
          </div>
          <div className="mt-1 text-2xl font-bold tracking-tight text-white">
            13+ projects
          </div>
          <p className="mt-1 text-xs leading-relaxed text-white/70">
            Across SRH, AYH, ECD, nutrition, and healthcare innovation.
          </p>
        </div>
      </div>
    </section>
  )
}
