"use client"

import { useState, useEffect, useRef } from "react"
import { Mail, ArrowRight, CheckCircle2, Loader2 } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.1 }
    )
    const reveals = sectionRef.current?.querySelectorAll(".reveal")
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === "loading") return

    setStatus("loading")

    // Simulate a short delay — replace with real API call when ready
    await new Promise((r) => setTimeout(r, 1200))
    setStatus("success")
  }

  return (
    <section ref={sectionRef} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-navy-light/40 backdrop-blur-xl">
          {/* Background glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-crimson/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-chart-1/10 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-center px-8 py-16 text-center md:px-16 md:py-20">
            {/* Icon */}
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-crimson/20 bg-crimson/10">
              <Mail className="h-6 w-6 text-crimson" />
            </div>

            <h2 className="font-serif text-3xl font-bold text-alabaster md:text-4xl">
              Stay in the <span className="text-crimson">Loop</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Get notified about new product releases, restocks, and exclusive offers for the research community. No spam — just science.
            </p>

            {/* Form */}
            {status === "success" ? (
              <div className="mt-8 flex items-center gap-3 rounded-xl border border-chart-3/30 bg-chart-3/10 px-6 py-4">
                <CheckCircle2 className="h-5 w-5 text-chart-3" />
                <p className="text-sm font-medium text-chart-3">
                  You&apos;re on the list. We&apos;ll be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-md gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="researcher@lab.edu"
                    required
                    className="w-full rounded-xl border border-navy-mid bg-navy/80 px-4 py-3 text-sm text-alabaster placeholder:text-muted-foreground/50 focus:border-crimson/50 focus:outline-none focus:ring-1 focus:ring-crimson/30"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 rounded-xl bg-crimson px-6 py-3 text-sm font-semibold text-alabaster transition-all duration-200 hover:bg-crimson-dark hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            <p className="mt-4 text-xs text-muted-foreground/60">
              Unsubscribe anytime. We respect your inbox.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
