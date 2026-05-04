import type { Metadata } from "next"
import { Mail, MapPin, Phone } from "lucide-react"
import { PageHeader } from "@/components/site/page-header"
import { ContactForm } from "@/components/site/contact-form"

export const metadata: Metadata = {
  title: "Contact — Northveil Consulting",
  description:
    "Get in touch with Northveil. We respond within one business day.",
}

const DETAILS = [
  {
    Icon: Mail,
    label: "Email",
    value: "hello@northveil.co",
    href: "mailto:hello@northveil.co",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+1 (415) 555-0142",
    href: "tel:+14155550142",
  },
  {
    Icon: MapPin,
    label: "Office",
    value: "548 Market St, San Francisco, CA",
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
              Whether you have a defined brief or just an early signal, we&apos;d
              love to hear it. Use the form, or reach us directly.
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
                Monday – Friday · 9:00 to 18:00 PT. Asynchronous communication
                preferred — we&apos;ll always confirm a time that works for
                you.
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
