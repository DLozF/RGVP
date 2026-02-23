"use client"

import { useCart } from "@/contexts/cart-context"
import { X, Minus, Plus, Trash2, ShoppingCart, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"

export default function CartSidebar() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, getTotalItems } = useCart()

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isCartOpen])

  if (!isCartOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-navy/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-navy-mid bg-navy shadow-2xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-navy-mid p-6">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-crimson" />
              <h2 className="font-serif text-xl font-bold text-alabaster">
                Research Inquiry ({getTotalItems()})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-navy-light hover:text-alabaster"
              aria-label="Close cart"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center gap-4">
                <div className="rounded-full bg-navy-light p-6">
                  <ShoppingCart className="h-12 w-12 text-muted-foreground" />
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Your inquiry list is empty
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="rounded-lg bg-crimson px-6 py-2.5 text-sm font-semibold text-alabaster transition-colors hover:bg-crimson-dark"
                >
                  Browse Catalog
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.slug}
                    className="group rounded-xl border border-navy-mid bg-navy-light/30 p-4 transition-colors hover:border-navy-mid/80"
                  >
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <Link
                        href={`/products/${item.product.slug}`}
                        onClick={() => setIsCartOpen(false)}
                        className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-navy-mid bg-alabaster/5"
                      >
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          sizes="80px"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>

                      {/* Product Info */}
                      <div className="flex-1">
                        <Link
                          href={`/products/${item.product.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="font-serif text-sm font-semibold text-alabaster transition-colors hover:text-crimson"
                        >
                          {item.product.name}
                        </Link>
                        <p className="mt-1 text-xs text-muted-foreground">{item.product.category}</p>

                        {/* Quantity Controls */}
                        <div className="mt-3 flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.slug, item.quantity - 1)}
                            className="rounded border border-navy-mid p-1 text-muted-foreground transition-colors hover:border-alabaster/30 hover:text-alabaster disabled:opacity-50"
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-[2rem] text-center text-sm font-medium text-alabaster">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.slug, item.quantity + 1)}
                            className="rounded border border-navy-mid p-1 text-muted-foreground transition-colors hover:border-alabaster/30 hover:text-alabaster disabled:opacity-50"
                            disabled={item.quantity >= 99}
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.product.slug)}
                            className="ml-auto rounded p-1 text-muted-foreground transition-colors hover:text-crimson"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sticky Footer - Always visible on mobile */}
          {items.length > 0 && (
            <div className="sticky bottom-0 border-t border-navy-mid bg-navy p-6">
              <div className="mb-4 rounded-lg border border-chart-1/20 bg-chart-1/5 p-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-chart-1" />
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Items in your inquiry list are for research purposes only. Our team will contact you with pricing and availability.
                  </p>
                </div>
              </div>
              <button className="w-full rounded-lg bg-crimson py-3 text-sm font-semibold text-alabaster transition-colors hover:bg-crimson-dark">
                Submit Inquiry
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
