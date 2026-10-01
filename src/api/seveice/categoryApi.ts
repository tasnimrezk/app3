import React from 'react'
import { Category } from '../types/productType'

export  async function getShopCategory() : Promise<Category[]> {

try{
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`)
        if(!response.ok) throw new Error ('API Error')
       const  payload =await response.json() 
    return payload.data
    console.log(payload)  
            
   
    
}catch{
throw new Error ('API Error')
}

}
