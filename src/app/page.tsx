import Image from "next/image";
import Slider from "./_component/Slider/Slider";
import photo from "../../public/assets/assets/images/slider.img.png"
import Features from "./_component/Features/Features";
import FeaturedProducts from "./_component/FeaturedProducts/FeaturedProducts";
import ShopCategory from "./_component/ShopCategory/ShopCategory";

export default function Home() {
  return (
   <>
   <Slider spaceBetween={0}  slidesPerView ={1}  pageList={[photo.src , photo.src , photo.src]}/>
  <Features/>
  <ShopCategory/>

    
<section className="container mx-auto px-5 py-10 overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

    {/* Left Card */}
    <div className="animate-slide-left relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-700 p-8 md:p-10 text-white min-h-[300px]">

      {/* Circle */}
      <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-white/10"></div>
      <div className="absolute -bottom-16 -left-16 w-28 h-28 rounded-full bg-white/10"></div>

      <div className="relative z-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
          🔥 Deal of the Day
        </span>

        <h2 className="mt-5 text-2xl md:text-3xl font-bold">
          Fresh Organic Fruits
        </h2>

        <p className="mt-3 text-sm md:text-base text-white/90">
          Get up to 40% off on selected organic fruits
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <span className="text-3xl md:text-4xl font-bold">
            40% OFF
          </span>

          <span className="text-sm">
            Use code: <b>ORGANIC40</b>
          </span>
        </div>

        <button className="mt-7 rounded-full bg-white px-6 py-3 font-semibold text-emerald-600 transition hover:bg-gray-100">
          Shop Now →
        </button>
      </div>
    </div>


    {/* Right Card */}
    <div className="animate-slide-right relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-400 to-rose-500 p-8 md:p-10 text-white min-h-[300px]">

      {/* Circle */}
      <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-white/10"></div>
      <div className="absolute -bottom-16 -left-16 w-28 h-28 rounded-full bg-white/10"></div>

      <div className="relative z-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
          ✨ New Arrivals
        </span>

        <h2 className="mt-5 text-2xl md:text-3xl font-bold">
          Exotic Vegetables
        </h2>

        <p className="mt-3 text-sm md:text-base text-white/90">
          Discover our latest collection of premium vegetables
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <span className="text-3xl md:text-4xl font-bold">
            25% OFF
          </span>

          <span className="text-sm">
            Use code: <b>FRESH25</b>
          </span>
        </div>

        <button className="mt-7 rounded-full bg-white px-6 py-3 font-semibold text-orange-500 transition hover:bg-gray-100">
          Explore Now →
        </button>
      </div>
    </div>

  </div>
</section>



  
  <FeaturedProducts/>
  

   </>
  );
}
