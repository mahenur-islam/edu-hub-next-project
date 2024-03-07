import Logo from "./Logo";
import { SidebarRoutes } from "./SidebarRoutes";

const Sidebar = () => {
    return ( 
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-lg">
            <div className="p-6">
                <Logo />
            </div>

            <div className="w-full flex flex-col">
                <SidebarRoutes />
            </div>
        </div>
     );
}
 
export default Sidebar;