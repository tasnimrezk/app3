
"use server";

import { getTokenFun } from "@/utilities/getTokenData";

export async function addToWishlist(prodId: string) {
  try {
    const token = await getTokenFun();

    console.log("TOKEN:", token);

    if (!token) {
      throw new Error("unauthorized");
    }

    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/wishlist",
      {
        method: "POST",
        body: JSON.stringify({
          productId: prodId,
        }),
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      }
    );

    const payload = await response.json();

    console.log("STATUS:", response.status);
    console.log("WISHLIST RESPONSE:", payload);

    if (!response.ok) {
      throw new Error(
        payload.message || "Failed to add product to wishlist"
      );
    }

    return payload;
  } catch (error) {
    console.log("WISHLIST ERROR:", error);
    throw error;
  }
}

