import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-admin-secret')
  if (secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { orderId } = await req.json()

  const { data: order, error: findError } = await supabase
    .from('orders')
    .select('*')
    .eq('id', orderId)
    .single()

  if (findError || !order) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 })
  }

  await resend.emails.send({
    from: 'orders@rgvpeptides.bio',
    to: order.customer_email,
    subject: `Order Confirmed — ${order.invoice_number}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #001E3C; color: #F8FAFC; padding: 40px; border-radius: 12px;">
        <h2 style="color: #E11D48; margin-top: 0;">Payment Confirmed ✓</h2>
        <p>Hi ${order.customer_name},</p>
        <p>We've received your payment of <strong>$${order.payment_amount}</strong> for order <strong>${order.invoice_number}</strong>.</p>
        <p>Your order is now being prepared for shipment. You'll receive a separate tracking notification once it ships.</p>
        <hr style="border-color: #1E3A5F; margin: 24px 0;" />
        <p style="color: #94A3B8; font-size: 12px; margin: 0;">
          RGVPeptides — All products are for research use only.<br/>
          Questions? Contact us at support@rgvpeptides.bio
        </p>
      </div>
    `,
  })

  await supabase
    .from('orders')
    .update({ status: 'confirmed' })
    .eq('id', orderId)

  return NextResponse.json({ confirmed: true })
}