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
    name: "Aleph Medical", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aleph-A1IAacWN6UgDpoDa6ZdAnv6aopDYJE.png",
    alt: "Aleph Medical logo"
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
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <h2
          id="brand-strip-heading"
          className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:mb-14"
        >
          Trusted by partners across the public, private, and development sectors
        </h2>

        {/* Marquee viewport */}
        <div className="group relative overflow-hidden">
          {/* Edge fade overlays */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent md:w-48"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent md:w-48"
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
      className="flex shrink-0 items-center gap-10 pr-10 md:gap-16 md:pr-16"
    >
      {PARTNERS.map((p, i) => (
        <li
          key={`${p.name}-${i}-${ariaHidden ? "b" : "a"}`}
          className="group relative flex shrink-0 flex-col items-center justify-center"
        >
          {/* Logo wrapper */}
          <div
            className={`relative transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 ${
              p.circular
                ? "h-24 w-24 overflow-hidden rounded-full shadow-md md:h-28 md:w-28"
                : "h-20 w-40 md:h-24 md:w-48"
            }`}
          >
            <Image
              src={p.logo}
              alt={p.alt}
              fill
              className={p.circular ? "object-cover object-center" : "object-contain object-center"}
              sizes={p.circular ? "112px" : "(max-width: 768px) 160px, 192px"}
              priority={false}
            />
          </div>

          {/* Name tooltip — slides up on hover */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <span className="whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wide text-background shadow-lg">
              {p.name}
            </span>
            {/* Arrow */}
            <span className="mx-auto mt-1 block h-1.5 w-1.5 rotate-45 bg-foreground" />
          </div>
        </li>
      ))}
    </ul>
  )
}
