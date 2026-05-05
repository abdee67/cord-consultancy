"use client"

import { useEffect } from "react"

const ENVIRONMENT_ID = "cmospnp4q8cjzw801kzo31138"
const APP_URL = "https://app.formbricks.com"

/**
 * Initializes Formbricks once on app startup (client-side only).
 * Uses dynamic import so the SDK never ships in the server bundle.
 */
export function FormbricksInit() {
  useEffect(() => {
    let cancelled = false

    ;(async () => {
      try {
        const mod = await import("@formbricks/js")
        if (cancelled) return
        const formbricks: any = (mod as any).default ?? mod
        if (typeof formbricks.setup === "function") {
          await formbricks.setup({
            environmentId: ENVIRONMENT_ID,
            appUrl: APP_URL,
          })
        } else if (typeof formbricks.init === "function") {
          await formbricks.init({
            environmentId: ENVIRONMENT_ID,
            apiHost: APP_URL,
          })
        }
      } catch (err) {
        // Fail silently — Formbricks should never block the UI.
        console.warn("[v0] Formbricks init skipped:", err)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [])

  return null
}
