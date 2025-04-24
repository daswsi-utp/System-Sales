import processors from "@/utils/processors.jpg"
import grapfhics from "@/utils/graphics.png"
import peripherals from "@/utils/peripherals.jpg"
import motherboard  from "@/utils/motheboard.jpg"
import ram from "@/utils/ram.jpg"
import storage from "@/utils/storage.jpg"
import power from "@/utils/ROG-THOR-1200P.jpg"
import cabinets from "@/utils/cabinets.jpg"
import { CardInventoryTypes } from "./CardInventoryTypes"
export const dataInventory=[
   {
    id:1,
    title:"Processors",
    alt:"image of processors",
    img:processors,
    category: "processors"
   },
   {
    id:2,
    title:"Video Graphics",
    alt:"image of video graphics",
    img:grapfhics,
    category: "graphics"
   },
   {
    id:3,
    title:"Peripherals",
    alt:"image of peripherals",
    img:peripherals,
    category: "peripherals"
   },
   {
    id:4,
    title:"Motheboard",
    alt:"image of motheboard",
    img:motherboard,
    category: "motherboard"
   },
   {
    id:5,
    title:"Ram Memory",
    alt:"image of ram memory",
    img:ram,
    category: "memory"
    
   },
   {
    id:6,
    title:"Storage",
    alt:"image of storage",
    img:storage,
    category: "storage"
   },
   {
    id:7,
    title:"Power supplies",
    alt:"image of power supplies",
    img:power,
    category: "power"
   },
   {
    id:8,
    title:"Cabinets",
    alt:"image of cabinets",
    img:cabinets,
    category: "cabinets"
   }
]
export const CardInventory = () => {
  const renderCards = () => {
      return dataInventory.map((item) => (
        <div
          key={item.id}
          
        >
          <CardInventoryTypes {...item} />
        </div>
      ));
    };
  
    return (
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {renderCards()}
      </div>
    );
}
