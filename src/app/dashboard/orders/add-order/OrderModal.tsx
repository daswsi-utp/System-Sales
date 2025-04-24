'use client';
import { useState } from 'react';
import { FiX, FiPlus, FiMinus, FiShoppingCart, FiUser, FiSearch, FiCalendar, FiTrash2 } from 'react-icons/fi';

interface Product {
  id: number;
  category: string;
  name: string;
  pricePEN: number;
  stock: number;
}

interface OrderModalProps {
  onClose: () => void;
}

const OrderModal = ({ onClose }: OrderModalProps) => {
  const salesStaff = [
    { id: 1, name: "Panchiro manchiro" },
    { id: 2, name: "Ana Torres" },
    { id: 3, name: "Luis Ramírez" },
    { id: 4, name: "Sofía Gutierrez" },
  ];

  const pcComponents: Product[] = [
    { id: 1, category: "CPU", name: "Intel Core i3-12100F", pricePEN: 350, stock: 15 },
    { id: 2, category: "CPU", name: "Intel Core i5-13600K", pricePEN: 1040, stock: 8 },
    { id: 3, category: "GPU", name: "NVIDIA RTX 3060", pricePEN: 1200, stock: 5 },
    { id: 4, category: "RAM", name: "Corsair Vengeance 16GB", pricePEN: 180, stock: 12 },
    { id: 5, category: "CPU", name: "Intel Core i3-12100F", pricePEN: 350, stock: 15 },
    { id: 6, category: "CPU", name: "Intel Core i5-13600K", pricePEN: 1040, stock: 8 },
    { id: 7, category: "GPU", name: "NVIDIA RTX 3060", pricePEN: 1200, stock: 5 },
    { id: 8, category: "RAM", name: "Corsair Vengeance 16GB", pricePEN: 180, stock: 12 },
  ];

  const [selectedStaff, setSelectedStaff] = useState("");
  const [orderDate, setOrderDate] = useState(new Date().toISOString().split('T')[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<{product: Product, quantity: number}[]>([]);

  const filteredComponents = pcComponents.filter(component =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    component.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleQuantityChange = (product: Product, change: number) => {
    setSelectedProducts(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id);
      
      if (existingIndex >= 0) {
        const newQuantity = prev[existingIndex].quantity + change;
        
        if (newQuantity <= 0) {
          return prev.filter(item => item.product.id !== product.id);
        }
        
        if (newQuantity > product.stock) {
          return prev;
        }
        
        const updated = [...prev];
        updated[existingIndex] = { ...updated[existingIndex], quantity: newQuantity };
        return updated;
      } else if (change > 0) {
        return [...prev, { product, quantity: 1 }];
      }
      
      return prev;
    });
  };

  const removeProduct = (productId: number) => {
    setSelectedProducts(prev => prev.filter(item => item.product.id !== productId));
  };

  const clearOrder = () => {
    setSelectedStaff("");
    setOrderDate(new Date().toISOString().split('T')[0]);///
    setSelectedProducts([]);
    setSearchTerm("");
  };

  const totalPEN = selectedProducts.reduce((sum, item) => sum + (item.product.pricePEN * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] flex flex-col mx-4 border border-gray-200">
 
        <div className="flex justify-between items-center border-b p-4 bg-gray-50">
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-bold text-gray-800">NEW ORDER</h2>
            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
              New
            </span>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Cerrar modal"
          >
            <FiX size={24} className="text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">SALES PERSON *</label>
              <div className="relative">
                <FiUser className="absolute left-3 top-3 text-gray-400" />
                <select
                  value={selectedStaff}
                  onChange={(e) => setSelectedStaff(e.target.value)}
                  className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select sales person</option>
                  {salesStaff.map(staff => (
                    <option key={staff.id} value={staff.id}>{staff.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">DATE *</label>
              <div className="relative">
                <FiCalendar className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="date"
                  value={orderDate}
                  onChange={(e) => setOrderDate(e.target.value)}
                  className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-6 space-y-1">
            <label className="block text-sm font-medium text-gray-700">SEARCH </label>
            <div className="relative">
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or category..."
                className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-700 mb-2">AVAILABLE</h3>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price (PEN)</th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Shares</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredComponents.length > 0 ? (
                      filteredComponents.map(component => {
                        const selectedItem = selectedProducts.find(item => item.product.id === component.id);
                        const quantity = selectedItem ? selectedItem.quantity : 0;
                        
                        return (
                          <tr key={component.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="font-medium text-gray-900">{component.name}</div>
                              <div className="text-xs text-gray-500">{component.category}</div>
                            </td>
                            <td className={`px-4 py-3 text-center whitespace-nowrap ${
                              component.stock > 5 ? "text-green-600" : "text-yellow-600"
                            }`}>
                              {component.stock} {component.stock > 5 ? 'available' : 'out of stock'}
                            </td>
                            <td className="px-4 py-3 text-right whitespace-nowrap font-mono">S/ {component.pricePEN.toFixed(2)}</td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="flex justify-center">
                                <div className="flex items-center border border-gray-300 rounded-md">
                                  <button
                                    type="button"
                                    onClick={() => handleQuantityChange(component, -1)}
                                    className={`px-2 py-1 ${
                                      quantity > 0 ? "text-gray-600 hover:bg-gray-100" : "text-gray-300 cursor-not-allowed"
                                    }`}
                                    disabled={quantity <= 0}
                                  >
                                    <FiMinus size={14} />
                                  </button>
                                  <span className="px-2 text-sm w-6 text-center border-x border-gray-300">
                                    {quantity}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => handleQuantityChange(component, 1)}
                                    className={`px-2 py-1 ${
                                      quantity < component.stock ? "text-gray-600 hover:bg-gray-100" : "text-gray-300 cursor-not-allowed"
                                    }`}
                                    disabled={quantity >= component.stock}
                                  >
                                    <FiPlus size={14} />
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                          No products found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Order Summary */}
            <div className="md:w-80 flex-shrink-0">
              <h3 className="text-sm font-medium text-gray-700 mb-2">SUMMARY OF THE ORDER</h3>
              <div className="border border-gray-200 rounded-lg p-4 h-full flex flex-col">
                {selectedProducts.length > 0 ? (
                  <>
                    <div className="flex-grow overflow-y-auto max-h-64 space-y-3 mb-4">
                      {selectedProducts.map(item => (
                        <div key={item.product.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{item.product.name}</p>
                            <p className="text-xs text-gray-500">x{item.quantity} @ S/ {item.product.pricePEN.toFixed(2)}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="font-mono text-sm">S/ {(item.product.pricePEN * item.quantity).toFixed(2)}</span>
                            <button
                              onClick={() => removeProduct(item.product.id)}
                              className="text-red-500 hover:text-red-700 p-1"
                              aria-label="Eliminar producto"
                            >
                              <FiTrash2 size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-3 space-y-2">
                      <div className="flex justify-between font-medium">
                        <span>Subtotal:</span>
                        <span className="font-mono">S/ {totalPEN.toFixed(2)}</span>
                      </div>



                      <div className="flex justify-between text-lg font-bold border-t pt-2">
                        <span>Total:</span>
                        <span className="font-mono">S/ {(totalPEN * 1.00).toFixed(2)}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-grow flex flex-col items-center justify-center text-gray-500">
                    <FiShoppingCart size={32} className="mb-2" />
                    <p>No selected products</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t p-4 bg-gray-50 flex justify-between">
          <button
            type="button"
            onClick={clearOrder}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Clean all
          </button>
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                console.log({
                  staff: selectedStaff,
                  date: orderDate,
                  products: selectedProducts,
                  totalPEN: totalPEN * 1.00
                });
                onClose();
              }}
              className={`px-4 py-2 flex items-center gap-2 rounded-md transition-colors ${
                selectedProducts.length > 0 && selectedStaff
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={selectedProducts.length === 0 || !selectedStaff}
            >
              <FiShoppingCart />
              <span>Register order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;