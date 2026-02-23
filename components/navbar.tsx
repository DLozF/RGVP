"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import PromoBanner from "./promo-banner"

const navLinks = [
  { label: "Research Catalog", href: "#catalog" },
  { label: "Quality Control", href: "#quality" },
  { label: "About", href: "#about" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <PromoBanner />
      <nav
        className={`transition-all duration-300 ${scrolled
          ? "bg-[#0a192f]/90 backdrop-blur-md border-b border-navy-mid/50 shadow-lg"
          : "bg-[#0a192f]/70 backdrop-blur-md"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
          <a href="/" className="flex items-center gap-0">
            <img
              src="/images/logo.png"
              alt="RGVPeptides logo"
              className="h-12 w-auto object-contain"
            />
            <span className="-ml-1 font-serif text-xl font-bold tracking-tight text-alabaster">
              RGV<span className="text-crimson">Peptides</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-alabaster/70 transition-colors hover:text-alabaster"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-alabaster"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-navy-mid/30 bg-navy/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-alabaster/70 transition-colors hover:bg-navy-light hover:text-alabaster"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
