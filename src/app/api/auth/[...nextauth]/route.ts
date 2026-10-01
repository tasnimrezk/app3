import { authOptions } from "@/nextAuth/authOption";
import NextAuth from "next-auth";

const handeler = NextAuth(authOptions)


export {handeler as GET , handeler as POST}