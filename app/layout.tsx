import type { Metadata } from 'next'
import Script from 'next/script'
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
        
        {/* Snipcart */}
        <Script
          id="snipcart"
          strategy="afterInteractive"
        >
          {`
            window.SnipcartSettings = {
                publicApiKey: 'MDZkNTY4YzktYTVkZS00NDNjLWI1NDQtOWQ4ZWM5ODM1ODk4NjM5MTAwOTExMTYzNzgzNjIw',
                loadStrategy: 'on-user-interaction',
            };

            (()=>{var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");var f=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,m=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(m.forEach(t=>document.addEventListener(t,o)),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],e=document.querySelector("#snipcart"),i=document.querySelector('src[src^="'+window.SnipcartSettings.protocol+'://'+window.SnipcartSettings.domain+'"][src$="snipcart.js"]'),n=document.querySelector('link[href^="'+window.SnipcartSettings.protocol+'://'+window.SnipcartSettings.domain+'"][href$="snipcart.css"]');e||(e=document.createElement("div"),e.id="snipcart",e.setAttribute("hidden","true"),document.body.appendChild(e)),v(e),i||(i=document.createElement("script"),i.src=window.SnipcartSettings.protocol+'://'+window.SnipcartSettings.domain+'/themes/v'+window.SnipcartSettings.version+'/default/snipcart.js',i.async=!0,t.appendChild(i)),n||(n=document.createElement("link"),n.rel="stylesheet",n.type="text/css",n.href=window.SnipcartSettings.protocol+'://'+window.SnipcartSettings.domain+'/themes/v'+window.SnipcartSettings.version+'/default/snipcart.css',t.prepend(n)),m.forEach(g=>document.removeEventListener(g,o))}function v(t){!f||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();
          `}
        </Script>

        {/* Snipcart Customization Script */}
        <Script id="snipcart-customization" strategy="afterInteractive">
          {`
            document.addEventListener('snipcart.ready', function() {
              Snipcart.api.session.setLanguage('en', {
                payment: {
                  methods: {
                    deferred_payment: "Pay via CashApp, Zelle, or Venmo"
                  },
                  form: {
                    deferred_payment_title: "Action Required: Offline Payment",
                    deferred_payment_instructions: "Click 'Place Order' below to generate your official Invoice Number. You will then send your total via CashApp or Zelle using ONLY that exact Invoice Number in the payment memo. <strong>Do not include any product names.</strong>"
                  }
                }
              });

              var pollInterval = setInterval(function() {
                    var invoiceEl = document.querySelector('.snipcart-order__invoice-number');
                    if (invoiceEl) {
                      var invoice = invoiceEl.textContent.trim();
                      var total = '';
                      var email = '';
                      try {
                        var state = Snipcart.store.getState();
                        var cart = state.cart;
                        total = cart && cart.total ? cart.total : '';
                        email = cart && cart.email ? cart.email : '';
                        if (!email) {
                          var emailInput = document.querySelector('input[name="email"]');
                          email = emailInput ? emailInput.value : '';
                        }
                      } catch(e) {
                        var emailInput = document.querySelector('input[name="email"]');
                        email = emailInput ? emailInput.value : '';
                      }
                      clearInterval(pollInterval);
                      window.location.href = '/order-confirmation?invoice=' + encodeURIComponent(invoice) + '&total=' + total + '&email=' + encodeURIComponent(email);
                    }
                  }, 500);
            });
          `}
        </Script>
      </body>
    </html>
  )
}