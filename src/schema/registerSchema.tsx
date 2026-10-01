import * as zod  from 'zod'

import { zodResolver } from '@hookform/resolvers/zod';

export let schema= zod.object({
  name : zod.string().nonempty('Name is required').min(3 , 'Min 3 Letters').max(8 , 'Max 8 Letters') ,
    // username : zod.string().nonempty('user Name is required').regex(/^[A-Z][a-z0-9]{5,10}$/ , 'Invalid user Name'),

  email : zod.string().nonempty('Email Required').email('Inavlid Email') ,
  password : zod.string().nonempty('Password Required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ , 'Invalid Pssword, Starts with a [A-Z], followed by a [a-z] , number [1-9]; includes [!@#$%*] All 8 ' ) ,

  rePassword:zod.string().nonempty('rePassword Required'),

    phone:zod.string().nonempty('phone Required').regex(/^01[0125][0-9]{8}$/ , 'Invalid Phone' ),


}).refine((obj)=>{
  if(obj.password === obj.rePassword){
    return true
  }
  else{
    return false
  }
} , {path:['rePassword'] , message : 'password & rePassword not matched' })