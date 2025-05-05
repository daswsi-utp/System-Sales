import Image from "next/image";
import google from "@/utils/google.svg";
import imagelogin from "@/utils/imagelogin.jpg";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register| User",
    description: "Register and join this great community",
  };

export default function Registerpage () {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Create account</span>
          <span className="font-light text-gray-400 mb-8">
            Join us! Enter your details to get started
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Full Name</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              placeholder="John Doe"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              placeholder="user@example.com"
            />
          </div>
          
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              placeholder="••••••••"
            />
          </div>
          <Link href={"/auth/login"}
            className="w-full bg-black text-center text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Sign up
          </Link>
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
          >
            <Image src={google} alt="img" className="w-6 h-6 inline mr-2" />
            Sign up with Google
          </button>
          <div className="text-center text-gray-400">
            Already have an account?{" "}
            <Link 
              href="/auth/login" 
              className="font-bold text-black hover:underline"
            >
              Log in
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            src={imagelogin}
            width={500}
            height={500}
            alt="Registration image"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
        </div>
      </div>
    </div>
  )
}
