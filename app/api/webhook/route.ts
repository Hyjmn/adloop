import Stripe from 'stripe'
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_KEY as string
)

export async function POST(req: Request) {
  const payload = await req.text()
  const sig = req.headers.get('stripe-signature') as string

  let event

  try {
    event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    )
  } catch (err) {
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const meta = session.metadata!

    await supabase.from('ads').insert([{
      brand: meta.brand,
      handle: meta.handle,
      headline: meta.headline,
      cta_text: meta.cta_text,
      category: meta.category,
      image_url: meta.image_url,
      accent_color: meta.accent_color,
      bg_color: meta.bg_color,
      impressions_bought: parseInt(meta.impressions_bought),
      impressions_used: 0,
      active: true,
    }])
  }

  return NextResponse.json({ received: true })
}
