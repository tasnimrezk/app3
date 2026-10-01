"use client";

import { Button } from "@/components/ui/button";
import { deleteFromWishlist } from "@/api/actions/wishlist.actions/deleteFromWishlist";
import { toast } from "@/components/ui/toast";

export default function DeleteAllButton({
  products,
}: {
  products: any[];
}) {
  const deleteAllWishlist = async () => {
    try {
      for (const product of products) {
        await deleteFromWishlist(product._id);
      }

      toast.add({
        type: "success",
        description: "Wishlist deleted successfully",
      });

      window.location.reload();
    } catch (error) {
      toast.add({
        type: "error",
        description: "Failed",
      });
    }
  };

  return (
    <Button
      onClick={deleteAllWishlist}
      className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-50 transition"
    >
      Delete All
    </Button>
  );
}
