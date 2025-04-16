import { Button } from "@/Components/ui/button"
import { FaUser } from "react-icons/fa"
import { CardSummary } from "./components/CardSummary/CardSummary"
import { BookOpenCheck, UserRound, Waypoints } from "lucide-react"
export const dataSummary =[
    {
        icon:UserRound,
        total:"12.450",
        average:15,
        title:"Companies created",
        tooltiptext:"See all of the companies created"
    },
    {
        icon:Waypoints,
            total:"86.5",
            average:80,
            title:"total revenue",
            tooltiptext:"See all of the summary"
    },
    {  
        icon:BookOpenCheck,
        total:"363.95$",
        average:30,
        title:"Bounce Rate",
        tooltiptext:"See all of the bounce rate"

    }
]
export default function DashboardPage ()  {
  return (
    
    <div>
        <h2 className="text-2xl mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
            {
                dataSummary.map(item =>(
                    <CardSummary key={item.title} {...item}/>
                ))
            }
        </div>
    </div>
    
  )
}
