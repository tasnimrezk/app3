import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest){
    const responce = await fetch('https://ecommerce.routemisr.com/api/v1/brands')

    const payload = await responce.json()
    
    return NextResponse.json(payload)
}