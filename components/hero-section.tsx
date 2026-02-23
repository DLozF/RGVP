"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [showTypewriter, setShowTypewriter] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowTypewriter(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:justify-between lg:gap-8">
        {/* Left: Text */}
        <div className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-navy-mid bg-navy-light/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
            Research-Grade Peptides
          </div>

          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-alabaster md:text-6xl lg:text-7xl">
            RGV<span className="text-crimson">Peptides</span>
          </h1>

          <div className="mt-4 h-10">
            {showTypewriter && (
              <p className="typewriter-text font-mono text-lg text-muted-foreground md:text-xl">
                Ascending the Valley
              </p>
            )}
          </div>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Premium peptide research compounds synthesized in the USA with {">"}99% purity. Trusted by laboratories nationwide for cutting-edge research.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#catalog"
              className="animate-pulse-crimson rounded-lg bg-gradient-to-r from-crimson to-crimson-dark px-8 py-3.5 text-sm font-semibold text-alabaster transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.5)]"
            >
              Explore Research Catalog
            </a>
            <a
              href="#quality"
              className="rounded-lg border border-navy-mid px-8 py-3.5 text-sm font-semibold text-alabaster transition-colors hover:border-alabaster/30 hover:bg-navy-light"
            >
              Quality Assurance
            </a>
          </div>
        </div>

        {/* Right: Logo */}
        <div className="relative flex items-center justify-center">
          {/* Logo */}
          <div className="animate-float">
            <img
              src="/images/logo.png"
              alt="RGVPeptides - Texas peptide research company"
              className="h-64 w-auto object-contain lg:h-80"
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
