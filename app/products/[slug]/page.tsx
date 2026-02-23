import { notFound } from "next/navigation"
import { getProductBySlug, getAllProductSlugs } from "@/lib/products"
import ProductDetailClient from "@/components/product-detail-client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MoleculesBackground from "@/components/molecules-background"
import type { Metadata } from "next"

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const product = getProductBySlug(resolvedParams.slug)

  if (!product) {
    return {
      title: "Product Not Found | RGVPeptides",
    }
  }

  return {
    title: `${product.name} - ${product.category} | RGVPeptides`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params
  const product = getProductBySlug(resolvedParams.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="relative min-h-screen bg-background">
      <MoleculesBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-24">
          <ProductDetailClient product={product} />
        </main>
        <Footer />
      </div>
    </div>
  )
}
