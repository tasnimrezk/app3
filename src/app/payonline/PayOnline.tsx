'use client'

import { Controller,  useForm } from "react-hook-form"
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"

import { toast } from "@/components/ui/toast"
import PayOnlineFnc from "@/api/actions/payment/PayOnlineFnc.action"




export default function PayOnline({cartId}:{cartId:string}){
 

     const {handleSubmit , control} = useForm<shippingData>({
       defaultValues:{
        details:'',
        phone:'',
        city:'',
        postalCode:'',

       }
     })
 async function submitForm(data:shippingData){
  console.log(data);
  // call api
const payload = await PayOnlineFnc(cartId,data)
  console.log(payload)

  if(payload.status == 'success'){
    toast.add({
      type:'success',
      description:"Order Creat Successfully"
    })
  window.location.href=payload.session.url
  }else{
    toast.add({
         type:'error',
      description:"faild"
    })
  }
 }

    return(
      <>
     
    <div className="w-1/2 mx-auto m-y10 p-10">

      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col gap-15 justify-center items-center">
          
          
             <Controller
              name="details"
           control={control}
            render={({ field, fieldState }) => ( <Field data-invalid={fieldState.invalid}>
               <FieldLabel htmlFor={field.name}> Details </FieldLabel>
                <Input {...field} id={field.name} aria-invalid={fieldState.invalid} placeholder="Enter your Details" autoComplete="on" /> {fieldState.invalid && ( <div className="absolute left-0 top-full mt-1"> <FieldError errors={[fieldState.error]} /> </div> )} </Field> )} /> 
               
     
            
               <Controller
                name="phone" 
                control={control}
                render={({ field, fieldState }) => ( <Field data-invalid={fieldState.invalid}> 
                <FieldLabel htmlFor={field.name}> Phone </FieldLabel> 
                <Input type="text" {...field} id={field.name} aria-invalid={fieldState.invalid} placeholder="Enter your Phone" autoComplete="on" /> {fieldState.invalid && ( <div className="absolute left-0 top-full mt-1"> <FieldError errors={[fieldState.error]} /> </div> )} </Field> )} />
                

               <Controller
                name="city" 
                control={control}
                render={({ field, fieldState }) => ( <Field data-invalid={fieldState.invalid}> 
                <FieldLabel htmlFor={field.name}> City </FieldLabel> 
                <Input type="text" {...field} id={field.name} aria-invalid={fieldState.invalid} placeholder="Enter your city" autoComplete="on" /> {fieldState.invalid && ( <div className="absolute left-0 top-full mt-1"> <FieldError errors={[fieldState.error]} /> </div> )} </Field> )} />
             


               <Controller
                name="postalCode" 
                control={control}
                render={({ field, fieldState }) => ( <Field data-invalid={fieldState.invalid}> 
                <FieldLabel htmlFor={field.name}> PostalCode </FieldLabel> 
                <Input type="text" {...field} id={field.name} aria-invalid={fieldState.invalid} placeholder="Enter your PostalCode" autoComplete="on" /> {fieldState.invalid && ( <div className="absolute left-0 top-full mt-1"> <FieldError errors={[fieldState.error]} /> </div> )} </Field> )} />
                
         
          <Button
            type="submit"
            className="mt-8 w-full p-2 rounded-2xl text-white bg-green-800"
          >
         Order Done
          </Button>
      </div>
        
      </form>

    </div>

 </>
    )
} 




  export interface shippingData{
    details:string,
    phone:string,
    city:string,
    postalCode:string,

}