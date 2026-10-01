'use server'

import { shippingData } from '@/app/checkout/CheckoutForm'
import { getTokenFun } from '@/utilities/getTokenData'

export default async function PayOnlineFnc(
  cartId: string,
  shippingAddress: shippingData
) {
  try {

    const token = await getTokenFun()

    if (!token) {
      throw new Error('unauthorized')
    }

    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXTAUTH_URL}`,
      {
        method: 'POST',
        body: JSON.stringify({
          shippingAddress: shippingAddress
        }),
        headers: {
          token: token,
          'content-type': 'application/json'
        }
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.log("STRIPE ERROR:", errorData)

      throw new Error(errorData.message || "Payment failed")
    }

    const payload = await response.json()

    console.log("STRIPE RESPONSE:", payload)

    return payload

  } catch (error) {

    console.log("ONLINE PAYMENT ERROR:", error)

    throw error
  }
}