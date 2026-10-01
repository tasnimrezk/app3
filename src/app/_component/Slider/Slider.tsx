'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
type sliderType={
    spaceBetween:number,
    slidesPerView:number,
    pageList:string[]
}
export default function Slider({spaceBetween ,  slidesPerView , pageList} : sliderType ) {
  return (
    <>
    <Swiper
    loop={true}
     modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true ,renderBullet(index , className){
        return`<span class='${className} bg-white! w-5! h-5!'></span>`
      } ,bulletActiveClass:"swiper-pagination-bullet-active" }}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    
      {pageList.map((src, index)=>{return <SwiperSlide key={index}  className="relative">
        <Image src={src} alt='sliderphoto' width={400} height={300} className='w-full h-100 object-cover'/>
          <div className="absolute inset-0 bg-green-600/70"></div>
          
           <div className="absolute inset-0 z-10 flex flex-col justify-center px-16 text-white">

        {index === 0 && (
          <>
            <h2 className="text-4xl font-bold">
              Fresh Products Delivered
              <br />
              to your Door
            </h2>

            <p className="mt-4 text-lg">
              Get 20% off your first order
            </p>
           <div className='flex gap-2'>
            <button className="mt-6 w-fit bg-white text-green-600 px-6 py-3 rounded-lg">
              <Link href="/shop">Shop Now</Link>
            </button>
             
            
               </div>
          </>
        )}

        {index === 1 && (
          <>
            <h2 className="text-4xl font-bold">
              Fresh & Healthy
              <br />
              Every Day
            </h2>

            <p className="mt-4 text-lg">
              Quality products at the best prices
            </p>

            <button className="mt-6 w-fit bg-white text-green-600 px-6 py-3 rounded-lg">
               <Link href="/shop">Shop Now</Link>
            </button>
          </>
        )}

        {index === 2 && (
          <>
            <h2 className="text-4xl font-bold">
              Great Deals
              <br />
              Every Week
            </h2>

            <p className="mt-4 text-lg">
              Save more on your favorite products
            </p>
             
            <button className="mt-6 w-fit bg-white text-green-600 px-6 py-3 rounded-lg">
            <Link href="/shop">Shop Now</Link>
            </button>
          

          </>
        )}

      </div>

      </SwiperSlide>})}
    </Swiper>
    </>
  )
  
};

