import type { Metadata } from "next"
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
} from "lucide-react"
import { PageHeader } from "@/components/site/page-header"
import { ContactForm } from "@/components/site/contact-form"
import { Reveal } from "@/components/site/reveal"

export const metadata: Metadata = {
  title: "Contact — CORD Consultancy",
  description:
    "Get in touch with CORD Consultancy in Addis Ababa. We respond within one business day.",
}

const DETAILS = [
  {
    Icon: Mail,
    label: "Managing Director",
    value: "info.cordnutrition@gmail.com",
    href: "mailto:info.cordnutrition@gmail.com",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+251 942 461 146 · +251 911 182 168",
    href: "tel:+251942461146",
  },
  {
    Icon: MapPin,
    label: "Office",
    value:
      "Akaki-Kaliti, Wereda 13, Tulu Dimtu · Amakor Building, Office G007, Addis Ababa",
  },
]

const SOCIALS = [
  {
    label: "LinkedIn",
    handle: "linkedin.com/company/cordnutrition",
    href: "https://linkedin.com/company/cordnutrition",
    Icon: Linkedin,
  },
  {
    label: "YouTube",
    handle: "@CORDConsultancy",
    href: "https://www.youtube.com/@CORDConsultancy",
    Icon: Youtube,
  },
  {
    label: "Telegram",
    handle: "t.me/CORDNutrition_PLC",
    href: "https://t.me/CORDNutrition_PLC",
    Icon: Send,
  },
  {
    label: "Instagram",
    handle: "@cord_consultancy",
    href: "https://www.instagram.com/cord_consultancy/",
    Icon: Instagram,
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

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          <Reveal className="md:col-span-2">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground">
              Let&apos;s talk.
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Whether you have a defined brief or just an early signal, we
              would love to hear it. Use the form, or reach us directly.
            </p>

            <ul className="mt-8 space-y-4">
              {DETAILS.map(({ Icon, label, value, href }, i) => (
                <Reveal as="li" key={label} delay={0.05 + i * 0.06} className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 block text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium text-foreground">
                        {value}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </ul>

            <div className="mt-8">
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Follow us
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-2.5">
                {SOCIALS.map(({ label, handle, href, Icon }, i) => (
                  <Reveal as="li" key={label} delay={0.1 + i * 0.06}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 transition-colors hover:border-primary/40"
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold tracking-tight text-foreground">
                          {label}
                        </span>
                        <span className="block truncate text-[11px] text-muted-foreground">
                          {handle}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-muted/40 p-5">
              <div className="text-xs font-medium uppercase tracking-widest text-secondary">
                Office hours
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Monday – Saturday · 8:30 to 17:30 EAT. We are happy to confirm
                a time that works for your timezone.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
