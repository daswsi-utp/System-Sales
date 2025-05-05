'use client';

import { useState } from 'react';

export default function OrderForm({ initialSearch = '' }: { initialSearch?: string }) {
  const [search, setSearch] = useState(initialSearch);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded-md"
        placeholder="Search Orders..."
      />
    </div>
  );
}