"use client";
import React, { useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Link from "next/link";
import {  LogoIcon } from "@/app/components/Icons";
import {
  AIAgent,
  AIChat,
  Avatar,
  DropDownIcon,
  Notification,
  Porfolio,
} from "@/app/svg";
import { useMediaQuery } from "@/app/hooks";

interface ISidebar {
  isSidebarHidden: boolean;
  setIsSidebarHidden: (e: boolean) => void;
}

const DashboardSidebar: React.FC<ISidebar> = ({
  isSidebarHidden,
  setIsSidebarHidden,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Close sidebar when clicking outside
  useEffect(() => {
    if (isMobile) {
      const handleClickOutside = (event: MouseEvent) => {
        const sidebar = document.querySelector(".pro-sidebar"); // Adjust selector if needed
        if (sidebar && !sidebar.contains(event.target as Node)) {
          setIsSidebarHidden(true); // Close the sidebar when clicking outside
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [setIsSidebarHidden, isMobile]);

  return (
    <>
      {/* Overlay */}
      {!isSidebarHidden && isMobile && (
        <div
          className="fixed inset-0 bg-black opacity-80 z-[998] backdrop-blur-[120px]"
          onClick={() => setIsSidebarHidden(true)}
        />
      )}

      <Sidebar
        className="fixed z-[999] flex flex-col items-start overflow-y-auto overflow-x-hidden pro-sidebar"
        style={{ width: isMobile ? "289px" : "353px", border: "none" }}
      >
        <div className="bg-sidebar_background min-h-screen overflow-y-auto overflow-x-hidden relative">
          <div className="bg-sidebar_background mt-[60px] mb-[36px] cursor-pointer flex items-center justify-center">
            <LogoIcon width="166" height="32" />
          </div>

          <div className="px-4">
            <Menu className="text-white border-t border-primary_border py-10">
              <MenuItem icon={<Porfolio />} className="pb-3">
                <Link href="/dashboard/portfolio">Portfolio</Link>
              </MenuItem>
              <MenuItem icon={<AIAgent />} className="pb-3">
                <Link href="/dashboard/ai_agents">Custom AI Agents</Link>
              </MenuItem>
              <MenuItem icon={<Notification />} className="pb-3">
                <Link href="/dashboard/notifications">Notifications</Link>
              </MenuItem>
              <MenuItem icon={<AIChat />} className="pb-3">
                <Link href="/dashboard/chat_agent">AI Chat Agent</Link>
              </MenuItem>
            </Menu>
          </div>
        </div>

        {/* Avatar on Desktop */}
        {!isMobile && (
          <div className="fixed flex items-center gap-2 top-[80%] left-[20px] px-4 bg-hover_background_gradient w-[305px] h-[64px] cursor-pointer rounded-full">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2">
                <Avatar />
                <span className="text-white text-[14px] lg:text-[16px]">
                  Niko Setro
                </span>
              </div>
              <DropDownIcon />
            </div>
          </div>
        )}
      </Sidebar>
    </>
  );
};

export default DashboardSidebar;
