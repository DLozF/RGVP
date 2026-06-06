"use client"

import { useState, useEffect, useRef } from "react"
import { Beaker, Droplet, FlaskConical, Info, RotateCcw } from "lucide-react"

const PRESETS = [
  { label: "5mg vial", mg: 5 },
  { label: "10mg vial", mg: 10 },
  { label: "15mg vial", mg: 15 },
  { label: "20mg vial", mg: 20 },
]

const CONCENTRATION_PRESETS = [
  { label: "100 mcg", mcg: 100 },
  { label: "200 mcg", mcg: 200 },
  { label: "250 mcg", mcg: 250 },
  { label: "500 mcg", mcg: 500 },
]

export default function ReconstitutionCalculator() {
  const [peptideMg, setPeptideMg] = useState(5)
  const [desiredMcg, setDesiredMcg] = useState(250)
  const [bacWaterMl, setBacWaterMl] = useState(1)
  const [animateVial, setAnimateVial] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Derived calculations
  const concentrationMcgPerMl = (peptideMg * 1000) / bacWaterMl
  const doseVolumeMl = desiredMcg / concentrationMcgPerMl
  const doseVolumeUnits = Math.round(doseVolumeMl * 100) // insulin syringe units
  const totalDoses = Math.floor((peptideMg * 1000) / desiredMcg)

  // Fill percentage for the vial animation (based on bac water amount, max 3ml visual)
  const fillPercent = Math.min((bacWaterMl / 3) * 100, 100)

  useEffect(() => {
    setAnimateVial(true)
    const t = setTimeout(() => setAnimateVial(false), 600)
    return () => clearTimeout(t)
  }, [bacWaterMl, peptideMg])

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

  const reset = () => {
    setPeptideMg(5)
    setDesiredMcg(250)
    setBacWaterMl(1)
  }

  return (
    <section id="calculator" ref={sectionRef} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-mid bg-navy-light/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Beaker className="h-3.5 w-3.5" />
            Research Tool
          </div>
          <h2 className="font-serif text-3xl font-bold text-alabaster md:text-4xl lg:text-5xl">
            Reconstitution <span className="text-crimson">Calculator</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Determine the precise volume of bacteriostatic water needed for your desired peptide concentration.
          </p>
        </div>

        <div className="reveal grid gap-8 lg:grid-cols-5">
          {/* Left: Inputs (3 cols) */}
          <div className="space-y-8 lg:col-span-3">
            {/* Peptide Amount */}
            <div className="rounded-2xl border border-white/10 bg-navy-light/40 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm font-semibold text-alabaster">
                  <FlaskConical className="h-4 w-4 text-crimson" />
                  Peptide Amount
                </label>
                <span className="font-mono text-lg font-bold text-crimson">{peptideMg} mg</span>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={0.5}
                value={peptideMg}
                onChange={(e) => setPeptideMg(Number(e.target.value))}
                className="calc-slider mb-4 w-full"
              />
              <div className="flex flex-wrap gap-2">
                {PRESETS.map((p) => (
                  <button
                    key={p.mg}
                    onClick={() => setPeptideMg(p.mg)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                      peptideMg === p.mg
                        ? "border-crimson/50 bg-crimson/20 text-crimson shadow-[0_0_12px_rgba(225,29,72,0.15)]"
                        : "border-navy-mid text-muted-foreground hover:border-alabaster/20 hover:text-alabaster"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* BAC Water Volume */}
            <div className="rounded-2xl border border-white/10 bg-navy-light/40 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm font-semibold text-alabaster">
                  <Droplet className="h-4 w-4 text-chart-1" />
                  Bacteriostatic Water
                </label>
                <span className="font-mono text-lg font-bold text-chart-1">{bacWaterMl} mL</span>
              </div>
              <input
                type="range"
                min={0.5}
                max={3}
                step={0.1}
                value={bacWaterMl}
                onChange={(e) => setBacWaterMl(Number(e.target.value))}
                className="calc-slider-blue mb-4 w-full"
              />
              <div className="flex flex-wrap gap-2">
                {[0.5, 1, 1.5, 2, 2.5, 3].map((ml) => (
                  <button
                    key={ml}
                    onClick={() => setBacWaterMl(ml)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                      bacWaterMl === ml
                        ? "border-chart-1/50 bg-chart-1/20 text-chart-1 shadow-[0_0_12px_rgba(59,130,246,0.15)]"
                        : "border-navy-mid text-muted-foreground hover:border-alabaster/20 hover:text-alabaster"
                    }`}
                  >
                    {ml} mL
                  </button>
                ))}
              </div>
            </div>

            {/* Desired Dose */}
            <div className="rounded-2xl border border-white/10 bg-navy-light/40 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm font-semibold text-alabaster">
                  <Beaker className="h-4 w-4 text-chart-3" />
                  Desired Dose per Administration
                </label>
                <span className="font-mono text-lg font-bold text-chart-3">{desiredMcg} mcg</span>
              </div>
              <input
                type="range"
                min={50}
                max={1000}
                step={10}
                value={desiredMcg}
                onChange={(e) => setDesiredMcg(Number(e.target.value))}
                className="calc-slider-green mb-4 w-full"
              />
              <div className="flex flex-wrap gap-2">
                {CONCENTRATION_PRESETS.map((p) => (
                  <button
                    key={p.mcg}
                    onClick={() => setDesiredMcg(p.mcg)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                      desiredMcg === p.mcg
                        ? "border-chart-3/50 bg-chart-3/20 text-chart-3 shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                        : "border-navy-mid text-muted-foreground hover:border-alabaster/20 hover:text-alabaster"
                    }`}
                  >
                    {p.mcg} mcg
                  </button>
                ))}
              </div>
            </div>

            {/* Reset */}
            <button
              onClick={reset}
              className="flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-alabaster"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset to defaults
            </button>
          </div>

          {/* Right: Vial visualization + Results (2 cols) */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Vial Visual */}
            <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-navy-light/40 p-8 backdrop-blur-xl">
              <div className="relative mb-6">
                {/* Vial SVG */}
                <svg width="120" height="220" viewBox="0 0 120 220" className="drop-shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                  {/* Vial cap */}
                  <rect x="42" y="0" width="36" height="16" rx="3" fill="#1E3A5F" stroke="#3B82F6" strokeWidth="1" opacity="0.8" />
                  {/* Vial neck */}
                  <rect x="46" y="16" width="28" height="24" rx="2" fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity="0.4" />
                  {/* Vial body */}
                  <rect x="24" y="40" width="72" height="150" rx="8" fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity="0.3" />
                  {/* Shoulder lines */}
                  <line x1="46" y1="40" x2="24" y2="55" stroke="#3B82F6" strokeWidth="1.5" opacity="0.3" />
                  <line x1="74" y1="40" x2="96" y2="55" stroke="#3B82F6" strokeWidth="1.5" opacity="0.3" />

                  {/* Graduation marks */}
                  {[0.25, 0.5, 0.75].map((frac, i) => (
                    <g key={i}>
                      <line
                        x1="28"
                        y1={185 - frac * 140}
                        x2="36"
                        y2={185 - frac * 140}
                        stroke="#3B82F6"
                        strokeWidth="1"
                        opacity="0.3"
                      />
                    </g>
                  ))}

                  {/* Liquid fill */}
                  <defs>
                    <linearGradient id="liquidGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
                    </linearGradient>
                    <clipPath id="vialClip">
                      <rect x="25" y="55" width="70" height="134" rx="6" />
                    </clipPath>
                  </defs>
                  <rect
                    x="25"
                    y={189 - (fillPercent / 100) * 134}
                    width="70"
                    height={(fillPercent / 100) * 134}
                    rx="0"
                    fill="url(#liquidGrad)"
                    clipPath="url(#vialClip)"
                    className={`transition-all duration-500 ease-out ${animateVial ? "opacity-70" : "opacity-100"}`}
                  />

                  {/* Liquid surface line */}
                  {fillPercent > 0 && (
                    <line
                      x1="26"
                      y1={189 - (fillPercent / 100) * 134}
                      x2="94"
                      y2={189 - (fillPercent / 100) * 134}
                      stroke="#3B82F6"
                      strokeWidth="1.5"
                      opacity="0.6"
                      className="transition-all duration-500 ease-out"
                    />
                  )}

                  {/* Lyophilized powder dot cluster at bottom */}
                  <circle cx="50" cy="180" r="2" fill="#F8FAFC" opacity="0.6" />
                  <circle cx="60" cy="183" r="2.5" fill="#F8FAFC" opacity="0.5" />
                  <circle cx="70" cy="181" r="1.5" fill="#F8FAFC" opacity="0.7" />
                  <circle cx="55" cy="185" r="2" fill="#F8FAFC" opacity="0.4" />
                  <circle cx="65" cy="178" r="1.5" fill="#F8FAFC" opacity="0.5" />
                </svg>

                {/* Volume label on vial */}
                <div className="absolute -right-12 top-1/2 -translate-y-1/2">
                  <span className="font-mono text-xs text-chart-1/60">{bacWaterMl}mL</span>
                </div>
              </div>

              <p className="text-center text-xs text-muted-foreground">
                {peptideMg}mg peptide in {bacWaterMl}mL BAC water
              </p>
            </div>

            {/* Results Cards */}
            <div className="space-y-3">
              <div className="rounded-xl border border-crimson/20 bg-crimson/5 p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Concentration</p>
                <p className="mt-1 font-mono text-2xl font-bold text-crimson">
                  {concentrationMcgPerMl.toLocaleString(undefined, { maximumFractionDigits: 1 })} <span className="text-sm font-medium text-crimson/70">mcg/mL</span>
                </p>
              </div>

              <div className="rounded-xl border border-chart-1/20 bg-chart-1/5 p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Volume per Dose</p>
                <p className="mt-1 font-mono text-2xl font-bold text-chart-1">
                  {doseVolumeMl.toFixed(3)} <span className="text-sm font-medium text-chart-1/70">mL</span>
                  <span className="ml-3 text-base text-alabaster/60">({doseVolumeUnits} units)</span>
                </p>
              </div>

              <div className="rounded-xl border border-chart-3/20 bg-chart-3/5 p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Total Doses per Vial</p>
                <p className="mt-1 font-mono text-2xl font-bold text-chart-3">
                  {totalDoses} <span className="text-sm font-medium text-chart-3/70">doses</span>
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-2 rounded-lg border border-navy-mid bg-navy-light/20 p-3">
              <Info className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
              <p className="text-xs leading-relaxed text-muted-foreground">
                For research reference only. Always verify calculations independently before use in laboratory protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
