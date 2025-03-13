import React from "react";

interface WrappedItemProps {
  heading: string | number;
  subHeading: string | number;
    icon?: React.ReactNode; // Corrected type for icon
    style?: string
    textAlign?:string
}

const WrappedItem: React.FC<WrappedItemProps> = ({
  heading,
  subHeading,
    icon,
    style,
    textAlign
}) => {
  return (
    <div className={`flex items-center justify-center gap-1 ${style}`}>
      {icon && <span>{icon}</span>}
      <div>
        <p
          className={`font-bold text-white text-[14px] lg:text-[16px] leading-[120%] mb-2 ${textAlign}`}
        >
          {heading}
        </p>
        <p
          className={`text-sub_heading_color text-[14px] lg:text-[16px] leading-[120%]  ${textAlign}`}
        >
          {subHeading}
        </p>
      </div>
    </div>
  );
};

export default WrappedItem;
