'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function OrderDetailPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('id');

  // Datos de ejemplo
  const order = {
    id: orderId || '00000',
    customer: 'Nathan Smith',
    date: '14 Jun 2023, 10:30 AM',
    items: [
      { name: 'Producto 1', price: 'C$5.00', quantity: 2 },
      { name: 'Producto 2', price: 'C$2.08', quantity: 1 }
    ],
    total: 'C$12.08',
    status: 'Pendiente'
  };

  if (!orderId) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h1 className="text-xl font-bold mb-4">Pedido no encontrado</h1>
        <Link href="/orders" className="text-blue-600 hover:underline">
          Volver al listado
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold">Pedido #{order.id}</h1>
          <p className="text-gray-500">{order.date}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          order.status === 'Completado' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {order.status}
        </span>
      </div>

      <div className="mb-8">
        <h2 className="font-medium text-lg mb-2">Cliente</h2>
        <p>{order.customer}</p>
      </div>

      <div className="mb-8">
        <h2 className="font-medium text-lg mb-2">Productos</h2>
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
          ← Volver a pedidos
        </Link>
        <p className="text-lg font-bold">Total: {order.total}</p>
      </div>
    </div>
  );
}