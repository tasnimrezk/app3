import * as zod  from 'zod'

import { zodResolver } from '@hookform/resolvers/zod';

export let loginSchema= zod.object({
 
  email : zod.string().nonempty('Email Required').email('Inavlid Email') ,
  password : zod.string().nonempty('Password Required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ , 'Invalid Pssword, Starts with a [A-Z], followed by a [a-z] , number [1-9]; includes [!@#$%*] All 8 ' ) ,

  

})