"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Youtube } from "lucide-react"
import { Logo } from "./logo"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact & Feedback" },
]

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/cordnutrition",
    Icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@CORDConsultancy",
    Icon: Youtube,
  },
  {
    label: "Telegram",
    href: "https://t.me/CORDNutrition_PLC",
    Icon: Send,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/cord_consultancy/",
    Icon: Instagram,
  },
]

export function Footer() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-r from-[#4DC8E8] via-[#2BBFB0] to-[#2ECC8A]"
    >
      {/* Logo watermark background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[600px] h-[600px] opacity-[0.08]">
          <Image
            src="/images/cord-logo.png"
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">

          {/* Brand column */}
          <div
            className={cn(
              "md:col-span-5 transition-all duration-700",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Logo showWordmark={false} size={80} />
              </div>
              <span className="flex flex-col leading-none">
                <span className="text-[28px] font-extrabold tracking-tight text-white drop-shadow-md">
                  CORD
                </span>
                <span className="text-[14px] font-medium tracking-wide text-white/95">
                  Consultancy
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[15px] font-medium leading-relaxed text-white">
              CORD Nutrition and Health Trading PLC — a private-sector-led
              consultancy hub for health, nutrition, social development,
              management, and hospitality.
            </p>
            <p className="mt-3 text-sm font-medium italic text-white/90">
              Driving evidence-based impact across Ethiopia and beyond.
            </p>
            <p className="mt-2 text-sm text-white/80 italic">
              Center for Alliance &amp; Coalition for Professional Excellence.
            </p>

            <div className="mt-7 flex items-center gap-2.5">
              {SOCIALS.map(({ label, href, Icon }, i) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  style={{ transitionDelay: visible ? `${200 + i * 60}ms` : "0ms" }}
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/40 bg-white/10 text-white transition-all duration-300 hover:bg-white hover:text-[#2BBFB0] hover:scale-110 hover:border-white",
                    visible ? "opacity-100 scale-100" : "opacity-0 scale-75",
                  )}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore column */}
          <div
            className={cn(
              "md:col-span-3 transition-all duration-700 delay-150",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              Explore
            </h3>
            <div className="mt-1 h-0.5 w-8 rounded-full bg-white/50" />
            <nav className="mt-5 flex flex-col gap-3" aria-label="Footer navigation">
              {FOOTER_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ transitionDelay: visible ? `${250 + i * 50}ms` : "0ms" }}
                  className={cn(
                    "group inline-flex items-center gap-2 text-[15px] font-medium text-white transition-all duration-200 hover:translate-x-1",
                    visible ? "opacity-100" : "opacity-0",
                  )}
                >
                  <span className="inline-block h-1 w-1 rounded-full bg-white/60 transition-all duration-200 group-hover:w-3 group-hover:bg-white" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div
            className={cn(
              "md:col-span-4 transition-all duration-700 delay-300",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              Get in touch
            </h3>
            <div className="mt-1 h-0.5 w-8 rounded-full bg-white/50" />
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="mailto:info.cordnutrition@gmail.com"
                  className="group flex items-start gap-3 text-[15px] font-medium text-white transition-colors hover:text-white/80"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/20 text-white transition-colors group-hover:bg-white group-hover:text-[#2BBFB0]">
                    <Mail className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  info.cordnutrition@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+251942461146"
                  className="group flex items-start gap-3 text-[15px] font-medium text-white transition-colors hover:text-white/80"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/20 text-white transition-colors group-hover:bg-white group-hover:text-[#2BBFB0]">
                    <Phone className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  +251 942 461 146
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/20 text-white">
                  <MapPin className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <p className="text-[14px] font-medium leading-relaxed text-white">
                  Akaki-Kaliti, Wereda 13, Tulu Dimtu
                  <br />
                  Amakor Building, Office G007
                  <br />
                  Addis Ababa, Ethiopia
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={cn(
            "mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/30 pt-7 md:flex-row md:items-center transition-all duration-700 delay-500",
            visible ? "opacity-100" : "opacity-0",
          )}
        >
          <p className="text-[13px] font-medium text-white">
            &copy; {new Date().getFullYear()} CORD Nutrition and Health Trading PLC. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-[13px] font-medium text-white">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
            Global Nutrition Report member &middot; Share-Net Netherlands partner
          </p>
        </div>
      </div>
    </footer>
  )
}
