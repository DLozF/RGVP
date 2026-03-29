import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-gas-secret')
  if (secret !== process.env.GAS_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { invoiceNumber, amount, sender } = await req.json()

  if (!invoiceNumber || !amount || !sender) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const { data: order, error: findError } = await supabase
    .from('orders')
    .select('*')
    .eq('invoice_number', invoiceNumber)
    .eq('status', 'pending')
    .single()

  if (findError || !order) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 })
  }

  const { error: updateError } = await supabase
    .from('orders')
    .update({
      status: 'matched',
      payment_amount: amount,
      payment_sender: sender,
      payment_received_at: new Date().toISOString(),
    })
    .eq('id', order.id)

  if (updateError) {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 })
  }

  return NextResponse.json({ matched: true, orderId: order.id })
}