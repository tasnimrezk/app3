import { getShopCategory } from '@/api/seveice/categoryApi'

import Image from 'next/image'
import React from 'react'


export default async function ShopCategory(){
   
 const data =   await getShopCategory()

 console.log('data catg')
  return (

    <div className='my-5'>
 <h2 className='font-bold text-4xl border-l-4 border-l-green-950 text-black pl-4 my-6'>Shop Category</h2>
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
        {data.map((category)=>{ return <div key={category._id}>
        <div className='border-gray-100 border-2 bg-white rounded-2xl flex flex-col justify-center items-center p-8 hover:shadow-md'>
            <Image className='w-25 h-25 rounded-full' width={200} height={200} src={category.image} alt={category.name}/>
            <h4>{category.name}</h4>
            </div>
         
         </div>   })}
           
    </div>
    </div>
  )
}
