import Image from "next/image";
import Link from "next/link";

export default async function Categories() {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/categories",
    {
      cache: "no-store",
    }
  );

  const categories = await response.json();

  return (
    <div className="container mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold text-center mb-10">
        All Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {categories?.data?.map((category: any) => (
          <Link
            key={category._id}
            href={`/categories/${category._id}`}
          >
            <div className="border rounded-xl p-5 shadow-sm hover:shadow-lg transition">

              <Image
                src={category.image}
                alt={category.name}
                width={300}
                height={250}
                className="w-full h-48 object-contain"
              />

              <h2 className="text-xl font-bold text-center mt-4">
                {category.name}
              </h2>

            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}