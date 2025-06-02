'use client';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import * as GateWayAPI from '@/service/gatewayApi';

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


export default function OrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.id as string;

  const [order, setOrder] = useState<GateWayAPI.OrderResponse | null>(null); // Usa el tipo de GateWayAPI

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const fetchedOrder = await GateWayAPI.getOrdersById(orderId); // Llama a la API para obtener la orden por ID
        setOrder(fetchedOrder);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };
    fetchOrder();
  }, [orderId]);

  const handleStatusChange = async (newStatus: number) => { // Cambia a number
    if (!order) return;
    try {
      await GateWayAPI.updateOrderStatus(orderId, newStatus); // Llama a la API para actualizar el estado
      setOrder({ ...order, status: newStatus }); // Actualiza el estado en el frontend
    } catch (error) {
      console.error("Error updating order status:", error);
    }
    router.refresh(); // Refresca la página para obtener los datos actualizados
  };

  if (!order) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h1 className="text-xl font-bold mb-4">Order not found</h1>
        <Link href="/dashboard/orders" className="text-blue-600 hover:underline">
          Back to the list
        </Link>
      </div>
    );
  }

  const currentStatusConfig = statusConfig[order.status as GateWayAPI.OrderStatus];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold">Order #{order.id}</h1>
          <p className="text-gray-500">{new Date(order.registry.registrationDate).toLocaleString()}</p>
        </div>
        <div className="flex items-center">
          <div className={`flex items-center ${currentStatusConfig.bg} ${currentStatusConfig.text} px-3 py-1 rounded-full text-sm font-medium mr-4`}>
            <span className={`w-2 h-2 rounded-full ${currentStatusConfig.dot} mr-2`}></span>
            {GateWayAPI.getOrderStatusName(order.status)}
          </div>
          <div className="flex space-x-2">
            {Object.entries(statusConfig).map(([key, config]) => { // Itera sobre el objeto de configuración
              const isActive = order.status === Number(key); // Compara con el número
              return (
                <button
                  key={key}
                  onClick={() => handleStatusChange(Number(key))} // Llama a la función con el número
                  className={`px-3 py-1 rounded-full text-sm ${isActive
                    ? `${config.activeBg} ${config.activeText}`
                    : `${config.bg} ${config.text} hover:opacity-80`
                    }`}
                >
                  {GateWayAPI.getOrderStatusName(order.status)}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-medium text-lg mb-2">Warehouse</h2>
        <p>{order.warehouse.nameWarehouse} - {order.warehouse.address}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-medium text-lg mb-2">Provider</h2>
        <p>{order.provider.nameProvider} (RUC: {order.provider.ruc})</p>
      </div>

      <div className="mb-6">
        <h2 className="font-medium text-lg mb-2">Registered By</h2>
        <p>{order.registry.user.name} {order.registry.user.lastName} - {order.registry.user.email}</p>
      </div>

      <div className="mb-8">
        <h2 className="font-medium text-lg mb-2">Products</h2>
        <div className="space-y-2">
          {order.relatedProducts.map((item, index) => (
            <div key={index} className="flex justify-between border-b pb-2">
              <span>{item.productName} (x{item.quantity})</span>
              <span>S/ {item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center border-t pt-4">
        <Link href="/dashboard/orders" className="text-blue-600 hover:underline">
          ← Back to orders
        </Link>
        <p className="text-lg font-bold">Total: S/ {order.sum.toFixed(2)}</p>
      </div>
    </div>
  );
}






/*
'use client';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Order, OrderStatus, getOrders, updateOrderStatus } from '@/lib/orders';

const statusConfig = {
  Completed: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    activeBg: 'bg-green-600',
    activeText: 'text-white',
    dot: 'bg-green-500',
  },
  Pending: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    activeBg: 'bg-yellow-600',
    activeText: 'text-white',
    dot: 'bg-yellow-500',
  },
  Cancelled: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    activeBg: 'bg-red-600',
    activeText: 'text-white',
    dot: 'bg-red-500',
  },
};

export default function OrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.id as string;

  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const orders = getOrders();
    const foundOrder = orders.find(order => order.id === orderId);
    setOrder(foundOrder || null);
  }, [orderId]);

  const handleStatusChange = (newStatus: OrderStatus) => {
    if (!order) return;
    updateOrderStatus(orderId, newStatus);
    setOrder({ ...order, status: newStatus });
    router.refresh();
  };

  if (!order) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h1 className="text-xl font-bold mb-4">Order not found</h1>
        <Link href="/dashboard/orders" className="text-blue-600 hover:underline">
          Back to the list
        </Link>
      </div>
    );
  }

  const currentStatusConfig = statusConfig[order.status];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold">Order #{order.id}</h1>
          <p className="text-gray-500">{order.date}</p>
        </div>
        <div className="flex items-center">
          <div className={`flex items-center ${currentStatusConfig.bg} ${currentStatusConfig.text} px-3 py-1 rounded-full text-sm font-medium mr-4`}>
            <span className={`w-2 h-2 rounded-full ${currentStatusConfig.dot} mr-2`}></span>
            {order.status}
          </div>
          <div className="flex space-x-2">
            {(['Completed', 'Pending', 'Cancelled'] as OrderStatus[]).map((status) => {
              const config = statusConfig[status];
              const isActive = order.status === status;
              return (
                <button
                  key={status}
                  onClick={() => handleStatusChange(status)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    isActive 
                      ? `${config.activeBg} ${config.activeText}`
                      : `${config.bg} ${config.text} hover:opacity-80`
                  }`}
                >
                  {status}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="font-medium text-lg mb-2">Customer</h2>
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
        <Link href="/dashboard/orders" className="text-blue-600 hover:underline">
          ← Back to orders
        </Link>
        <p className="text-lg font-bold">Total: {order.total}</p>
      </div>
    </div>
  );
}

*/