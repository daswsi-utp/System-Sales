import { VscAccount } from "react-icons/vsc";

export interface User {
  id: number;
  name: string;
  email: string;
  position: string;
  status: "Online" | "Offline";
}
export const users: User[] = [
  {
    id: 1,
    name: "Neil Sims",
    email: "neil.sims@gmail.com",
    position: "sellers",
    status: "Online",  
  },
  {
    id: 2,
    name: "Bonnie Green",
    email: "bonnie@gmail.com",
    position: "sellers",
    status: "Offline",  
  },
  {
    id: 3,
    name: "Pepe Green",
    email: "Pepe@gmail.com",
    position: "sellers",
    status: "Offline",  
  },
  {
    id: 4,
    name: "Monkey D. Luffy",
    email: "Luffy@gmail.com",
    position: "sellers",
    status: "Online",  
  },
];

export const UserRow = ({ user }: { user: User }) => {
  const { name, email, position, status } = user;
  
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input 
            id={`checkbox-${user.id}`} 
            type="checkbox" 
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor={`checkbox-${user.id}`} className="sr-only">checkbox</label>
        </div>
      </td>
      <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
        <VscAccount className="w-10 h-10 text-gray-500 dark:text-gray-400 p-2 rounded-full bg-gray-100 dark:bg-gray-700" />
        <div className="ps-3">
          <div className="text-base font-semibold">{name}</div>
          <div className="font-normal text-gray-500">{email}</div>
        </div>  
      </th>
      <td className="px-6 py-4">{position}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className={`h-2.5 w-2.5 rounded-full me-2 ${
            status === "Online" ? "bg-green-500" : "bg-red-500"
          }`}></div> 
          {status}
        </div>
      </td>
      <td className="px-6 py-4">
        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          Edit user
        </button>
      </td>
    </tr>
  );
};