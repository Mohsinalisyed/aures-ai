"use client";
import { ReactNode, Suspense, useState } from "react";
import DashboardSidebar from "./component/Sidebar";
import { useMediaQuery } from "../hooks";
import { MenuIcon } from "../components/Icons";
import { cn, formatParams } from "../utils";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, DropDownIcon, Logout, Profile, UpwardIcon } from "../svg";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const pathName = usePathname();// Use the router hook
  const [showProfile, setShowProfile] =useState(false)
  const router=useRouter()
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
            <div
              className="w-[69px] flex justify-between items-center"
              onClick={() => setShowProfile(!showProfile)}
            >
              <Avatar /> {showProfile ? <UpwardIcon /> : <DropDownIcon />}
            </div>
          </div>
          {showProfile && (
            <div className="w-[207px] backdrop-blur-3xl bg-white/30 fixed right-0 z-[999] top-[80px] h-[140px]  rounded-[12px] text-white mx-6">
              <div
                className="w-[281] h-[62px]  m-3 mb-0  cursor-pointer"
                onClick={() => {
                  router.push("/dashboard/profile");
                  setShowProfile(false);
                }}
              >
                <div className="flex gap-2 items-center">
                  <Profile /> <h1>Profile</h1>
                </div>
                <div className="text-[14px] text-eth_color mt-1">
                  Edit profile details
                </div>
              </div>
              <div className="border-t border-darker_white mx-3"></div>
              <div className="w-[281] h-[62px]  m-3 mt-2  cursor-pointer">
                <div className="flex gap-2 items-center">
                  <Logout /> <h1 className="text-logout_text_color">Logout</h1>
                </div>
                <div className="text-[14px] text-eth_color mt-1">
                  Sign out of your account
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <div
        className={`fixed z-[9999] min-h-screen ${
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
        className="px-2 w-full max-w-[1920] mx-auto overflow-x-hidden"
      >
        {!isMobile && (
          <div className="text-white pt-[100px] lg:pt-[34px] text-[32px] font-bold">
            {formatParams(pathName)}
          </div>
        )}
        <Suspense fallback={<div>Loading...</div>}>
          <div className="mt-[100px] lg:mt-0">{children}</div>
        </Suspense>
      </div>
    </div>
  );
}
