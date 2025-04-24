import { CardNbasPresentationItem } from "@/Components/Presentation/CardNbasPresentation1";
import Image from "next/image";
import digitalizacion from "@/utils/digitalizacion.jpg";
import inventaryControl from "@/utils/inventaryControl.webp";
import { FooterPage} from '../Components/Presentation/footer';
import programeer from '@/utils/programer.jpg';
import {HeaderPresentationPage } from "@/Components/Presentation/HeaderPresentationPage";
export default function Home() {
    return (
        <>
            <HeaderPresentationPage/>
            <section id="home" className="relative z-40 overflow-hidden py-20 sm:py-28 lg:py-32 bg-amber-300">
                <div className="px-4 mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                        
                        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                                FORGET ABOUT WRITING AND<br />
                                <span className="text-amber-800">START INNOVATING</span><br />
                                YOUR COMPANY
                            </h2>
                            <p className="text-lg sm:text-xl opacity-90 text-[#79808a] text-justify">
                                We offer incredible digitalization of sales and inventory processes to
                                avoid losses. You can also track, guide, and receive notifications about
                                your products to avoid the fatigue of counting everything again.
                            </p>
                        </div>

                        
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src={digitalizacion}
                                    fill
                                    alt="Digitizing business processes"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="sales" className="flex flex-row justify-center items-center pt-14 sm:pt-20 lg:pt-[130px]"><CardNbasPresentationItem />
            </section>
            <section id="inventory"className="relative z-40 overflow-hidden py-20 sm:py-28 lg:py-32 bg-amber-300">
                <div className="px-4 mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                        
                        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                                 INVENTORY SYSTEM FOR BETTER MANAGEMENT
                            </h2>
                            <p className="text-lg sm:text-xl opacity-90 text-[#79808a] text-justify">
                            Our inventory system will allow flexibility and ease to register new products as well as search and provide support in your daily business tasks.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src={inventaryControl}
                                    fill
                                    alt="Digitizing business processes"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="relative z-40 overflow-hidden py-20 sm:py-28 lg:py-32">
                <div className="px-4 mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                        
                        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                                 ABOUT US
                            </h2>  
                            
                              
                            <p className="text-lg sm:text-xl opacity-90 text-[#79808a] text-justify">
                            We are a team of students from the Systems Engineering and Computer Science degree who like to carry out problem-based projects to help others.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src={programeer}
                                    fill
                                    alt="Digitizing business processes"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterPage/>
        </>
    );
}
