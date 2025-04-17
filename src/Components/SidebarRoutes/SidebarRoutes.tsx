"use client"
import { Separator } from '@radix-ui/react-separator';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { dataGeneralSidebar, dataSupportSidebar, dataToolsSidebar } from './SidebarRoutes.data';
import { Button } from '../ui/button';
import { LuAnvil } from 'react-icons/lu';

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-2 flex flex-row gap-2 ">
          <LuAnvil size={25} className='text-[#79808a] mb-2 ' />
          <p className='text-[#79808a] mb-2 text-xl'>GOINVENTORY</p>
        </div>
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
              <SidebarItem key={item.label} item={item} />
            ))
          }
        </div>
        <Separator />
      </div>
      <div>
        <div className='text-center p-6'>
          <Button variant="outline" className='w-full text-[#79808a]'>
            Sign out
          </Button>
        </div>

      </div>
    </div>
  )
}
