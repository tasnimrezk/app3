import { productType } from "../types/productType";

export async function getAllProducts():Promise<productType[]>{
    try{
        const response = await fetch('https://ecommerce.routemisr.com/api/v1/products')
        if(!response.ok) throw new Error ('API Error')
            const payload = await response.json()
        console.log(payload);
        return payload.data
    }catch(error){
         throw new Error ('API Error')
    }
}
export async function getSingleProduct(prodId:string):Promise<productType>{
    try{
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${prodId}`)
        if(!response.ok) throw new Error ('API Error')
            const payload = await response.json()
        console.log(payload);
        return payload.data
    }catch(error){
         throw new Error ('API Error')
    }
}