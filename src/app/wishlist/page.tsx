

import { getTokenFun } from "@/utilities/getTokenData";
import ProductCard from "@/app/_component/ProductCard/ProductCard";
import DeleteAllButton from "@/app/_component/DeleteAllButton/DeleteAllButton";




export default async function Wishlist() {
  const token = await getTokenFun();

  console.log("WISHLIST TOKEN:", token);

  if (!token) {
    return <p>Please login first</p>;
  }

  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/wishlist",
    {
      method: "GET",
      headers: {
        token: token,
      },
      cache: "no-store",
    }
  );

  console.log("WISHLIST STATUS:", response.status);

  const payload = await response.json();

  console.log("WISHLIST PAYLOAD:", payload);

  const data = payload.data ?? [];

  console.log("WISHLIST DATA:", data);

  return (
    <div className="container mx-auto px-5 py-8">

      <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-3xl p-6 md:p-10 text-white mb-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <div>
            <h2 className="text-2xl md:text-4xl font-bold">
              My Wishlist ❤️
            </h2>

            <p className="text-sm md:text-base text-green-100 mt-2">
              Save your favorite products and shop them later.
            </p>
          </div>

       <DeleteAllButton products={data} />

        </div>
      </div>

      <h2 className="text-3xl text-green-800 font-bold border-l-4 border-l-green-700 pl-5 my-8">
        My Wishlist
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {data.map((product: any) => {
          return (
            <ProductCard
              product={product}
              key={product._id}
              wishlistCount={data.length}
            />
          );
        })}
      </div>

    </div>
  );
}

