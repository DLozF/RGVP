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
        <div className="relative flex h-[400px] w-[400px] items-center justify-center animate-float">
          {/* Glowing background */}
          <div className="pointer-events-none absolute z-0 h-[200px] w-[200px] rounded-full bg-crimson/30 blur-[80px]" />

          {/* Concentric rings with atoms - each ring spins to create orbit effect */}
          
          {/* Outer ring - slowest (40s), counter-clockwise */}
          <div className="pointer-events-none absolute z-0 h-[350px] w-[350px] rounded-full border border-white/5 animate-[spin_40s_linear_infinite_reverse]">
            {/* Atom at left */}
            <div className="absolute top-1/2 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson shadow-[0_0_10px_rgba(225,29,72,0.8)]" />
          </div>
          
          {/* Middle ring - medium speed (30s), clockwise (reverse direction) */}
          <div className="pointer-events-none absolute z-0 h-[275px] w-[275px] rounded-full border border-white/10 animate-[spin_30s_linear_infinite]">
            {/* Atom at right */}
            <div className="absolute top-1/2 right-0 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson shadow-[0_0_10px_rgba(225,29,72,0.8)]" />
            {/* Atom at left */}
            <div className="absolute top-1/2 left-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson shadow-[0_0_10px_rgba(225,29,72,0.8)]" />
            {/* Atom at top */}
            <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson shadow-[0_0_10px_rgba(225,29,72,0.8)]" />
          </div>
          
          {/* Inner ring - fastest (20s), counter-clockwise */}
          <div className="pointer-events-none absolute z-0 h-[200px] w-[200px] rounded-full border border-white/10 animate-[spin_20s_linear_infinite_reverse]">
            {/* Atom at bottom */}
            <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-crimson shadow-[0_0_10px_rgba(225,29,72,0.8)]" />
            {/* Atom at right */}
            <div className="absolute top-1/2 right-0 h-2.5 w-2.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson shadow-[0_0_10px_rgba(225,29,72,0.8)]" />
          </div>

          {/* Logo - stationary in center */}
          <div className="relative z-10">
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
