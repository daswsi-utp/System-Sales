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
};

export const Profile = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const getEmailFromToken = (token: string): string | null => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      // Eliminar comillas si existen y asegurar que es string
      const email = payload.sub?.replace(/^"|"$/g, '');
      return typeof email === 'string' ? email : null;
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

    console.log("Obteniendo datos para el email:", userEmail);

    axios.get(`/api/users/email/${userEmail}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      if (!response.data) {
        throw new Error("No se recibieron datos del usuario");
      }
      setUser(response.data);
    })
    .catch(error => {
      console.error("Error al obtener datos:", {
        status: error.response?.status,
        message: error.message,
        emailUsed: userEmail
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
            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
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
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6 mx-auto max-w-4xl">
      {/* Profile Header */}
      <div className="flex items-center p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <Avatar className="size-20">
          <AvatarImage
            src={user.avatarUrl || "https://github.com/shadcn.png"}
            className="rounded-2xl"
            alt={`${user.name} ${user.lastName}`}
          />
          <AvatarFallback className="bg-gray-200 rounded-2xl flex items-center justify-center text-xl font-semibold">
            {user.name?.[0] || "U"}
            {user.lastName?.[0] || "N"}
          </AvatarFallback>
        </Avatar>
        <div className="ml-5">
          <h2 className="text-2xl font-semibold text-gray-800">
            {user.name} {user.lastName}
          </h2>
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
            Información Personal
          </h3>
          <button 
            className="text-blue-500 hover:text-blue-700"
            onClick={() => router.push("/profile/edit")}
          >
            <PencilIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Nombre</p>
              <p className="font-medium">{user.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Apellido</p>
              <p className="font-medium">{user.lastName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Fecha de Nacimiento</p>
              <p className="font-medium">{user.birthDate || "No especificada"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">País</p>
              <p className="font-medium">{user.country || "No especificado"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Ciudad</p>
              <p className="font-medium">{user.city || "No especificada"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Roles Section */}
      {user.roles && user.roles.length > 0 && (
        <div className="mt-6 p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Roles</h3>
          <div className="flex flex-wrap gap-2">
            {user.roles.map((role, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
              >
                {role.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};