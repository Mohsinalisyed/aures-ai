"use client";
import React, { useState } from "react";
import { RefundCard } from "../ai_agents/create_new_agent/components";
import { DropDownIcon, UpwardIcon } from "@/app/svg";
import { Activity, Holding, CopyButton } from "../component";
import AIChatAgent from "@/app/views/LandingPage/AiAgents/components/AiAgentChat";

const ChatAgent = () => {
  const [showDetail, setShowDetail] = useState(true);

  return (
    <div className="lg:px-16 lg:pb-4 text-white">
      <div className="flex flex-col md:flex-row mt-6">
        <div className="bg-darkest_white p-[10px] w-full sm:w-[50%] sm:p-0 sm:bg-transparent flex flex-col-reverse sm:flex-col rounded-[12px] mt-4 sm:mt-0">
          <div className="text-white pt-[49px] lg:pt-[16px] text-[32px] font-bold mb-[24px] hidden sm:block">
            BTC Trading Agent
          </div>
          {showDetail && (
            <div className="w-full">
              <RefundCard showWithdraw agentId="" />
              <div className="flex sm:hidden gap-4 mt-4 flex-col sm:flex-row">
                <Holding />
                <Activity />
              </div>
            </div>
          )}

          <div className="w-full  mt-4 rounded-[12px] p-0 sm:p-[10px] bg-transparent sm:bg-darkest_white">
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
          <div className="hidden sm:flex gap-4 mt-4 ">
            <Holding />
            <Activity />
          </div>
        </div>
        <div className="w-full sm:w-[50%] mt-4 sm:mt-0">
          <AIChatAgent isDashboardChat />
        </div>
      </div>
    </div>
  );
};

export default ChatAgent;
