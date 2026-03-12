export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

import Stripe from 'stripe'
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST(req: Request) {
  const body = await req.json()

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: body.price * 100,
          product_data: {
            name: `Adloop Ad — ${body.label} Package`,
            description: `${body.impressions.toLocaleString()} impressions for ${body.brand}`,
          },
        },
        quantity: 1,
      },
    ],
    metadata: {
      brand: body.brand,
      handle: body.handle,
      headline: body.headline,
      cta_text: body.cta_text,
      category: body.category,
      image_url: body.image_url,
      accent_color: body.accent_color,
      bg_color: body.bg_color,
      impressions_bought: body.impressions,
    },
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/advertise`,
  })

  return NextResponse.json({ url: session.url })
}
