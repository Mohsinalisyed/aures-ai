"use client";
import { CSSProperties, ReactNode, useState } from "react";

interface TooltipProps {
  text?: string;
  children: ReactNode;
  style?: CSSProperties;
  content?: ReactNode;
}

export const Tooltip = ({ content, text, children, style }: TooltipProps) => {
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
        <div className="absolute bottom-full  left-1/2 transform -translate-x-1/2 bg-primary p-1 rounded-[8px] z-10 min-w-max">
          <div className="max-w-[300px]">
            {content ? (
              content
            ) : (
              <p className="text-white font-medium text-14 z-10 relative">
                {text}
              </p>
            )}
          </div>
          <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rotate-45 z-0"></div>
        </div>
      )}
    </div>
  );
};
