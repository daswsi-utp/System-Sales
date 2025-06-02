"use client"; 
import Image from "next/image";
import google from "@/utils/google.svg";
import imagelogin from "@/utils/imagelogin.jpg";
import Link from "next/link";
import { Metadata } from "next";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      // Registro exitoso - redirigir a login con estado
      router.push("/auth/login?registered=true");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Create account</span>
          <span className="font-light text-gray-400 mb-8">
            Join us! Enter your details to get started
          </span>
          
          {error && (
            <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="py-4">
              <label htmlFor="name" className="mb-2 text-md">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                placeholder="John Doe"
                required
                minLength={3}
              />
            </div>
            
            <div className="py-4">
              <label htmlFor="email" className="mb-2 text-md">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                placeholder="user@example.com"
                required
              />
            </div>
            
            <div className="py-4">
              <label htmlFor="password" className="mb-2 text-md">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                placeholder="••••••••"
                required
                minLength={8}
              />
              <p className="mt-1 text-xs text-gray-500">
                Password must be at least 8 characters long
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white p-2 rounded-lg mb-6 ${
                loading 
                  ? "bg-gray-400 cursor-not-allowed" 
                  : "bg-black hover:bg-white hover:text-black hover:border hover:border-gray-300"
              }`}
            >
              {loading ? "Creating account..." : "Sign up"}
            </button>
          </form>

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
            priority
          />
        </div>
      </div>
    </div>
  );
}