'use client'
import { useState } from 'react';
import { UserModal } from "@/app/dashboard/components/TableSellers/UserModal";
import { UserTable } from './TableSellers';
import { User } from './UserTable';

export const TableTotal = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className='rounded-lg overflow-hidden shadow-md'>
      <UserTable onEditClick={handleEditClick} />
      {selectedUser && (
        <UserModal user={selectedUser} isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  );  
};
