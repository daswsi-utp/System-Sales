import { cabinets } from "@/app/dashboard/inventory/data/cabinets";
import { graphics } from "@/app/dashboard/inventory/data/graphics";
import { memory } from "@/app/dashboard/inventory/data/memory";
import { motherboard } from "@/app/dashboard/inventory/data/motheboard";
import { peripherals } from "@/app/dashboard/inventory/data/peripherals";
import { power } from "@/app/dashboard/inventory/data/power";
import { processors } from "@/app/dashboard/inventory/data/processors";
import { storage } from "@/app/dashboard/inventory/data/storage";
import { CiEdit } from "react-icons/ci";
interface Product {
    id: number;
    name: string;
    description: string;
    stock: number;
    price: number;
  }

interface ProductPageProps {
  products: Product[];
}

export async function generateStaticParams() {
    return [
      { category: "cabinets" },
      { category: "graphics" },
      { category: "memory" },
      { category: "processors" },
      { category: "motherboard" },
      { category: "peripherals" },
      { category: "power" },
      { category: "storage" },
    ];
  }

  async function getData(category: string) {
    const dataMap: { [key: string]: Product[] } = {
      cabinets,
      graphics,
      memory,
      processors,
      motherboard,
      peripherals,
      power,
      storage,
    };
  
    return dataMap[category] || [];
  }

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const products = await getData(params.category);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className=" flex pb-4 bg-white dark:bg-gray-900 p-4  ">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative mt-1">
          <input
            type="text"
            id="table-search"
            className="block pt-2 ps-10 text-sm border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-[#79808a]"
            placeholder="Search for items"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
            </th>
            <th scope="col" className="px-6 py-3">Product name</th>
            <th scope="col" className="px-6 py-3">Description</th>
            <th scope="col" className="px-6 py-3">Stock</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">edit</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <input
                  id={`checkbox-table-search-${product.id}`}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor={`checkbox-table-search-${product.id}`} className="sr-only">checkbox</label>
              </td>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.name}
              </th>
              <td className="px-6 py-4">{product.description}</td>
              <td className="px-6 py-4">{product.stock}</td>
              <td className="px-6 py-4">${product.price}</td>
              <td className="px-6 py-4 cursor-pointer"><CiEdit /> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
