"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  ShieldCheck, 
  FileDown, 
  FlaskConical, 
  ArrowLeft, 
  Package, 
  Thermometer,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Droplet
} from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import type { Product } from "@/lib/products"

interface ProductDetailClientProps {
  product: Product
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedTab, setSelectedTab] = useState<"overview" | "specs" | "applications">("overview")
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart(product, quantity)
    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  const incrementQuantity = () => {
    if (quantity < 99) setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-alabaster">
          Home
        </Link>
        <span>/</span>
        <Link href="/#catalog" className="transition-colors hover:text-alabaster">
          Catalog
        </Link>
        <span>/</span>
        <span className="text-alabaster">{product.name}</span>
      </nav>

      {/* Back Button */}
      <Link
        href="/#catalog"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-alabaster"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Catalog
      </Link>

      {/* Product Header Grid */}
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="relative">
          <div className="sticky top-28">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-navy-mid bg-alabaster/5">
              <Image
                src={product.image}
                alt={`${product.name} - Research peptide vial`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Purity Badge */}
              <div className="absolute right-4 top-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-chart-1/30 bg-navy/90 px-3 py-1.5 text-sm font-semibold text-chart-1 backdrop-blur-sm">
                  <ShieldCheck className="h-4 w-4" />
                  {product.purity} Purity
                </span>
              </div>
            </div>

            {/* COA Display - If Available */}
            {product.coa && (
              <div className="mt-6 rounded-xl border border-navy-mid bg-navy-light/30 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-alabaster">Certificate of Analysis</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Third-party verified by Janoshik Analytical
                    </p>
                  </div>
                  <a
                    href={product.coa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-navy-mid px-3 py-2 text-xs font-medium text-chart-1 transition-colors hover:border-chart-1/50 hover:bg-chart-1/10"
                  >
                    <FileDown className="h-3.5 w-3.5" />
                    View COA
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Details */}
        <div>
          {/* Category Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-mid bg-navy-light/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <FlaskConical className="h-3.5 w-3.5" />
            {product.category}
          </div>

          {/* Product Name */}
          <h1 className="font-serif text-4xl font-bold text-alabaster lg:text-5xl">
            {product.name}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Molecular Weight: {product.weight}
          </p>

          {/* Short Description */}
          <p className="mt-6 text-base leading-relaxed text-alabaster/90">
            {product.description}
          </p>

          {/* Key Info Cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-navy-mid bg-navy-light/30 p-4">
              <Thermometer className="h-5 w-5 text-chart-1" />
              <p className="mt-2 text-xs font-medium text-muted-foreground">Storage</p>
              <p className="mt-1 text-sm font-semibold text-alabaster">{product.storageConditions}</p>
            </div>
            <div className="rounded-xl border border-navy-mid bg-navy-light/30 p-4">
              <Calendar className="h-5 w-5 text-chart-1" />
              <p className="mt-2 text-xs font-medium text-muted-foreground">Shelf Life</p>
              <p className="mt-1 text-sm font-semibold text-alabaster">{product.shelfLife}</p>
            </div>
            <div className="rounded-xl border border-navy-mid bg-navy-light/30 p-4">
              {product.format === "Liquid" ? (
                <Droplet className="h-5 w-5 text-chart-1" />
              ) : (
                <Package className="h-5 w-5 text-chart-1" />
              )}
              <p className="mt-2 text-xs font-medium text-muted-foreground">Format</p>
              <p className="mt-1 text-sm font-semibold text-alabaster">{product.format || "Lyophilized"}</p>
            </div>
          </div>


          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="animate-pulse-crimson flex-1 rounded-lg bg-crimson px-6 py-3 text-sm font-semibold text-alabaster transition-colors hover:bg-crimson-dark">
              Add to Inquiry
            </button>
            {product.coa && (
              <a
                href={product.coa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-navy-mid px-6 py-3 text-sm font-medium text-alabaster transition-colors hover:border-alabaster/30 hover:bg-navy-light/50"
              >
                <FileDown className="h-4 w-4" />
                Download COA
              </a>
            )}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-lg border border-crimson/20 bg-crimson/5 p-4">
            {product.format === "Liquid" ? (
              <p className="text-xs leading-relaxed text-muted-foreground">
                This sterile diluent is required for the{" "}
                <Link 
                  href="/#catalog" 
                  className="font-semibold text-crimson underline underline-offset-2 transition-colors hover:text-crimson/80"
                >
                  reconstitution of lyophilized peptides
                </Link>
                . For research use only.
              </p>
            ) : (
              <p className="text-xs leading-relaxed text-muted-foreground">
                This peptide is supplied in lyophilized form and requires{" "}
                <Link 
                  href="/products/bacteriostatic-water" 
                  className="font-semibold text-crimson underline underline-offset-2 transition-colors hover:text-crimson/80"
                >
                  Bacteriostatic Water
                </Link>{" "}
                for reconstitution. For research use only.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-16">
        {/* Tab Navigation */}
        <div className="flex gap-2 border-b border-navy-mid">
          <button
            onClick={() => setSelectedTab("overview")}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              selectedTab === "overview"
                ? "border-b-2 border-crimson text-alabaster"
                : "text-muted-foreground hover:text-alabaster"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setSelectedTab("specs")}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              selectedTab === "specs"
                ? "border-b-2 border-crimson text-alabaster"
                : "text-muted-foreground hover:text-alabaster"
            }`}
          >
            Specifications
          </button>
          <button
            onClick={() => setSelectedTab("applications")}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              selectedTab === "applications"
                ? "border-b-2 border-crimson text-alabaster"
                : "text-muted-foreground hover:text-alabaster"
            }`}
          >
            Research Applications
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {selectedTab === "overview" && (
            <div className="prose prose-invert max-w-none">
              <h3 className="font-serif text-2xl font-bold text-alabaster">About {product.name}</h3>
              <p className="mt-4 leading-relaxed text-alabaster/80">
                {product.detailedDescription}
              </p>
            </div>
          )}

          {selectedTab === "specs" && (
            <div className="max-w-3xl">
              <h3 className="mb-6 font-serif text-2xl font-bold text-alabaster">
                Technical Specifications
              </h3>
              <div className="divide-y divide-navy-mid rounded-xl border border-navy-mid bg-navy-light/20">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 p-4">
                    <p className="text-sm font-medium text-muted-foreground">{spec.label}</p>
                    <p className="text-sm font-mono text-alabaster">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === "applications" && (
            <div className="max-w-3xl">
              <h3 className="mb-6 font-serif text-2xl font-bold text-alabaster">
                Research Applications
              </h3>
              <ul className="space-y-3">
                {product.researchApplications.map((application, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-chart-1" />
                    <span className="text-sm leading-relaxed text-alabaster/80">{application}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl border border-navy-mid bg-navy-light/30 p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  These applications are for research purposes only and are not intended to suggest
                  or imply any use in humans or animals. All research should be conducted in
                  accordance with institutional guidelines and regulations.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quality Assurance Section */}
      <div className="mt-16 rounded-2xl border border-navy-mid bg-navy-light/20 p-8">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-chart-1/10 p-3">
            <ShieldCheck className="h-6 w-6 text-chart-1" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-alabaster">Quality Assurance</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              All RGVPeptides products undergo rigorous third-party testing by{" "}
              <a
                href="https://www.janoshik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-chart-1 transition-colors hover:text-chart-1/80"
              >
                Janoshik Analytical <ExternalLink className="h-3 w-3" />
              </a>
              . Each batch is tested for purity, identity, and concentration to ensure the highest
              quality standards for your research.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
