
"use server";

import { getTokenFun } from "@/utilities/getTokenData";

export async function deleteFromWishlist(prodId: string) {
  try {
    const token = await getTokenFun();

    if (!token) {
      throw new Error("Please login first");
    }

    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${prodId}`,
      {
        method: "DELETE",
        headers: {
          token: token,
        },
      }
    );

    const payload = await response.json();

    console.log("DELETE WISHLIST RESPONSE:", payload);

    if (!response.ok) {
      throw new Error(
        payload.message || "Failed to remove product from wishlist"
      );
    }

    return payload;
  } catch (error) {
    console.log("DELETE WISHLIST ERROR:", error);
    throw error;
  }
}

