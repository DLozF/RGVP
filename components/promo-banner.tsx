"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem("promo-banner-dismissed")
    if (dismissed) {
      setIsVisible(false)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem("promo-banner-dismissed", "true")
  }

  if (!isVisible) return null

  return (
    <div className="relative bg-white py-1 text-center text-sm">
      <p className="text-navy">
        <span className="font-semibold text-crimson">Free Shipping</span>{" "}
        on orders over <span className="font-semibold text-crimson">$150</span> within the RGV
      </p>
      <button
        onClick={handleDismiss}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/50 transition-colors hover:text-navy"
        aria-label="Dismiss banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
