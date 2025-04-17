'use client';
import { use, useEffect, useState } from "react";
import React from "react";
type ModalProps = {
    show: boolean;
    onClose: () => void;
}

export default function Modal({show, onClose}: ModalProps){
    //Constante donde se añaden los productos a ser registrados. Por ahora son datos fijos.
    //TODO: Agregar la capacidad de modificar la cantidad de productos vendidos
    const [products, setProducts] = useState([
        {id: 1, name: "Laptop HP", price: 2500, quantity: 1},
        {id: 2, name: "Adaptador HDMI", price: 50, quantity: 2},
    ]);
    useEffect(() =>{
        if(show){
            document.body.style.overflow = "hidden";
        } else{
            document.body.style.overflow = '';
        }
    }, [show]);

    if(!show) return null;

    return(
        <div id="crud-sales-modal" tab-index="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Registrar nueva venta
                        </h3>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">#</th>
                                        <th scope="col" className="px-6 py-3">Producto</th>
                                        <th scope="col" className="px-6 py-3">Precio</th>
                                        <th scope="col" className="px-6 py-3">Cantidad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((item) =>(
                                        <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.id}</th>
                                            <td scope="col" className="px-6 py-3">{item.name}</td>
                                            <td scope="col" className="px-6 py-3">{item.price}</td>
                                            <td scope="col" className="px-6 py-3">{item.quantity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="static-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onClose}>Registrar venta</button>
                        <button data-modal-hide="static-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={onClose}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}