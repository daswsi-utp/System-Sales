import { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Nuevo Pedido | Sistema de Pedidos',
};

export default function AddOrderPage() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Nuevo Pedido</h1>
        <Link href="/orders" className="text-gray-500 hover:text-gray-700">
          Cancelar
        </Link>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cliente
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Nombre del cliente"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Productos
          </label>
          <select
            multiple
            className="w-full p-2 border rounded-md"
          >
            <option>Producto 1 - C$5.00</option>
            <option>Producto 2 - C$10.00</option>
          </select>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Guardar Pedido
          </button>
        </div>
      </form>
    </div>
  );
}