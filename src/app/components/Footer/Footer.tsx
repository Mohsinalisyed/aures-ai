"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { FacebookIcon, FooterLogo, LinkedInIcon } from "../Icons";
import { cn, gsap, useGSAP } from "@/app/utils";
import { Tooltip } from "../Tooltip";
import { NavMenu } from "../Navbar/Navbar";
import { scrollToElement } from "@/app/utils/function";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const moveDiagonalRef = useRef<HTMLDivElement>(null);
  const moveVerticalRef = useRef<HTMLDivElement>(null);
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    menuId: string
  ) => {
    e.preventDefault();
    setClickedItem(menuId); // Set the clicked item
    setTimeout(() => {
      setClickedItem(null); // Reset after 1 second
      scrollToElement(e, menuId);
    }, 1000);
  };

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const elementSize = 150; // Element width & height

      const getRandomPosition = () => ({
        x: Math.random() * (container.clientWidth - elementSize),
        y: Math.random() * (container.clientHeight - elementSize),
      });

      const animateElement = (element: HTMLElement) => {
        const moveRandomly = () => {
          const { x, y } = getRandomPosition();

          gsap.to(element, {
            x,
            y,
            opacity: Math.random() * 0.6 + 0.4, // Random opacity (0.4 - 1)
            duration: 1 + Math.random() * 2, // 3s - 5s
            ease: "power1.inOut",
            onComplete: moveRandomly, // Recursive call for continuous motion
          });
        };
        moveRandomly();
      };

      if (moveDiagonalRef.current) animateElement(moveDiagonalRef.current);
      if (moveVerticalRef.current) animateElement(moveVerticalRef.current);
    },
    { scope: ref, revertOnUpdate: true }
  );

  return (
    <div ref={ref} className="container max-w-full overflow-hidden">
      <div className="flex flex-col md:mt-36 mb-10 gap-6">
        <div className="flex min-h-[370px] md:mx-36 items-center flex-col p-6 md:p-20 justify-center bg-[url(/footer-bg-one.png)] gap-10 rounded-3xl md:rounded-[40px] bg-no-repeat">
          <h2 className="text-24 text-center md:text-48 md:leading-[58px] text-bold text-white">
            Ready to Let Your AI Do the Trading?
          </h2>
          <p className="text-16 leading-5 md:text-20 md:leading-6 text-bold text-center text-white">
            Join the decentralized future of autonomous trading and sustainable
            growth.
          </p>
          <Tooltip text="Coming Soon">
            <button className="px-3 md:w-[270px] w-full text-16 font-medium py-5 bg-darkest_white backdrop-blur-[80px] shadow-[inset_0px_0px_8px_0px_#FFFFFF40] rounded-[48px] text-white">
              Get Started
            </button>
          </Tooltip>
        </div>
        <div
          id="contact-us"
          ref={containerRef}
          className="flex flex-col bg-[url(/footer-bg-two.png)] bg-cover justify-between items-center px-4 pt-16 pb-6 md:px-20 md:pt-20 md:pb-6 rounded-[40px] bg-no-repeat relative overflow-hidden"
        >
          <div
            ref={moveDiagonalRef}
            className="bg-primary h-[150px] w-[150px] blur-[60px] absolute z-0"
          />
          <div
            ref={moveVerticalRef}
            className="bg-primary h-[150px] w-[150px] blur-[60px] absolute z-0"
          />
          <div className="flex justify-between items-center md:flex-row flex-row-reverse w-full mb-[80px]">
            <div className="hidden md:flex flex-col gap-6 ">
              {NavMenu.map((menu) => (
                <>
                  <Link
                    key={menu.id}
                    href={`#${menu.id}`}
                    onClick={(e) => handleClick(e, menu.id)}
                    className={cn(
                      "text-20 text-normal transition-colors duration-300",
                      clickedItem === menu.id ? "text-primary" : "text-white"
                    )}
                  >
                    {menu.label}
                  </Link>
                </>
              ))}
            </div>
            <div className="flex gap-4 md:ml-[15%]">
              <a
                href=""
                className="flex items-center justify-center rounded-[50px] w-10 h-10 bg-darkest_white backdrop-blur-[40px] transition-shadow duration-500 ease-in-out shadow-[inset_0px_4px_24px_0px_#FFFFFF3D] hover:shadow-[inset_0px_4px_24px_0px_#FFFFFF3D,inset_0px_8px_12px_0px_#FFFFFFB8]"
              >
                <FacebookIcon />
              </a>
              <a
                href=""
                className="flex items-center justify-center rounded-[50px] w-10 h-10 bg-darkest_white backdrop-blur-[40px] transition-shadow duration-500 ease-in-out shadow-[inset_0px_4px_24px_0px_#FFFFFF3D] hover:shadow-[inset_0px_4px_24px_0px_#FFFFFF3D,inset_0px_8px_12px_0px_#FFFFFFB8]"
              >
                <LinkedInIcon />
              </a>
            </div>
            <div className="flex gap-4 flex-col max-w-40 md:max-w-80 text-white">
              <p className="text-14 md:text-16 md:leading-5 font-normal">
                Address:
              </p>
              <p
                className="text-14 md:text-16 font-normal md:leading-5"
                style={{ lineHeight: 1.5 }}
              >
                #501-5605, from Gaspé Montreal, Quebec H2T 2A4
              </p>
            </div>
          </div>
          <div className="md:hidden flex flex-col gap-6 w-full justify-center items-center z-10">
            {NavMenu.map((menu) => (
              <>
                <Link
                  key={menu.id}
                  href={`#${menu.id}`}
                  onClick={(e) => handleClick(e, menu.id)}
                  className={cn(
                    "text-20 text-normal transition-colors duration-300",
                    clickedItem === menu.id ? "text-primary" : "text-white"
                  )}
                >
                  {menu.label}
                </Link>
              </>
            ))}
          </div>
          <div className="footer-divider-gradient w-full h-[1px] my-6 md:hidden" />

          <div className="flex items-center w-full justify-center gap-4 flex-col mb-12 md:flex-row md:mb-0">
            <p className="text-14 md:text-16 text-white">
              2025 - Aureus.ai&nbsp; &nbsp;All Rights Reserved
            </p>
            <p className="text-14 md:text-16 text-primary">Privacy Policy</p>
          </div>
          <div className="footer-divider-gradient w-full h-[1px] my-10 hidden md:block" />
          <div className="max-w-full" style={{ maxWidth: "100%" }}>
            <FooterLogo className="w-full h-auto max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
