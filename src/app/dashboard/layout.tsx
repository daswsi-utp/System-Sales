import { Navbar } from "@/Components/Navbar/navbar";
import { Sidebar } from "@/Components/Sidebar/Sidebar";

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>)
 {
  return (
    <div className="flex w-full h-full">
        <div className="hidden xl:block w-80 h-full xl-fixed">
            <Sidebar/>
        </div>
        <div className="w-full xl:ml-30">
            <Navbar />
            <div className="p-6 bg-[#fafbfc] dark:bg-secondary">
            {children}</div>
        </div>
    </div>
  );
}