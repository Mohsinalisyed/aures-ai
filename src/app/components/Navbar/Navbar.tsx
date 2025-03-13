'use client'
import { DividerIcon } from "../Icons";
import Link from 'next/link'
import { useState, useEffect } from "react";
import { NavLogo, MenuIcon, NavTextIcon, CloseMenuIcon } from "../Icons";
import { cn } from "@/app/utils";
import {  scrollToElement } from "@/app/utils/function";
import { useRouter } from "next/navigation";
interface INavbarProps {
    onPresentMobileMenu: () => void
    onDismissMobileMenu: () => void
    visible: boolean
}

export const NavMenu = [
    { id: "home", label: "Home" },
    { id: "about-us", label: "About Us" },
    { id: "parent-future-plans", label: "Roadmap" },
    { id: "contact-us", label: "Contact Us" },
  ];

const Navbar = ({ onPresentMobileMenu, onDismissMobileMenu, visible }: INavbarProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isActive, setIsActive] = useState("home");
     const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Used to check if window has been scrolled
    const [shouldRender, setShouldRender] = useState(false); // Controls initial render
    const [isAnimating, setIsAnimating] = useState(false); // Tracks animation state
    const [isNavbarOverSection, setIsNavbarOverSection] = useState(false);

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        const section = document.getElementById('parent-future-plans');

        if (!navbar || !section) return;

        const navbarHeight = navbar.offsetHeight;

        const handleScroll = () => {
            const sectionTop = section.getBoundingClientRect().top; // Distance from viewport top to section top
            const sectionBottom = section.getBoundingClientRect().bottom; // Distance from viewport top to section bottom

            // Set boolean true only when the navbar overlaps the section
            if (sectionTop <= navbarHeight && sectionBottom > navbarHeight) {
                setIsNavbarOverSection(true);
            } else {
                setIsNavbarOverSection(false);
            }

            // Detect which section is currently in view
        let currentSection = ""; // Default to home
        NavMenu.forEach((menu) => {
            const sec = document.getElementById(menu.id);
            if (sec) {
                const rect = sec.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = menu.id;
                }
            }
        });
        setIsActive(currentSection);
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Run on initial load to set the correct state
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (visible) {
            // When visible becomes true, enable rendering and start animation
            setShouldRender(true);
            setIsAnimating(true);
        } else if (shouldRender) {
            // Start closing animation before unmounting
            setIsAnimating(true);
            const timer = setTimeout(() => {
                setShouldRender(false);
                setIsAnimating(false); // Reset animation state
            }, 1500); // Matches animation duration (0.8s)
            return () => clearTimeout(timer); // Cleanup timer on re-render
        }
    }, [visible, shouldRender]);

  

    
    const NavStyle = 'min-w-[100px] max-w-[100px] h-full flex items-center justify-center text-16 text-center rounded-[40px]'
    return (
      <div className="flex flex-col w-full p-4 md:p-0" id={"navbar"}>
        <div className="bg-darkest_white w-full h-[56px]  items-center justify-between p-2 rounded-[48px] flex z-[100] md:hidden">
          <div className="flex items-center gap-2">
            <NavLogo />
            {shouldRender && (
              <div
                id="fadingText"
                className={cn(
                  isAnimating
                    ? visible
                      ? "block animate-fade-in"
                      : "animate-fade-out"
                    : "block"
                )}
              >
                <NavTextIcon />
              </div>
            )}
          </div>
          <div
            className="flex items-center justify-center w-[56px] h-[40px] py-2 px-4 bg-darkest_white shadow-button-shadow rounded-3xl"
            onClick={() =>
              visible ? onDismissMobileMenu() : onPresentMobileMenu()
            }
          >
            <div
              className={cn(
                "absolute transition-opacity duration-[1500ms]",
                visible ? "opacity-0" : "opacity-100"
              )}
            >
              <MenuIcon />
            </div>

            <div
              className={cn(
                "absolute transition-opacity duration-[1500ms]",
                visible ? "opacity-100" : "opacity-0"
              )}
            >
              <CloseMenuIcon />
            </div>
          </div>
        </div>
        <div
          className={cn(
            "hidden justify-center z-[100] fixed isScrolled w-full md:flex transition-all duration-[1500ms] ease-in-out",
            isScrolled
              ? "transform translate-y-[40%]"
              : "transform translate-y-[85vh]"
          )}
        >
          <div className="flex items-center z-[100] px-2 py-2 bg-[#FFFFFF14] rounded-full gap-x-2 flex-row container w-fit  backdrop-blur-[80px] ">
            {NavMenu.map((menu, index) => (
              <div key={menu.id} className="h-10">
                <Link
                  href={`#${menu.id}`}
                  onClick={(e) => scrollToElement(e, menu.id, setIsActive)}
                  className={cn(
                    NavStyle,
                    isNavbarOverSection ? "text-white" : "text-gray_one",
                    isActive === menu.id
                      ? isNavbarOverSection
                        ? "bg-[url(/active-nav-bg-two.png)] text-white"
                        : "bg-[url(/active-nav-bg.png)] text-white"
                      : ""
                  )}
                >
                  {menu.label}
                </Link>
                {index < NavMenu.length - 1 && <DividerIcon />}
              </div>
            ))}
              <button
                className="py-3 px-3 bg-darkest_white text-white text-16 shadow-[inset_0px_0px_8px_0px_#FFFFFF40] rounded-full transition-shadow duration-500 ease-in-out"
                onClick={() => router.push("/login")}
              >
                Get Started
              </button>
          </div>
        </div>
      </div>
    );
}

export default Navbar