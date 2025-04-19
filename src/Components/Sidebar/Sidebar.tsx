import { SidebarRoutes } from "../SidebarRoutes"

export const Sidebar = () => {
  return (
    <div className="h-screen">
        <div className="h-full flex flex-col border-">
            <SidebarRoutes/>
        </div>
    </div>
  )
}
