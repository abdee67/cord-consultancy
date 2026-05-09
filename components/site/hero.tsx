"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

const HERO_SLIDES = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5936127106884504542_121-685VqWxbIIt91ZhAS8Jlog7e2wjQux.jpg",
    title: "Evidence-Based Training",
    subtitle: "Building Capacity for Excellence",
    description: "Delivering world-class training sessions to professionals across health, nutrition, and development sectors.",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5902267182450674529_121-eNFQegoEvAP1jvAY3dJXoswVdAWeVq.jpg",
    title: "Coalition for Impact",
    subtitle: "Empowering Communities Together",
    description: "Bringing stakeholders together to create lasting change in health and nutrition outcomes.",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5884210066192713498_121-pxyl7UeyIsuiRJRfYm9aNcWXZ13kAw.jpg",
    title: "Strategic Partnerships",
    subtitle: "Collaboration Drives Results",
    description: "Working with government bodies, NGOs, and private sector leaders to advance development goals.",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5888793921578976886_121-8h0YxjuSbyFd7Z7rxkBpQMI7bQEdrR.jpg",
    title: "Hands-On Learning",
    subtitle: "Practical Skills Development",
    description: "Our training programs combine theory with hands-on practice for immediate real-world application.",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5902267182450674535_121-nomatzHnk1y60y0ZAAWoC4h04qk56M.jpg",
    title: "Youth Empowerment",
    subtitle: "Investing in Tomorrow's Leaders",
    description: "Dedicated programs to build the next generation of health and nutrition professionals.",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5884210066192713496_121-gRaEGABQwSJEB1dM74Yl2cmvXchOos.jpg",
    title: "Health Systems Strengthening",
    subtitle: "Building Resilient Institutions",
    description: "Comprehensive approaches to improve health service delivery and outcomes across Ethiopia.",
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const goToSlide = useCallback((index: number, dir: "left" | "right") => {
    if (isTransitioning) return
    setDirection(dir)
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % HERO_SLIDES.length, "right")
  }, [current, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length, "left")
  }, [current, goToSlide])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const slide = HERO_SLIDES[current]

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[600px] w-full md:h-[700px] lg:h-[750px]">
        {/* Background images with transition */}
        {HERO_SLIDES.map((s, i) => (
          <div
            key={i}
            className={cn(
              "absolute inset-0 transition-all duration-700 ease-out",
              i === current
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            )}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0d4a4a]/90 via-[#0d4a4a]/70 to-[#0d4a4a]/40"
        />

        {/* Animated pattern overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Hero content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="max-w-2xl">
              {/* Badge */}
              <div
                className={cn(
                  "mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm transition-all duration-500",
                  isTransitioning ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
                )}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2ECC8A]/80" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2ECC8A]" />
                </span>
                Internationally Accredited &middot; Global Nutrition Report Member
              </div>

              {/* Subtitle */}
              <div
                className={cn(
                  "mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#4DC8E8] transition-all duration-500 delay-75",
                  isTransitioning
                    ? direction === "right"
                      ? "opacity-0 translate-x-8"
                      : "opacity-0 -translate-x-8"
                    : "opacity-100 translate-x-0"
                )}
              >
                {slide.subtitle}
              </div>

              {/* Title */}
              <h1
                className={cn(
                  "text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl transition-all duration-500 delay-100",
                  isTransitioning
                    ? direction === "right"
                      ? "opacity-0 translate-x-12"
                      : "opacity-0 -translate-x-12"
                    : "opacity-100 translate-x-0"
                )}
              >
                {slide.title}
              </h1>

              {/* Description */}
              <p
                className={cn(
                  "mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/85 md:text-lg transition-all duration-500 delay-150",
                  isTransitioning
                    ? direction === "right"
                      ? "opacity-0 translate-x-16"
                      : "opacity-0 -translate-x-16"
                    : "opacity-100 translate-x-0"
                )}
              >
                {slide.description}
              </p>

              {/* CTA Buttons */}
              <div
                className={cn(
                  "mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center transition-all duration-500 delay-200",
                  isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                )}
              >
                <Button
                  asChild
                  size="lg"
                  className="group h-12 rounded-full bg-[#2ECC8A] px-6 text-white shadow-lg transition-all hover:bg-[#2ECC8A]/90 hover:shadow-xl hover:scale-105"
                >
                  <Link href="/contact">
                    Start a conversation
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="h-12 rounded-full border border-white/30 px-6 text-white hover:bg-white/10 hover:text-white hover:border-white/50"
                >
                  <Link href="/services">Explore services</Link>
                </Button>
              </div>

              {/* Trust strip */}
              <div
                className={cn(
                  "mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium tracking-widest text-white/70 uppercase transition-all duration-500 delay-300",
                  isTransitioning ? "opacity-0" : "opacity-100"
                )}
              >
                <span>Internationally Accredited</span>
                <span className="hidden h-1 w-1 rounded-full bg-white/50 sm:inline-block" />
                <span>Global Nutrition Report</span>
                <span className="hidden h-1 w-1 rounded-full bg-white/50 sm:inline-block" />
                <span>Share-Net Netherlands</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute inset-y-0 left-4 flex items-center md:left-6">
          <button
            onClick={prevSlide}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#0d4a4a] hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 flex items-center md:right-6">
          <button
            onClick={nextSlide}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#0d4a4a] hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i, i > current ? "right" : "left")}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === current
                  ? "w-8 bg-[#2ECC8A]"
                  : "w-2 bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Floating stat card */}
        <div className="absolute bottom-8 right-6 hidden w-60 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-md lg:block">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#4DC8E8]">
            Engagements delivered
          </div>
          <div className="mt-1 text-3xl font-bold tracking-tight text-white">
            13+ projects
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/80">
            Across SRH, AYH, ECD, nutrition, and healthcare innovation.
          </p>
        </div>
      </div>
    </section>
  )
}
