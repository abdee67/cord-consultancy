import Link from "next/link"
import { Linkedin, Mail, Phone } from "lucide-react"
import { Logo } from "./logo"

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              CORD Nutrition and Health Trading PLC. A private-sector-led
              consultancy hub for health, nutrition, social development,
              management, and hospitality — driving evidence-based impact across
              Ethiopia and beyond.
            </p>
            <p className="mt-4 text-xs italic text-muted-foreground">
              Center for Alliance & Coalition for Professional Excellence.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Explore
            </h3>
            <nav className="mt-4 flex flex-col gap-2.5" aria-label="Footer">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:info.cordnutrition@gmail.com"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5" />
                  info.cordnutrition@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+251942461146"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-3.5 w-3.5" />
                  +251 942 461 146
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/girma-goshime-cordnutrition"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Akaki-Kaliti, Wereda 13, Tulu Dimtu
              <br />
              Amakor Building, Office G007, Addis Ababa
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            &copy; {new Date().getFullYear()} CORD Nutrition and Health Trading
            PLC. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
            USAID partner · Global Nutrition Report member · Share-Net Netherlands
          </p>
        </div>
      </div>
    </footer>
  )
}
