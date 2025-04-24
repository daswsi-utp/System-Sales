'use client';
import {useEffect, useRef, useState} from "react";
import React from "react";

export default function Modal(){
    /**
     * Element used to manually close the Sales Modal Window when clicked outside.
     */
    const modalRef = useRef<HTMLDivElement>(null);
    /**
     * Array which stores all of the products to be sold
     */
    const [products, setProducts] = useState([
        {id: 1, name: "HP Laptop", price: 2500, quantity: 1},
        {id: 2, name: "HDMI Adaptor", price: 50, quantity: 1},
    ]);
    /**
     * Function which changes the quantity of the products to be sold 
     * @param index: Array index
     * @param value: Quantity of the product to be sold 
     */
    const handleInputChange = (index: number, value: string) => {
        const updatedProducts = [...products];
        updatedProducts[index].quantity = Number(value);
        setProducts(updatedProducts);
    }
    /**
     * Function which sends the data to the back-end.
     * 
     * TODO: Change it to actually send it to the back-end when it is developed
     * 
     * TODO: Add JSON formatting when this happens
     */
    const registerSale = () => {
        console.log("Registerd sales: ", products);
        setShowModal(false);
    }
    // This section handles the closing of the modal window. 
    const [showModal, setShowModal] = useState(false);
    useEffect(() =>{
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setShowModal(false);
            }
        }
        if(showModal){
            document.addEventListener('mousedown', handleClickOutside);
        }
        return() =>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal]);
    useEffect(() =>{
        document.body.style.overflow = showModal ? 'hidden' : '';
        return () =>{
            document.body.style.overflow = '';
        }
    }, [showModal]);


    return(
        <>
        <button onClick={() => setShowModal(true)} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Register Sale
        </button>
        {showModal && (
                <div role="dialog" aria-modal="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div ref={modalRef} className="relative p-4 w-full max-w-md max-h-full items-center">
                        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 w-max">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Register new sale
                                </h3>
                            </div>
                            <div className="p-4 md:p-5 space-y-4">
                                <div className="relative sm:overflow-x-auto shadow-md sm:rounded-lg">
                                    <table className="w-max sm:w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">#</th>
                                                <th scope="col" className="px-6 py-3">Product</th>
                                                <th scope="col" className="px-6 py-3">Price</th>
                                                <th scope="col" className="px-6 py-3">Quantity</th>
                                                <th scope="col" className="px-6 py-3">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map((item, index) => (
                                                <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.id}</th>
                                                    <td scope="col" className="px-6 py-3">{item.name}</td>
                                                    <td scope="col" className="px-6 py-3">{item.price}</td>
                                                    <td scope="col" className="px-6 py-3">
                                                        <input type="number" value={item.quantity} onChange={(e) => handleInputChange(index, e.target.value)} name="precio" id="precio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required/>
                                                    </td>
                                                    <td scope="col" className="px-6 py-3">
                                                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                            </svg>
                                                            <span className="sr-only">Delete product</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button data-modal-hide="static-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => registerSale()}>Registrar venta</button>
                                <button data-modal-hide="static-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => setShowModal(false)}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
        )}
    </>
    );
}