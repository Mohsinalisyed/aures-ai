'use client'
import { RotatingLogo } from './components/RotatingLogo'
import { GradientCircle } from './components/GradientCircle';
import { useRef } from 'react';
import { gsap, useGSAP } from '@/app/utils';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from '@/app/utils';
import { WhyAuresuData } from './components/WhyAureusData';
import { useMediaQuery } from '@/app/hooks';
gsap.registerPlugin(ScrollTrigger);

const WhyAureus = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery("(max-width: 768px)");

    useGSAP(() => {
        if (!isMobile) return; // Only run animation on mobile

        const container = ref.current;
        const cards = gsap.utils.toArray<HTMLElement>(".card");

        if (!container || !cards.length) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: "+=100%", // Extended to accommodate all animations
                scrub: 1.5,
                pin: true,
                anticipatePin: 1,
                markers: false,
            },
        });

        // Animate cards one by one (Sequential Animation)
        cards.forEach((card, i) => {
            tl.to(card, {
                translateY: -240 * i, // Moves cards upwards one at a time
                scale: 1 , // Slight scaling effect
                opacity: 1,
                duration: 1, // Slightly increased for smoother movement
                ease: "power2.out",
            }, `-=${0.2 * i}`);
        });

        // Move the container out of view AFTER all stacking is complete
        tl.to(container, {
            // y: "-100vh",
            duration: 1.5,
            ease: "power2.inOut",
        }, "+=0.5"); // Small delay before moving container

        return () => ScrollTrigger.getAll()?.forEach(trigger => trigger.kill()); // Cleanup
    }, { scope: ref, revertOnUpdate: true });

    const cardBodyClasses = ' card box-border p-6 rounded-[24px] shadow-[0_0_30px_0_rgba(0,0,0,0.3)] h-[260px]  mx-auto flex flex-col justify-between items-start bg-darkest_white border-darker_white border-[1px] backdrop-blur-[25px] filter drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]';
    // const cardBodyClasses = 'card box-border p-6 rounded-[24px] shadow-[0_0_30px_10px_rgba(255,255,255,0.2)] h-[260px] mx-auto flex flex-col justify-between items-start bg-darkest_white border-darker_white border-[1px] backdrop-blur-[25px] filter drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]';

   
    return (
        <div id="about-us"className='h-screen relative md: my-40 flex md:flex-row flex-col ' ref={ref} >
            <GradientCircle classname='h-5/6 w-[80vh] left-[-20%] hidden md:block' />
            <GradientCircle classname='h-4/6 w-[60vh] right-[-20%] top-[70%] hidden md:block' />
            <h3 className='md:hidden block text-24 text-center font-bold mb-10 text-white'>Why Aureus AI</h3>
            <div className='w-full  relative md:hidden max-h-[874px]' >
                <div className='flex flex-col inset-0 top-[-130px] absolute  xsm:top-[unset] h-full w-full  items-center justify-center gap-1 animate-spin-slow z-0'>
                    <RotatingLogo />
                </div>
                {
                    WhyAuresuData.map((item, index) => (
                        <div id={`card-${item.id}`} className={cn(cardBodyClasses, item?.style)} key={`${item.title} ${index + 5}`} >
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <h5 className='text-16 leading-5 text-white font-bold'>{item?.title}</h5>
                                <p className='text-14 leading-[18px] text-white font-normal'>{item?.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='hidden md:flex flex-col h-full w-full md:w-6/12 items-center justify-center gap-1 animate-spin-slow'>
                <RotatingLogo />
            </div>
            <div className='hidden md:flex flex-col h-full w-6/12 items-center justify-center gap-[120px]'>
                <h2 className='text-64 text-white'>
                    Why Aureus AI
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {WhyAuresuData.map((item, index) => (
                        <div
                            key={`${item.title} ${index}`}
                            className=" bg-darkest_white backdrop-blur-[80px] p-4 rounded-3xl min-h-[161px] max-h-[161px] overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-darkest_white z-0"></div>
                            <div className="absolute inset-0 bg-[url('/why-aureus-hover-bg.png')] bg-cover bg-center opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 z-0"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <h4 className="text-20 text-white font-bold leading-[26px]">{item.title}</h4>
                                <p className="text-16 text-white font-normal leading-5">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default WhyAureus