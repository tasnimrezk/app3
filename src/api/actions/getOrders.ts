'use server'

import { getTokenFun } from '@/utilities/getTokenData'

export default async function getOrders() {
  try {
    const token = await getTokenFun()

    if (!token) {
      throw new Error('Unauthorized')
    }

    const response = await fetch(
      'https://ecommerce.routemisr.com/api/v1/orders/',
      {
        headers: {
          token: token,
        },
      }
    )

    if (!response.ok) {
      throw new Error('Failed to get orders')
    }

    const payload = await response.json()

    console.log(payload)

    return payload

  } catch (error) {
    console.log(error)
    throw new Error('Failed to get orders')
  }
}