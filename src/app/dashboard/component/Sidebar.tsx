"use client";
import React, { useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { usePathname } from "next/navigation"; // ✅ Import usePathname
import { LogoIcon } from "@/app/components/Icons";
import {
  AIAgent,
  AIChat,
  Avatar,
  DropDownIcon,
  Notification,
  Porfolio,
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
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname(); // ✅ Get the current path

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

  return (
    <>
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
            <Link href="/dashboard/portfolio">
              <LogoIcon width="166" height="32" />
            </Link>
          </div>

          <div className="px-4">
            <Menu className="text-white border-t border-primary_border py-10">
              <MenuItem
                href="/dashboard/portfolio"
                icon={<Porfolio />}
                className={`mb-3 ${
                  pathname === "/dashboard/portfolio"
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
                  pathname === "/dashboard/ai_agents"
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
                  pathname === "/dashboard/notifications"
                    ? "ps-menu-button-active"
                    : ""
                }`}
              >
                Notifications
              </MenuItem>
              <MenuItem
                href="/dashboard/chat_agent"
                icon={<AIChat />}
                className={`mb-3 ${
                  pathname === "/dashboard/chat_agent"
                    ? "ps-menu-button-active"
                    : ""
                }`}
              >
                AI Chat Agent
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
