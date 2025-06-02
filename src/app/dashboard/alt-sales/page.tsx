'use client';
import { useEffect, useState } from 'react';
import { FiX, FiPlus, FiMinus, FiShoppingCart, FiUser, FiSearch, FiCalendar, FiTrash2 } from 'react-icons/fi';
import * as GateWayAPI from '../../../service/gatewayApi';


interface OrderModalProps {
  onClose: () => void;
}

const OrderModal = ({ onClose }: OrderModalProps) => {


  const categories : GateWayAPI.Category[] = [
    {id: 1, name: 'Processor'},
    {id: 2, name: 'Video Graphics'},
    {id: 3, name: 'Peripherics'},
    {id: 4, name: 'Motherboards'},
    {id: 5, name: 'RAM memory'},
    {id: 6, name: 'Store'},
    {id: 7, name: 'Power Suppliers'},
    {id: 8, name: 'Cabinets'},
  ];
    
  const statusStyles = {
    'In Stock': 'bg-green-100 text-green-800',
    'Low Stock': 'bg-yellow-100 text-yellow-800',
    'Out of Stock': 'bg-red-100 text-red-800',
  };
  
  //THIS IS STATIC VALUE USED FOR TESTING. SALESMAN IDS WILL BE DYNAMIC BUT THEY WILL BE IMPLEMENTED LATER
  const userId = 1;  

  //const [vendors, setVendors] = useState<GateWayAPI.User[]>([]);
  const [saleDate, setSaleDate] = useState(new Date().toISOString().split('T')[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchBrand, setSearchBrand] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<{product: GateWayAPI.Product, quantity: number}[]>([]);
  const [products, setProducts] = useState<GateWayAPI.Product[]>([]);
  //const salesStaff = vendors;

  useEffect(()=>{
    const fetchProducts = async() =>{
      try{
        const data = await GateWayAPI.getAllProducts();
        setProducts(data);
      }catch(error){
        console.error("Failed to load product", error);
      }
    };
    fetchProducts();
  },[]);

  const filteredComponents = products;
  /*useEffect(()=>{
    const fetchVendors = async() => {
      try{
        const data = await GateWayAPI.getAllUsers();
        setVendors(data);
      }catch(error){
        console.error("Failed to load vendors", error);
      };
    }
    fetchVendors();
  }, []);*/
  /*const filteredComponents = pcComponents.filter(component =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    component.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  */
 const handleSavingSale = async () =>{
  const registryData: GateWayAPI.RegistryRequest = {
    type: "Sale",
    registrationDate: new Date(saleDate).toISOString(),
    user: {
      idUser: userId,
    },
    templateUrl: "test.pdf"
  };
  const saleData = {
    sum: totalPEN,
    tax: taxPEN,
    products: selectedProducts.map(items => ({
      productId: items.product.idProduct,
      quantity: items.quantity
    })),
    grossIncome: subtotalPEN
  };
  console.log("TRIED");
  try{
    const res = await GateWayAPI.saveSaleWithRegistry(registryData, saleData);
    console.log("Registered sale: ", res);
    clearOrder();
  } catch(error){
    console.error("Failed sale registration", error);
  }
 };

  useEffect(()=>{
    const fetcthFilteredProducts = async() => {
      try{
        const data = await GateWayAPI.compoundSearch(searchTerm, searchCategory, searchBrand);
        setProducts(data);
      } catch(error){
        console.error("Failed product data retrieval", error);
      }
    };
    fetcthFilteredProducts();
  }, [searchTerm, searchCategory, searchBrand]);


  const handleQuantityChange = (product: GateWayAPI.Product, change: number) => {
    setSelectedProducts(prev => {
      const existingIndex = prev.findIndex(item => item.product.idProduct === product.idProduct);
      
      if (existingIndex >= 0) {
        const newQuantity = prev[existingIndex].quantity + change;
        
        if (newQuantity <= 0) {
          return prev.filter(item => item.product.idProduct !== product.idProduct);
        }
        
        if (newQuantity > product.quantityProduct) {
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
    setSelectedProducts(prev => prev.filter(item => item.product.idProduct !== productId));
  };

  const clearOrder = () => {
    setSaleDate(new Date().toISOString().split('T')[0]);///
    setSelectedProducts([]);
    setSearchTerm("");
    setSearchCategory("");
  };

  const subtotalPEN = selectedProducts.reduce((sum, item) => sum + (item.product.priceProduct * item.quantity), 0);
  const taxPEN = subtotalPEN * 0.17;
  const totalPEN = subtotalPEN + taxPEN;


  return (
      <div className="min-h-screen flex flex-col p-6">
        <div className="flex justify-between items-center border-b p-4 bg-gray-50">
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-bold text-gray-800">INVENTORY</h2>
          </div>
        </div>

        <div className="p-6 overflow-y-auto flex-grow">
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="mb-6 space-y-1 w-full md:w-1/3">
              <label className="block text-sm font-medium text-gray-700">SEARCH</label>
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
            <div className="mb-6 space-y-1 w-full md:w-1/3">
              <label className="block text-sm font-medium text-gray-700">BRAND</label>
              <div className="relative">
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by brand's name"
                  className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchBrand}
                  onChange={(e) => setSearchBrand(e.target.value)}
                />
              </div>
            </div>
          <div className="mb-6 space-y-1 w-full md:w-1/3">
            <label className="block text-sm font-medium text-gray-700">CATEGORY</label>
            <div className="relative">
              <FiUser className="absolute left-3 top-3 text-gray-400" />
              <select
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>
          </div>
          
        
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-700 mb-2">INVENTORY</h3>
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
                        const selectedItem = selectedProducts.find(item => item.product.idProduct === component.idProduct);
                        const quantity = selectedItem ? selectedItem.quantity : 0;
                        
                        return (
                          <tr key={component.idProduct} className="hover:bg-gray-50">
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="font-medium text-gray-900">{component.nameProduct}</div>
                              <div className="text-xs text-gray-500">{component.category.nameCategory}</div>
                            </td>
                            <td className={`px-4 py-3 text-center whitespace-nowrap ${
                              component.quantityProduct > 5 ? "text-green-600" : "text-yellow-600"
                            }`}>
                              {component.quantityProduct} {component.quantityProduct > 5 ? 'available' : 'out of stock'}
                            </td>
                            <td className="px-4 py-3 text-right whitespace-nowrap font-mono">S/ {component.priceProduct.toFixed(2)}</td>
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
                                      quantity < component.quantityProduct ? "text-gray-600 hover:bg-gray-100" : "text-gray-300 cursor-not-allowed"
                                    }`}
                                    disabled={quantity >= component.quantityProduct}
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
                        <div key={item.product.idProduct} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{item.product.nameProduct}</p>
                            <p className="text-xs text-gray-500">x{item.quantity} @ S/ {item.product.priceProduct.toFixed(2)}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="font-mono text-sm">S/ {(item.product.priceProduct * item.quantity).toFixed(2)}</span>
                            <button
                              onClick={() => removeProduct(item.product.idProduct)}
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
                        <span className="font-mono">S/ {subtotalPEN.toFixed(2)}</span>
                      </div>

                      <div className='flex justify-between font-medium'>
                        <span>Tax (IGV):</span>
                        <span className='font-mono'>S/ {(taxPEN * 1.00).toFixed(2)}</span> 
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
              onClick={() => {handleSavingSale()}}
              className={`px-4 py-2 flex items-center gap-2 rounded-md transition-colors ${
                selectedProducts.length > 0
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={selectedProducts.length === 0}
            >
              <FiShoppingCart />
              <span>Register order</span>
            </button>
          </div>
        </div>
      </div>
  );
};

export default OrderModal;
