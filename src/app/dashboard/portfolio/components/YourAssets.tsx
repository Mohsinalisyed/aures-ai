'use client'
import React from "react";
import { WrappedItem } from "../../component";
import { Bitcoin, BitcoinToken, LiraToken } from "@/app/svg";

const YourAssets = () => {
  return (
    <div className="border-0 lg:border border-gray_border lg:p-4 rounded-[20px] min-h-[250px]">
      <h1 className="text-white text-[24px] font-bold mb-5">Your Assets</h1>

      <div className="flex flex-col w-full">
        {/* Row 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <div className="p-1 asset_card">
            <WrappedItem
              heading="Token Name"
              subHeading="ABC"
              icon={<BitcoinToken />}
              style="flex-col"
              textAlign="text-center"
            />
            <WrappedItem
              heading={`$123.45`}
              subHeading="-0.00"
              textAlign="text-center"
            />
            <div className="text-center text-white">$12.3B</div>
          </div>

          <div className="p-1 asset_card">
            <WrappedItem
              heading="Token Name"
              subHeading="ABC"
              icon={<Bitcoin />}
              style="flex-col"
              textAlign="text-center"
            />
            <WrappedItem
              heading={`$123.45`}
              subHeading="-0.00"
              textAlign="text-center"
            />
            <div className="text-center text-white">$12.3B</div>
          </div>

          <div className="p-1 asset_card">
            <WrappedItem
              heading="Token Name"
              subHeading="ABC"
              icon={<LiraToken />}
              style="flex-col"
              textAlign="text-center"
            />
            <WrappedItem
              heading={`$123.45`}
              subHeading="-0.00"
              textAlign="text-center"
            />
            <div className="text-center text-white">$12.3B</div>
          </div>

          <div className="p-1 asset_card">
            <WrappedItem
              heading="Token Name"
              subHeading="ABC"
              icon={<Bitcoin />}
              style="flex-col"
              textAlign="text-center"
            />
            <WrappedItem
              heading={`$123.45`}
              subHeading="-0.00"
              textAlign="text-center"
            />
            <div className="text-center text-white">$12.3B</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourAssets;
