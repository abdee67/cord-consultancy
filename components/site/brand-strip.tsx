'use client'

import Image from 'next/image'

type Partner = { name: string; logo: string; alt: string; circular?: boolean }

const PARTNERS: Partner[] = [
  { 
    name: "Global Nutrition Report", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20nutrition%20report.jfif-tJ4MKMZMriDIklLEdeatDPNURgWE7d.jpeg",
    alt: "Global Nutrition Report logo"
  },
  { 
    name: "Share-Net Netherlands", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Share-Net%20Netherlands-pxFsuBfDHQpQ4qw6fhgquFJkCoKdge.png",
    alt: "Share-Net Netherlands logo"
  },
  { 
    name: "SOS Children's Villages", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SOS%20Children%27s%20Villages-IycE3nc36AkafhIUVcBuI4NFxtUJZQ.png",
    alt: "SOS Children's Villages logo"
  },
  { 
    name: "Aleph", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aleph-A1IAacWN6UgDpoDa6ZdAnv6aopDYJE.png",
    alt: "Aleph logo"
  },
  { 
    name: "alignAfrica", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alignAfrica%20%28LNGO%29.jfif-iuM8G5RQPSRkyYkqdStp3Vbyop4Qfc.jpeg",
    alt: "alignAfrica logo"
  },
  { 
    name: "Ethio Medical Training PLC", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ethio-Medical-Qan40tS7qwiz9z2QKHcaT8XrWaqh1J.jpg",
    alt: "Ethio Medical Training PLC logo",
    circular: true,
  },
]

export function BrandStrip() {
  return (
    <section
      aria-labelledby="brand-strip-heading"
      className="relative border-y border-border/60 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <h2
          id="brand-strip-heading"
          className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:mb-12"
        >
          Trusted by partners across the public, private, and development sectors
        </h2>

        {/* Marquee viewport */}
        <div className="group relative overflow-hidden">
          {/* Edge fade overlays */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent md:w-40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent md:w-40"
          />

          {/* Track: two identical halves create a seamless 0% → -50% loop */}
          <div className="flex w-max animate-marquee items-center will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            <BrandRow />
            <BrandRow ariaHidden />
          </div>
        </div>
      </div>
    </section>
  )
}

function BrandRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12"
    >
      {PARTNERS.map((p, i) => (
        <li
          key={`${p.name}-${i}-${ariaHidden ? "b" : "a"}`}
          className="flex shrink-0 items-center justify-center"
        >
          <div
            className={`relative transition-transform duration-300 hover:scale-110 ${
              p.circular
                ? "h-20 w-20 overflow-hidden rounded-full md:h-24 md:w-24"
                : "h-16 w-32 md:h-20 md:w-40"
            }`}
          >
            <Image
              src={p.logo}
              alt={p.alt}
              fill
              className={p.circular ? "object-cover object-center" : "object-contain object-center"}
              sizes={p.circular ? "96px" : "(max-width: 768px) 128px, 160px"}
              priority={false}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}
