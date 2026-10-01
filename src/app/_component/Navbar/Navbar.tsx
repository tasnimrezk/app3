"use client"

import * as React from "react"
import Link from "next/link"
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { MdHeadsetMic } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import logo from "../../../../public/assets/assets//images/freshcart-logo.svg"
import Image from "next/image"
import { CiBoxList } from "react-icons/ci";
import { signOut, useSession } from "next-auth/react"
import { CartResponseType } from '@/api/types/cartType'
import { useQuery } from '@tanstack/react-query'


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },

  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function Navbar() {
    const {data:cartData , isLoading} = useQuery<CartResponseType>({
        queryKey:['getCart'] ,
        queryFn: async ()=>{
            const responce = await fetch ('/api/cart')
            if(!responce.ok) throw new Error ('Faild To Fetch')
                return responce.json()
        }
    })
 console.log('cartData' , cartData)


 function handleLogout(){
  signOut({redirect:true , callbackUrl:"/login"})
 }

  const {data:sessionData , status} = useSession()
  console.log(status)
  return (
    <NavigationMenu className="w-full max-w-full px-3 sm:px-4 overflow-x-hidden bg-white py-3 border-2 border-t-gray-200 border-b-gray-200 sticky top-0 z-50 ">
      <NavigationMenuList className=" justify-around">

      <Image src={logo} alt="frechlogo"/>



<div className="md:flex hidden items-center justify-center gap-2.5">
        <NavigationMenuItem>    
         <Link className="text-gray-700 hover:text-green-600 font-mono font-light text-sm" href='/'>Home</Link>
        </NavigationMenuItem>

        <NavigationMenuItem>    
         <Link className="text-gray-700 hover:text-green-600 font-mono font-light text-sm" href='/shop'>Shop</Link>
        </NavigationMenuItem>

<NavigationMenuItem>
          <NavigationMenuTrigger  className="text-gray-700 hover:text-green-600 font-mono font-light text-sm">Categories</NavigationMenuTrigger>

               <NavigationMenuContent>
                 <ul className="p-4 rounded-2xl bg-white">
                   <li className="flex flex-col gap-2"> 
                    <Link href="/categories" className="text-gray-500 hover:text-green-600 font-medium hover:bg-green-50" > All Gategories </Link> 
                    <Link href="/categories/electronics" className="text-gray-500 hover:text-green-600 font-medium hover:bg-green-50" > Electronics </Link> 
                    <Link href="/categories/women'sFashion" className="text-gray-500 hover:text-green-600 font-medium hover:bg-green-50" > Women's Fashion </Link> 
                    <Link href="/categories/men'sFashion" className="text-gray-500 hover:text-green-600 font-medium hover:bg-green-50" > Men's Fashion </Link>
                     </li>
                      </ul>
                       </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>    
         <Link className="text-gray-700 hover:text-green-600 font-mono font-light text-sm" href='/brands'>Brands</Link>
        </NavigationMenuItem>

</div>


   <div className="md:flex hidden items-center justify-center gap-2 border-r-2 border-r-gray-200 pr-2">
    <div className="w-8 h-8 bg-green-300 rounded-full flex items-center justify-center"><MdHeadsetMic className="text-green-700" /></div>
    <Link href="#">
     <h2 className="text-sm text-gray-400">Support</h2>
     <p className="text-sm font-bold">24/7/help</p>
    </Link>
   </div>
    
   {status ==="authenticated" ? <>
    <div className="flex justify-center items-center  gap-2">
 <Link className=" w-10 h-10 hover:text-green-600 hover:rounded-full hover:bg-gray-100 flex justify-center items-center flex-col"  href="/wishlist">
  
       <CiHeart className="text-3xl" />
    </Link>
     
    <Link className=" flex flex-col w-10 h-10 hover:text-green-600 hover:rounded-full hover:bg-gray-100  justify-center items-center" href="/cart">
    <span className="text-sm" >{cartData?.numOfCartItems}</span>
      <IoCart className="text-7xl"  />
    </Link>
    </div>
     <Button onClick={handleLogout} className="rounded-2xl p-4 bg-green-500 text-lg text-white hover:bg-green-800"><span></span>Log Out</Button> 


   </>:   <Button className="rounded-2xl p-4 bg-green-500 text-lg text-white hover:bg-green-800"><Link href="/login">SingIn</Link></Button>  
   
  
 }
   
    


 <NavigationMenuItem className="md:hidden">
          <NavigationMenuTrigger><CiBoxList className="text-2xl" /></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/" title="Home">
                <Link href="/">Home</Link>
              </ListItem>
              <ListItem href="/categories" title="Categories">
                <Link href="/categories">Categories</Link>
              </ListItem>
              <ListItem href="/shop" title="Shop">
              <Link href="/shop">Shop</Link>
              </ListItem>
              <ListItem href="/brands" title="Brands">
                <Link href="/brands">Brands</Link>
              </ListItem>
            </ul>
          </NavigationMenuContent>          
        </NavigationMenuItem>



      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<Link href={href}><div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div></Link>} />
    </li>
  )
}



// import { ButtonGroup } from "@/components/ui/button-group"import { FieldLabel } from '@/components/ui/field';
// import { Field, FieldLabel } from "@/components/ui/field"import { Image } from 'next/image';
