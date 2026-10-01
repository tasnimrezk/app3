'use server'

import ProductCard from './../../_component/ProductCard/ProductCard';

export default async function MensFashion() {
  const categoryId = "6439d5b90049ad0b52b90048";

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`,
    {
      cache: "no-store",
    }
  );

  console.log("STATUS:", response.status);

  const payload = await response.json();

  console.log("PAYLOAD:", payload);

  const data = payload.data ?? [];

  console.log("DATA:", data);

  return (
    <div className="container mx-auto px-5">
      <h2 className="text-3xl text-green-800 font-bold border-l-4 border-l-green-700 pl-5 my-8">
        Men's Fashion Products
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

