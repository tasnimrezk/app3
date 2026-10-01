'use server'

import ProductCard from './../../_component/ProductCard/ProductCard';

export default async function Electronics() {
  const categoryId = "6439d2d167d9aa4ca970649f";

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`,
    {
      cache: "no-store",
    }
  );

  const payload = await response.json();

  console.log("ELECTRONICS PRODUCTS:", payload);

  const data = payload.data ?? [];

  return (
    <div className="container mx-auto px-5">
      <h2 className="text-3xl text-green-800 font-bold border-l-4 border-l-green-700 pl-5 my-8">
        Electronics Products
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {data.map((product: any) => {
          return (
            <ProductCard
              product={product}
              key={product._id}
            />
          );
        })}
      </div>
    </div>
  );
}

