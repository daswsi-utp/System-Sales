import Link from "next/link";
import { AiOutlineMoon } from "react-icons/ai";
import { GoSun } from "react-icons/go";
import { LuAnvil } from "react-icons/lu";
import { heading, titleFont } from "@/config/fonts";
export const HeaderPresentationPage = () => {
  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-transparent text-[#79808a] dark:bg-[#111722] dark:text-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <div className="flex w-full flex-wrap px-5 lg:flex-nowrap lg:items-center lg:px-5 xl:px-10 2xl:px-20">
                    <div className="relative z-99 max-w-[250px] lg:w-full xl:max-w-[350px]">
                        <Link href="#" className="inline-flex items-center gap-2 p-2">
                            <LuAnvil size={50} />
                            <h2 className={`${titleFont.className} font-bold text-black text-2xl ml-2` }>GoInventory</h2>
                        </Link>
                    </div>
                    <div className=" fixed top-0 left-0 z-50 h-screen w-full justify-center bg-white p-5 lg:visible lg:static lg:flex lg:h-auto lg:justify-start lg:bg-transparent lg:p-0 lg:opacity-100 dark:bg-gray-800 dark:lg:bg-transparent">
                        <div className="w-full self-center ">
                            <nav >
                                <ul className="flex flex-col items-center justify-center space-y-5 text-center lg:flex-row lg:justify-start lg:space-y-0 lg:space-x-10">
                                    <li>
                                        <Link href="#home" className={`${heading.className, "sans-serif"} menu-scroll text-gray-600 hover:text-primary inline-flex items-center justify-center text-xl dark:text-white dark:hover:text-blue-400`}>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#sales" className={`${heading.className, "sans-serif"} menu-scroll text-gray-600 hover:text-primary inline-flex items-center justify-center text-xl dark:text-white dark:hover:text-blue-400`}>
                                            Sales
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#inventory" className={`${heading.className, "sans-serif"} menu-scroll text-gray-600 hover:text-primary inline-flex items-center justify-center text-xl dark:text-white dark:hover:text-blue-400`}>
                                            Inventory
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#about" className={`${heading.className, "sans-serif"} menu-scroll text-gray-600 hover:text-primary inline-flex items-center justify-center text-xl dark:text-white dark:hover:text-blue-400`}>
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                    <div className="absolute bottom-0 left-0 flex w-full items-center justify-between space-x-5 self-end p-5 lg:static lg:w-auto lg:self-center lg:p-0">
                        <Link href="./auth/login" className={ `${heading.className, "sans-serif"} text-[#79808a] dark:text-white hover:bg-primary/90 w-full px-6 py-3 text-center whitespace-nowrap text-xl rounded-xl border-2 border-white lg:w-auto dark:bg-[#111722] dark:border-[#111722] transition duration-300 ease-in-out`}>Sign In
                        </Link>
                        <div className="flex items-center space-x-3 gap-2">
                            <Link href="./auth/new-account" className={` ${heading.className, "sans-serif"} text-[#79808a] dark:text-white hover:bg-primary/90 w-full px-6 py-3 text-center whitespace-nowrap text-xl rounded-xl border-2 border-white lg:w-auto dark:bg-[#111722] dark:border-[#111722] transition duration-300 ease-in-out`}>Sign Up</Link>
                            <div className="text-white">
                                <AiOutlineMoon size={30} className="dark:hidden text-[#79808a] text-3xl" />
                                <GoSun size={24} className="hidden dark:block text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </header> 
  )
}
