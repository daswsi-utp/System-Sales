
import { Metadata } from 'next';
import Link from 'next/link';
import InventoryForm from './src/components/Form';
import InventoryButtons from './src/components/Buttons';

export const metadata: Metadata = {
  title: 'Inventory | Management',
  description: 'View and manage all your inventory items',
};

const inventoryItems = [
  { id: 'INV-0001', name: 'Laptop HP ProBook', category: 'Electronics', stock: 15, price: 'S/ 3500.00', status: 'In Stock' },
  { id: 'INV-0002', name: 'Wireless Mouse', category: 'Accessories', stock: 42, price: 'S/ 85.00', status: 'In Stock' },
  { id: 'INV-0003', name: 'Mechanical Keyboard', category: 'Accessories', stock: 0, price: 'S/ 220.00', status: 'Out of Stock' },
  { id: 'INV-0004', name: 'Monitor 24"', category: 'Electronics', stock: 8, price: 'S/ 850.00', status: 'Low Stock' },
  { id: 'INV-0005', name: 'USB-C Cable', category: 'Accessories', stock: 63, price: 'S/ 35.00', status: 'In Stock' },
  { id: 'INV-0006', name: 'External SSD 1TB', category: 'Storage', stock: 12, price: 'S/ 450.00', status: 'In Stock' },
  { id: 'INV-0007', name: 'Webcam HD', category: 'Electronics', stock: 0, price: 'S/ 180.00', status: 'Out of Stock' },
  { id: 'INV-0008', name: 'Noise Cancelling Headphones', category: 'Audio', stock: 5, price: 'S/ 650.00', status: 'Low Stock' },
  { id: 'INV-0009', name: 'Laptop Stand', category: 'Accessories', stock: 22, price: 'S/ 120.00', status: 'In Stock' },
  { id: 'INV-0010', name: 'Bluetooth Speaker', category: 'Audio', stock: 7, price: 'S/ 280.00', status: 'Low Stock' },
  { id: 'INV-0011', name: 'Mouse Pad', category: 'Accessories', stock: 0, price: 'S/ 25.00', status: 'Out of Stock' },
  { id: 'INV-0012', name: 'HDMI Cable', category: 'Accessories', stock: 38, price: 'S/ 40.00', status: 'In Stock' },
];

const statusStyles = {
  'In Stock': 'bg-green-100 text-green-800',
  'Low Stock': 'bg-yellow-100 text-yellow-800',
  'Out of Stock': 'bg-red-100 text-red-800',
};

export default function InventoryPage({
  searchParams,
}: {
  searchParams: { search?: string }
}) {
  const searchTerm = searchParams?.search?.toLowerCase() || '';

  const filteredItems = inventoryItems.filter(item =>
    item.id.toLowerCase().includes(searchTerm) ||
    item.name.toLowerCase().includes(searchTerm) ||
    item.category.toLowerCase().includes(searchTerm) ||
    item.status.toLowerCase().includes(searchTerm) ||
    item.price.toLowerCase().includes(searchTerm) ||
    item.stock.toString().includes(searchTerm)
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">

        <div className="sm:flex sm:items-center sm:justify-between mb-8">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Inventory Management</h1>
            <p className="mt-1 text-sm text-gray-500">View and manage all your inventory items</p>
          </div>
          <InventoryButtons />
        </div>

        <InventoryForm />     

        <div className="mt-8 bg-white shadow overflow-hidden rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredItems.map((item) => (
                  <tr key={`${item.id}-${item.name}`} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link
                        href={`/dashboard/inventory/${item.id}`} 
                        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                      >
                        {item.id}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-medium">{item.stock}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-medium">{item.price}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[item.status as keyof typeof statusStyles]}`}>
                        {item.status}
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
              Displaying <span className="font-medium">1</span> to <span className="font-medium">{filteredItems.length}</span> of <span className="font-medium">{inventoryItems.length}</span> items
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