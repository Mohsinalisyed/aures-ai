"use client";
import React from "react";
import { CopyButton, WrappedItem } from "../../component";
import { LiraToken } from "@/app/svg";
import { useQuery } from "@tanstack/react-query";
import { getTransaction } from "@/app/api/transaction";
import { TradeHistory } from "../type";
import { ForwardIcon } from "@/app/components/Icons";
import Image from "next/image";

const TransactionHistory = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["transaction"],
    queryFn: getTransaction,
  });
  return (
    <div className="bg-darkest_white py-2 px-2 lg:px-4  rounded-[20px]">
      <h1 className="text-white text-[24px] font-bold mb-6">
        Transaction History
      </h1>

      {isLoading ? (
        <div className="text-white flex justify-center items-center h-[49vh]">
          Loading...
        </div>
      ) : data && data?.transactions.length > 0 ? (
        <table className="text-left w-full">
          <tbody
            className="bg-grey-light flex flex-col items-center justify-between overflow-hidden lg:overflow-y-scroll w-full min-h-[60vh] lg:min-h-[43vh]"
            style={{ maxHeight: "43vh" }}
          >
            {data.transactions?.map((trns: TradeHistory) => (
              <tr
                key={trns.id}
                className="flex justify-between w-full py-3 mb-1 min-h-[70px]"
              >
                <td>
                  <div className={`flex items-center justify-center gap-1 `}>
                    {!!trns.fromToken.logoUrl ? (
                      <Image
                        src={trns.fromToken.logoUrl}
                        alt="Profile"
                        className="h-8 w-8 object-cover"
                        width={100}
                        height={100}
                        unoptimized
                        priority
                      />
                    ) : (
                      <LiraToken />
                    )}
                    <div>
                      <p
                        className={` text-white text-[14px] lg:text-[16px] leading-[120%] mb-1 `}
                      >
                        {trns.fromToken.name}
                      </p>
                      <p
                        className={`text-sub_heading_color text-[14px] lg:text-[16px] leading-[120%]`}
                      >
                        {trns.fromToken.symbol}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="flex items-center justify-center">
                  <ForwardIcon />
                </td>
                <td>
                  <div className={`flex items-center justify-center gap-1 `}>
                    {!!trns.toToken.logoUrl ? (
                      <Image
                        src={trns.toToken.logoUrl}
                        alt="Profile"
                        className="h-8 w-8 object-cover bg-primary rounded-full"
                        width={100}
                        height={100}
                        unoptimized
                        priority
                      />
                    ) : (
                      <LiraToken />
                    )}
                    <div>
                      <p
                        className={` text-white text-[14px] lg:text-[16px] leading-[120%] mb-1 `}
                      >
                        {trns.toToken.name}
                      </p>
                      <p
                        className={`text-sub_heading_color text-[14px] lg:text-[16px] leading-[120%]`}
                      >
                        {trns.toToken.symbol}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <WrappedItem
                    heading={`$${parseFloat(trns.usdValue).toFixed(4)}`}
                    fontNormal
                  />
                </td>
                <td>
                  <CopyButton textToCopy={trns.txHash} />
                </td>
                <td className="text-white">
                  <a
                    href={`https://etherscan.io/tx/${trns.txHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary rounded-[24px] mr-2 px-2 py-[4px] text-[10px] 2xl:text-[14px] leading-[19px] hover:underline"
                  >
                    View on explorer
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-white flex justify-center items-center h-[49vh]">
          No Transaction Found
        </div>
      )}
      <div className="block md:hidden">
        <h1 className="text-primary text-center">View More</h1>
      </div>
    </div>
  );
};

export default TransactionHistory;
