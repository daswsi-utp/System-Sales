'use client';

import { useState } from 'react';
import OrderModal from './OrderModal';

export default function OrderButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        + New Order
      </button>
      
      {isModalOpen && <OrderModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}