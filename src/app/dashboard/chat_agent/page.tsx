"use client";
import React, { useState } from "react";
import { RefundCard } from "../ai_agents/create_new_agent/components";
import { DropDownIcon, UpwardIcon } from "@/app/svg";
import { Activity, Holding, CopyButton } from "../component";

const ChatAgent = () => {
  const [showDetail, setShowDetail] = useState(true);

  return (
    <div className="lg:px-16 lg:pb-4 text-white">
      <div className="bg-darkest_white p-[10px] sm:p-0 sm:bg-transparent flex flex-col-reverse sm:flex-col rounded-[12px] mt-4 sm:mt-0">
        {showDetail && (
          <div className="w-full sm:w-[423px]">
            <RefundCard />
          </div>
        )}
        <div className="w-full sm:w-[423px] mt-4 rounded-[12px] p-0 sm:p-[10px] bg-transparent sm:bg-darkest_white">
          <div className="flex justify-between text-white pb-4 text-[20px]">
            <span>Balance</span>
            <span className="font-bold">$24.7800</span>
          </div>
          <div className="flex justify-between text-white text-[20px]">
            <span>Address</span>
            <CopyButton textToCopy="BNr1...LkYT" />
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
      <div className="flex gap-4 mt-4">
        <Holding />
        <Activity />
      </div>
    </div>
  );
};

export default ChatAgent;
