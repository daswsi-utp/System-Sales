'use client'
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation"; 
import Image from "next/image";

interface CardInventoryProps {
  title: string;
  img: StaticImageData | string;
  category: string;  
}

export const CardInventoryTypes = ({ title, img, category }: CardInventoryProps) => {
  const router = useRouter();  

  const navigateToCategory = () => {
    console.log(category)
    router.push(`/dashboard/inventory/${category}`);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="relative h-48 w-full">
        <Image
          src={img}
          alt={title}
          fill
          className="rounded-t-lg object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-5">
        <p className="mb-3 font-normal text-[#79808a] dark:text-gray-400 text-center text-2xl">
          {title}
        </p>
        <div className="flex justify-center mt-4">
          <button
            onClick={navigateToCategory}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#79808a] rounded-lg hover:bg-[#e4fbfb] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Go to Product
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
