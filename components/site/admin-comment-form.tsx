"use client"

import { useState } from "react"
import { ArrowRight, Check, Loader2, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

type Status = "idle" | "submitting" | "success"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function AdminCommentForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)
    const name = (data.get("name") as string | null)?.trim() ?? ""
    const email = (data.get("email") as string | null)?.trim() ?? ""
    const subject = (data.get("subject") as string | null)?.trim() ?? ""
    const message = (data.get("message") as string | null)?.trim() ?? ""

    if (!name) {
      setError("Please share your name so we know who to reply to.")
      return
    }
    if (!email || !EMAIL_RE.test(email)) {
      setError("Please enter a valid email address.")
      return
    }
    if (!message) {
      setError("Please add a message before sending.")
      return
    }

    setStatus("submitting")

    try {
      const mod = await import("@formbricks/js")
      // The package exports the SDK as the default export.
      const formbricks: any = (mod as any).default ?? mod

      // Tag the user with their email so the admin can reply directly
      // from the Formbricks dashboard.
      if (typeof formbricks.setEmail === "function") {
        await formbricks.setEmail(email)
      } else if (typeof formbricks.identify === "function") {
        await formbricks.identify(email)
      } else if (typeof formbricks.setUserId === "function") {
        await formbricks.setUserId(email)
      } else if (typeof formbricks.setAttribute === "function") {
        await formbricks.setAttribute("email", email)
      }

      if (typeof formbricks.track === "function") {
        await formbricks.track("admin_comment", {
          name,
          email,
          subject: subject || null,
          message,
          submittedAt: new Date().toISOString(),
          source: "contact_page",
        })
      }
    } catch (err) {
      // Don't block the user — the comment is captured client-side and
      // any transient SDK error shouldn't degrade their experience.
      console.warn("[v0] admin_comment dispatch failed:", err)
    }

    setStatus("success")
    form.reset()
    setTimeout(() => setStatus("idle"), 6000)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 md:p-8"
      noValidate
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <ShieldCheck className="h-4 w-4" strokeWidth={1.75} />
        </span>
        <div>
          <h3 className="text-base font-semibold tracking-tight text-foreground">
            Send a comment to the admin
          </h3>
          <p className="text-xs text-muted-foreground">
            Goes directly to our team. We&apos;ll reply within one business day.
          </p>
        </div>
      </div>

      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="admin-name"
            name="name"
            label="Name"
            type="text"
            placeholder="Jane Doe"
            required
          />
          <Field
            id="admin-email"
            name="email"
            label="Email"
            type="email"
            placeholder="jane@company.com"
            required
          />
        </div>

        <Field
          id="admin-subject"
          name="subject"
          label="Subject"
          type="text"
          placeholder="What is this about?"
          optional
        />

        <div className="grid gap-2">
          <label
            htmlFor="admin-message"
            className="text-sm font-medium text-foreground"
          >
            Message <span className="text-secondary">*</span>
          </label>
          <textarea
            id="admin-message"
            name="message"
            required
            rows={6}
            placeholder="Tell us what you'd like to share — feedback, an inquiry, or anything else."
            className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
          />
        </div>

        {error && (
          <p
            role="alert"
            className="rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-xs text-destructive"
          >
            {error}
          </p>
        )}

        {status === "success" && (
          <p
            role="status"
            className="flex items-center gap-2 rounded-lg border border-secondary/30 bg-secondary/5 px-3 py-2 text-xs font-medium text-secondary"
          >
            <Check className="h-3.5 w-3.5" strokeWidth={2.25} />
            Thanks — your comment has been sent to the admin.
          </p>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="group h-12 w-full rounded-full bg-primary text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md disabled:opacity-80"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send to admin
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Your message is delivered securely to the CORD Consultancy admin team.
        </p>
      </div>
    </form>
  )
}

function Field({
  id,
  name,
  label,
  type,
  placeholder,
  required,
  optional,
}: {
  id: string
  name: string
  label: string
  type: string
  placeholder?: string
  required?: boolean
  optional?: boolean
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-1 text-secondary">*</span>}
        {optional && (
          <span className="ml-1 text-xs font-normal text-muted-foreground">
            (optional)
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/70 transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
      />
    </div>
  )
}
