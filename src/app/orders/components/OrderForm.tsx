'use client';

import { useState } from 'react';

export default function OrderForm() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded-md"
        placeholder="Buscar pedidos..."
      />
    </div>
  );
}