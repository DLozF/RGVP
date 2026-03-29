import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const invoice = req.nextUrl.searchParams.get('invoice')

  if (!invoice) {
    return NextResponse.json({ error: 'Missing invoice' }, { status: 400 })
  }

  const { data: order, error } = await supabase
    .from('orders')
    .select('customer_email, order_total')
    .eq('invoice_number', invoice)
    .single()

  if (error || !order) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json({ order })
}