"use client"

import { useEffect, useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Dr. M. Reyes",
    role: "Research Director",
    institution: "TX Biomedical Research",
    text: "The purity and consistency of RGVPeptides compounds have been exceptional. Our lab has switched entirely to their catalog for our tissue regeneration studies.",
    rating: 5,
    product: "Wolverine Stack",
  },
  {
    name: "J. Trevino, PhD",
    role: "Principal Investigator",
    institution: "Valley Research Institute",
    text: "Fast fulfillment, transparent COAs, and compounds that actually match their stated purity. Exactly what a research lab needs from a peptide supplier.",
    rating: 5,
    product: "Retatrutide",
  },
  {
    name: "Dr. S. Garza",
    role: "Lab Supervisor",
    institution: "South TX Research Lab",
    text: "We've been through several suppliers. RGVPeptides is the only one that ships cold-chain consistently and provides third-party verified documentation every time.",
    rating: 5,
    product: "GHK-Cu",
  },
  {
    name: "A. Longoria, MS",
    role: "Graduate Researcher",
    institution: "UTRGV Biomedical Dept.",
    text: "The reconstitution calculator alone sets them apart. Combined with genuine 99.8% purity, this is the gold standard for research-grade peptides in the Valley.",
    rating: 5,
    product: "CJC-1295 / Ipamorelin",
  },
]

export default function Testimonials() {
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

  return (
    <section ref={sectionRef} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-mid bg-navy-light/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Star className="h-3.5 w-3.5" />
            Trusted by Researchers
          </div>
          <h2 className="font-serif text-3xl font-bold text-alabaster md:text-4xl lg:text-5xl">
            What Labs <span className="text-crimson">Are Saying</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Join hundreds of research laboratories across the country that trust RGVPeptides for their investigative compound needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="reveal grid gap-6 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-light/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-crimson/20 hover:bg-navy-light/60"
              style={{ transitionDelay: `${index * 100}ms` } as React.CSSProperties}
            >
              {/* Quote icon */}
              <Quote className="absolute -top-1 right-6 h-20 w-20 text-crimson/5 transition-colors duration-300 group-hover:text-crimson/10" />

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-crimson text-crimson"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="relative z-10 text-sm leading-relaxed text-alabaster/80">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Product Tag */}
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full border border-navy-mid bg-navy/60 px-2.5 py-0.5 text-xs font-mono text-muted-foreground">
                  {t.product}
                </span>
              </div>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3 border-t border-navy-mid pt-5">
                {/* Avatar - monogram */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-crimson/20 bg-crimson/10 text-sm font-bold text-crimson">
                  {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-alabaster">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} &middot; {t.institution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
