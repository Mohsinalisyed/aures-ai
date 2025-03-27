"use client";
import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { usePathname, useRouter } from "next/navigation"; // ✅ Import usePathname
import { LogoIcon } from "@/app/components/Icons";
import {
  AIAgent,
  AIChat,
  Avatar,
  DropDownIcon,
  Logout,
  Notification,
  Porfolio,
  Profile,
  UpwardIcon,
} from "@/app/svg";
import { useMediaQuery } from "@/app/hooks";
import Link from "next/link";

interface ISidebar {
  isSidebarHidden: boolean;
  setIsSidebarHidden: (e: boolean) => void;
}

const DashboardSidebar: React.FC<ISidebar> = ({
  isSidebarHidden,
  setIsSidebarHidden,
}) => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const pathname = usePathname();
  const router =useRouter()
  const [showProfile, setShowProfile] =useState(false)
  // Close sidebar when clicking outside
  useEffect(() => {
    if (isMobile) {
      const handleClickOutside = (event: MouseEvent) => {
        const sidebar = document.querySelector(".pro-sidebar");
        if (sidebar && !sidebar.contains(event.target as Node)) {
          setIsSidebarHidden(true);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [setIsSidebarHidden, isMobile]);
  const handleLogout = () => {
    localStorage.clear();
    router.push('/login')
}
  return (
    <>
      {!isSidebarHidden && isMobile && (
        <div
          className="fixed inset-0 bg-black opacity-80 backdrop-blur-[120px]"
          onClick={() => setIsSidebarHidden(true)}
        />
      )}

      <Sidebar
        className="fixed z-[999] flex flex-col  items-start overflow-y-auto overflow-x-hidden pro-sidebar"
        style={{ width: isMobile ? "289px" : "353px", border: "none" }}
      >
        <div className="bg-sidebar_background min-h-screen overflow-y-auto overflow-x-hidden relative">
          <div className="bg-sidebar_background mt-[60px] mb-[36px] cursor-pointer flex items-center justify-center">
            <Link href="/dashboard/portfolio">
              <LogoIcon width="166" height="32" />
            </Link>
          </div>

          <div className="px-4">
            <Menu className="text-white border-t border-primary_border pt-10 pb-4">
              <MenuItem
                href="/dashboard/portfolio"
                icon={<Porfolio />}
                className={`mb-3 ${
                  pathname.includes("/dashboard/portfolio")
                    ? "ps-menu-button-active"
                    : ""
                }`}
              >
                Portfolio
              </MenuItem>
              <MenuItem
                href="/dashboard/ai_agents"
                icon={<AIAgent />}
                className={`mb-3 ${
                  pathname.includes("/dashboard/ai_agents")
                    ? "ps-menu-button-active"
                    : ""
                }`}
              >
                Custom AI Agents
              </MenuItem>
              <MenuItem
                href="/dashboard/notifications"
                icon={<Notification />}
                className={`mb-3 ${
                  pathname.includes("/dashboard/notifications")
                    ? "ps-menu-button-active"
                    : ""
                }`}
              >
                <div className="flex justify-between">
                  <div>Notifications</div>
                  <div className="h-6 w-6 rounded-[80px] bg-button-gradient text-center">
                    4
                  </div>
                </div>
              </MenuItem>
              <MenuItem
                href="/dashboard/trading_agent"
                icon={<AIChat />}
                className={`mb-3 ${
                  pathname.includes("/dashboard/trading_agent")
                    ? "ps-menu-button-active"
                    : ""
                }`}
              >
                Trading AI Agent
              </MenuItem>
            </Menu>
          </div>
        </div>

        {showProfile && (
          <div className="w-[305px] fixed bottom-[112px] h-[156px] bg-darkest_white rounded-[12px] text-white mx-6">
            <div
              className="w-[281] h-[62px] border m-3 mb-2 bg-profile_options_bg border-darker_white rounded-[12px] p-2 cursor-pointer"
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
            <div className="w-[281] h-[62px] border m-3 mt-0 bg-profile_options_bg border-darker_white rounded-[12px] p-2 cursor-pointer">
              <div
                className="flex gap-2 items-center"
                onClick={() => handleLogout()}
              >
                <Logout /> <h1 className="text-logout_text_color">Logout</h1>
              </div>
              <div className="text-[14px] text-eth_color mt-1">
                Sign out of your account
              </div>
            </div>
          </div>
        )}
        {!isMobile && (
          <div className="fixed flex items-center gap-2 bottom-[40px] left-[20px] px-4 bg-hover_background_gradient w-[305px] h-[64px] cursor-pointer rounded-full">
            <div
              className="flex justify-between items-center w-full"
              onClick={() => setShowProfile(!showProfile)}
            >
              <div className="flex items-center gap-2">
                <Avatar />
                <span className="text-white text-[14px] lg:text-[16px]">
                  Niko Setro
                </span>
              </div>
              {showProfile ? <UpwardIcon /> : <DropDownIcon />}
            </div>
          </div>
        )}
      </Sidebar>
    </>
  );
};

export default DashboardSidebar;
