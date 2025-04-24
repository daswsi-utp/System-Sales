"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData); 
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded-md"
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 border rounded-md"
        placeholder="Password"
        required
      />
      <div className="flex justify-between items-center">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
            className="mr-2"
          />
          <span>Remember for 30 days</span>
        </label>
        <Link href="/auth/forgot-password" className="text-sm font-semibold hover:underline">
          Forgot password?
        </Link>
      </div>
      <Link href={"/dashboard"}
        type="submit"
        className="w-full flex items-center justify-center bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition"
      >
        Sign in
      </Link>
    </form>
  );
}  
 
 
  
 
