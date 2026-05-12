"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useCallback, useRef } from "react"
import { cn } from "@/lib/utils"
import { FloatingMetricBadge } from "./animated-metric"

const BRAND_BLUE = "#0E4FA8"

// Slide copy is drawn directly from CORD's mission, vision and the five core
// consultancy domains in the Capacity Statement and Business Portfolio.
// Slide accents alternate between brand green (#2ECC8A) and brand deep blue
// (#0E4FA8) only — no other hues are used across the project palette.
const HERO_SLIDES = [
  {
    image: "/images/hero-background.jpg",
    title: "Nutrition Roots, Healthier Generations",
    subtitle: "Health & Nutrition Consultancy",
    description:
      "We connect nutrition science, food systems, and family wellness into practical programs that improve health outcomes across Ethiopian communities.",
    accent: "#2ECC8A",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/community%20engagement-W63ynFkiZyqrdsx6IWGTcLVcOHtCz8.jpg",
    title: "Coalitions Built Where Life Is Lived",
    subtitle: "Social Affairs & Community",
    description:
      "Field-based assessments, household engagement and stakeholder mapping ground every intervention in the lived realities of communities — the foundation of empowerment frameworks and policy advocacy that actually move the needle.",
    accent: "#0E4FA8",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youth%20engagement%201-4rYOvYjMiveFvAan2eGE6YXrknS69c.jpg",
    title: "Digital Skills, Local Opportunities",
    subtitle: "Digital & Creative Economy",
    description:
      "Through digital-enabled training, e-learning platforms and a growing nutrition tech stack, we equip young Ethiopians — especially young women — to lead in agri-food, health innovation and the creative economy.",
    accent: "#2ECC8A",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youth%20engagement%202-CuaNTDdnGq1gEbOjglnM7IAgTNZajQ.jpg",
    title: "Competency-Based Training That Sticks",
    subtitle: "Curriculum & Capacity Building",
    description:
      "From SRHR and adolescent health to GMP-compliant nutrition, food safety, early childhood development and occupational health & safety — we build curricula and deliver high-impact training for the people who deliver services.",
    accent: "#0E4FA8",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5936127106884504542_121-685VqWxbIIt91ZhAS8Jlog7e2wjQux.jpg",
    title: "Public-Health Rigor, Private-Sector Speed",
    subtitle: "Evidence-Based Consultancy",
    description:
      "Our team blends public health and development expertise with the agility of the private sector to deliver assessments, quality audits and market-ready recommendations — within scope, budget and timeline.",
    accent: "#2ECC8A",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5902267182450674529_121-eNFQegoEvAP1jvAY3dJXoswVdAWeVq.jpg",
    title: "Center for Alliance & Coalition",
    subtitle: "Our Mission in Motion",
    description:
      "We catalyze public-private coalitions across health, nutrition, social affairs, management and hospitality — driving measurable improvements in health outcomes, livelihoods and socio-economic development.",
    accent: "#0E4FA8",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5884210066192713498_121-pxyl7UeyIsuiRJRfYm9aNcWXZ13kAw.jpg",
    title: "Trusted by USAID, GNR & Share-Net",
    subtitle: "Strategic Partnerships",
    description:
      "As a USAID-registered partner, Global Nutrition Report contributor and Share-Net Netherlands member, we collaborate with government bodies, NGOs and the private sector to scale impact across Ethiopia and beyond.",
    accent: "#2ECC8A",
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const heroRef = useRef<HTMLElement>(null)

  const goToSlide = useCallback((index: number, dir: "left" | "right") => {
    if (isTransitioning) return
    setDirection(dir)
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 350)
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % HERO_SLIDES.length, "right")
  }, [current, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length, "left")
  }, [current, goToSlide])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6500)
    return () => clearInterval(timer)
  }, [nextSlide])

  // Track mouse for parallax decorations
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      setMousePos({ x, y })
    }
    const el = heroRef.current
    el?.addEventListener("mousemove", handleMouse)
    return () => el?.removeEventListener("mousemove", handleMouse)
  }, [])

  const slide = HERO_SLIDES[current]

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: BRAND_BLUE }}
    >
      <div className="relative h-[640px] w-full sm:h-[680px] md:h-[760px] lg:h-[820px]">
        {/* Background images with Ken Burns zoom transition */}
        {HERO_SLIDES.map((s, i) => (
          <div
            key={i}
            className={cn(
              "absolute inset-0 transition-all duration-[1200ms] ease-out",
              i === current
                ? "opacity-100 scale-100 animate-ken-burns"
                : "opacity-0 scale-110"
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

        {/* Deep blue gradient overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: `linear-gradient(110deg, ${BRAND_BLUE}EE 0%, ${BRAND_BLUE}D9 35%, ${BRAND_BLUE}80 70%, ${BRAND_BLUE}40 100%)`,
          }}
        />

        {/* Animated floating orbs (parallax) */}
        <div
          aria-hidden="true"
          className="absolute top-[10%] left-[15%] h-72 w-72 rounded-full opacity-30 blur-3xl animate-float-slow"
          style={{
            backgroundColor: slide.accent,
            transform: `translate(${(mousePos.x - 0.5) * -30}px, ${(mousePos.y - 0.5) * -30}px)`,
            transition: "transform 0.6s ease-out, background-color 1s ease",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[15%] right-[10%] h-96 w-96 rounded-full opacity-25 blur-3xl animate-float-slower"
          style={{
            backgroundColor: "#2ECC8A",
            transform: `translate(${(mousePos.x - 0.5) * 40}px, ${(mousePos.y - 0.5) * 40}px)`,
            transition: "transform 0.6s ease-out",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-[40%] right-[30%] h-48 w-48 rounded-full opacity-25 blur-3xl animate-float"
          style={{
            backgroundColor: "#0E4FA8",
            transform: `translate(${(mousePos.x - 0.5) * -20}px, ${(mousePos.y - 0.5) * -20}px)`,
            transition: "transform 0.6s ease-out",
          }}
        />

        {/* Decorative dot pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Decorative animated lines */}
        <svg
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-1/2 opacity-20"
          viewBox="0 0 600 800"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 100 0 Q 300 200 100 400 T 100 800"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="6 12"
            className="animate-dash"
          />
          <path
            d="M 300 0 Q 500 200 300 400 T 300 800"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="6 12"
            className="animate-dash-reverse"
          />
        </svg>

        {/* Hero content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="max-w-2xl">
              {/* Badge */}
              <div
                className={cn(
                  "mb-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all duration-700",
                  isTransitioning ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
                )}
              >
                <Sparkles className="h-3.5 w-3.5 text-[#2ECC8A] animate-pulse" />
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2ECC8A]/80" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2ECC8A]" />
                </span>
                Internationally Accredited &middot; Global Nutrition Report Member
              </div>

              {/* Subtitle with sliding accent line */}
              <div
                className={cn(
                  "mb-3 flex items-center gap-3 transition-all duration-700 delay-75",
                  isTransitioning
                    ? direction === "right"
                      ? "opacity-0 translate-x-8"
                      : "opacity-0 -translate-x-8"
                    : "opacity-100 translate-x-0"
                )}
              >
                <span
                  className="h-[2px] w-12 rounded-full transition-colors duration-700"
                  style={{ backgroundColor: slide.accent }}
                />
                <span
                  className="text-sm font-bold uppercase tracking-[0.25em] transition-colors duration-700"
                  style={{ color: slide.accent }}
                >
                  {slide.subtitle}
                </span>
              </div>

              {/* Title */}
              <h1
                className={cn(
                  "text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-700 delay-150",
                  isTransitioning
                    ? direction === "right"
                      ? "opacity-0 translate-x-12 blur-sm"
                      : "opacity-0 -translate-x-12 blur-sm"
                    : "opacity-100 translate-x-0 blur-0"
                )}
                style={{
                  textShadow: "0 4px 30px rgba(0,0,0,0.3)",
                }}
              >
                {slide.title}
              </h1>

              {/* Description */}
              <p
                className={cn(
                  "mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/90 md:text-lg transition-all duration-700 delay-200",
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
                  "mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center transition-all duration-700 delay-300",
                  isTransitioning ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
                )}
              >
                <Button
                  asChild
                  size="lg"
                  className="group relative h-14 overflow-hidden rounded-full bg-[#2ECC8A] px-8 text-base font-semibold text-white shadow-[0_10px_40px_-10px_rgba(46,204,138,0.6)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_50px_-10px_rgba(46,204,138,0.8)]"
                >
                  <Link href="/contact">
                    <span className="relative z-10 flex items-center gap-2">
                      Start a conversation
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#27AE60] to-[#2ECC8A] transition-transform duration-500 group-hover:translate-x-0"
                    />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="group h-14 rounded-full border-2 border-white/40 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[color:var(--brand-blue,#0E4FA8)] hover:border-white"
                  style={{ "--brand-blue": BRAND_BLUE } as React.CSSProperties}
                >
                  <Link href="/services">
                    Explore services
                    <ArrowRight className="ml-1 h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                </Button>
              </div>

              {/* Trust strip */}
              <div
                className={cn(
                  "mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold tracking-widest text-white/70 uppercase transition-all duration-700 delay-500",
                  isTransitioning ? "opacity-0" : "opacity-100"
                )}
              >
                <span>Internationally Accredited</span>
                <span className="hidden h-1 w-1 rounded-full bg-[#2ECC8A] sm:inline-block" />
                <span>Global Nutrition Report</span>
                <span className="hidden h-1 w-1 rounded-full bg-[#2ECC8A] sm:inline-block" />
                <span>Share-Net Netherlands</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute inset-y-0 left-3 z-20 flex items-center md:left-6">
          <button
            onClick={prevSlide}
            className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#0E4FA8] hover:scale-110 hover:border-white md:h-14 md:w-14"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-3 z-20 flex items-center md:right-6">
          <button
            onClick={nextSlide}
            className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#0E4FA8] hover:scale-110 hover:border-white md:h-14 md:w-14"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Slide indicators with progress */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 md:bottom-10">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i, i > current ? "right" : "left")}
              className={cn(
                "h-2 rounded-full transition-all duration-500 overflow-hidden",
                i === current ? "w-12 bg-white/30" : "w-2 bg-white/40 hover:bg-white/70"
              )}
              aria-label={`Go to slide ${i + 1}`}
            >
              {i === current && (
                <span
                  className="block h-full animate-progress-fill rounded-full"
                  style={{ backgroundColor: slide.accent }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Floating stat card */}
        <FloatingMetricBadge
          value={13}
          suffix="+"
          label="projects"
          eyebrow="Engagements delivered"
          body="Across SRH, AYH, ECD, nutrition, and healthcare innovation."
          accent={slide.accent}
          className={cn(
            "absolute bottom-10 right-6 z-10 hidden w-64 lg:block",
            isTransitioning ? "opacity-0 translate-x-6" : "opacity-100 translate-x-0"
          )}
        />

        {/* Slide counter */}
        <div className="absolute bottom-6 left-6 z-20 hidden items-center gap-2 text-xs font-bold tracking-widest text-white/80 md:flex md:bottom-10">
          <span className="text-2xl font-extrabold text-white">
            {String(current + 1).padStart(2, "0")}
          </span>
          <span className="text-white/40">/</span>
          <span>{String(HERO_SLIDES.length).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes ken-burns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.08) translate(-1%, -1%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
        }
        @keyframes dash {
          to { stroke-dashoffset: -200; }
        }
        @keyframes dash-reverse {
          to { stroke-dashoffset: 200; }
        }
        @keyframes progress-fill {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-ken-burns { animation: ken-burns 8s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 10s ease-in-out infinite; }
        .animate-dash { animation: dash 20s linear infinite; }
        .animate-dash-reverse { animation: dash-reverse 25s linear infinite; }
        .animate-progress-fill { animation: progress-fill 6.5s linear forwards; }
      `}</style>
    </section>
  )
}
