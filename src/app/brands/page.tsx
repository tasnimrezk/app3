
import Image from "next/image";
import Link from "next/link";

export default async function Brands() {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/brands",
    {
      cache: "no-store",
    }
  );

  const brands = await response.json();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10">
        All Brands
      </h1>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-4
          sm:gap-5
          lg:gap-6
        "
      >
        {brands?.data?.map((brand: any) => (
          <Link
            key={brand._id}
            href={`/brands/${brand._id}`}
            className="block"
          >
            <div
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
                h-full
              "
            >
              <div className="w-full h-40 sm:h-44 md:h-48 flex items-center justify-center">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={250}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>

              <h2
                className="
                  text-base
                  sm:text-lg
                  md:text-xl
                  font-semibold
                  text-center
                  mt-4
                  truncate
                "
              >
                {brand.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}

