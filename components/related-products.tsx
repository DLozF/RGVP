"use client"

import Link from "next/link"
import Image from "next/image"
import { ShieldCheck, ArrowRight } from "lucide-react"
import { products, type Product } from "@/lib/products"

interface RelatedProductsProps {
  currentSlug: string
}

export default function RelatedProducts({ currentSlug }: RelatedProductsProps) {
  // Always suggest BAC water + 2 other peptides (excluding current)
  const otherProducts = products.filter((p) => p.slug !== currentSlug)

  // Put BAC water first if the current product is a peptide, otherwise skip it
  const currentProduct = products.find((p) => p.slug === currentSlug)
  let related: Product[]

  if (currentProduct?.format !== "Liquid") {
    // Current is a peptide — show BAC water + 2 others
    const bacWater = otherProducts.find((p) => p.slug === "bacteriostatic-water")
    const peptides = otherProducts.filter((p) => p.slug !== "bacteriostatic-water").slice(0, 2)
    related = bacWater ? [bacWater, ...peptides] : peptides.slice(0, 3)
  } else {
    // Current is BAC water — show 3 peptides
    related = otherProducts.filter((p) => p.format !== "Liquid").slice(0, 3)
  }

  return (
    <div className="mt-16">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="font-serif text-2xl font-bold text-alabaster">
          Pairs Well <span className="text-crimson">With</span>
        </h3>
        <Link
          href="/#catalog"
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-alabaster"
        >
          View all
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {related.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group overflow-hidden rounded-xl border border-white/10 bg-navy-light/40 backdrop-blur-xl transition-all duration-300 hover:border-crimson/20 hover:bg-navy-light/60"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-alabaster/5">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute right-2 top-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-chart-1/30 bg-navy/80 px-2 py-0.5 text-xs font-semibold text-chart-1 backdrop-blur-sm">
                  <ShieldCheck className="h-3 w-3" />
                  {product.purity}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {product.category}
              </p>
              <h4 className="mt-1 font-serif text-base font-bold text-alabaster group-hover:text-crimson transition-colors">
                {product.name}
              </h4>
              <p className="mt-1 text-sm font-bold text-alabaster">${product.price}</p>
            </div>

            {/* Hover line */}
            <div className="h-0.5 w-full origin-left scale-x-0 bg-crimson transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        ))}
      </div>
    </div>
  )
}
