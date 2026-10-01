import { getAllProducts } from '@/api/seveice/prodectApi'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

export default async function FeaturedProducts(){
 
const data  = await getAllProducts()    


  return (
   <>
    <h2 className="text-3xl text-green-800 font-bold border-l-4 border-l-green-700 pl-5 font-blod my-8">Featured Products</h2>
  <div className='grid sm:grid-cols-2 md:grid-col-3 lg:grid-cols-3 xl:grid-cols-4   gap-2'>
  
{data.map((product)=>{return<ProductCard product={product} key={product._id}/>})}
  </div>


 

   </>
  )
}

