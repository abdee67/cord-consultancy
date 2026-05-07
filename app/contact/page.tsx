import type { Metadata } from "next"
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Timer,
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

const NOTES = [
  {
    Icon: Timer,
    title: "Takes a few minutes",
    description:
      "A short, focused set of questions — no long forms, no friction.",
  },
  {
    Icon: ShieldCheck,
    title: "Confidential by default",
    description:
      "Responses are stored securely with Formbricks and reviewed only by our team.",
  },
  {
    Icon: Sparkles,
    title: "Directly improves our work",
    description:
      "Every response is read and informs how we engage with clients and partners.",
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

      {/* Contact details */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {DETAILS.map(({ Icon, label, value, href }, i) => (
            <Reveal key={label} delay={0.05 + i * 0.07}>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
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
                      className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.26}>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Send className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <div>
                <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Office hours
                </div>
                <p className="mt-1 text-sm font-medium text-foreground">
                  Mon – Sat · 8:30 – 17:30 EAT
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Socials */}
        <Reveal delay={0.1} className="mt-10">
          <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Follow us
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {SOCIALS.map(({ label, handle, href, Icon }, i) => (
              <Reveal as="li" key={label} delay={0.12 + i * 0.06}>
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
        </Reveal>
      </section>

      {/* Feedback survey */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <Reveal>
          <div className="mb-8">
            <span className="text-xs font-medium uppercase tracking-widest text-secondary">
              Client feedback survey
            </span>
            <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-foreground">
              Share your experience.
            </h2>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
              If you&apos;ve worked with CORD Consultancy on a project, training, or advisory
              engagement, your honest feedback helps us serve clients and communities better.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Side notes */}
          <Reveal className="lg:col-span-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <ul className="space-y-5">
                {NOTES.map(({ Icon, title, description }, i) => (
                  <Reveal as="li" key={title} delay={0.08 + i * 0.06} className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <div>
                      <div className="text-sm font-semibold tracking-tight text-foreground">
                        {title}
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-border bg-muted/40 p-4">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Having trouble with the embedded form? You can also
                </p>
                <Button
                  asChild
                  variant="link"
                  className="mt-1 h-auto p-0 text-sm text-primary hover:text-primary/80"
                >
                  <a
                    href={SURVEY_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1"
                  >
                    open the survey in a new tab
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Embedded survey */}
          <Reveal delay={0.15} className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/40 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-secondary" />
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    CORD client feedback survey
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
                className="block h-[78vh] min-h-[640px] w-full border-0 bg-background"
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
