import conversation from "@/utils/conversation.png";
import sales from "@/utils/sales.png";
import reception from "@/utils/reception.png";
import controlInventory from "@/utils/controlInventory.jpg";
import { CardNbas } from "../Presentation/CardNbas";
const cardItems = [
    {
        id:1,
        title: 'Optimized Sales',
        image: sales ,
        description: "An optimized sales and inventory system designed to enhance business efficiency, providing real-time tracking, automated stock management, and seamless integration for smarter decision-making and faster sales operations."
    },
    {
        id:2,
        title: 'Inventory Management',
        image:  conversation ,
        description: "An advanced inventory management solution that allows businesses to monitor stock levels in real-time, sending automated notifications when items are running low and alerting when products are nearing expiration, ensuring optimal stock control and preventing shortages."
    },
    {
        id:3,
        title: 'Inventory Control System',
        image:  controlInventory,
        description: "A smart inventory control system designed to streamline operations by automating stock tracking and replenishment. With real-time alerts for low stock and upcoming product expirations, businesses can proactively manage inventory, ensuring timely restocking and minimizing product waste."
    },
    {
        id:4,
        title: 'Product Tracking System',
        image: reception,
        description: "A streamlined product tracking system that automatically monitors stock levels, sends alerts for low stock, and notifies when products are approaching expiration to ensure timely restocking and reduce waste."
    },

]

export const CardNbasPresentationItem = () => {
    
    const renderCards = () => {
      return cardItems.map((item) => (
        <div key={item.id} className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] xl:w-[23%] p-4 border border-white rounded-3xl shadow-lg mb-6 hover:scale-105 transition-transform duration-300"> 
          <CardNbas {...item} /> 
        </div>
      ));
    };
  
    return (

        <div className="max-w-[1200px] mx-auto pb-28">  
        <h2 className="text-center pb-8 md:pb-12 text-2xl sm:text-3xl md:text-4xl text-[#111722] dark:text-white">WE OFFER THIS FOR YOU</h2>        
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 ">
            {renderCards()} 
          </div>
        </div>

    );
  };
  