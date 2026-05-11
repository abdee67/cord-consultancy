import type { Metadata } from "next"
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
} from "lucide-react"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact — CORD Consultancy",
  description:
    "Get in touch with CORD Consultancy in Addis Ababa. We respond within one business day.",
}

const SURVEY_URL = "https://app.formbricks.com/s/cmosrd9w99wwmym01ot3krz0l"

const DETAILS = [
  {
    Icon: Mail,
    label: "Email",
    value: "info.cordnutrition@gmail.com",
    href: "mailto:info.cordnutrition@gmail.com",
    iconColor: "#0E4FA8",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+251 942 461 146",
    href: "tel:+251942461146",
    iconColor: "#1E9E68",
  },
  {
    Icon: Phone,
    label: "Alternate",
    value: "+251 911 182 168",
    href: "tel:+251911182168",
    iconColor: "#1E9E68",
  },
  {
    Icon: MapPin,
    label: "Office",
    value: "Amakor Building, Office G007\nAkaki-Kaliti, Wereda 13, Tulu Dimtu\nAddis Ababa, Ethiopia",
    href: undefined,
    iconColor: "#0E4FA8",
  },
]

// Social tiles alternate between brand deep blue and brand green only
const SOCIALS = [
  {
    label: "LinkedIn",
    handle: "linkedin.com/company/cordnutrition",
    href: "https://linkedin.com/company/cordnutrition",
    Icon: Linkedin,
    color: "from-[#0E4FA8]/20 to-[#0E4FA8]/5 text-[#0E4FA8]",
  },
  {
    label: "YouTube",
    handle: "@CORDConsultancy",
    href: "https://www.youtube.com/@CORDConsultancy",
    Icon: Youtube,
    color: "from-[#2ECC8A]/20 to-[#2ECC8A]/5 text-[#1E9E68]",
  },
  {
    label: "Telegram",
    handle: "t.me/CORDNutrition_PLC",
    href: "https://t.me/CORDNutrition_PLC",
    Icon: Send,
    color: "from-[#0E4FA8]/20 to-[#0E4FA8]/5 text-[#0E4FA8]",
  },
  {
    label: "Instagram",
    handle: "@cord_consultancy",
    href: "https://www.instagram.com/cord_consultancy/",
    Icon: Instagram,
    color: "from-[#2ECC8A]/20 to-[#2ECC8A]/5 text-[#1E9E68]",
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you&apos;re working on."
        description="A short note is enough to get started. We&apos;ll respond within one business day with thoughtful next steps — no obligation."
      />

      <section className="mx-auto max-w-7xl px-6 pb-28 pt-10 md:px-10 md:pt-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">

          {/* Left column — contact info & socials */}
          <Reveal className="lg:col-span-4 lg:sticky lg:top-28">
            <div
              className="overflow-hidden rounded-3xl border-2 border-border/60 shadow-sm"
              style={{ backgroundColor: "#E2E8F0" }}
            >

              {/* Brand header strip — deep blue */}
              <div className="bg-gradient-to-r from-[#0E4FA8] via-[#0A3D85] to-[#072E66] px-6 py-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  CORD Consultancy
                </p>
                <h2 className="mt-1 text-xl font-bold text-white">
                  Get in touch
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Mon – Sat, 8:30 – 17:30 EAT. We respond within one business day.
                </p>
              </div>

              {/* Contact details */}
              <div className="divide-y divide-border">
                {DETAILS.map(({ Icon, label, value, href, iconColor }) => (
                  <div key={label} className="flex items-start gap-4 px-6 py-4">
                    <span
                      className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-border"
                      style={{ color: iconColor }}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-0.5 block text-sm font-medium text-foreground transition-colors hover:text-primary"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-0.5 whitespace-pre-line text-sm font-medium leading-relaxed text-foreground">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="px-6 py-5">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Follow us
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {SOCIALS.map(({ label, handle, href, Icon, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-center gap-2.5 rounded-xl border border-border p-2.5 transition-all hover:border-primary/30 hover:shadow-sm"
                    >
                      <span
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${color}`}
                      >
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold text-foreground">
                          {label}
                        </span>
                        <span className="block truncate text-[10px] text-muted-foreground">
                          {handle}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Open survey link */}
              <div className="border-t border-border bg-muted/30 px-6 py-4">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Trouble with the embedded survey?
                </p>
                <Button
                  asChild
                  variant="link"
                  className="mt-0.5 h-auto p-0 text-sm text-primary hover:text-primary/80"
                >
                  <a
                    href={SURVEY_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1"
                  >
                    Open in a new tab
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Right column — embedded survey */}
          <Reveal delay={0.1} className="lg:col-span-8">
            <div
              className="overflow-hidden rounded-3xl border-2 border-border/60 shadow-sm"
              style={{ backgroundColor: "#E2E8F0" }}
            >
              {/* Survey header bar */}
              <div className="flex items-center justify-between gap-3 border-b border-border/60 bg-[#0E4FA8]/8 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-secondary" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Client feedback survey
                  </span>
                </div>
                <a
                  href={SURVEY_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Open survey in a new tab"
                >
                  Open in new tab
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
              <iframe
                src={SURVEY_URL}
                title="CORD Consultancy client feedback survey"
                loading="lazy"
                className="block h-[82vh] min-h-[680px] w-full border-0 bg-background"
                allow="clipboard-write"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
