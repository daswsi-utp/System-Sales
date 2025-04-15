"use client";

import Image from "next/image";
import googleIcon from "@/utils/google.svg";

export default function SocialButtons() {
  const handleGoogleLogin = () => {
    console.log("Iniciando con Google"); 
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full flex items-center justify-center gap-2 p-2 border rounded-lg hover:bg-gray-50 transition"
    >
      <Image src={googleIcon} alt="Google" width={24} height={24} />
      <span>Sign in with Google</span>
    </button>
  );
}