
import { CardNbasPresentationItem } from "@/Components/ui/CardNbasPresentation1";
import { heading, titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMoon } from "react-icons/ai";
import { GoSun } from "react-icons/go";
import { LuAnvil } from "react-icons/lu";


export default function Home() {
    return (
        <>
        <header className="sticky top-0 left-0 w-full z-50 bg-gray-800 text-white">
            <div className="flex w-full flex-wrap px-5 lg:flex-nowrap lg:items-center lg:px-5 xl:px-10 2xl:px-20">
                <div className="relative z-99 max-w-[250px] lg:w-full xl:max-w-[350px]">
                    <Link href="#" className="inline-flex items-center gap-2 p-2">
                        <LuAnvil size={70} />
                        <h2 className={`${titleFont.className} font-bold text-black text-3xl ml-2 `}>GoInventory</h2>
                    </Link>
                </div>
                <div className=" fixed top-0 left-0 z-50 h-screen w-full justify-center bg-white p-5 lg:visible lg:static lg:flex lg:h-auto lg:justify-start lg:bg-transparent lg:p-0 lg:opacity-100 dark:bg-gray-800 dark:lg:bg-transparent">
                    <div className="w-full self-center ">
                        <nav >
                            <ul className="flex flex-col items-center justify-center space-y-5 text-center lg:flex-row lg:justify-start lg:space-y-0 lg:space-x-10">
                                <li>
                                    <Link href="#home" className={`${heading.className , "sans-serif"} menu-scroll text-gray-600 hover:text-primary inline-flex items-center justify-center text-2xl dark:text-white dark:hover:text-blue-400`}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                <Link href="#home" className={`${heading.className , "sans-serif"} menu-scroll text-gray-600 hover:text-primary inline-flex items-center justify-center text-2xl dark:text-white dark:hover:text-blue-400`}>
                                        Sales
                                    </Link>
                                </li>
                                <li>
                                <Link href="#home" className={`${heading.className , "sans-serif"} menu-scroll text-gray-600 hover:text-primary inline-flex items-center justify-center text-2xl dark:text-white dark:hover:text-blue-400`}>
                                        Inventory
                                    </Link>
                                </li>
                                <li>
                                <Link href="#home" className={`${heading.className , "sans-serif"} menu-scroll text-gray-600 hover:text-primary inline-flex items-center justify-center text-2xl dark:text-white dark:hover:text-blue-400`}>
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
                <div className="absolute bottom-0 left-0 flex w-full items-center justify-between space-x-5 self-end p-5 lg:static lg:w-auto lg:self-center lg:p-0">
                    <Link href="#" className={` ${heading.className , "sans-serif"} hover:bg-primary/90 w-full rounded-sm px-6 py-3 text-center whitespace-nowrap text-2xl text-white lg:w-auto"`}>Sign In
                    </Link>
                    <div className="flex items-center space-x-3 gap-2">
                        <Link href="#" className={` ${heading.className , "sans-serif"} hover:bg-primary/90 w-full rounded-sm px-6 py-3 text-center whitespace-nowrap text-2xl text-white lg:w-auto"`}>Sign Up</Link>
                        <div className="text-white">
                            <AiOutlineMoon size={100} className="dark:hidden text-2xl" />
                            <GoSun size={24} className="hidden dark:block" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section className="relative z-40 overflow-hidden pt-28 pb-24 sm:pt-36 lg:pt-[170px] lg:pb-[120px]">
            <div className="px-4 xl:container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-3 lg:w-1/2"></div>
                    <div className="w-full px-4 lg:w-1/2"></div>
                </div>
            </div>
        </section>
        <section className="flex flex-row justify-center items-center pt-14 sm:pt-20 lg:pt-[130px]"><CardNbasPresentationItem/>
        </section>
        <section className="pt-14 sm:pt-20 lg:pt-[130px]"></section>
        <section className="pt-14 sm:pt-20 lg:pt-[130px]"></section>
        <footer className="wow fadeInUp pt-14 sm:pt-20 lg:pt-[130px]"></footer>
        </>
    )
}
