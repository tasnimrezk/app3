'use client'

import { addToCart } from "@/api/actions/cartActions/addToCart"
import { toast}  from "@/components/ui/toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ReactNode } from "react"

export function AddBtn({cls ,child,prodId }:{cls:string ,child:ReactNode , prodId:string}){
  const query = useQueryClient();

    async function handleAddToCart(){

    mutate(prodId)   
//         try{
//              const data = await addToCart(prodId) 
//             if(data.message === "Product added successfully to your cart"){
//   console.log(data)
//     toast.add({
//               type: "success",
//               description:data.message,
//             })
// }else{

// toast.add({
//         type:"error" ,
//         description:"Login Frist"
//     })

// }  
//   }catch(error){
//     toast.add({
//         type:"error" ,
//         description:"Login Frist"
//     })
// }      
                
// }

    }
const {data , mutate} = useMutation({
    mutationFn: addToCart ,
    onSuccess:()=>{
        toast.add({
              type: "success",
              description:"Product added successfully to your cart",

            })
query.invalidateQueries({queryKey:['getCart']})
    } ,  
    onError:()=>{
          toast.add({
        type:"error" ,
          description:"Login Frist"
     })
    }   
})
    

    return(
      <>
        
        <button onClick={handleAddToCart} className={cls}>
          {child}
        </button>
           
          

</>
    )
}
