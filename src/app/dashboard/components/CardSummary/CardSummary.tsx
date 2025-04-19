import { ArrowUp, ArrowDown, Box } from 'lucide-react'; // Iconos
import { CardSummaryTypes } from './CardSummary.types';

export const data = [
  {
    id: 1,
    title: "Total Sales (Last 6 months)",
    total: "S/ 125000.00",
    average: 15,
    trend: "+12.5%",
    icon: <ArrowUp size={24} className="text-green-500" />,
  },
  {
    id: 2,
    title: "Sales Target (This Month)",
    total: "S/ 1,500.00",
    average: 80,
    trend: "-20%",
    icon: <ArrowDown size={24} className="text-red-500" />,
  },
  {
    id: 3,
    title: "Top Selling Product",
    total: "Graphics card - S/ 4500",
    average: 120,
    trend: "Trending up",
    icon: <Box size={24} className="text-blue-500" />,
  },
  {
    id: 4,
    title: "Current Stock",
    total: "2,345 units",
    average: 80,
    trend: "Stock level: Sufficient",
    icon: <Box size={24} className="text-blue-500" />,
  },
];

export const CardSummary = () => {
  const renderCards = () => {
    return data.map((item) => (
      <div
        key={item.id}
        
      >
        <CardSummaryTypes {...item} />
      </div>
    ));
  };

  return (
    <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {renderCards()}
    </div>
  );
};
