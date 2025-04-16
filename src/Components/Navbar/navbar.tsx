import { Menu, Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/Components/ui/sheet'; // Asegúrate de que el import esté bien
import { FaUser } from 'react-icons/fa';
import { SidebarRoutes } from '../SidebarRoutes/SidebarRoutes';

export const Navbar = () => {
  return (
    <div className="flex items-center px-2 gap-x-4 md:px-6 justify-between w-full bg-background border-b h-20">
      <Sheet>
        <SheetTrigger className="flex items-center">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left">
          <SidebarRoutes/>
        </SheetContent>
      </Sheet>
      <div className="relative w-[300px]">
        <Input placeholder="Search ..." className="rounded-lg" />
        <Search strokeWidth={1} className="absolute top-2 right-2" />
      </div>
      <div className="flex gap-x-2 items-center">
        <p>ToggleTheme</p>
        <FaUser size={20} /> 
      </div>
    </div>
  );
};
