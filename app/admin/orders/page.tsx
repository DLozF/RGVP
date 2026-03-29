'use client'

import { useState } from 'react'

interface Order {
  id: string
  invoice_number: string
  customer_name: string
  customer_email: string
  order_total: number
  payment_amount: number | null
  payment_sender: string | null
  payment_received_at: string | null
  status: string
  created_at: string
}

const STATUS_COLORS: Record<string, string> = {
  pending: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  matched: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  confirmed: 'bg-green-500/20 text-green-300 border-green-500/30',
}

export default function AdminOrdersPage() {
  const [secret, setSecret] = useState('')
  const [authed, setAuthed] = useState(false)
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(false)
  const [confirming, setConfirming] = useState<string | null>(null)

  async function fetchOrders(s: string) {
    setLoading(true)
    const res = await fetch('/api/admin/orders', {
      headers: { 'x-admin-secret': s },
    })
    if (res.ok) {
      const data = await res.json()
      setOrders(data.orders)
      setAuthed(true)
    } else {
      alert('Invalid secret')
    }
    setLoading(false)
  }

  async function confirmOrder(orderId: string) {
    setConfirming(orderId)
    const res = await fetch('/api/admin/confirm-order', {
      method: 'POST',
      headers: { 'x-admin-secret': secret, 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId }),
    })
    if (res.ok) {
      await fetchOrders(secret)
    } else {
      alert('Confirmation failed')
    }
    setConfirming(null)
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="w-full max-w-sm space-y-4">
          <h1 className="font-serif text-2xl font-bold text-alabaster">Admin Login</h1>
          <input
            type="password"
            placeholder="Enter admin secret"
            value={secret}
            onChange={e => setSecret(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && fetchOrders(secret)}
            className="w-full rounded-lg border border-navy-mid bg-navy-light px-4 py-3 text-alabaster placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-crimson"
          />
          <button
            onClick={() => fetchOrders(secret)}
            disabled={loading}
            className="w-full rounded-lg bg-crimson px-4 py-3 text-sm font-semibold text-white transition hover:bg-crimson-dark disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Enter'}
          </button>
        </div>
      </div>
    )
  }

  const pending = orders.filter(o => o.status === 'pending')
  const matched = orders.filter(o => o.status === 'matched')
  const confirmed = orders.filter(o => o.status === 'confirmed')

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-serif text-3xl font-bold text-alabaster">Orders Dashboard</h1>
          <button
            onClick={() => fetchOrders(secret)}
            className="rounded-lg border border-navy-mid px-4 py-2 text-sm text-alabaster hover:bg-navy-light transition"
          >
            Refresh
          </button>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid grid-cols-3 gap-4">
          {[
            { label: 'Awaiting Payment', count: pending.length, color: 'text-yellow-300' },
            { label: 'Needs Confirmation', count: matched.length, color: 'text-blue-300' },
            { label: 'Confirmed', count: confirmed.length, color: 'text-green-300' },
          ].map(s => (
            <div key={s.label} className="rounded-xl border border-navy-mid bg-navy-light/30 p-4 text-center">
              <div className={`font-serif text-3xl font-bold ${s.color}`}>{s.count}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Orders List */}
        <div className="space-y-3">
          {orders.length === 0 && (
            <p className="py-12 text-center text-muted-foreground">No orders yet.</p>
          )}
          {orders.map(order => (
            <div
              key={order.id}
              className="rounded-xl border border-navy-mid bg-navy-light/20 p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-alabaster">
                      {order.invoice_number}
                    </span>
                    <span className={`rounded-full border px-2 py-0.5 text-xs font-medium ${STATUS_COLORS[order.status]}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {order.customer_name} — {order.customer_email}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Order total:{' '}
                    <span className="text-alabaster">${order.order_total}</span>
                    {order.payment_amount != null && (
                      <>
                        {' '}· Paid:{' '}
                        <span className="text-green-300">${order.payment_amount}</span>
                        {' '}by{' '}
                        <span className="text-alabaster">{order.payment_sender}</span>
                      </>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Placed: {new Date(order.created_at).toLocaleString()}
                  </div>
                </div>

                {order.status === 'matched' && (
                  <button
                    onClick={() => confirmOrder(order.id)}
                    disabled={confirming === order.id}
                    className="rounded-lg bg-green-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-500 disabled:opacity-50"
                  >
                    {confirming === order.id ? 'Confirming...' : 'Confirm & Email Customer'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}