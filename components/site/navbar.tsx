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

  useEffect(() => {
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
        "sticky top-0 z-50 w-full transition-all duration-300",
        "bg-gradient-to-r from-[#4DC8E8] via-[#2BBFB0] to-[#2ECC8A]",
        scrolled ? "shadow-lg shadow-black/10" : "shadow-sm",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo — white wordmark on coloured bg */}
        <Link
          href="/"
          aria-label="CORD Consultancy home"
          className="flex items-center"
        >
          <div className="flex items-center gap-2.5">
            {/* reuse Logo image but override wordmark colour */}
            <Logo
              showWordmark={false}
              size={44}
            />
            <span className="flex items-baseline gap-1.5 text-[19px] font-bold tracking-tight text-white drop-shadow-sm">
              CORD
              <span className="font-light text-white/80">Consultancy</span>
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-5 py-2.5 text-[15px] font-medium transition-all duration-200",
                  active
                    ? "bg-white/20 text-white shadow-sm"
                    : "text-white/80 hover:bg-white/15 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            className="rounded-full bg-white px-6 py-2.5 text-[15px] font-semibold text-[#2BBFB0] shadow-sm transition-all hover:bg-white/90 hover:shadow-md"
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/20 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/20 bg-gradient-to-br from-[#3cbfdb] to-[#2ECC8A] transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-5">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-[15px] font-medium transition-colors",
                  active
                    ? "bg-white/25 text-white"
                    : "text-white/80 hover:bg-white/15 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <Button
            asChild
            className="mt-3 w-full rounded-full bg-white py-3 text-[15px] font-semibold text-[#2BBFB0] hover:bg-white/90"
          >
            <Link href="/contact">Get in touch</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
