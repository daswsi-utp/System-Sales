import { CardInventory } from "../components/CardInventory/CardInventory";

export default function Inventorypage  ()  {
  return (
  
    <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        <CardInventory />
      </div>
    
  )
}
