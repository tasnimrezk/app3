import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { email } from './../../node_modules/zod/v4/classic/schemas';
import { jwtDecode } from "jwt-decode";

export const authOptions:NextAuthOptions={
    providers:[
        Credentials({
          name:'my login' ,


        credentials :{
            email:{label:'Email' , type:'email' , placeholder :"Enter your Email"} ,
            password:{label:'Password' , type:'password' , placeholder :"Enter your Password"} ,
         } ,
            
      async authorize(credentials){
             const response = await fetch( `${process.env.API}/auth/signin`, { 
        method: "POST",
         body: JSON.stringify({
          email:credentials?.email ,
          password:credentials?.password ,
         }),
          headers: { "Content-Type": "application/json", 

          }, 

         
        } ); 
         
        //  if(!response.ok){
        //     throw new Error(response.statusText)
        //   }

        if (!response.ok) {
  const errorData = await response.json()
  console.log("LOGIN ERROR:", errorData)
  throw new Error(errorData.message || "Login failed")
}


        const payload = await response.json();
        const userData:{id:string} = jwtDecode(payload.token)

         console.log("payload...", payload); 
         console.log("my token...", userData); 
           
        return {
            id:userData.id ,
            email:payload.user.email ,
            name:payload.user.name ,
            token:payload.token
        }
         }

        })
    ],
    
    callbacks:{
        jwt({token,user}){
             if(user){
            token.id=user.id 
            token.token=user.token
        }
        return token
        },

        session({session,token}){
          if(token){
            session.user.id = token.id
                
          }
          return session
        } ,
       
    } ,

    pages:{
        signIn:'/login'
    }
}
 