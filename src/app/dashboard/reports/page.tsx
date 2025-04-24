

  'use client';

import { useState } from 'react';
import { CircleDollarSign, Banknote, CreditCard } from 'lucide-react';
import ReportTable from './components/ReportTable';

function getCurrentMonthYear() {
  const date = new Date();
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric'
  }).format(date);
}

function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}

export default function ReportsPage() {
  const [startDate, setStartDate] = useState(getTodayDate());
  const [endDate, setEndDate] = useState('');

  return (
    <div className="p-4 md:p-6">
    
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Sales Report of {getCurrentMonthYear()}
      </h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">Total Sales</h2>
            <p className="text-2xl md:text-3xl font-bold text-green-500">152,222.00 $</p>
          </div>
          <div className="text-green-500">
            <CircleDollarSign size={48} />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">Cash Payment</h2>
            <p className="text-2xl md:text-3xl font-bold text-blue-500">8,150.00 $</p>
          </div>
          <div className="text-blue-500">
            <Banknote size={48} />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">Credit Card Payment</h2>
            <p className="text-2xl md:text-3xl font-bold text-purple-500">1,245 $</p>
          </div>
          <div className="text-purple-500">
            <CreditCard size={48} />
          </div>
        </div>
      </div>

    
<div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full">
  <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
    Filter by Date Range
  </h2>

  <div className="flex flex-col md:flex-row md:justify-between md:space-x-6 space-y-4 md:space-y-0">

    <div className="flex flex-col sm:flex-row sm:space-x-6 w-full">
      <div className="flex-1">
        <label htmlFor="startDate" className="block text-gray-700">Start Date</label>
        <input
          id="startDate"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="flex-1 mt-4 sm:mt-0">
        <label htmlFor="endDate" className="block text-gray-700">End Date</label>
        <input
          id="endDate"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
    </div>
  </div>


  <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 mt-6">
   
    <div>
      <span className="block text-gray-700 mb-2 font-medium">Payment</span>
      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-blue-600" disabled />
          <span>Cash</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-purple-600" disabled />
          <span>Card</span>
        </label>
      </div>
    </div>


    <div>
      <span className="block text-gray-700 mb-2 font-medium">Status</span>
      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-green-600" disabled />
          <span>Paid</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-yellow-500" disabled />
          <span>Pending</span>
        </label>
      </div>
    </div>


    <div className="w-full sm:w-1/3">
      <label htmlFor="cashier" className="block text-gray-700 mb-2 font-medium">
        Cashier
      </label>
      <select
        id="cashier"
        className="w-full sm:w-50 px-4 py-2 border border-gray-300 rounded-lg"
       
      >
        <option value="">All</option>
        <option value="Carlos Medina">Carlos M.</option>
        <option value="Lucía Velazquez">Lucía V.</option>
        <option value="Mónica Garcia">Mónica G.</option>
      </select>
    </div>
  </div>


  <div className="flex justify-end mt-6">
    <button className="w-full md:w-auto px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800">
      Apply Filter      
    </button>
  </div>
</div>

     <ReportTable />
     
<div className="mt-6 flex justify-center">
  <button className="px-6 py-2 bg-red-800 text-white rounded-lg hover:bg-red-700">
    Export Report
  </button>
</div>
    </div>
  );
}
