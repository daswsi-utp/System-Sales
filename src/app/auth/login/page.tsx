import LoginForm from "./LoginForm";
import SocialButtons from "./SocialButtons";
import Image from "next/image";
import imagelogin from "@/utils/imagelogin.jpg";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login | User",
    description: "Enter your details or register",
  };

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col md:flex-row m-6 space-y-8 md:space-y-0 bg-white shadow-2xl rounded-2xl">
                <div className="p-8 md:p-14">
                    <h1 className="text-4xl font-bold mb-3">Welcome back</h1>
                    <p className="text-gray-400 mb-8">Welcome back! Please enter your details</p>

                    <LoginForm />
                    <div className="my-6">
                        <SocialButtons />
                    </div>

                    <p className="text-center text-gray-400">
                        Don't have an account?{" "}
                        <Link href="/auth/new-account" className="font-bold text-black hover:underline">
                            Sign up for free
                        </Link>
                    </p>
                </div>
                <div className="relative">
                    <Image
                        src={imagelogin}
                        width={500}
                        height={500}
                        alt="img"
                        className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
                    />
                </div>
            </div>
        </div>
    );
}