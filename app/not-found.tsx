"use client"

import Link from "next/link"
import { FlaskConical, ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 h-full w-full rounded-full bg-crimson/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 h-full w-full rounded-full bg-navy-light/20 blur-3xl" />
      </div>

      <div className="relative z-10 text-center">
        {/* Logo/Brand */}
        <div className="mb-8 inline-flex items-center gap-2">
          <FlaskConical className="h-8 w-8 text-crimson" />
          <span className="font-serif text-2xl font-bold text-alabaster">RGVPeptides</span>
        </div>

        {/* 404 Number */}
        <div className="mb-6">
          <span className="font-serif text-8xl font-bold text-crimson md:text-9xl">404</span>
        </div>

        {/* Error Message */}
        <h1 className="mb-4 font-serif text-3xl font-bold text-alabaster md:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-muted-foreground">
          The research compound you're looking for doesn't exist or has been moved. 
          Let's get you back to exploring our catalog.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-crimson px-6 py-3 text-sm font-semibold text-alabaster transition-all duration-300 hover:bg-crimson-dark hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]"
          >
            <Home className="h-4 w-4" />
            Return to Catalog
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-lg border border-navy-mid px-6 py-3 text-sm font-medium text-alabaster transition-colors hover:border-alabaster/30 hover:bg-navy-light/50"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>

        {/* Additional Help Text */}
        <p className="mt-12 text-xs text-muted-foreground">
          If you believe this is an error, please contact{" "}
          <a
            href="mailto:support@rgvpeptides.com"
            className="text-crimson transition-colors hover:text-crimson/80"
          >
            support@rgvpeptides.com
          </a>
        </p>
      </div>
    </div>
  )
}