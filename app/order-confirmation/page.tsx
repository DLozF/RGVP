'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'

function OrderConfirmationContent() {
  const params = useSearchParams()
  const rawInvoice = params.get('invoice') || ''
  const invoice = rawInvoice.replace('Invoice number :', '').replace('Invoice number:', '').trim()
  const [email, setEmail] = useState('')
  const [total, setTotal] = useState('')

  useEffect(() => {
    if (!invoice) return
    
    let attempts = 0
    const maxAttempts = 10

    const tryFetch = () => {
      attempts++
      fetch(`/api/order-lookup?invoice=${encodeURIComponent(invoice)}`)
        .then(r => r.json())
        .then(data => {
          if (data.order) {
            setEmail(data.order.customer_email)
            setTotal(data.order.order_total)
          } else if (attempts < maxAttempts) {
            setTimeout(tryFetch, 1000)
          }
        })
        .catch(() => {
          if (attempts < maxAttempts) {
            setTimeout(tryFetch, 1000)
          }
        })
    }

    tryFetch()
  }, [invoice])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-lg">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 mb-4">
            <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-serif text-3xl font-bold text-alabaster">Order Placed!</h1>
          <p className="text-muted-foreground mt-2">Complete your payment to confirm your order</p>
        </div>

        {/* Invoice Number Block */}
        <div className="bg-crimson rounded-2xl p-6 text-center mb-6">
          <p className="text-xs uppercase tracking-widest text-white/70 mb-2">Your Invoice Number</p>
          <p className="font-mono text-4xl font-black text-white tracking-wider">{invoice}</p>
          <p className="text-xs text-white/60 mt-2">You must include this in your payment memo</p>
        </div>

        {/* Instructions */}
        <div className="bg-navy-light/30 border border-navy-mid rounded-2xl p-6 mb-6 space-y-5">
          <h2 className="font-serif text-lg font-bold text-alabaster">Payment Instructions</h2>

          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-navy-mid flex items-center justify-center text-xs font-bold text-alabaster">1</div>
            <div>
              <p className="text-sm text-muted-foreground">
                Open <span className="text-green-400 font-bold">CashApp</span> and send{' '}
                {total && <span className="text-alabaster font-bold">${total}</span>}{' '}
                to <span className="text-green-400 font-bold">$RGVPeptides</span>
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-navy-mid flex items-center justify-center text-xs font-bold text-alabaster">2</div>
            <div className="w-full">
              <p className="text-sm text-muted-foreground mb-2">In the <strong className="text-alabaster">memo field</strong>, enter ONLY:</p>
              <div className="bg-background border-2 border-dashed border-crimson rounded-xl p-4 text-center">
                <p className="font-mono text-2xl font-black text-crimson tracking-wider">{invoice}</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Copy exactly — nothing else</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-navy-mid flex items-center justify-center text-xs font-bold text-alabaster">3</div>
            <div>
              <p className="text-sm text-muted-foreground">We'll send a confirmation email to</p>
              {email && <p className="text-sm font-semibold text-alabaster">{email}</p>}
              <p className="text-sm text-muted-foreground">once your payment is received</p>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
          <p className="text-sm text-yellow-300">
            ⚠️ <strong>Important:</strong> Do not add any other text in the memo field. Orders with missing or incorrect invoice numbers will be delayed.
          </p>
        </div>

        {/* Back to shop */}
        <div className="text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-alabaster transition-colors">
            ← Return to catalog
          </Link>
        </div>

      </div>
    </div>
  )
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    }>
      <OrderConfirmationContent />
    </Suspense>
  )
}