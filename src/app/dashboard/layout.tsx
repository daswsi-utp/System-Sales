import { Navbar } from "@/Components/Navbar/navbar";
import { Sidebar } from "@/Components/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen "> 
      <div className="hidden xl:block w-80 h-full fixed left-0 top-0 border-r">
        <Sidebar />
      </div>

      <div className="w-full xl:ml-80 flex flex-col h-full">
        <div className="sticky top-0 z-50 bg-background h-16"> 
          <Navbar />
        </div>

        <main className="flex-1 overflow-y-auto bg-[#fafbfc] dark:bg-secondary p-6 
                        h-[calc(100vh-4rem)]"> 
          {children}
        </main>
      </div>
    </div>
  );
}