'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function OrderDetailPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('id');
  
  const order = {
    id: orderId || '00000',
    customer: 'Nathan Smith',
    date: '14 Jun 2023, 10:30 AM',
    items: [
      { name: 'Products 1Intel Core i3-12100F', price: 'S/ 700.00', quantity: 2 },
      { name: 'Corsair Vengeance 16GB', price: 'S/ 180.00', quantity: 1 }
    ],
    total: 'S/ 880.00',
    status: 'Pending'
  };

  if (!orderId) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h1 className="text-xl font-bold mb-4">Request not found</h1>
        <Link href="/orders" className="text-blue-600 hover:underline">
          Back to the list
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold">Order #{order.id}</h1>
          <p className="text-gray-500">{order.date}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          order.status === 'Completed' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {order.status}
        </span>
      </div>

      <div className="mb-8">
        <h2 className="font-medium text-lg mb-2">Sales Person</h2>
        <p>{order.customer}</p>
      </div>

      <div className="mb-8">
        <h2 className="font-medium text-lg mb-2">Products</h2>
        <div className="space-y-2">
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between border-b pb-2">
              <span>{item.name} (x{item.quantity})</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center border-t pt-4">
        <Link href="/orders" className="text-blue-600 hover:underline">
          ← Back to orders
        </Link>
        <p className="text-lg font-bold">Total: {order.total}</p>
      </div>
    </div>
  );
}