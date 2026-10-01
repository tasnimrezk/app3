'use server'

import { loginData } from "@/app/(auth)/login/page";
import { userData } from "@/app/(auth)/Register/page";
import { cookies } from "next/headers";

export async function userRegister(data:userData){
    try {
        const response =await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup` ,{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                "content-Type":"application/json"
            }
        })
         const payload = await response.json()
           
         console.log('payload' , payload);
         return response.ok;

    }catch (error) {
        console.log(error)
            return false;
    }
}

// export async function userLogin(data: loginData) {
//      try { 
//         const response = await fetch( `https://ecommerce.routemisr.com/api/v1/auth/signin`, { 
//         method: "POST",
//          body: JSON.stringify(data),
//           headers: { "Content-Type": "application/json", 

//           }, 
//         } ); const payload = await response.json();
//          console.log("login payload", payload); 
           
//          if(response.ok){
//             const cookie = await cookies()
//             cookie.set('userToken' ,payload.token,{
//                 httpOnly:true,
//             }) 

//          }
//          return response.ok;

//          } catch (error) { 
//             console.log(error); 
//             return false; } 
//         }


    