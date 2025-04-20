'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function OrderForm({ initialSearch = '' }: { initialSearch?: string }) {
  const router = useRouter();
  const [search, setSearch] = useState(initialSearch);

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams();
      if (search) params.set('search', search);
      
      router.push(`/dashboard/orders${search ? `?${params.toString()}` : ''}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, router]);

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