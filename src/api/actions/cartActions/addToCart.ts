'use server'
import React from 'react'


import { getTokenFun } from '@/utilities/getTokenData';

export  async function addToCart(prodId:string) {
    
try{

const token= await getTokenFun()  
if(!token){
       throw new Error ('unothorized')
}

const response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{
    method :'POST' ,
    body:JSON.stringify ({
        productId:prodId 
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
