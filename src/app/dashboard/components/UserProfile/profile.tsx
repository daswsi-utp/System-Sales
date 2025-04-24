import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { PencilIcon } from 'lucide-react';
export const Profile = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
      {/* Profile Header */}
      <div className="flex items-center p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <Avatar className='size-20'>
          <AvatarImage src="https://github.com/shadcn.png" className='rounded-2xl' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='ml-5'>
          <h2 className="text-2xl font-semibold text-gray-800">Musharof Chowdhury</h2>
          <p className="text-gray-500">Team Manager</p>
          <p className="text-gray-500">Arizona, United States</p>
        </div>
        <div className="ml-auto flex gap-x-3">
          <button className="text-blue-500 hover:text-blue-700">
            <PencilIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="mt-6 p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
          <button className="text-blue-500 hover:text-blue-700">
            <PencilIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-4 space-y-2 text-[#79808a]">
          <p><strong>First Name:</strong> Chowdhury</p>
          <p><strong>Last Name:</strong> Musharof</p>
          <p><strong>Email address:</strong> randomuser@pimjo.com</p>
          <p><strong>Phone:</strong> +09 363 398 46</p>
          <p><strong>Bio:</strong> Team Manager</p>
        </div>
      </div>

      {/* Address Section */}
      <div className="mt-6 p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">Address</h3>
          <button className="text-blue-500 hover:text-blue-700">
            <PencilIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-4 space-y-2 text-[#79808a] rounded-2xl p-2">
          <p><strong>Country:</strong> United States</p>
          <p><strong>City/State:</strong> Arizona, United States</p>
          <p><strong>Postal Code:</strong> ERT 2489</p>
          <p><strong>TAX ID:</strong> AS4568384</p>
        </div>
      </div>

      <div className="mt-6 p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">Password Reset</h3>
          <button className="text-blue-500 hover:text-blue-700">
            <PencilIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-4 space-y-2 text-[#79808a] rounded-2xl p-2">
          <p><strong>Current Password:</strong> ********</p>
          <p><strong>New Password:</strong> ********</p>
        </div>
      </div>
    </div>
  );
};
