"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { useState } from 'react';

export const Profile = () => {
  const [editing, setEditing] = useState(false);

  const toggleEdit = () => setEditing(!editing);

  return (
    <div className=" bg-white shadow-lg rounded-lg p-6  mt-6 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <Avatar className='size-20 '>
          <AvatarImage src="https://github.com/shadcn.png" className='rounded-2xl' />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div className='ml-5'>
          <h2 className="text-2xl font-semibold text-gray-800">Jhon Doe</h2>
          <p className="text-gray-500">Top Seller</p>
          <p className="text-gray-500">Arizona, United States</p>
        </div>
      </div>
      <div className="mt-6 p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
        <div className="mt-4 space-y-2 text-[#79808a]">
          <p><strong>First Name:</strong> Jhon</p>
          <p><strong>Last Name:</strong> Doe</p>
          <p><strong>Email:</strong> JhondDoe@gmail.com</p>
          <p><strong>Phone:</strong> +51 992992999</p>
        </div>
      </div>
      <div className="mt-6 p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <h3 className="text-xl font-semibold text-gray-800">Password reseat</h3>
        <div className="mt-4 space-y-2 text-[#79808a] rounded-2xl p-2  ">
          <p ><strong>Country:</strong> United States</p>
          <p><strong>City/State:</strong> Arizona, United States</p>
          <p><strong>Postal Code:</strong> ERT 2489</p>
          <p><strong>TAX ID:</strong> AS4568384</p>
        </div>
      </div>
      <div className="mt-6 p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <h3 className="text-xl font-semibold text-gray-800">Address</h3>
        <div className="mt-4 space-y-2 text-[#79808a] rounded-2xl p-2  ">
          <p ><strong>Country:</strong> United States</p>
          <p><strong>City/State:</strong> Arizona, United States</p>
          <p><strong>Postal Code:</strong> ERT 2489</p>
          <p><strong>TAX ID:</strong> AS4568384</p>
        </div>
      </div>
    </div>
  );
};
