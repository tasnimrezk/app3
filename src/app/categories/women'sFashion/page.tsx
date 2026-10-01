'use server'
import ProductCard from "@/app/_component/ProductCard/ProductCard";
export default async function WomensFashion() {
  const categoryId = "6439d58a0049ad0b52b9003f";

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`,
    {
      cache: "no-store",
    }
  );

  const payload = await response.json();

  console.log("WOMEN'S FASHION PRODUCTS:", payload);

  const data = payload.data ?? [];

  return (
    <div className="container mx-auto px-5">
      <h2 className="text-3xl text-green-800 font-bold border-l-4 border-l-green-700 pl-5 my-8">
        Women's Fashion Products
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

