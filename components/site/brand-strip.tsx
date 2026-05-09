'use client'

import Image from 'next/image'
import { useState } from 'react'

type Partner = { name: string; logo: string; alt: string; circular?: boolean }

const PARTNERS: Partner[] = [
  {
    name: "Global Nutrition Report",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20nutrition%20report.jfif-tJ4MKMZMriDIklLEdeatDPNURgWE7d.jpeg",
    alt: "Global Nutrition Report logo",
  },
  {
    name: "Share-Net Netherlands",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Share-Net%20Netherlands-pxFsuBfDHQpQ4qw6fhgquFJkCoKdge.png",
    alt: "Share-Net Netherlands logo",
  },
  {
    name: "SOS Children's Villages",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SOS%20Children%27s%20Villages-IycE3nc36AkafhIUVcBuI4NFxtUJZQ.png",
    alt: "SOS Children's Villages logo",
  },
  {
    name: "Aleph Medical",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aleph-A1IAacWN6UgDpoDa6ZdAnv6aopDYJE.png",
    alt: "Aleph Medical logo",
  },
  {
    name: "alignAfrica",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alignAfrica%20%28LNGO%29.jfif-iuM8G5RQPSRkyYkqdStp3Vbyop4Qfc.jpeg",
    alt: "alignAfrica logo",
  },
  {
    name: "Ethio Medical Training PLC",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ethio-Medical-Qan40tS7qwiz9z2QKHcaT8XrWaqh1J.jpg",
    alt: "Ethio Medical Training PLC logo",
    circular: true,
  },
]

export function BrandStrip() {
  const [paused, setPaused] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      aria-labelledby="brand-strip-heading"
      className="relative border-y border-border/60 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <h2
          id="brand-strip-heading"
          className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:mb-14"
        >
          Trusted by partners across the public, private, and development sectors
        </h2>

        {/* Marquee viewport with top padding to show tooltips */}
        <div className="pt-16 pb-4">
          {/* Edge fade overlays */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent md:w-48"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent md:w-48"
          />

          {/* Marquee container */}
          <div className="relative overflow-hidden">
            <div className="flex w-max items-center will-change-transform motion-reduce:animate-none">
              <BrandRow
                paused={paused}
                setPaused={setPaused}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
              <BrandRow
                paused={paused}
                setPaused={setPaused}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                ariaHidden
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .brand-marquee-track {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

function BrandRow({
  ariaHidden = false,
  paused,
  setPaused,
  hoveredIndex,
  setHoveredIndex,
}: {
  ariaHidden?: boolean
  paused: boolean
  setPaused: (v: boolean) => void
  hoveredIndex: number | null
  setHoveredIndex: (i: number | null) => void
}) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="brand-marquee-track flex shrink-0 items-center gap-12 pr-12 md:gap-20 md:pr-20"
      style={{ animationPlayState: paused ? 'paused' : 'running' }}
    >
      {PARTNERS.map((p, i) => {
        const isHovered = hoveredIndex === i

        return (
          <li
            key={`${p.name}-${i}-${ariaHidden ? 'b' : 'a'}`}
            className="relative flex shrink-0 flex-col items-center justify-center pt-12"
            onMouseEnter={() => {
              setHoveredIndex(i)
              setPaused(true)
            }}
            onMouseLeave={() => {
              setHoveredIndex(null)
              setPaused(false)
            }}
          >
            {/* Name tooltip — positioned above logo */}
            <div
              className="absolute left-1/2 top-0 z-20 -translate-x-1/2 whitespace-nowrap"
              style={{
                opacity: isHovered ? 1 : 0,
                pointerEvents: 'none',
                transition: 'opacity 200ms ease-out',
              }}
            >
              <span className="inline-block rounded-full bg-foreground px-4 py-2 text-[12px] font-semibold tracking-wide text-background shadow-xl">
                {p.name}
              </span>
            </div>

            {/* Logo */}
            <div
              className={`relative transition-all duration-300 ${
                p.circular
                  ? 'h-24 w-24 overflow-hidden rounded-full shadow-md md:h-28 md:w-28'
                  : 'h-20 w-40 md:h-24 md:w-48'
              }`}
              style={{
                transform: isHovered ? 'scale(1.12) translateY(-6px)' : 'scale(1) translateY(0)',
                filter: isHovered ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))' : 'none',
              }}
            >
              <Image
                src={p.logo}
                alt={p.alt}
                fill
                className={p.circular ? 'object-cover object-center' : 'object-contain object-center'}
                sizes={p.circular ? '112px' : '(max-width: 768px) 160px, 192px'}
                priority={false}
              />
            </div>
          </li>
        )
      })}
    </ul>
  )
}
