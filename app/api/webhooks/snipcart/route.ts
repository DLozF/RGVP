import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  
// const token = req.headers.get('x-snipcart-requesttoken')
// if (token !== process.env.SNIPCART_WEBHOOK_TOKEN) {
//  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
//  }

  const body = await req.json()

  // Only care about order completion events
  if (body.eventName !== 'order.completed') {
    return NextResponse.json({ received: true })
  }

  const order = body.content
  const invoiceNumber = order.invoiceNumber

  const { error } = await supabase.from('orders').insert({
    invoice_number: invoiceNumber,
    customer_email: order.email,
    customer_name: `${order.shippingAddress?.name || order.billingAddress?.name || order.email}`,
    order_total: order.finalGrandTotal,
    snipcart_token: order.token,
    status: 'pending',
  })

  if (error) {
    console.error('Supabase insert error:', error)
    return NextResponse.json({ error: 'DB error' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}