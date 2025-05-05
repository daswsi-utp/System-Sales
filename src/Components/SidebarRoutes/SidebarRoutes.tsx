"use client"
import { Separator } from '@radix-ui/react-separator';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { dataGeneralSidebar, dataSupportSidebar } from './SidebarRoutes.data';
import { Button } from '../ui/button';
import { LuAnvil } from 'react-icons/lu';
import Link from 'next/link';

export const SidebarRoutes = () => {
  const redirigir = () => {
    window.location.href = '/'; 
  };


  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Link href="/dashboard/main" className="p-2 md:p-2 flex flex-row gap-2 ">
          <LuAnvil size={25} className='text-[#79808a] mb-2 ' />
          <p className='text-[#79808a] mb-2 text-xl'>GOINVENTORY</p>
        </Link>
        <div className="p-2 md:p-6">
          <p className='text-[#79808a] mb-2'>GENERAL</p>
          {
            dataGeneralSidebar.map(item => (
              <SidebarItem key={item.label} item={item} />
            ))
          }
        </div>

        <Separator />

        <div className='p-2 md:p-6'>
          <p className='text-[#79808a] mb-2'>SUPPORT</p>
          {
            dataSupportSidebar.map(item => (
              <SidebarItem key={item.label} item={item}/>
            ))
          }
        </div>
        <Separator />
      </div>
      <div>
        <div  className='text-center p-6'>
          <Button onClick={redirigir} variant="outline" className='w-full text-[#79808a] cursor-pointer'>
            Sign out
          </Button>
        </div>

      </div>
    </div>
  )
}
