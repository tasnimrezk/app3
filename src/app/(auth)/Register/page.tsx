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
import imgform from ".././../../../public/assets/assets/images/img-form.png"
import { userRegister } from '@/api/actions/auth.action'
import { toast } from "@/components/ui/toast"
import { useRouter } from 'next/navigation'

export type userData = zod.infer<typeof schema >

export default function Register() {
  const router = useRouter()
  const {register , control , handleSubmit} = useForm <userData>( {
     defaultValues: {
    name: "",
    email: "",
    password: "",
    rePassword:"",
    phone: "",
  },
 resolver:zodResolver(schema)
  })

 async function submitForm(data:userData){
     console.log(data);

     const nowRegister = await userRegister(data)
     console.log(nowRegister);

     if(nowRegister){
         toast.add({
            type: "success",
            description: "Register is successfully ",
          })

          router.push('/login')
     }
     else{
            toast.add({
            type: "error",
            description: "Can't Register Now",
            
          })
     }
  }
  return (
  <>

   <section className='bg-gray-50 rounded-2xl mt-8 p-0'>
{/* Container */}
<div className="grid  md:grid-cols-2">
  {/* Component */}
  <div className="flex flex-col items-center justify-center">
    {/* Wrapper */}
    <div className="max-w-lg px-4 py-10 text-center md:px-4 md:py-15 lg:py-30">
      {/* Title */}
      <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">Register Now</h2>
      {/* Form */}
          <form onSubmit={handleSubmit(submitForm)} >
          <div className='flex flex-col gap-11'>
  <Controller
  name="name"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>User Name</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your Name"
        autoComplete="on"
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<Controller
  name="email"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your Email"
        autoComplete="on"
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>


    <div className="relative">
         <Controller
          name="password" 
          control={control}
          render={({ field, fieldState }) => ( 
          <Field data-invalid={fieldState.invalid}> 
          <FieldLabel htmlFor={field.name}> Password </FieldLabel> 
          <Input type="password" {...field} 
          id={field.name} aria-invalid={fieldState.invalid} 
          placeholder="Enter your Password" autoComplete="on" />
           {fieldState.invalid && ( <div className="absolute left-0 top-full mt-1"> 
            <FieldError errors={[fieldState.error]} /> </div> )}
             </Field> 
)} 
/>
           </div>




<Controller
  name="rePassword"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>rePassword</FieldLabel>
      <Input
      type='password'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your repassword"
        autoComplete="on"
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
<Controller
  name="phone"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your Phone"
        autoComplete="on"
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

        <Button type="submit" className="mt-8 w-full p-2 rounded-2xl text-white
         bg-green-800">Register Now</Button>

          </div>


          </form>



     




    </div>
  </div>
  {/* Component */}


  <div>
    <Image className='w-full h-full object-cover' src={imgform} alt='imageform' width={300} height={200}/>
  </div>



</div>
</section>

     
   </>  
   
  )
}
