'use server'

import { getTokenFun } from '@/utilities/getTokenData'

export async function deleteCartItem(prodId: string) {
  const token = await getTokenFun()

  if (!token) {
    throw new Error('Unauthorized')
  }

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/cart/${prodId}`,
    {
      method: 'DELETE',
      headers: {
        token: token,
      },
    }
  )

  if (!response.ok) {
    throw new Error('Failed to delete cart item')
  }

  const payload = await response.json()

  console.log('DELETE RESPONSE:', payload)

  return payload
}