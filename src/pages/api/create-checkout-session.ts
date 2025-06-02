import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { services } from "@/data/services";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-04-30.basil",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ sessionId: string } | { error: string }>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { serviceSlug, packageOption, date, timeSlot, contactInfo, amount } =
      req.body;

    // Validate required fields
    if (
      !serviceSlug ||
      !packageOption ||
      !date ||
      !timeSlot ||
      !contactInfo ||
      !amount
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Find service details
    const service = services.find((s) => s.slug === serviceSlug);
    if (!service) {
      return res.status(400).json({ error: "Invalid service" });
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${service.title} - ${packageOption} Package`,
              description: `Appointment on ${date} at ${timeSlot}`,
              metadata: {
                serviceSlug,
                packageOption,
                date,
                timeSlot,
                customerName: contactInfo.name,
                customerEmail: contactInfo.email,
                customerPhone: contactInfo.phone,
                customerAddress: contactInfo.address,
                customerNotes: contactInfo.notes || "",
              },
            },
            unit_amount: Math.round(amount * 100), // Convert to cents and ensure integer
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.origin}/book/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/book/step3`,
      customer_email: contactInfo.email,
      metadata: {
        serviceSlug,
        packageOption,
        date,
        timeSlot,
      },
      // Add shipping address collection if needed
      shipping_address_collection: {
        allowed_countries: ["US", "CA"], // Add more countries as needed
      },
      // Add phone number collection
      phone_number_collection: {
        enabled: true,
      },
    });

    res.status(200).json({ sessionId: session.id });
  } catch (err) {
    console.error("Stripe session creation error:", err);
    res.status(500).json({ error: "Error creating checkout session" });
  }
}
