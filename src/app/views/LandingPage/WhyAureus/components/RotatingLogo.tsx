import React from 'react'

export const RotatingLogo = () => {
    return (
        <>
            <div className='flex flex-row gap-2'>
                <div className='backdrop-blur-[64px] border-2 border-[#FFFFFF52] w-[115px] h-[115px] md:w-[214px] md:h-[214px] shadow-[inset_0px_4px_24px_0px_#FFFFFF66,inset_0px_8px_12px_0px_#FFFFFFB8] rounded-[0_200px_0_0] rotate-[65deg]' />
                <div className='backdrop-blur-[64px] border-2 border-[#FFFFFF52] w-[115px] h-[115px] md:w-[214px] md:h-[214px] shadow-[inset_0px_4px_24px_0px_#FFFFFF66,inset_0px_8px_12px_0px_#FFFFFFB8] rounded-[0_200px_0_0] rotate-[150deg]' />
            </div>
            <div className='flex flex-row gap-2'>
                <div className='backdrop-blur-[64px] border-2 border-[#FFFFFF52] w-[115px] h-[115px] md:w-[214px] md:h-[214px] shadow-[inset_0px_4px_24px_0px_#FFFFFF66,inset_0px_8px_12px_0px_#FFFFFFB8] rounded-[0_200px_0_0] rotate-[320deg] mt-[-12px]' />
                <div className='backdrop-blur-[64px] border-2 border-[#FFFFFF52] w-[115px] h-[115px] md:w-[214px] md:h-[214px] shadow-[inset_0px_4px_24px_0px_#FFFFFF66,inset_0px_8px_12px_0px_#FFFFFFB8] rounded-[0_200px_0_0] rotate-[240deg]' />
            </div>
        </>
    )
}

