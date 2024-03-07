import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Sidebar from "./Sidebar";
  
export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden hover:opacity-75 transition"><Menu /></SheetTrigger>
      <SheetContent className="p-0 bg-white" side="left">
            <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
