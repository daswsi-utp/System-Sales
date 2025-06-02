"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { PencilIcon } from "lucide-react";
import { useRouter } from "next/navigation";

type Role = {
  name: string;
};

type UserData = {
  name: string;
  lastName: string;
  email: string;
  country?: string;
  city?: string;
  state?: string;
  birthDate?: string;
  roles?: Role[];
  avatarUrl?: string;
  phone?: string;
  bio?: string;
  postalCode?: string;
  taxId?: string;
};

export const Profile = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const getEmailFromToken = (token: string): string | null => {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const email = payload.sub?.replace(/^"|"$/g, "");
      return typeof email === "string" ? email : null;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setLoading(false);
      setError("No se encontró token de autenticación");
      router.push("/auth/login");
      return;
    }

    const userEmail = getEmailFromToken(token);

    if (!userEmail) {
      setLoading(false);
      setError("Token inválido o sin información de usuario");
      return;
    }

    axios
      .get(`/api/users/email/${userEmail}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (!response.data) throw new Error("No se recibieron datos del usuario");
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", {
          status: error.response?.status,
          message: error.message,
          emailUsed: userEmail,
        });

        let errorMessage = "Error al cargar el perfil";
        if (error.response?.status === 401) {
          errorMessage = "Sesión expirada, redirigiendo...";
          setTimeout(() => router.push("/auth/login"), 2000);
        } else if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        }
        setError(errorMessage);
      })
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 max-w-md mx-auto mt-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No se encontró información del usuario</p>
        <button
          onClick={() => router.push("/auth/login")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Volver a iniciar sesión
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
      {/* Profile Header */}
      <div className="flex items-center p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <Avatar className="size-20">
          <AvatarImage
            src={user.avatarUrl || "https://github.com/shadcn.png"}
            className="rounded-2xl"
            alt={`${user.name} ${user.lastName}`}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="ml-5">
          <h2 className="text-2xl font-semibold text-gray-800">
            {user.name} {user.lastName}
          </h2>
          <p className="text-gray-500">Team Manager</p>
          <p className="text-gray-500">
            {[user.city, user.state, user.country].filter(Boolean).join(", ")}
          </p>
        </div>
        <div className="ml-auto flex gap-x-3">
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => router.push("/profile/edit")}
          >
            <PencilIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="mt-6 p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">
            Personal Information
          </h3>
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => router.push("/profile/edit")}
          >
            <PencilIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-4 space-y-2 text-[#79808a]">
          <p>
            <strong>First Name:</strong> {user.name}
          </p>
          <p>
            <strong>Last Name:</strong> {user.lastName}
          </p>
          <p>
            <strong>Email address:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone || "+09 363 398 46"}
          </p>
          <p>
            <strong>Role:</strong>{" "}
            {user.roles && user.roles.length > 0
              ? user.roles[0].name
              : "No role assigned"}
          </p>
        </div>
      </div>

      {/* Address Section */}
      <div className="mt-6 p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">Address</h3>
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => router.push("/profile/edit")}
          >
            <PencilIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-4 space-y-2 text-[#79808a] rounded-2xl p-2">
          <p>
            <strong>Country:</strong> {user.country || "United States"}
          </p>
          <p>
            <strong>City/State:</strong>{" "}
            {[user.city, user.state].filter(Boolean).join(", ") || "Arizona, United States"}
          </p>
          <p>
            <strong>Postal Code:</strong> {user.postalCode || "ERT 2489"}
          </p>
          <p>
            <strong>TAX ID:</strong> {user.taxId || "AS4568384"}
          </p>
        </div>
      </div>

      {/* Password Reset Section */}
      <div className="mt-6 p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">Password Reset</h3>
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => router.push("/profile/edit")}
          >
            <PencilIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-4 space-y-2 text-[#79808a] rounded-2xl p-2">
          <p>
            <strong>Current Password:</strong> ********
          </p>
          <p>
            <strong>New Password:</strong> ********
          </p>
        </div>
      </div>
    </div>
  );
};
