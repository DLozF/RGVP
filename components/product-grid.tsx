"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ShieldCheck, FileDown, FlaskConical } from "lucide-react"
import { products } from "@/lib/products"

export default function ProductGrid() {
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
    <section id="catalog" ref={sectionRef} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-mid bg-navy-light/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <FlaskConical className="h-3.5 w-3.5" />
            Research Compounds
          </div>
          <h2 className="font-serif text-3xl font-bold text-alabaster md:text-4xl lg:text-5xl">
            Research <span className="text-crimson">Portfolio</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Browse our catalog of high-purity peptide compounds, each accompanied by third-party verified Certificates of Analysis.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Link
              key={product.name}
              href={`/products/${product.slug}`}
              className="reveal group relative overflow-hidden rounded-xl border border-white/10 bg-navy-light/40 backdrop-blur-xl transition-all duration-300 hover:border-crimson/30 hover:bg-navy-light/60"
              style={{ transitionDelay: `${index * 100}ms` } as React.CSSProperties}
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden rounded-t-xl bg-alabaster/5">
                <img
                  src={product.image}
                  alt={`${product.name} - Research peptide vial`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Purity Badge Overlay */}
                <div className="absolute right-3 top-3">
                  <span className="inline-flex items-center gap-1 rounded-full border border-chart-1/30 bg-navy/80 px-2.5 py-1 text-xs font-semibold text-chart-1 backdrop-blur-sm">
                    <ShieldCheck className="h-3 w-3" />
                    {product.purity}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                {/* Category */}
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </span>

                {/* Product Name */}
                <h3 className="mt-2 font-serif text-xl font-bold text-alabaster">{product.name}</h3>
                <p className="mt-1 font-mono text-xs text-white/70">MW: {product.weight}</p>

                {/* Description */}
                <p className="mt-3 text-sm leading-[1.6] text-muted-foreground">
                  {product.description}
                </p>

                {/* Actions */}
                <div className="mt-6 flex items-end gap-3">
                  <button className="animate-pulse-crimson flex-1 rounded-lg bg-gradient-to-r from-crimson to-crimson-dark px-4 py-2.5 text-xs font-semibold text-alabaster transition-all duration-300 hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]">
                    Add to Inquiry
                  </button>
                  {product.coa ? (
                    <span
                      onClick={() => product.coa && window.open(product.coa, "_blank")}
                      onKeyDown={(e) => e.key === "Enter" && product.coa && window.open(product.coa, "_blank")}
                      role="link"
                      tabIndex={0}
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-navy-mid px-3 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:border-alabaster/30 hover:text-alabaster"
                    >
                      <FileDown className="h-3.5 w-3.5" />
                      COA
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-navy-mid/50 px-3 py-2.5 text-xs font-medium text-muted-foreground/50 cursor-not-allowed">
                      <FileDown className="h-3.5 w-3.5" />
                      COA
                    </span>
                  )}
                </div>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-crimson transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
