"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/Components/Navbar/navbar";
import { Sidebar } from "@/Components/Sidebar/Sidebar";
import axios from "axios";

type UserData = {
  name: string;
  avatarUrl?: string;
};

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const getEmailFromToken = (token: string): string | null => {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const email = payload.sub?.replace(/^"|"$/g, "");
      return typeof email === "string" ? email : null;
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.push("/auth/login");
      return;
    }

    const email = getEmailFromToken(token);
    if (!email) {
      router.push("/auth/login");
      return;
    }

    axios
      .get(`/api/users/email/${email}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        router.push("/auth/login");
      })
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen ">
      <div className="hidden xl:block w-80 h-full fixed left-0 top-0 border-r">
        <Sidebar />
      </div>

      <div className="w-full xl:ml-80 flex flex-col h-full">
        <div className="sticky top-0 z-50 bg-background h-16">
          <Navbar user={user} />
        </div>

        <main
          className="flex-1 overflow-y-auto bg-[#fafbfc] dark:bg-secondary p-6 
                        h-[calc(100vh-4rem)]"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
