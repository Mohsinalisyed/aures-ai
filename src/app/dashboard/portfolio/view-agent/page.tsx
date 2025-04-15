'use client'
import React, { useState } from 'react'
import { TransactionHistory, YourAssets } from '../components'
import { BackwardArrow, DropDownIcon, UpwardIcon, WalletIcon } from '@/app/svg';
import { truncateAddress } from '@/app/utils';
import { useQuery } from '@tanstack/react-query';
import { getAgentById } from '@/app/api';
import { useRouter, useSearchParams } from 'next/navigation';
import { CopyButton, RefundCard } from '../../component';

const ViewAgent = () => {
    const router=useRouter()
      const searchParams = useSearchParams();
      const agentId = searchParams.get("agentId");
    const [showWithdraw, setShowWithdraw] = useState(true)
      const [showDetail, setShowDetail] = useState(true);
    
     const { data,isLoading } = useQuery({
       queryKey: ["getagentid", agentId],
       queryFn: () => getAgentById(agentId as string),
       enabled: !!agentId,
     });
  return (
    <div className="max-w-[1920px] mx-auto lg:pl-16">
      <div className="lg:pt-20 text-white text-[24px] lg:text-[40px] font-bold flex justify-between lg:items-center flex-col lg:flex-row gap-4">
        <div className="flex gap-4 text-white items-center">
          <button
            onClick={() => {
              router.push("/dashboard/portfolio");
            }}
          >
            <BackwardArrow />
          </button>
          View Agent
        </div>
        {agentId && (
          <button
            type="button"
            className="h-10 w-[203px] px-4 font-medium text-[20px]  text-white border-darker_white border rounded-3xl flex items-center gap-2 justify-center"
            onClick={() => setShowWithdraw(!showWithdraw)}
          >
            <WalletIcon /> {truncateAddress(data?.walletPublicKey)}
            {showWithdraw ? <UpwardIcon /> : <DropDownIcon />}
          </button>
        )}
      </div>
      <div className="flex gap-4 w-full md:flex-row flex-col-reverse">
        <div className="text-white mt-8 w-full">
          <YourAssets />
        </div>
        <div className="mt-8">
          {showWithdraw && !isLoading && (
            <div className="ml-0 lg:ml-5 bg-darkest_white p-[10px] sm:p-0 sm:bg-transparent flex flex-col-reverse sm:flex-col rounded-[12px] mt-4 sm:mt-0">
              {showDetail && (
                <div className="w-full sm:w-[423px]">
                  <RefundCard
                    showWithdraw
                    balance={`${parseFloat(data.tradingAmount).toFixed(2)}`}
                  />
                </div>
              )}
              <div className="w-full sm:w-[423px] mt-4 rounded-[12px] p-0 sm:p-[10px] bg-transparent sm:bg-darkest_white">
                <div className="flex justify-between text-white pb-4 text-[20px]">
                  <span>Balance</span>
                  <span className="font-bold">
                    ${parseFloat(data.tradingAmount).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-white text-[20px]">
                  <span>Address</span>
                  <CopyButton textToCopy={data?.walletPublicKey} />
                </div>
                <div
                  className="text-white text-[20px] mt-4 text-center flex justify-center items-center gap-2 lg:hidden"
                  onClick={() => setShowDetail(!showDetail)}
                >
                  <span>Details</span>
                  <span>{!showDetail ? <DropDownIcon /> : <UpwardIcon />}</span>
                </div>
                          </div>
            </div>
          )}
        </div>
      </div>
      <div className="my-4 text-white">
        <TransactionHistory />
      </div>
    </div>
  );
}

export default ViewAgent