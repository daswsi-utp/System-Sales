import Link from 'next/link';

export default function OrderButtons() {
  return (
    <Link
      href="/orders/add-order"
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
    >
      + Nuevo Pedido
    </Link>
  );
}