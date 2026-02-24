import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { CartProvider } from '@/contexts/cart-context'
import CartSidebar from '@/components/cart-sidebar'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'RGVPeptides | High-Purity Research Peptides & Compounds',
  description: 'Premium laboratory-grade research peptides synthesized in the USA. High-purity BPC-157, Retatrutide, GHK-Cu, and Ipamorelin with >99% verified purity for clinical research and investigation.',
  keywords: ['peptide research', 'USA synthesized', 'metabolic research compounds', 'Retatrutide', 'GHK-Cu', 'copper peptide', 'laboratory-grade peptides', 'clinical research', 'high-purity peptides', 'BPC-157', 'Ipamorelin'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  )
}
