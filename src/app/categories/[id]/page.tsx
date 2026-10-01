

import Image from "next/image";

export default async function CategoryDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${id}`,
    {
      cache: "no-store",
    }
  );

  const category = await response.json();

  return (
    <div className="container mx-auto px-4 py-10">

      <div className="border rounded-xl p-6 shadow-sm">

        <Image
          src={category?.data?.image}
          alt={category?.data?.name}
          width={400}
          height={300}
          className="w-full max-w-md mx-auto h-64 object-contain"
        />

        <h1 className="text-3xl font-bold text-center mt-5">
          {category?.data?.name}
        </h1>

      </div>

    </div>
  );
}