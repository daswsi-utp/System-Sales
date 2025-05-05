import Link from "next/link"
import { BsTwitterX } from "react-icons/bs"
import { FaMapMarked } from "react-icons/fa"
import { GrLinkedin } from "react-icons/gr"
import { MdEmail, MdOutlinePhoneInTalk } from "react-icons/md"
import { SlSocialInstagram } from "react-icons/sl"


export const FooterPage = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-amber-300">GoInvento<span className="text-white">RY</span></h3>
                <p className="text-gray-300">
                    We digitize your business to eliminate losses and optimize sales and inventory processes.
                </p>
                <div className="flex space-x-4 pt-2">
                    <Link href="#" aria-label="Twitter">
                        <BsTwitterX  className="h-6 w-6 text-gray-400 hover:text-amber-300 transition"/>
                    </Link>
                    <Link href="#" aria-label="LinkedIn">
                        <GrLinkedin  className="h-6 w-6 text-gray-400 hover:text-amber-300 transition"/>
                    </Link>
                    <Link href="#" aria-label="Instagram">
                        <SlSocialInstagram  className="h-6 w-6 text-gray-400 hover:text-amber-300 transition"/>
                    </Link>
                </div>
            </div>
            <div>
                <h4 className="text-lg font-semibold mb-4 text-amber-300">SOLUTIONS</h4>
                <ul className="space-y-2">
                    <li><Link href="#" className="hover:text-amber-300 transition">Inventory Management</Link></li>
                    <li><Link href="#" className="hover:text-amber-300 transition">
                    Digital Sales</Link></li>
                    <li><Link href="#" className="hover:text-amber-300 transition">Real-Time Tracking</Link></li>
                    <li><Link href="#" className="hover:text-amber-300 transition">Automation</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-semibold mb-4 text-amber-300">CONTACT</h4>
                <address className="not-italic space-y-2">
                    <p className="flex items-center">
                        <FaMapMarked  className="h-5 w-5 mr-2 text-amber-300"/>
                       Av. Peru 234 A-12
                    </p>
                    <p className="flex items-center">
                        <MdOutlinePhoneInTalk  className="h-5 w-5 mr-2 text-amber-300"/>
                        +51 931 345 456
                    </p>
                    <p className="flex items-center">
                        <MdEmail  className="h-5 w-5 mr-2 text-amber-300"/>
                        helloTeam@goinvetory.com
                    </p>
                </address>
            </div>
        </div>
        <div className="border-t border-gray-700 my-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2025 GoInventory. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="hover:text-amber-300 transition">Privacy Policy</Link>
                <Link href="#" className="hover:text-amber-300 transition">Terms of Service</Link>
            </div>
        </div>
    </div>
</footer>
  )
}
