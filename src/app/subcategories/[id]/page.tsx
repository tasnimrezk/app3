
import Image from "next/image";

export default async function SubCategoryDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?subcategory=${id}`,
    {
      cache: "no-store",
    }
  );

  const products = await response.json();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10">
        Subcategory Products
      </h1>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4
          sm:gap-5
          lg:gap-6
        "
      >
        {products?.data?.map((product: any) => (
          <div
            key={product._id}
            className="
              border
              rounded-xl
              p-4
              sm:p-5
              shadow-sm
              hover:shadow-lg
              transition
              duration-300
              bg-white
            "
          >
            <div className="w-full h-48 sm:h-52 md:h-56 flex items-center justify-center">
              <Image
                src={product.imageCover}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>

            <h2 className="font-semibold text-base sm:text-lg line-clamp-2 mt-4">
              {product.title}
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              {product.category?.name}
            </p>

            <p className="font-bold text-lg mt-2">
              {product.price} EGP
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

