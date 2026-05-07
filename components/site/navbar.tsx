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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        "bg-gradient-to-r from-[#4DC8E8] via-[#2BBFB0] to-[#2ECC8A]",
        scrolled
          ? "shadow-xl shadow-black/15 backdrop-blur-sm"
          : "shadow-sm",
      )}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link
          href="/"
          aria-label="CORD Consultancy home"
          className={cn(
            "flex items-center gap-3 transition-all duration-300",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
          )}
        >
          <div
            className="transition-transform duration-300 hover:scale-105"
          >
            <Logo showWordmark={false} size={56} />
          </div>
          <span className="flex flex-col leading-none">
            <span className="text-[21px] font-bold tracking-tight text-white drop-shadow-sm">
              CORD
            </span>
            <span className="text-[13px] font-light tracking-wide text-white/80">
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
                  animationDelay: mounted ? `${i * 60}ms` : "0ms",
                }}
                className={cn(
                  "relative rounded-full px-5 py-2.5 text-[15px] font-medium transition-all duration-200",
                  "after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-white after:transition-all after:duration-300",
                  active
                    ? "bg-white/20 text-white shadow-sm after:w-5"
                    : "text-white/85 hover:bg-white/15 hover:text-white hover:after:w-5",
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div
          className={cn(
            "hidden lg:block transition-all duration-500",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
          )}
        >
          <Button
            asChild
            className="rounded-full bg-white px-6 py-2.5 text-[15px] font-semibold text-[#2BBFB0] shadow-sm transition-all duration-200 hover:bg-white/90 hover:shadow-md hover:scale-105 active:scale-95"
          >
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-200 hover:bg-white/20 hover:scale-105 active:scale-95 lg:hidden"
        >
          <span
            className={cn(
              "absolute transition-all duration-200",
              open ? "opacity-100 rotate-0" : "opacity-0 rotate-90",
            )}
          >
            <X className="h-5 w-5" />
          </span>
          <span
            className={cn(
              "absolute transition-all duration-200",
              open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0",
            )}
          >
            <Menu className="h-5 w-5" />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/20 bg-gradient-to-br from-[#3cbfdb] to-[#2ECC8A] transition-all duration-300 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-5">
          {NAV_LINKS.map((link, i) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={cn(
                  "rounded-xl px-4 py-3 text-[15px] font-medium transition-all duration-200",
                  open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0",
                  active
                    ? "bg-white/25 text-white"
                    : "text-white/85 hover:bg-white/15 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <Button
            asChild
            className="mt-3 w-full rounded-full bg-white py-3 text-[15px] font-semibold text-[#2BBFB0] hover:bg-white/90 transition-all duration-200 hover:scale-[1.02] active:scale-95"
          >
            <Link href="/contact">Get in touch</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
