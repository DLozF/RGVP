import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ProductGrid from "@/components/product-grid"
import TrustBar from "@/components/trust-bar"
import Footer from "@/components/footer"
import MoleculesBackground from "@/components/molecules-background"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <MoleculesBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <ProductGrid />
          <TrustBar />
        </main>
        <Footer />
      </div>
    </div>
  )
}
