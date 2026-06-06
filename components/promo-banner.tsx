"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  // Check if banner was previously dismissed (expires after 7 days)
  useEffect(() => {
    const dismissedAt = localStorage.getItem("promo-banner-dismissed")
    if (dismissedAt) {
      const sevenDays = 7 * 24 * 60 * 60 * 1000
      if (Date.now() - Number(dismissedAt) < sevenDays) {
        setIsVisible(false)
      } else {
        localStorage.removeItem("promo-banner-dismissed")
      }
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("promo-banner-dismissed", String(Date.now()))
  }

  if (!isVisible) return null

  return (
    <div className="relative bg-gradient-to-r from-navy-light via-crimson/20 to-navy-light py-1.5 text-center text-sm border-b border-crimson/20">
      <p className="text-alabaster">
        <span className="font-semibold text-crimson">Free Shipping</span>{" "}
        on orders over <span className="font-semibold text-crimson">$150</span> within the RGV
      </p>
      <button
        onClick={handleDismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-alabaster/50 transition-colors hover:text-alabaster"
        aria-label="Dismiss banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
