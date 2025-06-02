import { Menu, Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/Components/ui/sheet'; 
import { SidebarRoutes } from '../SidebarRoutes/SidebarRoutes';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import Link from 'next/link';

type UserData = {
  name: string;
  avatarUrl?: string;
};

type NavbarProps = {
  user: UserData | null;
};

export const Navbar = ({ user }: NavbarProps) => {
  return (
    <div className="flex items-center px-2 gap-x-4 md:px-6 justify-between w-full bg-background border-b h-20">
      <Sheet>
        <SheetTrigger className="flex items-center">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle className="text bg-center"></SheetTitle>
          <SidebarRoutes />
        </SheetContent>
      </Sheet>
      <div className="flex gap-x-2 items-center">
        <Link href="/dashboard/account">
          <div className="flex gap-x-2 items-center cursor-pointer">
            <p>{user?.name || "Usuario"}</p>
            <Avatar className="size-8">
              <AvatarImage
                src={user?.avatarUrl || "https://github.com/shadcn.png"}
                className="rounded-2xl"
              />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </div>
        </Link>
      </div>
    </div>
  );
};
