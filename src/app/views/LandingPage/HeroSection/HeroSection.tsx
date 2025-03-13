import React from 'react'
import { LogoIcon, StarIcon, SecureIcon, SettingsIcon, TickIcon, ElectricityIcon } from '@/app/components/Icons'

const HeroSection = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-[90vh] md:pt-10 md:min-h-[95vh] h-full ' id={"home"}>
            <div className='hidden md:block'>
                <LogoIcon />
            </div>
            <div className='w-full flex justify-center items-center mx-auto md:mt-10 rounded-[40px] h-full flex-grow relative'>
                {/* 
                <div className='absolute bg-[url(/hero-section-bg.png)] mix-blend-color-burn bg-no-repeat bg-cover  w-full h-full inset-0 z-10 '>
                </div> */}
                <div className="absolute 
                w-[90vw] h-[90vw] 
                sm:w-[60vw] sm:h-[60vw]
                xl:w-[30vw] xl:h-[30vw] 
                bg-[#8266F214] backdrop-blur-[40px] 
                rounded-full animate-pulse z-0" />   
                    
                         <div className='absolute w-full  h-[40%] z-0 md:w-[20%] md:h-[40%] bg-primary blur-[200px] rounded-full' />

                <div className='w-full h-full inset-0 z-20'>
                    <div className='flex flex-col items-center justify-center mx-auto mb-10 z-20 w-full h-full'>
                        <div className='flex flex-col items-center md:flex-row justify-center gap-4 '>
                            <h1 className='text-20 sm:text-40 md:text-64 text-white font-bold text-center'>Your Money-Driven AI Agent</h1>
                            <StarIcon />
                        </div>
                        <p className='text:16 md:text-20 text-white text-center max-w-[1170px] mt-6 md:mt-0'>Empower your financial future with an autonomous AI that identifies lucrative opportunities, executes trades,and grows with you.</p>
                    </div>
                </div>
                <div className='absolute bottom-[75%] left-[0%] 3xl:left-[10%] md:bottom-[70%] 3xl:bottom-[65%] translate-x-0 z-10 '>
                    <button className="p-2 gap-2 flex rotate-[-5deg] items-center justify-center bg-darkest_white text-white text-16 shadow-[inset_0px_4px_12px_0px_#FFFFFF66,inset_0px_4px_8px_0px_#FFFFFFB8] rounded-2xl transition-shadow duration-500 ease-in-out hover:shadow-[inset_0px_0px_12px_0px_#FFFFFF,0px_0px_24px_0px_#FFFFFF40] ">
                        <SecureIcon />
                        Secure
                    </button>
                </div>
                <div className='absolute z-0 left-[5%] bottom-[12%] md:left-[20%] 3xl:left-[22%] md:bottom-[15%] 3xl:bottom-[15%] translate-x-0 '>
                    <button className="p-2 gap-2 flex rotate-[-5deg] items-center justify-center bg-darkest_white text-white text-16 shadow-[inset_0px_4px_12px_0px_#FFFFFF66,inset_0px_4px_8px_0px_#FFFFFFB8] rounded-2xl transition-shadow duration-500 ease-in-out hover:shadow-[inset_0px_0px_12px_0px_#FFFFFF,0px_0px_24px_0px_#FFFFFF40]">
                        <TickIcon />
                        Reliable
                    </button>
                </div>
                <div className='absolute z-0 top-[18%] right-[5%] md:right-[20%] 3xl:right-[22%] md:top-[15%] 3xl:top-[15%] translate-x-0 '>
                    <button className="p-2 gap-2 flex rotate-[5deg] items-center justify-center bg-darkest_white text-white text-16 shadow-[inset_0px_4px_12px_0px_#FFFFFF66,inset_0px_4px_8px_0px_#FFFFFFB8] rounded-2xl transition-shadow duration-500 ease-in-out hover:shadow-[inset_0px_0px_12px_0px_#FFFFFF,0px_0px_24px_0px_#FFFFFF40]">
                        <SettingsIcon />
                        Controlled
                    </button>
                </div>
                <div className='absolute z-0 right-[15%] 3xl:right-[10%] bottom-[20%] 3xl:bottom-[30%] translate-x-0 '>
                    <button className="p-2 gap-2 flex rotate-[5deg] items-center justify-center bg-darkest_white text-white text-16 shadow-[inset_0px_4px_12px_0px_#FFFFFF66,inset_0px_4px_8px_0px_#FFFFFFB8] rounded-2xl transition-shadow duration-500 ease-in-out hover:shadow-[inset_0px_0px_12px_0px_#FFFFFF,0px_0px_24px_0px_#FFFFFF40]">
                        <ElectricityIcon />
                        Efficient
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection