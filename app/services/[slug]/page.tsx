'use client'

import { notFound } from "next/navigation"
import { SERVICES } from "@/components/site/services-data"
import { ServiceCard } from "@/components/site/service-card"
import { FinalCTA } from "@/components/site/final-cta"
import { Reveal } from "@/components/site/reveal"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params
  const service = SERVICES.find(s => s.slug === slug)

  if (!service) {
    notFound()
  }

  // Brand rule: health slug renders with a deep-blue surface and white text;
  // nutrition keeps green accents on off-white; all others use blue on off-white.
  const isHealth = service.slug === "health"
  const highlightSurface = isHealth ? "#0E4FA8" : "#E2E8F0"
  const highlightBorder = isHealth ? "rgba(255,255,255,0.18)" : `${service.color}33`
  const highlightTextClass = isHealth ? "text-white" : "text-slate-900"
  const highlightTickBg = isHealth ? "#FFFFFF" : service.color
  const highlightTickFg = isHealth ? "#0E4FA8" : "#FFFFFF"

  // Get related services (other services)
  const relatedServices = SERVICES.filter(s => s.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/50 pt-20 pb-16">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
          
          <Reveal>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: service.color }}>
                  <service.Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                {service.title}
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
                {service.short}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-6 md:px-10 py-16 md:py-24">
        <Reveal>
          <div className="space-y-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-lg leading-relaxed text-foreground/80">
                {service.description}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Key Components</h2>
              <div className="grid gap-4">
                {service.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-lg border-2 transition-all hover:shadow-md"
                    style={{ backgroundColor: highlightSurface, borderColor: highlightBorder }}
                  >
                    <div className="flex-shrink-0 flex items-start justify-center">
                      <div
                        className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-md"
                        style={{ backgroundColor: highlightTickBg, color: highlightTickFg }}
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className={`text-base font-semibold ${highlightTextClass}`}>
                        {highlight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24 border-t border-border/40">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12">Related Services</h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.1}>
                <ServiceCard service={s} detailed isLink />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  )
}
