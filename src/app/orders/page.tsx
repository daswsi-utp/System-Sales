import { Metadata } from 'next';
import Link from 'next/link';
import OrderForm from './components/OrderForm';
import OrderButtons from './components/OrderButtons';

export const metadata: Metadata = {
  title: 'Todos los Pedidos | Sistema de Pedidos',
};

// Datos de ejemplo
const orders = [
  { id: '10048', customer: 'Nathan Smith', total: 'C$12.08', status: 'Pendiente' },
  { id: '10048', customer: 'Nathan Smith', total: 'C$12.08', status: 'Pendiente' },
  { id: '10047', customer: 'Stephanie Anderson', total: 'C$11.40', status: 'Completado' },
  { id: '10048', customer: 'Nathan Smith', total: 'C$12.08', status: 'Cancelado' },
];

export default function OrdersPage() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Todos los Pedidos</h1>
        <OrderButtons />
      </div>

      <OrderForm />

      <div className="bg-white rounded-lg shadow overflow-hidden mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
              <th className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
              <th className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link 
                    href={`/orders/id?id=${order.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    #{order.id}
                  </Link>
                </td>
                <td className="px-10 py-4 whitespace-nowrap">{order.customer}</td>
                <td className="px-10 py-4 whitespace-nowrap">{order.total}</td>
                <td className="px-10 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    order.status === 'Completado' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                      
                  }`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}