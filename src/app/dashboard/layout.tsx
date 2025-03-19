"use client";
import { ReactNode, useState } from "react";
import DashboardSidebar from "./component/Sidebar";
import { useMediaQuery } from "../hooks";
import { MenuIcon } from "../components/Icons";
import { cn, formatParams } from "../utils";
import { usePathname } from "next/navigation";
import { Avatar, DropDownIcon } from "../svg";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathName = usePathname();// Use the router hook

  const handleToggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  return (
    <div>
      {isSidebarHidden && isMobile && (
        <div className="text-white w-full top-2 fixed overflow-x-hidden my-2 px-4">
          <div className="p-2 rounded-[48px] h-[56px] flex justify-between items-center mblsidebar w-full">
            <div
              className="flex items-center justify-center w-[56px] h-[40px] py-2 px-4 bg-darkest_white shadow-button-shadow rounded-3xl"
              onClick={handleToggleSidebar}
            >
              <div
                className={cn(
                  "absolute transition-opacity duration-[1500ms]",
                  !isSidebarHidden ? "opacity-0" : "opacity-100"
                )}
              >
                <MenuIcon />
              </div>
            </div>
            <div className="text-white text-[16px] font-bold">
              {formatParams(pathName)}
            </div>
            <div className="w-[69px] flex justify-between items-center">
              <Avatar /> <DropDownIcon />
            </div>
          </div>
        </div>
      )}
      <div
        className={`fixed z-[998] min-h-screen ${
          isSidebarHidden ? "hidden" : "block"
        }`}
      >
        <DashboardSidebar
          isSidebarHidden={isSidebarHidden}
          setIsSidebarHidden={(e) => setIsSidebarHidden(e)}
        />
      </div>
      <div
        style={{
          width: isSidebarHidden || isMobile ? "100%" : "calc(100% - 353px)",
          marginLeft: isSidebarHidden || isMobile ? "0%" : "353px",
        }}
        className="px-4 w-full max-w-[1920] mx-auto overflow-x-hidden"
      >
        {!isMobile && (
          <div className="text-white pt-[100px] lg:pt-[34px] text-[32px] font-bold">
            {formatParams(pathName)}
          </div>
        )}
        <div className="mt-[100px] lg:mt-0">{children}</div>
      </div>
    </div>
  );
}
