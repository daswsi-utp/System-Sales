'use client';
import Link from 'next/link';
import OrderForm from './components/OrderForm';
import OrderButtons from './components/OrderButtons';
import { useState, useEffect } from 'react';
import * as GateWayAPI from '../../../service/gatewayApi';

const statusConfig: Record<GateWayAPI.OrderStatus, {
  bg: string;
  text: string;
  dot: string;
  activeBg?: string;
  activeText?: string;
}> = {
  [GateWayAPI.OrderStatus.Completed]: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    dot: 'bg-green-500',
    activeBg: 'bg-green-600',
    activeText: 'text-white',
  },
  [GateWayAPI.OrderStatus.Pending]: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    dot: 'bg-yellow-500',
    activeBg: 'bg-yellow-600',
    activeText: 'text-white',
  },
  [GateWayAPI.OrderStatus.Cancelled]: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    dot: 'bg-red-500',
    activeBg: 'bg-red-600',
    activeText: 'text-white',
  },
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<GateWayAPI.OrderResponse[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await GateWayAPI.getAllOrders();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Order</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Warehouse</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => {
                  const statusStyle = statusConfig[order.status as GateWayAPI.OrderStatus] || statusConfig[GateWayAPI.OrderStatus.Pending];
                  const userName = order.registry?.user ?
                    `${order.registry.user.name} ${order.registry.user.lastName}` :
                    'N/A';

                  return (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link
                          href={`/dashboard/orders/${order.id}`} // Asegúrate de que esto sea correcto
                          className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                        >
                          {order.id} {/* Aquí se debe mostrar el ID de la orden */}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {userName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.warehouse?.nameWarehouse ?? 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.provider?.nameProvider ?? 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.registry?.registrationDate
                          ? new Date(order.registry.registrationDate).toLocaleDateString()
                          : 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        S/ {order.sum?.toFixed(2) ?? '0.00'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`flex items-center ${statusStyle.bg} ${statusStyle.text} px-3 py-1 rounded-full text-xs font-medium`}>
                          <span className={`w-2 h-2 rounded-full ${statusStyle.dot} mr-2`}></span>
                          {GateWayAPI.getOrderStatusName(order.status)}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <nav className="mt-6 flex items-center justify-between" aria-label="Pagination">
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Displaying <span className="font-medium">1</span> to{' '}
              <span className="font-medium">{orders.length}</span> of{' '}
              <span className="font-medium">{orders.length}</span> orders
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




/*'use client';
import Link from 'next/link';
import OrderForm from './components/OrderForm';
import OrderButtons from './components/OrderButtons';
import { useState, useEffect } from 'react';
import { Order, getOrders } from '@/lib/orders';
import * as GateWayAPI from '../../../service/gatewayApi';
const statusStyles = {
  Completed: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    dot: 'bg-green-500',
  },
  Pending: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    dot: 'bg-yellow-500',
  },
  Cancelled: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    dot: 'bg-red-500',
  },
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(getOrders());
  }, []);

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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Order</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Warehouse</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => {
                  const statusStyle = statusStyles[order.status];
                  return (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link
                          href={`/dashboard/orders/${order.id}`}
                          className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                        >
                          #{order.id}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.registry?.user?.name ?? 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.warehouse?.nameWarehouse?? 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.provider?.nameProvider ?? 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.registry?.registrationDate
                          ? new Date(order.registry.registrationDate).toLocaleDateString()
                          : 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        S/ {order.sum.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`flex items-center ${statusStyle.bg} ${statusStyle.text} px-3 py-1 rounded-full text-xs font-medium`}>
                          <span className={`w-2 h-2 rounded-full ${statusStyle.dot} mr-2`}></span>
                          {order.status}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <nav className="mt-6 flex items-center justify-between" aria-label="Pagination">
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Displaying <span className="font-medium">1</span> to{' '}
              <span className="font-medium">{orders.length}</span> of{' '}
              <span className="font-medium">{orders.length}</span> orders
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
*/