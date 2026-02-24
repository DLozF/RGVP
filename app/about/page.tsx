"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { 
  ShieldCheck, 
  Thermometer, 
  Snowflake, 
  FileCheck, 
  Microscope, 
  Cpu, 
  Zap, 
  Globe,
  Beaker
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MoleculesBackground from "@/components/molecules-background"

const qualityFeatures = [
  {
    icon: Thermometer,
    title: "Storage at −20°C",
    description: "All peptides are stored and shipped under strict temperature-controlled conditions to maintain compound integrity.",
  },
  {
    icon: FileCheck,
    title: "Third-Party COAs",
    description: "Every batch includes a Certificate of Analysis from accredited independent laboratories verifying purity and identity.",
  },
  {
    icon: ShieldCheck,
    title: "99.7% Purity Standard",
    description: "Our rigorous synthesis and purification protocols ensure consistent, research-grade quality in every vial.",
  },
  {
    icon: Snowflake,
    title: "Lyophilized Format",
    description: "Supplied in stable, lyophilized form for extended shelf life and optimal reconstitution when you need it.",
  },
]

const techFeatures = [
  {
    icon: Cpu,
    title: "Modern Infrastructure",
    description: "Built on cutting-edge web technologies for fast, secure, and reliable ordering.",
  },
  {
    icon: Zap,
    title: "Streamlined Procurement",
    description: "Simplified ordering process designed specifically for laboratory workflows.",
  },
  {
    icon: Globe,
    title: "Digital COA Access",
    description: "Instant access to quality documentation for every product in our catalog.",
  },
  {
    icon: Microscope,
    title: "Research-First Design",
    description: "Platform built by researchers, for researchers, with your needs in mind.",
  },
]

export default function AboutPage() {
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
    <div className="relative min-h-screen bg-background">
      <MoleculesBackground />
      <div className="relative z-10">
        <Navbar />
        <main ref={sectionRef}>
          {/* Hero Section */}
          <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-28">
            <div className="mx-auto w-full max-w-7xl px-6 py-20">
              <div className="flex flex-col items-center text-center">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-navy-mid bg-navy-light/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
                  About RGVPeptides
                </div>

                {/* Heading */}
                <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-alabaster md:text-5xl lg:text-6xl">
                  Redefining Research{" "}
                  <span className="text-crimson">Excellence</span>
                </h1>

                {/* Sub-headline */}
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  At the intersection of biotechnology and modern software, we deliver 
                  premium research compounds with unprecedented transparency and quality assurance.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/#catalog"
                    className="animate-pulse-crimson rounded-lg bg-gradient-to-r from-crimson to-crimson-dark px-8 py-3.5 text-sm font-semibold text-alabaster transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.5)]"
                  >
                    Explore Research Catalog
                  </Link>
                  <Link
                    href="/#quality"
                    className="rounded-lg border border-navy-mid px-8 py-3.5 text-sm font-semibold text-alabaster transition-colors hover:border-alabaster/30 hover:bg-navy-light"
                  >
                    Quality Assurance
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
          </section>

          {/* Our Mission Section */}
          <section className="relative py-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="reveal grid gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Left: Heading */}
                <div className="flex flex-col justify-center">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-mid bg-navy-light/50 px-4 py-1.5 text-xs font-medium text-muted-foreground w-fit">
                    <Beaker className="h-3.5 w-3.5" />
                    Our Mission
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-alabaster md:text-4xl lg:text-5xl">
                    The <span className="text-crimson">RGV</span> Standard
                  </h2>
                </div>

                {/* Right: Content */}
                <div className="flex flex-col justify-center">
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    We are committed to providing researchers with the highest quality peptide 
                    compounds available. Our dedication to <span className="text-alabaster font-medium">99.7% purity</span> isn't 
                    just a number—it's a promise that your research deserves the most reliable, 
                    precisely synthesized compounds possible.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                    Every product we offer is supplied in <span className="text-alabaster font-medium">lyophilized form</span>, ensuring 
                    stability and longevity for your laboratory needs. We believe that 
                    groundbreaking research requires groundbreaking materials.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Quality & Storage Card Section */}
          <section className="relative py-16">
            <div className="mx-auto max-w-7xl px-6">
              <div className="reveal mb-12 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-mid bg-navy-light/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Quality Standards
                </div>
                <h2 className="font-serif text-3xl font-bold text-alabaster md:text-4xl">
                  Quality & <span className="text-crimson">Storage</span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  Every aspect of our process is designed to ensure compound integrity from synthesis to your laboratory.
                </p>
              </div>

              {/* Quality Cards Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {qualityFeatures.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="reveal group rounded-xl border border-navy-mid bg-navy-light/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-crimson/30 hover:bg-navy-light/50"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-crimson/20 bg-crimson/10 text-crimson transition-all duration-300 group-hover:bg-crimson/20 group-hover:shadow-[0_0_15px_rgba(225,29,72,0.3)]">
                      <feature.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-alabaster">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Highlighted Storage Card */}
              <div className="reveal mt-8 rounded-2xl border border-navy-mid bg-navy-light/20 p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl border border-chart-1/20 bg-chart-1/10 text-chart-1">
                    <Thermometer className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-alabaster">
                      Temperature-Controlled Excellence
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      All peptides are stored at <span className="font-mono text-alabaster">−20°C</span> in our 
                      state-of-the-art facility and shipped with cold-chain logistics to ensure 
                      compound stability. Each batch includes a third-party Certificate of Analysis 
                      (COA) verifying purity, identity, and concentration—because your research 
                      demands nothing less than complete transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tech-Forward Approach Section */}
          <section className="relative py-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="reveal mb-12 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-mid bg-navy-light/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
                  <Cpu className="h-3.5 w-3.5" />
                  Modern Platform
                </div>
                <h2 className="font-serif text-3xl font-bold text-alabaster md:text-4xl">
                  Tech-Forward <span className="text-crimson">Approach</span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  Built by and for the modern era, utilizing advanced web technologies to streamline 
                  the procurement process for laboratories worldwide.
                </p>
              </div>

              {/* Tech Features Grid */}
              <div className="grid gap-6 md:grid-cols-2">
                {techFeatures.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="reveal group rounded-xl border border-navy-mid bg-navy-light/30 p-8 backdrop-blur-sm transition-all duration-300 hover:border-chart-1/30 hover:bg-navy-light/50"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-chart-1/20 bg-chart-1/10 text-chart-1 transition-all duration-300 group-hover:bg-chart-1/20 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                        <feature.icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-alabaster">
                          {feature.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Research Disclaimer Section */}
          <section className="relative py-16">
            <div className="mx-auto max-w-7xl px-6">
              <div className="reveal rounded-2xl border-2 border-crimson/30 bg-crimson/5 p-8 text-center backdrop-blur-sm md:p-12">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-crimson/30 bg-crimson/10 mb-6">
                  <ShieldCheck className="h-7 w-7 text-crimson" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-alabaster md:text-2xl">
                  Strict Research Disclaimer
                </h3>
                <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  All products are intended strictly for{" "}
                  <span className="font-semibold text-crimson">laboratory research purposes</span> and are{" "}
                  <span className="font-semibold text-crimson">not for human or veterinary use</span>. 
                  These compounds are sold for in vitro research and laboratory use only. Researchers 
                  must adhere to all applicable institutional, local, and federal regulations governing 
                  the handling and use of research peptides.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}