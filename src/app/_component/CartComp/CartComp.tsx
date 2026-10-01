'use client'
import { ClearCart } from '@/api/actions/cartActions/clearCart.action'
import { deleteCartItem } from '@/api/actions/deleteCartItem'
import { updateCart } from '@/api/actions/updateCartItem'
import { CartResponseType } from '@/api/types/cartType'
import { toast } from '@/components/ui/toast'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'

import React from 'react'

export default function CartComp() {
  
  const query = useQueryClient();


    const {data:cartData , isLoading  }= useQuery<CartResponseType>({
        queryKey:['getCart'] ,
        queryFn: async ()=>{
            const responce = await fetch ('/api/cart')
            if(!responce.ok) throw new Error ('Faild To Fetch')
                return responce.json()
        }
    })
 console.log('cartData....' , cartData)

// handle delete

const {data:delData , mutate:delCartItem } = useMutation({
  mutationFn: deleteCartItem ,
 onSuccess:() => {
  toast.add({
    type: "success",
    description: "Product Deleted Successfully",
  })
query.invalidateQueries({queryKey:['getCart']})

  console.log("GET CART INVALIDATED")

  
    
  } ,
  onError:()=>{
      toast.add({
              type: "error",
              description:"Faild",
            })
  } ,



})
// update
const {data:updateData , mutate:updateCartItem } = useMutation({
  mutationFn:updateCart ,
 onSuccess:() => {
  toast.add({
    type: "success",
    description: "Product Deleted Successfully",
  })
query.invalidateQueries({queryKey:['getCart']})

  console.log("GET CART INVALIDATED")

  
    
  } ,
  onError:()=>{
      toast.add({
              type: "error",
              description:"Faild",
            })
  } ,
})



const {data:clearData , mutate:clearCartItem } = useMutation({
  mutationFn:ClearCart ,
 onSuccess:() => {
  toast.add({
    type: "success",
    description: "Product Clear Successfully",
  })
query.invalidateQueries({queryKey:['getCart']})

  console.log("GET CART INVALIDATED")

  
    
  } ,
  onError:()=>{
      toast.add({
              type: "error",
              description:"Faild",
            })
  } ,
})

function HandleUpdateCart(prodId:string , count:number){
  updateCartItem({prodId , count})
}

function HandleclearCart(){
  clearCartItem()
}



   if(isLoading){
    return<h2>Loading...</h2>
   }

  return (
   <>
   
   {cartData?.numOfCartItems ? <section className="w-full bg-white dark:bg-[#0A2025] py-9 px-4 sm:px-6 lg:px-8">

  {/* Title */}
  <h1 className="text-center text-[#191919] dark:text-white text-2xl sm:text-[32px] font-semibold leading-[38px]">
    My Shopping Cart
  </h1>


  {/* Cart + Cart Total */}
  <div className="flex flex-col lg:flex-row items-start mt-8 gap-6">


    {/* ================= CART TABLE ================= */}
    <div className="bg-white p-2 sm:p-4 w-full lg:w-[800px] rounded-xl">

      <table className="w-full table-fixed bg-white rounded-xl">

        {/* Table Head */}
        <thead>
          <tr className="text-center border-b border-gray-400 text-[#7f7f7f] text-xs sm:text-sm font-medium uppercase leading-[14px] tracking-wide">

            <th className="text-left px-1 sm:px-2 py-2 w-[42%]">
              Product
            </th>

            <th className="px-1 sm:px-2 py-2 w-[18%]">
              Price
            </th>

            <th className="px-1 sm:px-2 py-2 w-[30%]">
              Quantity
            </th>

            <th className="hidden sm:table-cell px-2 py-2 w-[15%]">
              Subtotal
            </th>

            <th className="hidden sm:table-cell w-7 px-2 py-2">
            </th>

          </tr>
        </thead>


        {/* ================= PRODUCTS ================= */}
        <tbody>

   {cartData?.data.products.map((product)=> {
      
  console.log("CART ITEM ID:", product._id)
  console.log("PRODUCT ID:", product.product._id)
    return (
   <tr key={product._id} className="text-center border-b border-gray-200">

            {/* Product */}
            <td className="px-1 sm:px-2 py-4 text-left">

              <div className="flex items-center gap-1 sm:gap-2">

                <img
                  src={product.product.imageCover}
                  alt="Green Capsicum"
                  className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] object-cover shrink-0"
                />

                <span className="text-xs sm:text-base text-[#191919] truncate">
                  Green Capsicum
                </span>

              </div>

            </td>


            {/* Price */}
            <td className="px-1 sm:px-2 py-2 text-xs sm:text-base whitespace-nowrap">
              {product.price}
            </td>


            {/* Quantity */}
            <td className="px-1 py-2">

              <div className="w-[80px] sm:w-[120px] mx-auto p-1.5 sm:p-2 bg-white rounded-full border border-[#a0a0a0] flex justify-around items-center">

                {/* Minus */}
                <svg
                  width={12}
                  height={13}
                  className="cursor-pointer"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <path
                  onClick={()=>{HandleUpdateCart(product.product._id,product.count-1)}}
                    d="M2.33398 7.5H11.6673"
                    stroke="#666666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>


                <span className="w-6 sm:w-10 text-center text-sm sm:text-base text-[#191919]">
                {product.count}
                </span>


                {/* Plus */}
                <svg
                  width={12}
                  height={13}
                  className="cursor-pointer"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <path
                  onClick={()=>{HandleUpdateCart(product.product._id,product.count+1)}}
                    d="M2.33398 7.49998H11.6673M7.00065 2.83331V12.1666"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </div>

            </td>


            {/* Subtotal */}
            <td className="hidden sm:table-cell px-2 py-2">
              {product.count*product.price}
            </td>


            {/* Delete */}
            <td className="hidden sm:table-cell px-2 py-2">

              <svg
                onClick={() => delCartItem(product.product._id)}
                width={24}
                height={25}
                className="cursor-pointer"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z"
                  stroke="#CCCCCC"
                  strokeMiterlimit={10}
                />

                <path
                  d="M16 8.5L8 16.5"
                  stroke="#666666"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M16 16.5L8 8.5"
                  stroke="#666666"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

              </svg>

            </td>

          </tr>
   )
   })} 


    
        </tbody>

        {/* Footer */}
        <tfoot>

          <tr className="border-t border-gray-400">

            <td
              className="px-1 sm:px-2 py-4"
              colSpan={2}
            >

              <button className="px-4 sm:px-8 py-3 sm:py-3.5 cursor-pointer bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-xs sm:text-sm font-semibold whitespace-nowrap">

                Return to shop

              </button>

            </td>


            <td
              className="px-1 sm:px-2 py-4 text-right"
              colSpan={3}
            >

              <button onClick={HandleclearCart} className="px-4 sm:px-8 py-3 sm:py-3.5 cursor-pointer bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-xs sm:text-sm font-semibold whitespace-nowrap">

                Clear Cart

              </button>

            </td>

          </tr>

        </tfoot>

      </table>

    </div>



    {/* ================= CART TOTAL ================= */}

    <div className="w-full lg:w-[424px] bg-white rounded-lg p-5 sm:p-6">

      <h2 className="text-[#191919] mb-2 text-xl font-medium leading-[30px]">
        Cart Total
      </h2>


      <div className="w-full py-3 flex justify-between items-center">

        <span className="text-[#4c4c4c] text-base font-normal">
          Total:
        </span>

        <span className="text-[#191919] text-base font-semibold">
          {cartData?.data.totalCartPrice}
        </span>

      </div>


      <div className="w-full py-3 border-b border-[#e5e5e5] flex justify-between items-center">

        <span className="text-[#4c4c4c] text-sm">
          Shipping:
        </span>

        <span className="text-[#191919] text-sm font-medium">
          Free
        </span>

      </div>


      <div className="w-full py-3 border-b border-[#e5e5e5] flex justify-between items-center">

        <span className="text-[#4c4c4c] text-sm">
       Num Of CartItems:
        </span>

        <span className="text-[#191919] text-sm font-medium">
          {cartData?.numOfCartItems}
        </span>

      </div>


      <button className="w-full text-white mt-5 px-6 py-4 bg-[#00b206] rounded-[44px] text-base font-semibold">

       <Link href={`checkout/${cartData.cartId}`}> Proceed to checkout</Link>

      </button>
      <button className="w-full text-white mt-5 px-6 py-4 bg-[#00b206] rounded-[44px] text-base font-semibold">

       <Link href={`/payonline/${cartData.cartId}`}>payOnline </Link>

      </button>

    </div>

  </div>



  {/* ================= COUPON ================= */}

  <div className="mt-6 p-4 sm:p-5 w-full lg:w-[800px] bg-white rounded-lg border border-[#e6e6e6] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">

    <h3 className="text-[#191919] w-full sm:w-1/4 text-xl font-medium leading-[30px]">
      Coupon Code
    </h3>


    <div className="w-full border border-[#e6e6e6] rounded-[46px] flex overflow-hidden">

      <input
        placeholder="Enter code"
        type="text"
        className="flex-1 min-w-0 px-4 sm:px-6 py-3.5 outline-none bg-white text-[#999999] text-sm sm:text-base"
      />


      <button className="shrink-0 px-4 sm:px-8 lg:px-10 py-3 sm:py-4 bg-[#333333] rounded-[43px] text-white text-xs sm:text-base font-semibold whitespace-nowrap">

        Apply Coupon

      </button>

    </div>

  </div>

</section> 
: <h2>Cart Empty</h2>}




   
   </>
  )
}
