'use server'

import { getTokenFun } from '@/utilities/getTokenData'

export async function ClearCart() {
  const token = await getTokenFun()

  if (!token) {
    throw new Error('Unauthorized')
  }

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/cart`,
    {
      method: 'DELETE',
      headers: {
        token: token,
      },
    }
  )

  if (!response.ok) {
    throw new Error('Failed to clear cart item')
  }

  const payload = await response.json()

  console.log('Clear RESPONSE:', payload)

  return payload
}