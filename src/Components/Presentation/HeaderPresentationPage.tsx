"use client"; 
import Link from "next/link";
import { AiOutlineMoon } from "react-icons/ai";
import { GoSun } from "react-icons/go";
import { LuAnvil } from "react-icons/lu";
import { heading, titleFont } from "@/config/fonts";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

export const HeaderPresentationPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white text-[#79808a] dark:bg-[#111722] dark:text-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
      <div className="flex justify-between items-center px-5 py-3 lg:px-5 xl:px-10 2xl:px-20">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-[#79808a] dark:text-white"
          >
            {isOpen ? <GrClose /> : <RxHamburgerMenu />}
          </button>
          
          <Link href="#" className="flex items-center gap-3 flex-shrink-0">
            <LuAnvil size={40} className="text-blue-600 dark:text-blue-400" />
            <h2 className={`${titleFont.className} font-bold text-black text-xl lg:text-2xl ml-2 dark:text-white`}>
              GoInventory
            </h2>
          </Link>
        </div>
        <nav className={`absolute top-full left-0 w-full bg-white dark:bg-gray-800 lg:static lg:flex lg:w-auto lg:bg-transparent lg:dark:bg-transparent transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible lg:opacity-100 lg:visible"
        }`}>
          <ul className="flex flex-col items-center py-4 lg:flex-row lg:py-0 lg:space-x-10">
            {['Home', 'Sales', 'Inventory', 'About'].map((item) => (
              <li key={item} className="w-full text-center lg:w-auto">
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={`${heading.className} block px-4 py-3 text-lg lg:text-xl text-gray-600 hover:text-primary dark:text-white dark:hover:text-blue-400`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botones y modo oscuro */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="./auth/login"
              className={`${heading.className} px-4 py-2 text-lg lg:text-xl rounded-lg border-2 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              Sign In
            </Link>
            <Link
              href="./auth/new-account"
              className={`${heading.className} px-4 py-2 text-lg lg:text-xl rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300`}
            >
              Sign Up
            </Link>
          </div>
          
          <button className="p-2 text-2xl text-[#79808a] dark:text-white">
            <AiOutlineMoon className="dark:hidden" />
            <GoSun className="hidden dark:block" />
          </button>
        </div>
      </div>

      {/* Menú móvil - Botones */}
      <div className={`lg:hidden px-5 pb-4 transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible h-0"
      }`}>
        <div className="flex flex-col gap-3">
          <Link
            href="./auth/login"
            className={`${heading.className} w-full py-2 text-center text-lg rounded-lg border-2 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700`}
          >
            Sign In
          </Link>
          <Link
            href="./auth/new-account"
            className={`${heading.className} w-full py-2 text-center text-lg rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300`}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};