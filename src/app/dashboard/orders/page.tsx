
import { Metadata } from 'next';
import Link from 'next/link';
import OrderForm from './components/OrderForm';
import OrderButtons from './components/OrderButtons';

export const metadata: Metadata = {
  title: 'Order | Management',
  description: 'View and manage all your business orders',
};

const orders = [
  { id: '00001', customer: 'Nathan Smith', total: 'S/ 1400.00', status: 'Pending' },
  { id: '00002', customer: 'Stephanie Anderson', total: 'S/ 1400.00', status: 'Completed' },
  { id: '00003', customer: 'Rimon Hammer', total: 'S/ 1400.00', status: 'Cancelled' },
  { id: '00004', customer: 'Stiven Cruz', total: 'S/ 1400.00', status: 'Completed' },
  { id: '00005', customer: 'Nicolas Torres', total: 'S/ 1400.00', status: 'Pending' },
  { id: '00006', customer: 'Jorge Perez', total: 'S/ 1400.00', status: 'Completed' },
  { id: '00007', customer: 'Pedro Castillo', total: 'S/ 1400.00', status: 'Cancelled' },
  { id: '00008', customer: 'Alan Romeo', total: 'S/ 1400.00', status: 'Completed' },
  { id: '00009', customer: 'Nahira Mamani', total: 'S/ 1400.00', status: 'Pending' },
  { id: '00010', customer: 'Pedro Juarez', total: 'S/ 1400.00', status: 'Cancelled' },
  { id: '00011', customer: 'Itaro Quilco', total: 'S/ 1400.00', status: 'Pending' },
  { id: '00012', customer: 'Sebastian Flores', total: 'S/ 1400.00', status: 'Completed' },
];

const statusStyles = {
  Completed: 'bg-green-100 text-green-800',
  Pending: 'bg-yellow-100 text-yellow-800',
  Cancelled: 'bg-red-100 text-red-800',
};

export default function OrdersPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">

        <div className="sm:flex sm:items-center sm:justify-between mb-8">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Order Management</h1>
            <p className="mt-1 text-sm text-gray-500">View and manage all your business orders</p>
          </div>
          <OrderButtons />
        </div>

        <OrderForm />

        <div className="mt-8 bg-white shadow overflow-hidden rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID Order
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Seller
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={`${order.id}-${order.customer}`} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link
                        href={`/orders/id?id=${order.id}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                      >
                        #{order.id}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-medium">{order.total}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[order.status as keyof typeof statusStyles]}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <nav className="mt-6 flex items-center justify-between" aria-label="Pagination">
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Displaying <span className="font-medium">1</span> a <span className="font-medium">12</span> de <span className="font-medium">12</span> orders
            </p>
          </div>
          <div className="flex-1 flex justify-between sm:justify-end">
            <button
              disabled
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 opacity-50 cursor-not-allowed"
            >
              Previous
            </button>
            <button
              disabled
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 opacity-50 cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}