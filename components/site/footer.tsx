"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone, Send, Sparkles, Youtube } from "lucide-react"
import { Logo } from "./logo"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const BRAND_BLUE = "#0E4FA8"
const BRAND_BLUE_DARK = "#0A3D85"
const BRAND_BLUE_DEEPER = "#072E66"
const BRAND_GREEN = "#2ECC8A"

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact & Feedback" },
]

// Social icons alternate between brand deep blue and brand green only
const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/cordnutrition",
    Icon: Linkedin,
    brandColor: "#0E4FA8",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@CORDConsultancy",
    Icon: Youtube,
    brandColor: "#1E9E68",
  },
  {
    label: "Telegram",
    href: "https://t.me/CORDNutrition_PLC",
    Icon: Send,
    brandColor: "#0E4FA8",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/cord_consultancy/",
    Icon: Instagram,
    brandColor: "#1E9E68",
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
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${BRAND_BLUE} 0%, ${BRAND_BLUE_DARK} 50%, ${BRAND_BLUE_DEEPER} 100%)`,
      }}
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient orb top-right */}
        <div
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: `radial-gradient(circle, ${BRAND_GREEN} 0%, transparent 70%)` }}
        />
        {/* Gradient orb bottom-left */}
        <div
          className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl"
          style={{ background: `radial-gradient(circle, ${BRAND_GREEN} 0%, transparent 70%)` }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Logo watermark - very subtle */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none hidden lg:block">
          <div className="relative h-[36rem] w-[36rem] opacity-[0.04]">
            <Image
              src="/images/cord-logo.png"
              alt=""
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Top accent bar */}
      <div
        className="relative h-1 w-full"
        style={{
          background: `linear-gradient(to right, ${BRAND_GREEN} 0%, #FFFFFF 50%, ${BRAND_GREEN} 100%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:py-24">

        {/* CTA strip at the top */}
        <div
          className={cn(
            "mb-14 flex flex-col items-start gap-6 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all duration-700 md:flex-row md:items-center md:justify-between md:p-8 lg:mb-16",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
        >
          <div className="flex items-start gap-4 md:items-center">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
              style={{ background: `linear-gradient(135deg, ${BRAND_GREEN}, ${BRAND_BLUE})` }}
            >
              <Sparkles className="h-6 w-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                Ready to start
              </p>
              <h2 className="mt-1 text-balance text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                Let&apos;s build something extraordinary together.
              </h2>
            </div>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ color: BRAND_BLUE_DARK }}
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-12 lg:gap-16">

          {/* Brand column */}
          <div
            className={cn(
              "md:col-span-5 transition-all duration-700",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            <Link href="/" className="group inline-flex items-center gap-4">
              {/* Logo with glowing halo */}
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full opacity-50 blur-xl transition-all duration-500 group-hover:opacity-70 group-hover:blur-2xl"
                  style={{ background: `radial-gradient(circle, ${BRAND_GREEN} 0%, transparent 70%)` }}
                />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white p-2 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 md:h-28 md:w-28 group-hover:rotate-360">
                  <Logo showWordmark={false} size={90} />
                </div>
              </div>
              <span className="flex flex-col leading-none">
                <span className="text-[32px] font-black tracking-tight text-white drop-shadow-lg md:text-[36px]">
                  CORD
                </span>
                <span className="mt-1.5 text-[14px] font-semibold tracking-[0.15em]  text-white/80">
                  Consultancy
                </span>
                <span
                  className="mt-2 inline-block h-0.5 w-12 rounded-full transition-all duration-500 group-hover:w-20"
                  style={{ backgroundColor: BRAND_GREEN }}
                />
              </span>
            </Link>

            <p className="mt-7 max-w-md text-balance text-[16px] font-medium leading-relaxed text-white/95">
              CORD Nutrition and Health Trading PLC &mdash; a private
              consultancy hub for health, nutrition, social development,
              management, and hospitality.
            </p>

            <div className="mt-5 flex flex-col gap-2 border-l-2 pl-4" style={{ borderColor: BRAND_GREEN }}>
              <p className="text-[15px] font-bold italic text-white">
                Driving evidence-based impact across Ethiopia and beyond.
              </p>
              <p className="text-[13px] font-medium text-white/75">
                Center for Alliance &amp; Coalition for Professional Excellence.
              </p>
            </div>

            {/* Socials */}
            <div className="mt-8">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                Follow our journey
              </p>
              <div className="flex items-center gap-3">
                {SOCIALS.map(({ label, href, Icon, brandColor }, i) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    style={{ transitionDelay: visible ? `${200 + i * 60}ms` : "0ms" }}
                    className={cn(
                      "group relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl",
                      visible ? "opacity-100 scale-100" : "opacity-0 scale-75",
                    )}
                  >
                    <Icon
                      className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={2}
                      style={{ color: brandColor }}
                    />
                    {/* Glow */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60"
                      style={{ backgroundColor: brandColor }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Explore column */}
          <div
            className={cn(
              "md:col-span-3 transition-all duration-700 delay-150",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Explore
            </h3>
            <div
              className="mt-2 h-1 w-10 rounded-full"
              style={{ background: `linear-gradient(to right, ${BRAND_GREEN}, #FFFFFF)` }}
            />
            <nav className="mt-6 flex flex-col gap-3.5" aria-label="Footer navigation">
              {FOOTER_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ transitionDelay: visible ? `${250 + i * 50}ms` : "0ms" }}
                  className={cn(
                    "group inline-flex items-center gap-3 text-[15px] font-semibold text-white/90 transition-all duration-300 hover:translate-x-2 hover:text-white",
                    visible ? "opacity-100" : "opacity-0",
                  )}
                >
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover:w-6"
                    style={{ backgroundColor: BRAND_GREEN }}
                  />
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
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
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Get in touch
            </h3>
            <div
              className="mt-2 h-1 w-10 rounded-full"
              style={{ background: `linear-gradient(to right, ${BRAND_GREEN}, #FFFFFF)` }}
            />

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="mailto:info.cordnutrition@gmail.com"
                  className="group flex items-start gap-3.5 text-[15px] font-medium text-white/95 transition-colors hover:text-white"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0E4FA8] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:shadow-xl">
                    <Mail className="h-[18px] w-[18px]" strokeWidth={2} />
                  </span>
                  <span className="break-all pt-1.5">info.cordnutrition@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+251942461146"
                  className="group flex items-start gap-3.5 text-[15px] font-medium text-white/95 transition-colors hover:text-white"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#1E9E68] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:shadow-xl">
                    <Phone className="h-[18px] w-[18px]" strokeWidth={2} />
                  </span>
                  <span className="pt-1.5">+251 942 461 146</span>
                </a>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0E4FA8] shadow-md">
                  <MapPin className="h-[18px] w-[18px]" strokeWidth={2} />
                </span>
                <p className="pt-0.5 text-[14px] font-medium leading-relaxed text-white/95">
                  Akaki-Kaliti, Wereda 13, Tulu Dimtu
                  <br />
                  Amakor Building, Office G007
                  <br />
                  <span className="font-semibold text-white">Addis Ababa, Ethiopia</span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={cn(
            "mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-7 md:flex-row md:items-center transition-all duration-700 delay-500 md:mt-16",
            visible ? "opacity-100" : "opacity-0",
          )}
        >
          <p className="text-[13px] font-medium text-white/80">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold text-white">CORD Nutrition and Health Trading PLC</span>. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-[13px] font-medium text-white/80">
            <span
              className="inline-block h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: BRAND_GREEN }}
            />
            <span className="font-semibold text-white">Global Nutrition Report</span>
            <span className="text-white/50">&middot;</span>
            <span className="font-semibold text-white">Share-Net Netherlands</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
