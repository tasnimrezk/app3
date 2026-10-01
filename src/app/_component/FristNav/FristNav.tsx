import Link from 'next/link'
import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { FaUserPlus } from "react-icons/fa6";
import { RiCaravanFill } from "react-icons/ri";
import { SlPresent } from "react-icons/sl";
export default function FristNav() {
  return (
  <header className="lg:px-16 px-4 bg-white flex flex-wrap justify-evenly items-center  shadow-md">
  <div className="flex flex-col md:flex-row justify-between items-center gap-3">
  <div className="flex justify-center items-center gap-2">
   <RiCaravanFill  className='text-green-600'/>
   <p className="text-gray-500">Free Shipping on Orders 500 EGP</p>
  </div>
  <div className="flex justify-center items-center gap-2">
    <SlPresent className='text-green-600'/>
    <p className="text-gray-500">New Arrivals Daily</p>
  </div>
  </div>
  <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
    <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
      <title>menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </label>
  <input className="hidden peer" type="checkbox" id="menu-toggle" />
  <div  className="hidden md:flex md:items-center md:w-auto w-full peer-checked:flex" id="menu">
    <nav>
      <ul className="flex flex-col md:flex-row items-center justify-center md:justify-between text-base gap-4 text-gray-700 pt-4 md:pt-0 pb-4 md:pb-0">
        <li className="flex justify-center items-center hover:text-green-600"><FaPhone className="text-sm"/><Link href="https://wa.me/+1800123-467">+1(800)123-467</Link></li>
        <li className='border-r-2 border-r-gray-500 pr-3 flex justify-center items-center gap-3 hover:text-green-600'><MdOutlineEmail className='text-md' /><Link href="mailto:support@freshcart.com">support@freshcart.com</Link></li>
        <li className='flex justify-center items-center hover:text-green-600 gap-2'><LuUserRound className="text-md" /><Link href="/login">Sing IN</Link></li>
        <li className="flex justify-center items-center hover:text-green-600 gap-2"><FaUserPlus  className="text-md"/><Link href="/Register">Sing UP</Link></li>
      </ul>
    </nav>
  </div>
</header>

  )
}


