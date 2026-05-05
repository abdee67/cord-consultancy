import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, ShieldCheck, Sparkles, Timer } from "lucide-react"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Client Feedback Survey — CORD Consultancy",
  description:
    "Share your experience working with CORD Consultancy. Your feedback shapes how we deliver health, nutrition, and management consulting across Ethiopia.",
}

const SURVEY_URL = "https://app.formbricks.com/s/cmosrd9w99wwmym01ot3krz0l"

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

export default function FeedbackPage() {
  return (
    <>
      <PageHeader
        eyebrow="Feedback survey"
        title="Tell us how we&apos;re doing."
        description="If you&apos;ve worked with CORD Consultancy on a project, training, or advisory engagement, your honest feedback helps us serve clients and communities better."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Side panel */}
          <Reveal className="lg:col-span-4">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <span className="text-xs font-medium uppercase tracking-widest text-secondary">
                Why this matters
              </span>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground">
                Your voice shapes our practice.
              </h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                We build long-term partnerships, not transactions. Whether the
                experience was excellent or fell short, please tell us — it
                travels straight to the leadership team.
              </p>

              <ul className="mt-6 space-y-4">
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

              <div className="mt-8 rounded-xl border border-border bg-muted/40 p-4">
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

            <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-5">
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Prefer to talk?
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Reach out directly and we&apos;ll set up a short call.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Contact the team
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
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
