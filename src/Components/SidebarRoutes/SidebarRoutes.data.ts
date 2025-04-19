import { BaggageClaim, BarChart4, Building2, CircleHelpIcon, ClipboardMinus, NotepadText, Settings, User } from "lucide-react";

export const dataGeneralSidebar = [
    {
        icon:NotepadText,
        label:"Inventory",
        href:"/dashboard/inventory"
    },
    {
        icon:Building2,
        label:"Sales",
        href:"/dashboard/sales"
    },
    {
        icon:BaggageClaim, //baggage-claim
        label:"Orders",
        href:"/dashboard/orders"
    },
    {
        icon:ClipboardMinus,
        label:"Reports",
        href:"/dashboard/reports"
    }
]

export const dataToolsSidebar = [
    {
        icon:CircleHelpIcon,
        label:"Faqs",
        href:"/faqs"
    },
    {
        icon:BarChart4,
        label:"Analytics",
        href:"/analytics"
    },

]

export const dataSupportSidebar = [
    {
        icon: Settings,
        label:"Setting",
        href:"/dashboard/settings"
    },
    {
        icon:User,
        label:"Account",
        href:"/dashboard/account",
    }
]