'use server'
import { shippingData } from '@/app/checkout/CheckoutForm'
import { getTokenFun } from '@/utilities/getTokenData'
import React from 'react'

export default async function payCash(cartId:string , shippingAddress: shippingData){
      
   try{
   
   const token= await getTokenFun()  
   if(!token){
          throw new Error ('unothorized')
   }
   
   const response = await fetch(`https://ecommerce.routemisr.com/api/v2/orders/${cartId}`,{
       method :'POST' ,
       body:JSON.stringify ({
          shippingAddress:shippingAddress
       }),
       headers:{
          token: token ,
          'content-type':'application/json'
       }
   }) 
   
   if(!response.ok) throw new Error ('unothorized')
   
   const payload = await response.json()
   console.log(payload);
   
   return payload
   
   }catch(error){
       throw new Error ('unothorized')
   }
   
   

  
}
