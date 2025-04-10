'use client'
import React from "react";
import { WrappedItem } from "../../component";
import { BitcoinToken} from "@/app/svg";
import { useQuery } from "@tanstack/react-query";
import { getPortfolio } from "@/app/api/porfolio";
import Image from "next/image";

const YourAssets = () => {
    const { data, isLoading } = useQuery({
      queryKey: ["portfolio"],
      queryFn: getPortfolio,
    });
  return (
    <div className="border-0 lg:border border-gray_border lg:p-4 rounded-[20px] min-h-[250px]">
      <h1 className="text-white text-[24px] font-bold mb-5">Your Assets</h1>

      <div className="flex flex-col w-full">
        {/* Row 1 */}
        {isLoading ? (
          <div className="text-white flex justify-center items-center min-h-[150px] w-full">
            Loading...
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {data && data.tokens && data.tokens && data.tokens.length > 0 ? (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              data.tokens.slice(0, 4).map((item: any) => {
                return (
                  <div className="p-1 asset_card" key={item.tokenAddress}>
                    <WrappedItem
                      heading={item.name.slice(0, 6)}
                      subHeading={item.symbol}
                      icon={
                        !!item.logo ? (
                          <Image
                            src={item.logo}
                            alt=""
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                        ) : (
                          <BitcoinToken />
                        )
                      }
                      style="flex-col"
                      textAlign="text-center"
                    />
                    <div className="text-center text-white">
                      ${item?.balance.slice(0, 6)}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-white flex justify-center items-center min-h-[150px]">
                No tokens available.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default YourAssets;
