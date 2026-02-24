"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { FlaskConical, Snowflake, Flag, Award, Microscope, ShieldCheck, Droplet } from "lucide-react"

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Third-Party Tested",
    description: "Every batch is independently verified by accredited analytical laboratories using HPLC and MS methods.",
  },
  {
    icon: Snowflake,
    title: "Cold-Chain Shipping",
    description: "Temperature-controlled logistics from synthesis to delivery to ensure compound integrity and stability.",
  },
  {
    icon: Flag,
    title: "USA Synthesized",
    description: "All peptides are manufactured in our state-of-the-art, cGMP-compliant facility within the United States.",
  },
  {
    icon: Droplet,
    title: "Reconstitution",
    description: "Premium bacteriostatic water for peptide reconstitution. USP pharmaceutical grade with 0.9% benzyl alcohol.",
    isWaterCard: true,
  },
]

const stats = [
  { value: "99.8%", label: "Average Purity", icon: FlaskConical },
  { value: "500+", label: "Research Labs Served", icon: Microscope },
  { value: "48hr", label: "Avg. Fulfillment", icon: Award },
]

export default function TrustBar() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    const reveals = sectionRef.current?.querySelectorAll(".reveal")
    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="quality" ref={sectionRef} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-mid bg-navy-light/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Award className="h-3.5 w-3.5" />
            Assurance Standards
          </div>
          <h2 className="font-serif text-3xl font-bold text-alabaster md:text-4xl lg:text-5xl">
            Quality <span className="text-crimson">First</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Our commitment to research integrity begins with rigorous quality controls at every stage of the synthesis pipeline.
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="reveal group rounded-xl border border-white/10 bg-navy-light/40 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-crimson/30 hover:bg-navy-light/60"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl border transition-all duration-300 ${
                item.isWaterCard 
                  ? "border-chart-1/20 bg-chart-1/10 text-chart-1 group-hover:bg-chart-1/20 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]" 
                  : "border-crimson/20 bg-crimson/10 text-crimson group-hover:bg-crimson/20 group-hover:shadow-[0_0_15px_rgba(225,29,72,0.3)]"
              }`}>
                <item.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className={`font-serif text-lg font-bold ${item.isWaterCard ? "text-chart-1" : "text-alabaster"}`}>
                {item.title}
              </h3>
              {item.isWaterCard ? (
                <div className="mt-3">
                  <Link 
                    href="/products/bacteriostatic-water"
                    className="text-sm font-semibold text-alabaster underline decoration-chart-1/50 underline-offset-2 transition-colors hover:text-chart-1 hover:decoration-chart-1"
                  >
                    Bacteriostatic Water
                  </Link>
                  <p className="mt-2 text-xs leading-[1.6] text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ) : (
                <p className="mt-3 text-sm leading-[1.6] text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="reveal mt-16 grid gap-px overflow-hidden rounded-xl border-t border-b border-navy-mid bg-navy-mid md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 bg-navy-light/50 px-8 py-8 backdrop-blur-sm transition-colors hover:bg-navy-light/70"
            >
              <stat.icon className="mb-1 h-5 w-5 text-crimson" strokeWidth={1.5} />
              <span className="font-mono text-3xl font-bold text-alabaster">{stat.value}</span>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
