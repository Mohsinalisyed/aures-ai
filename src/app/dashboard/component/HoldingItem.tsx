import React from "react";

interface HoldingItemProps {
  tokenSymbol: React.ReactNode; // Can be an SVG component or image
  tokenName: string;
  tokenPrice: string;
    tokenBalance: string;
    tokenDetail:string
}

const HoldingItem: React.FC<HoldingItemProps> = ({
  tokenSymbol,
  tokenName,
  tokenPrice,
  tokenBalance,
  tokenDetail,
}) => {
  return (
    <div className="flex justify-between items-center mb-[18px]">
      <div className="flex items-center gap-2">
        {tokenSymbol}
        <div>
          <h1 className="text-[12px] font-medium text-white">{tokenName}</h1>
          <h1 className="text-[12px] text-gray-400">{tokenDetail}</h1>
        </div>
      </div>
      <div className="text-right">
        <h1 className="text-[12px] font-medium text-white ">{tokenPrice}</h1>
        <h1 className="text-[12px] text-gray-400">{tokenBalance}</h1>
      </div>
    </div>
  );
};

export default HoldingItem;
