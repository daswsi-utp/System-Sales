// /components/ReportTable.tsx
'use client';

import React from 'react';
import clsx from 'clsx';

const data = [
  // Agrega los datos de la tabla aquí
  {
    id: '#0001',
    customer: 'Juan Pérez',
    email: 'juanperez@gmail.com',
    total: 'S/ 1500.00',
    discount: '10%',
    payment: 'Cash',
    status: 'Paid',
    cashier: 'Carlos M.',
  },
  {
    id: '#0002',
    customer: 'Ana Gómez',
    email: 'ana.gomez@gmail.com',
    total: 'S/ 1800.00',
    discount: '5%',
    payment: 'Card',
    status: 'Pending',
    cashier: 'Lucía V.',
  },
  {
    id: '#0003',
    customer: 'Imanol Julio',
    email: 'ima@gmail.com',
    total: 'S/ 12200.00',
    discount: '10%',
    payment: 'Card',
    status: 'Paid',
    cashier: 'Carlos M.',
  },

  {
    id: '#0004',
    customer: 'Jack',
    email: 'jacktuPa@gmail.com',
    total: 'S/ 4300.00',
    discount: '4%',
    payment: 'Card',
    status: 'Paid',
    cashier: 'Lucía V.',
  },
  {
    id: '#0005',
    customer: 'Ricardo Palomino',
    email: 'richarddd@gmail.com',
    total: 'S/ 9200.00',
    discount: '9%',
    payment: 'Cash',
    status: 'Pending',
    cashier: 'Carlos M.',
  },
  {
    id: '#0006',
    customer: 'Marta López',
    email: 'marta.lopez@mail.com',
    total: 'S/ 1500.00',
    discount: '5%',
    payment: 'Card',
    status: 'Paid',
    cashier: 'Lucía V.',
  },
  {
    id: '#0007',
    customer: 'Sergio García',
    email: 'sergio.garcia@mail.com',
    total: 'S/ 7600.00',
    discount: '15%',
    payment: 'Cash',
    status: 'Pending',
    cashier: 'Carlos M.',
  },
  {
    id: '#0008',
    customer: 'Laura Martínez',
    email: 'laura.martinez@mail.com',
    total: 'S/ 2500.00',
    discount: '7%',
    payment: 'Card',
    status: 'Paid',
    cashier: 'Carlos M.',
  },
  {
    id: '#0009',
    customer: 'Javier Pérez',
    email: 'javier.perez@mail.com',
    total: 'S/ 3500.00',
    discount: '8%',
    payment: 'Cash',
    status: 'Pending',
    cashier: 'Lucía V.',
  },
  {
    id: '#0010',
    customer: 'Cristina Díaz',
    email: 'cristina.diaz@mail.com',
    total: 'S/ 6000.00',
    discount: '12%',
    payment: 'Card',
    status: 'Paid',
    cashier: 'Mónica G.',
  }
];

export default function ReportTable() {
  return (
    <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Sales Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-600 font-semibold">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Customer</th>
              <th className="px-4 py-2 text-left">E-mail</th>
              <th className="px-4 py-2 text-left">Total</th>
              <th className="px-4 py-2 text-left">Discount</th>
              <th className="px-4 py-2 text-left">Payment</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Cashier</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.customer}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.total}</td>
                <td className="px-4 py-2">{item.discount}</td>

                {/* Payment Label */}
                <td className="px-4 py-2">
                  <span className={clsx(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    item.payment === 'Cash'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-purple-100 text-purple-600'
                  )}>
                    {item.payment}
                  </span>
                </td>

                {/* Status Label */}
                <td className="px-4 py-2">
                  <span className={clsx(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    item.status === 'Paid'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'
                  )}>
                    {item.status}
                  </span>
                </td>

                <td className="px-4 py-2">{item.cashier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Simple pagination (solo botón de Next) */}
      <div className="mt-6 text-right">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Next →
        </button>
      </div>
    </div>
  );
}
