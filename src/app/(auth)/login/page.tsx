'use client'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { schema } from '@/schema/registerSchema'
import { Button } from "@/components/ui/button"
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as zod  from 'zod'
import loginimage from "../../../../public/assets/assets/images/slider.img.png"
import {  userRegister } from '@/api/actions/auth.action'
import { toast } from "@/components/ui/toast"
import { redirect, useRouter } from 'next/navigation'
import { loginSchema } from '@/schema/loginSchema'

import { signIn } from 'next-auth/react'


export type loginData = zod.infer<typeof loginSchema >

export default function Login() {
  const router = useRouter()
  const {register , control , handleSubmit} = useForm <loginData>( {
     defaultValues: {
    
    email: "",
    password: "",
   
   
  },
 resolver:zodResolver(loginSchema)
  })

 async function submitForm(data:loginData){
 const isLogin = await signIn('credentials' , {...data , redirect:false} ) 


    
   if(isLogin?.ok){
      toast.add({
        type:"success",
        description:"Success Login"
      })
      router.push('/')
    }
    else{
      toast.add({
        type:"error",
        description:"Can't Login Now"
      })
    }
 }


// async function submitForm(data: loginData) {
//   console.log("LOGIN DATA:", data)

//   const isLogin = await signIn("credentials", {
//     email: data.email,
//     password: data.password,
//     redirect: false,
//   })

//   console.log("LOGIN RESULT:", isLogin)

// if (isLogin?.ok) {
//   console.log("LOGIN SUCCESS")

//   toast.add({
//     type: "success",
//     description: "Success Login"
//   })

//   router.push("/")
// } else {
//   console.log("LOGIN FAILED:", isLogin?.error)

//   toast.add({
//     type: "error",
//     description: isLogin?.error || "Can't Login Now"
//   })
// }

  return (
  <>

   <section className='bg-gray-50 rounded-2xl mt-8 '>
{/* Container */}
<div className="grid  md:grid-cols-2">
  {/* Component */}
  <div className="flex flex-col items-center justify-center">
    {/* Wrapper */}
    <div className="max-w-lg px-4 py-10 text-center md:px-4 md:py-15 lg:py-30">
      {/* Title */}
      <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">Login Now</h2>
      {/* Form */}
         


<form onSubmit={handleSubmit(submitForm)}>
  <div className="flex flex-col gap-15 justify-center items-center">

   {/* Email */} 
   
     
    <div className="relative">
       <Controller
        name="email"
     control={control}
      render={({ field, fieldState }) => ( <Field data-invalid={fieldState.invalid}>
         <FieldLabel htmlFor={field.name}> Email </FieldLabel>
          <Input {...field} id={field.name} aria-invalid={fieldState.invalid} placeholder="Enter your Email" autoComplete="on" /> {fieldState.invalid && ( <div className="absolute left-0 top-full mt-1"> <FieldError errors={[fieldState.error]} /> </div> )} </Field> )} /> 
          </div>
     {/* Password */}
      <div className="relative">
         <Controller
          name="password" 
          control={control}
          render={({ field, fieldState }) => ( <Field data-invalid={fieldState.invalid}> 
          <FieldLabel htmlFor={field.name}> Password </FieldLabel> 
          <Input type="password" {...field} id={field.name} aria-invalid={fieldState.invalid} placeholder="Enter your Password" autoComplete="on" /> {fieldState.invalid && ( <div className="absolute left-0 top-full mt-1"> <FieldError errors={[fieldState.error]} /> </div> )} </Field> )} />
           </div>
    {/* Button */}
    <Button
      type="submit"
      className="mt-8 w-full p-2 rounded-2xl text-white bg-green-800"
    >
      Login Now
    </Button>
</div>
  
</form>



     




    </div>
  </div>
  {/* Component */}
 
   <div>
    <Image className='w-full h-full object-cover' src={loginimage} alt='loginimage' width={300} height={200}/>
  </div> 



</div>
</section>

     
   </>  
   
  )
}

