import Image, { StaticImageData } from "next/image"
interface Props{
    title:string,
    image:string | StaticImageData,
    description:string;
}
export const CardNbas = ({title,image,description}:Props) => {
    return (
        <>
            <div
                className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 gap-2">
                <Image 
                    src={image}
                    height={200}
                    width={1000}
                    alt="Picture of the information"
                    title="" 
                    priority={false}/>
                <div
                    className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                </div>

            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <h5 className="items-center block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 text-center">
                        {title}
                    </h5>
                </div>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700 text-justify">
                    {description}
                </p>
            </div>
        </>
    )
}
