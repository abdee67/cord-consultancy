"use client"

import { useState } from "react"
import { ArrowRight, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type Status = "idle" | "submitting" | "success"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    // Simulated submission — replace with your backend integration.
    await new Promise((r) => setTimeout(r, 900))
    setStatus("success")
    ;(e.target as HTMLFormElement).reset()
    setTimeout(() => setStatus("idle"), 4000)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 md:p-8"
      noValidate
    >
      <div className="grid gap-5">
        <Field id="name" label="Name" type="text" placeholder="Jane Doe" required />
        <Field
          id="email"
          label="Email"
          type="email"
          placeholder="jane@company.com"
          required
        />

        <div className="grid gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-foreground"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us a little about what you're working on…"
            className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="group h-12 w-full rounded-full bg-primary text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md disabled:opacity-80"
        >
          {status === "submitting" && (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          )}
          {status === "success" && (
            <>
              <Check className="h-4 w-4" />
              Message sent
            </>
          )}
          {status === "idle" && (
            <>
              Send message
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          We&apos;ll respond within one business day.
        </p>
      </div>
    </form>
  )
}

function Field({
  id,
  label,
  type,
  placeholder,
  required,
}: {
  id: string
  label: string
  type: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/70 transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
      />
    </div>
  )
}
