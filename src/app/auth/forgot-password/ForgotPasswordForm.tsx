"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email enviado a:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="p-8 md:p-14 flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-4">Recover password</h1>

      {!isSubmitted ? (
        <>
          <p className="text-gray-600 mb-6">
            Enter your email and we'll send you a link to reset your password.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youremail@ejemplo.com"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Send link
            </button>
          </form>
        </>
      ) : (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <p>Done! Check your email at <strong>{email}</strong> to continue.</p>
        </div>
      )}
      <div className="mt-6 text-center">
            <Link 
              href="/auth/login" 
              className="text-black hover:underline font-medium"
            >
              ← Return to login
            </Link>
          </div>
    </div>
  );
}
