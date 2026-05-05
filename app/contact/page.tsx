import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  ClipboardList,
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
import { CommentForm } from "@/components/site/comment-form"
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

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 md:grid-cols-5 md:gap-16">
            <Reveal className="md:col-span-2">
              <span className="text-xs font-medium uppercase tracking-widest text-secondary">
                Feedback
              </span>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Have a quick comment for us?
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                We genuinely read every note. Share feedback on our work,
                suggest a topic, or just say hello — anonymously if you prefer.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1 w-1 rounded-full bg-secondary"
                  />
                  Email is optional — anonymous feedback is welcome.
                </li>
                <li className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1 w-1 rounded-full bg-secondary"
                  />
                  Routed securely to our team via Formbricks.
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="md:col-span-3">
              <CommentForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 brand-gradient opacity-40"
              />
              <div className="grid items-center gap-8 md:grid-cols-12">
                <div className="md:col-span-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur">
                    <ClipboardList className="h-3.5 w-3.5 text-secondary" />
                    Client feedback survey
                  </span>
                  <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    Worked with us recently? Share your experience.
                  </h2>
                  <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                    A few focused questions help us understand what worked,
                    what didn&apos;t, and where to invest next. It takes just a
                    few minutes and goes straight to our leadership team.
                  </p>
                </div>
                <div className="flex md:col-span-4 md:justify-end">
                  <Link
                    href="/feedback"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
                  >
                    Take the survey
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
