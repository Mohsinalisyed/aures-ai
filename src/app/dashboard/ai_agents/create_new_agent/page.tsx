
"use client"; 
import { BackwardArrow, DropDownIcon, UpwardIcon, WalletIcon} from "@/app/svg";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, } from "react";
import {  useQuery } from "@tanstack/react-query";
import {getAgentById} from "@/app/api";
import Form2 from "../components/Form2";
import Form1 from "../components/Form1";
import { truncateAddress } from "@/app/utils";
import { RefundCard } from "./components";
import { CopyButton, Holding } from "../../component";

const CreateNewAgent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const agentId = searchParams.get("agentId");
  const [customForm, setCustomForm] = useState(1);
  const [showWithdraw, setShowWithdraw]=useState(false)
  const [showDetail, setShowDetail] = useState(true);


  const { data } = useQuery({
    queryKey: ["getagentbyid", agentId],
    queryFn: () => getAgentById(agentId as string),
    enabled: !!agentId,
  });


  return (
    <div className="lg:px-16 lg:py-12 pb-2">
      <div className="text-white text-[24px] lg:text-[40px] font-bold flex justify-between lg:items-center flex-col lg:flex-row gap-4">
        <div className="flex gap-4 text-white items-center">
          <button
            onClick={() => {
              if (customForm === 2) {
                setCustomForm(1);
              } else {
                router.push("/dashboard/ai_agents");
              }
            }}
          >
            <BackwardArrow />
          </button>
          Create New Agent
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
      <div className="flex justify-between relative flex-col-reverse lg:flex-row ">
        {customForm === 1 && (
          <Form1 setCustomForm={setCustomForm} data={data} />
        )}
        {customForm === 2 && <Form2 agentData={data} agentId={agentId ?? ""} />}
        {showWithdraw && (
          <div className="ml-0 lg:ml-5 bg-darkest_white p-[10px] sm:p-0 sm:bg-transparent flex flex-col-reverse sm:flex-col rounded-[12px] mt-4 sm:mt-0">
            {showDetail && (
              <div className="w-full sm:w-[423px]">
                <RefundCard
                  showWithdraw
                  balance={parseFloat(data.tradingAmount).toFixed(4)}
                  agentId={agentId ?? ''}
                />
                <div className="flex sm:hidden gap-4 mt-4 font-bold">
                  <Holding />
                </div>
              </div>
            )}
            <div className="w-full sm:w-[423px] mt-4 rounded-[12px] p-0 sm:p-[10px] bg-transparent sm:bg-darkest_white">
              <div className="flex justify-between text-white pb-4 text-[20px]">
                <span>Balance</span>
                <span className="font-bold">
                  ${parseFloat(data.tradingAmount).toFixed(4)}
                </span>
              </div>
              <div className="flex justify-between text-white text-[20px]">
                <span>Address</span>
                <CopyButton textToCopy={data.walletPublicKey} />
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateNewAgent;