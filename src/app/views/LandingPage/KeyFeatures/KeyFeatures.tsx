'use client'
import React from 'react'
import { RightArrowIcon } from '@/app/components/Icons'
import { KeyFeaturesData } from './components/KeyFeaturesData'
import { cn } from '@/app/utils'
import { useRef } from 'react';
import { gsap, useGSAP } from '@/app/utils';
import { useMediaQuery } from '@/app/hooks'
const KeyFeatures = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery("(max-width: 768px)");

    useGSAP(() => {
        if (!isMobile) return;

        const container = ref.current;
        const cards = gsap.utils.toArray<HTMLElement>(".card");

        if (!container || !cards.length) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: "+=150%", // Increased to accommodate taller cards
                scrub: 1.5,
                pin: true,
                anticipatePin: 1,
                markers: false,
            },
        });

        // Update the translation distance based on card height
        cards.forEach((card, i) => {
            tl.to(card, {
                translateY: -320 * i, // Increased offset to prevent overlap
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "power2.out",
            }, `-=${0.2 * i}`);
        });

        // Move the container out of view AFTER all stacking is complete
        tl.to(container, {
            // y: "-100vh",
            duration: 1,
            ease: "power2.inOut",
        }, "+=0.5"); // Small delay before moving container

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Cleanup
    }, { scope: ref, revertOnUpdate: true });
    const cardBodyClasses = 'card box-border p-6 rounded-[24px] h-[340px] flex flex-col justify-between items-start bg-darkest_white border-darkest_white border-[1px] backdrop-blur-[80px]';

    return (
        <div className='w-full flex-col flex items-center justify-between h-[100vh] md:h-full mb-28 md:mb-0' ref={ref}>
            <h1 className='text-24 text-center font-bold mb-10 md:text-64 md:leading-[77px] text-white'>
                Key Features Overview
            </h1>
            <div className=' relative flex items-center justify-center w-full overflow-visible md:overflow-hidden h-[1200px] md:h-[100vh]'>
                <div className='absolute  top-[5%] xsm:top-[unset]  
                 w-[90vw] h-[90vw] 
                sm:w-[60vw] sm:h-[60vw]
                xl:w-[40vw] xl:h-[40vw] 
                bg-[#8266F214] backdrop-blur-[40px] rounded-full animate-pulse ' />
                <div className='w-full h-full relative md:hidden  ' >
                    {
                        KeyFeaturesData.map((item, index) => (
                            <div id={`card-${item.id}`} className={cn(cardBodyClasses, item?.style, 'overflow-hidden group')} key={`${item.title}${index}`}>
                                <div className="relative z-10">
                                    <div className='flex flex-col'>
                                        <div className={cn("mb-10 backdrop-blur-[64px] border-2 border-[#FFFFFF52] w-[40px] h-[40px] shadow-[inset_0px_4px_24px_0px_#FFFFFF66,inset_0px_8px_12px_0px_#FFFFFFB8]", index === 2 ? "rounded-[0_0_200px_0]" : index + 1 === KeyFeaturesData.length ? "rounded-[200px]" : "rounded-[0_200px_0_0]",
                                            {
                                                'rotate-270': item.rotation === 270,
                                                '-rotate-180': item.rotation === -180,
                                                'rotate-180': item.rotation === 180,
                                            }
                                        )} />
                                        <h4 className='text-20 text-white font-bold mb-6'>
                                            {item.title}
                                        </h4>
                                    </div>
                                    <ul className="list-none space-y-2">
                                        {
                                            item?.keyPoints.map((point, index) => {
                                                return (
                                                    <li className="flex  mb-3" key={`${point}${index}`}>
                                                        <span className="flex-shrink-0 mr-2 text-white" >
                                                            <RightArrowIcon />
                                                        </span>
                                                        <p className="text-16 text-white font-normal">{point}</p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='absolute z-20 md:flex w-full justify-center flex-wrap gap-6 md:px-20 2xl:px-48 hidden' >
                    {
                        KeyFeaturesData.map((item, index) => {
                            return (
                                <div className='flex flex-col justify-between bg-darkest_white backdrop-blur-[80px] w-[30%] px-4 py-6 rounded-[24px] overflow-hidden group' key={`${item.title}${index}`}>
                                    <div className="absolute inset-0 bg-darkest_white z-0"></div>
                                    <div className="absolute inset-0 bg-[url('/key-features-bg.png')] bg-no-repeat bg-cover bg-center opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 z-0"></div>

                                    <div className={` relative z-10 ${index === 5 ? "flex flex-col justify-end h-full" : ""}`}>
                                        <div className={`flex flex-col ${index === 5 ? "h-full justify-start" : ""}`}>
                                            <div className={cn("mb-10 backdrop-blur-[64px] border-2 border-[#FFFFFF52] w-[40px] h-[40px] shadow-[inset_0px_4px_24px_0px_#FFFFFF66,inset_0px_8px_12px_0px_#FFFFFFB8]", index === 2 ? "rounded-[0_0_200px_0]" : index + 1 === KeyFeaturesData.length ? "rounded-[200px]" : "rounded-[0_200px_0_0]",
                                                {
                                                    'rotate-270': item.rotation === 270,
                                                    '-rotate-180': item.rotation === -180,
                                                    'rotate-180': item.rotation === 180,
                                                }
                                            )} />
                                            <h4 className='text-20 text-white font-bold mb-6'>
                                                {item.title}
                                            </h4>
                                        </div>
                                        <ul className="list-none space-y-2">
                                            {
                                                item?.keyPoints.map((point, index) => {
                                                    return (
                                                        <li className="flex  mb-3" key={`${point}${index}`}>
                                                            <span className="flex-shrink-0 mr-2  text-white">
                                                                <RightArrowIcon />
                                                            </span>
                                                            <p className="text-16 text-white font-normal">{point}</p>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default KeyFeatures