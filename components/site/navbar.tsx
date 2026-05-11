"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

// Deep cobalt blue matching the CORD logo
const BRAND_BLUE = "#0E4FA8"
const BRAND_BLUE_DEEP = "#0A3D85"
const BRAND_GREEN = "#1FAA3F"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "shadow-2xl shadow-blue-900/20 backdrop-blur-md"
            : "shadow-md",
        )}
        style={{
          background: scrolled
            ? `linear-gradient(135deg, ${BRAND_BLUE_DEEP} 0%, ${BRAND_BLUE} 50%, ${BRAND_BLUE_DEEP} 100%)`
            : `linear-gradient(135deg, ${BRAND_BLUE} 0%, ${BRAND_BLUE_DEEP} 100%)`,
        }}
      >
        {/* Decorative accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] opacity-60"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${BRAND_GREEN} 50%, transparent 100%)`,
          }}
        />

        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-10",
            scrolled ? "h-20 md:h-24" : "h-24 md:h-28",
          )}
        >
          {/* Logo with white circular halo */}
          <Link
            href="/"
            aria-label="CORD Consultancy home"
            className={cn(
              "group relative flex items-center gap-3 transition-all duration-500 sm:gap-4",
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
            )}
          >
            {/* Glowing halo behind logo */}
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute inset-0 -m-1 rounded-full opacity-40 blur-md transition-all duration-500 group-hover:opacity-70 group-hover:-m-2"
                style={{ backgroundColor: "#ffffff" }}
              />
              {/* White circular backdrop for logo visibility */}
              <div
                className={cn(
                  "relative flex items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-white/40 transition-all duration-500",
                  "group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl group-hover:ring-white/70",
                  scrolled ? "h-14 w-14 sm:h-16 sm:w-16" : "h-16 w-16 sm:h-20 sm:w-20",
                )}
              >
                <Logo
                  showWordmark={false}
                  size={scrolled ? 48 : 60}
                />
              </div>
            </div>

            {/* Brand text */}
            <span className="flex flex-col leading-none">
              <span
                className={cn(
                  "font-extrabold tracking-tight text-white transition-all duration-300",
                  scrolled ? "text-xl sm:text-2xl" : "text-2xl sm:text-[28px]",
                )}
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.25)" }}
              >
                CORD
              </span>
              <span
                className={cn(
                  "font-medium tracking-[0.15em] uppercase text-white/85 transition-all duration-300",
                  scrolled ? "text-[10px] sm:text-[11px]" : "text-[11px] sm:text-[12px]",
                )}
              >
                Consultancy
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link, i) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    transitionDelay: mounted ? `${i * 50 + 100}ms` : "0ms",
                  }}
                  className={cn(
                    "group relative rounded-full px-4 py-2.5 text-[14px] font-semibold transition-all duration-300 xl:px-5 xl:text-[15px]",
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
                    active
                      ? "bg-white/20 text-white shadow-inner"
                      : "text-white/90 hover:bg-white/15 hover:text-white",
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Active indicator dot */}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 -bottom-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
                      style={{ backgroundColor: BRAND_GREEN }}
                    />
                  )}
                  {/* Hover underline */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute left-1/2 bottom-1 h-0.5 -translate-x-1/2 rounded-full transition-all duration-300",
                      active ? "w-0" : "w-0 group-hover:w-6",
                    )}
                    style={{ backgroundColor: BRAND_GREEN }}
                  />
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div
            className={cn(
              "hidden transition-all duration-500 lg:block",
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4",
            )}
          >
            <Button
              asChild
              className="group rounded-full bg-white px-5 py-2.5 text-[14px] font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-2xl active:scale-95 xl:px-6 xl:text-[15px]"
              style={{ color: BRAND_BLUE }}
            >
              <Link href="/contact">
                <span className="flex items-center gap-2">
                  Get in touch
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-150"
                    style={{ backgroundColor: BRAND_GREEN }}
                  />
                </span>
              </Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/40 bg-white/10 text-white shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/25 hover:border-white/70 active:scale-95 lg:hidden"
          >
            <span
              className={cn(
                "absolute transition-all duration-300",
                open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75",
              )}
            >
              <X className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span
              className={cn(
                "absolute transition-all duration-300",
                open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100",
              )}
            >
              <Menu className="h-5 w-5" strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Mobile menu — slides in from right */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-full max-w-sm transform transition-transform duration-500 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        style={{
          background: `linear-gradient(165deg, ${BRAND_BLUE} 0%, ${BRAND_BLUE_DEEP} 100%)`,
        }}
      >
        {/* Decorative accent */}
        <div
          className="absolute left-0 top-0 h-full w-1"
          style={{
            background: `linear-gradient(180deg, ${BRAND_GREEN} 0%, transparent 100%)`,
          }}
        />

        {/* Mobile menu header */}
        <div className="flex items-center justify-between border-b border-white/15 px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
              <Logo showWordmark={false} size={40} />
            </div>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-extrabold tracking-tight text-white">
                CORD
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/80">
                Consultancy
              </span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all duration-200 hover:scale-110 hover:bg-white/20 active:scale-95"
          >
            <X className="h-5 w-5" strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile nav links */}
        <nav className="flex flex-col gap-2 px-6 py-6">
          {NAV_LINKS.map((link, i) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  transitionDelay: open ? `${i * 60 + 100}ms` : "0ms",
                  ...(active ? { color: BRAND_BLUE } : {}),
                }}
                className={cn(
                  "group relative flex items-center gap-3 rounded-2xl px-5 py-4 text-[16px] font-semibold transition-all duration-300",
                  open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
                  active
                    ? "bg-white shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20 hover:translate-x-1",
                )}
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: active ? BRAND_GREEN : "rgba(255,255,255,0.5)",
                  }}
                />
                <span className="flex-1">{link.label}</span>
                {active && (
                  <span
                    aria-hidden="true"
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: BRAND_GREEN }}
                  >
                    Active
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Mobile CTA */}
        <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-black/10 p-6 backdrop-blur-sm">
          <Button
            asChild
            className="w-full rounded-full bg-white py-6 text-[15px] font-bold shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white active:scale-95"
            style={{ color: BRAND_BLUE }}
          >
            <Link href="/contact">
              <span className="flex items-center justify-center gap-2">
                Get in touch
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: BRAND_GREEN }}
                />
              </span>
            </Link>
          </Button>
          <p className="mt-4 text-center text-xs text-white/70">
            Akaki-Kaliti &middot; Addis Ababa, Ethiopia
          </p>
        </div>
      </div>
    </>
  )
}
