'use client'
import { CSSProperties, useState } from "react";

export const Tooltip = ({ text, children,style }: { text: string; children: React.ReactNode ,style?: CSSProperties; }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={style} 
        >
            {children}
            {isHovered && (
                <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 bg-primary py-1 px-3 rounded-[40px] z-10 min-w-max">
                    <p className="text-white font-medium text-14 z-10 relative">
                        {text}
                    </p>
                    <div className="absolute bottom-[-5px] left-1/2  transform -translate-x-1/2 w-3 h-3 bg-primary rotate-45 z-0"></div>
                </div>
            )}
        </div>
    );
};



