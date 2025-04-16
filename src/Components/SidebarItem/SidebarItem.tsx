import Link from "next/link";
import { SidebarItemsProps } from "./SidebarItem.type"
import { cn } from "@/lib/utils";
import { Icon } from "lucide-react";

export const SidebarItem = (props:SidebarItemsProps) => {
    const {item,key } = props;
    const {href,icon:Icon,label} = item;
  return (
    <Link href={href}
    className={cn(`flex gap-x-2 mt-2 light:text-slate-700 dark:text-white text-sm items-center
        hover:bg-slate-300 p-2 rounded-lg cursor-pointer`)}>
            <Icon className="h-5 w-5" strokeWidth={1}/>{label}
        </Link>
  )
}
