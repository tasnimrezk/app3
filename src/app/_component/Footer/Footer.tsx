
import Link from "next/link";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#101a2b] text-white my-10">

      {/* Footer Main */}
      <div className="container mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo + Description */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 bg-white text-[#263746] px-5 py-3 rounded-lg">
              <span className="text-3xl text-green-600">🛒</span>
              <span className="text-2xl font-bold">
                FreshCart
              </span>
            </div>

            <p className="text-gray-400 mt-7 leading-7 max-w-md">
              FreshCart is your one-stop destination for quality products.
              From fashion to electronics, we bring you the best brands
              at competitive prices for a seamless shopping experience.
            </p>

            {/* Contact */}
            <div className="mt-7 space-y-4 text-gray-300">

              <div className="flex items-center gap-4">
                <FaPhone className="text-green-500" />
                <span>+1 (800) 123-4567</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-green-500" />
                <span>support@freshcart.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaLocationDot className="text-green-500" />
                <span>123 Commerce Street, New York, NY 10001</span>
              </div>

            </div>

            {/* Social */}
            <div className="flex gap-3 mt-7">

              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#1c293d] flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#1c293d] flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaTwitter />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#1c293d] flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#1c293d] flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaYoutube />
              </Link>

            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-bold mb-7">
              Shop
            </h3>

            <ul className="space-y-5 text-gray-400">
              <li>
                <Link href="#">All Products</Link>
              </li>
              <li>
                <Link href="#">Categories</Link>
              </li>
              <li>
                <Link href="#">Brands</Link>
              </li>
              <li>
                <Link href="#">Electronics</Link>
              </li>
              <li>
                <Link href="#">Men's Fashion</Link>
              </li>
              <li>
                <Link href="#">Women's Fashion</Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-lg font-bold mb-7">
              Account
            </h3>

            <ul className="space-y-5 text-gray-400">
              <li>
                <Link href="#">My Account</Link>
              </li>
              <li>
                <Link href="/orders">Order History</Link>
              </li>
              <li>
                <Link href="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link href="/cart">Shopping Cart</Link>
              </li>
              <li>
                <Link href="/login">Sign In</Link>
              </li>
              <li>
                <Link href="/Register">Create Account</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-7">
              Support
            </h3>

            <ul className="space-y-5 text-gray-400">
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">Help Center</Link>
              </li>
              <li>
                <Link href="#">Shipping Info</Link>
              </li>
              <li>
                <Link href="#">Returns & Refunds</Link>
              </li>
              <li>
                <Link href="#">Track Order</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-7">
              Legal
            </h3>

            <ul className="space-y-5 text-gray-400">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
              <li>
                <Link href="#">Cookie Policy</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </footer>
  );
}

