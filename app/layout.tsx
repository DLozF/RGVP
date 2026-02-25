import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { CartProvider } from '@/contexts/cart-context'
import CartSidebar from '@/components/cart-sidebar'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://rgvpeptides.bio'),
  title: 'RGVPeptides | High-Purity Research Peptides & Compounds',
  description: 'Premium laboratory-grade research peptides synthesized in the USA. Verified >99% purity for clinical research, featuring BPC-157, Retatrutide, and more.',
  keywords: ['peptide research', 'USA synthesized', 'metabolic research compounds', 'Retatrutide', 'GHK-Cu', 'copper peptide', 'laboratory-grade peptides', 'clinical research', 'high-purity peptides', 'BPC-157', 'Ipamorelin'],
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'RGVPeptides | High-Purity Research Peptides & Compounds',
    description: 'Premium laboratory-grade research peptides synthesized in the USA. Verified >99% purity for clinical research, featuring BPC-157, Retatrutide, and more.',
    url: '/',
    siteName: 'RGVPeptides',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'RGVPeptides Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RGVPeptides | High-Purity Research Peptides & Compounds',
    description: 'Premium laboratory-grade research peptides synthesized in the USA. Verified >99% purity for clinical research, featuring BPC-157, Retatrutide, and more.',
    images: ['/images/logo.png'],
  },
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
