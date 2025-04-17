'use client';
import {useState} from 'react';
import SalesModal from './components/SalesModal';

export default function SalesPage(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    //TODO: El boton todavía no muestra la ventana Modal. Arreglar
    return(
        <main>
            <button onClick={() => setIsModalOpen(true)} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Abrir</button>
            <SalesModal show={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
} 