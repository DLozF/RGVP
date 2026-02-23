import Link from "next/link"
import { FlaskConical } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-navy-light/50 p-4">
          <FlaskConical className="h-8 w-8 text-crimson" />
        </div>
        <h1 className="font-serif text-4xl font-bold text-alabaster">Product Not Found</h1>
        <p className="mt-4 text-base text-muted-foreground">
          The product you're looking for doesn't exist or has been removed from our catalog.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/#catalog"
            className="rounded-lg bg-crimson px-6 py-3 text-sm font-semibold text-alabaster transition-colors hover:bg-crimson-dark"
          >
            Browse Catalog
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-navy-mid px-6 py-3 text-sm font-medium text-alabaster transition-colors hover:border-alabaster/30 hover:bg-navy-light/50"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
