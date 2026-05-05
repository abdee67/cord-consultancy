import type { Metadata } from "next"
import { Mail, MapPin, Phone, Linkedin } from "lucide-react"
import { PageHeader } from "@/components/site/page-header"
import { ContactForm } from "@/components/site/contact-form"

export const metadata: Metadata = {
  title: "Contact — CORD Consultancy",
  description:
    "Get in touch with CORD Consultancy in Addis Ababa. We respond within one business day.",
}

const DETAILS = [
  {
    Icon: Mail,
    label: "Email",
    value: "info.cordnutrition@gmail.com",
    href: "mailto:info.cordnutrition@gmail.com",
  },
  {
    Icon: Mail,
    label: "Director",
    value: "girma@cordnutrition.com",
    href: "mailto:girma@cordnutrition.com",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+251 942 461 146 · +251 911 182 168",
    href: "tel:+251942461146",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/girma-goshime-cordnutrition",
    href: "https://www.linkedin.com/in/girma-goshime-cordnutrition",
  },
  {
    Icon: MapPin,
    label: "Office",
    value:
      "Akaki-Kaliti, Wereda 13, Tulu Dimtu · Amakor Building, Office G007, Addis Ababa",
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
          <div className="md:col-span-2">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground">
              Let&apos;s talk.
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Whether you have a defined brief or just an early signal, we
              would love to hear it. Use the form, or reach us directly.
            </p>

            <ul className="mt-8 space-y-4">
              {DETAILS.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
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
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noreferrer noopener"
                            : undefined
                        }
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
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-border bg-muted/40 p-5">
              <div className="text-xs font-medium uppercase tracking-widest text-secondary">
                Office hours
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Monday – Saturday · 8:30 to 17:30 EAT. We are happy to confirm
                a time that works for your timezone.
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
