

/*export default function ReportsPage  ()  {
    return (
      <div>Estoy en en mi Report pegama aqui tu parte</div>
    )
  }*/
  'use client';

import { useState } from 'react';
import { CircleDollarSign, Banknote, CreditCard } from 'lucide-react';
import ReportTable from './components/ReportTable';  // Importa la tabla

// 👉 Mes y año actuales (Ej: Abril 2025)
function getCurrentMonthYear() {
  const date = new Date();
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric'
  }).format(date);
}

// 👉 Obtener fecha actual en formato yyyy-mm-dd
function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}

export default function ReportsPage() {
  const [startDate, setStartDate] = useState(getTodayDate());
  const [endDate, setEndDate] = useState('');

  return (
    <div className="p-6">
      {/* Título con el mes actual */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Sales Report of {getCurrentMonthYear()}
      </h1>

      {/* Tarjetas */}
      <div className="flex space-x-6 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between w-1/3">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Total Sales</h2>
            <p className="text-3xl font-bold text-green-500">152,222.00 $</p>
          </div>
          <div className="text-green-500">
            <CircleDollarSign size={48} />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between w-1/3">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Cash Payment</h2>
            <p className="text-3xl font-bold text-blue-500">8,150.00 $</p>
          </div>
          <div className="text-blue-500">
            <Banknote size={48} />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between w-1/3">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Credit Card Payment</h2>
            <p className="text-3xl font-bold text-purple-500">1,245 $</p>
          </div>
          <div className="text-purple-500">
            <CreditCard size={48} />
          </div>
        </div>
      </div>
      {/* Aquí colocamos la tabla de reportes */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Filter by Date Range</h2>
  
  <div className="flex justify-between space-x-6">
    {/* Campos de fecha */}
    <div className="flex space-x-6">
      <div className="w-1/2">
        <label htmlFor="startDate" className="block text-gray-700">Start Date</label>
        <input
          id="startDate"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="w-1/2">
        <label htmlFor="endDate" className="block text-gray-700">End Date</label>
        <input
          id="endDate"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
          placeholder="Select end date"
        />
      </div>
    </div>
    
    {/* Botón en la parte derecha */}
    <div className="flex items-end">
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Apply Filter
      </button>
    </div>
  </div>
</div>
      {/* Aquí colocamos la tabla de reportes */}
      <ReportTable />
    </div>
  );
}
