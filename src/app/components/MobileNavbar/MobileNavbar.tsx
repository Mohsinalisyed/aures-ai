"use client";
import { useState, useEffect } from "react";
import { cn } from "@/app/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface MobileMenuProps {
  visible?: boolean;
  onDismissMobileMenu: () => void;
}
const MobileNavbar = ({ visible, onDismissMobileMenu }: MobileMenuProps) => {
  const pathName = usePathname();
  const [shouldRender, setShouldRender] = useState(false); // Controls initial render
  const [isAnimating, setIsAnimating] = useState(false); // Tracks animation state
  const router = useRouter();

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
      // When visible becomes true, enable rendering and start animation
      setShouldRender(true);
      setIsAnimating(true);
    } else if (shouldRender) {
      document.body.style.overflow = "";

      // Start closing animation before unmounting
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsAnimating(false); // Reset animation state
      }, 1500); // Matches animation duration (0.8s)
      return () => clearTimeout(timer); // Cleanup timer on re-render
    }
  }, [visible, shouldRender]);

  const isActive = (path: string) => pathName === path;

  if (!shouldRender) {
    // Prevent rendering entirely if not visible
    return null;
  }

  return (
    <div
      id="animatedDiv"
      className={cn(
        "fixed inset-0 z-50 top-[8%] ",
        isAnimating
          ? visible
            ? "block animate-slide-from-top"
            : "block animate-slide-to-top"
          : "block"
      )}
    >
      <div className="p-2 relative h-full w-full">
        <div className="bg-darkest_white backdrop-blur-[80px] flex flex-col w-full h-full rounded-[32px] p-2">
          <div className="flex flex-col justify-center items-center h-full">
            <Link
              href="/"
              className={` text-[24px] text-center pb-6 text-white ${
                isActive("/") ? "underline font-bold" : ""
              }`}
              onClick={() => onDismissMobileMenu()}
            >
              Home
            </Link>
            <Link
              href="#about-us"
              className={` text-[24px] text-center pb-6 text-white }`}
              onClick={() => onDismissMobileMenu()}
            >
              About Us
            </Link>
            <Link
              href="#parent-future-plans"
              className={` text-[24px] text-center pb-6 text-white }`}
              onClick={() => onDismissMobileMenu()}
            >
              Roadmap
            </Link>
            <Link
              href="#contact-us"
              className={` text-[24px] text-center pb-6 text-white }`}
              onClick={() => onDismissMobileMenu()}
            >
              Contact Us
            </Link>
          </div>
          <button
            onClick={() => router.push("/login")}
            className="w-full py-4 text-16 text-center rounded-3xl bg-darkest_white backdrop-blur-[80px] shadow-[inset_0px_0px_8px_0px_#FFFFFF40] text-white "
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
