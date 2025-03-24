/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { CopyIcon, DropDownIcon, UpwardIcon } from "@/app/svg";
import CustomAIAgentForm from "../create_new_agent/components/CustomAIAgentForm";
import { RefundCard } from "../create_new_agent/components";
import { useForm } from "react-hook-form";
import {
  GoalType,
  InvestmentType,
  successToast,
  Tolerance,
  TradingPerformance,
} from "@/app/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { form2Schema } from "../type";
import { useAgentFormData } from "@/app/hooks";
import { createAgent, TokenPair, TradingBotData, updateAgentById } from "@/app/api";
import { Toggle } from "@/app/components";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface AgentFormData {
  tolerance: Tolerance;
  investmentType: InvestmentType;
  pairAddresses?: string[]; // Make this non-optional
  goalType: GoalType;
  tradingPreference: TradingPerformance;
  dcaPref: boolean;
  takeProfitStatus?: boolean;
  takeProfitPercentage: number;
  stopLossStatus?: boolean;
  stopLossPercentage: number;
  autoExit: boolean;
  isActive: boolean;
}
const Form2 = ({ data, agentId }: { data: any, agentId: string }) => {
    const router =useRouter()
  const [selectedPairs, setSelectedPairs] = useState<string[]>(
    data && data?.selectedPairs.length > 0
      ? data?.selectedPairs.map((item: TokenPair) => item.address)
      : []
  );
  const { agentFormData, setAgentFormData } = useAgentFormData();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    setValue,
  } = useForm<AgentFormData>({
    resolver: zodResolver(form2Schema),
    defaultValues: {
      tolerance: undefined,
      investmentType: undefined,
      pairAddresses: [],
      goalType: undefined,
      tradingPreference: undefined,
      dcaPref: false,
      takeProfitStatus: false,
      takeProfitPercentage: 0,
      stopLossStatus: false,
      stopLossPercentage: 0,
      autoExit: false,
      isActive: false,
    },
  });
  const investType = watch("investmentType");

  useEffect(() => {
    if (data) {
      setValue("tolerance", data.tolerance);
      setValue("investmentType", data.investmentType);
      setValue("pairAddresses", data.pairAddresses);
      setValue("goalType", data.goalType);
      setValue("tradingPreference", data.tradingPreference);
      setValue("dcaPref", data.dcaPref);
      setValue("takeProfitStatus", data.takeProfitStatus);
      setValue("takeProfitPercentage", parseInt(data.takeProfitPercentage));
      setValue("stopLossStatus", data.stopLossStatus);
      setValue("stopLossPercentage", parseInt(data.stopLossPercentage));
      setValue("autoExit", data.autoExit);
      setValue("isActive", data.isActive);
    }
  }, [data, setValue]);
  
    const [showDetail, setShowDetail] = useState(true);
      const { mutateAsync: createAgentMutation } = useMutation<any, Error, any>(
        {
          mutationFn: async (data: TradingBotData) => {
            return createAgent(data);
          },
        }
      );

      const { mutateAsync: updateAgentMutation } = useMutation<any, Error, any>(
        {
          mutationFn: async (data: TradingBotData) => {
            return updateAgentById(data, agentId ?? "");
          },
        }
      );

      const handleFinalSubmit = async () => {
        try {
          const formData = { ...agentFormData };

          // Submit the agent data
          if (agentId) {
            await updateAgentMutation({
              ...formData,
              pairAddresses:
                investType === InvestmentType.SELECTED_PAIRS
                  ? selectedPairs
                  : [],
            });
          } else {
            await createAgentMutation({
              ...formData,
              pairAddresses:
                investType === InvestmentType.SELECTED_PAIRS
                  ? selectedPairs
                  : [],
            });
          }

          successToast("Agent successfully created or updated!");
          router.push("/dashboard/ai_agents");
        } catch (error) {
          console.error("Error during agent creation/update:", error);
        }
      };
  const onSubmit = async (data: AgentFormData) => {
    await setAgentFormData({
      ...agentFormData,
      tolerance: data.tolerance,
      investmentType: data.investmentType,
      pairAddresses: selectedPairs,
      goalType: data.goalType,
      tradingPreference: data.tradingPreference,
      dcaPref: data.dcaPref,
      takeProfitStatus: true,
      takeProfitPercentage: data.takeProfitPercentage,
      stopLossStatus: true,
      stopLossPercentage: data.stopLossPercentage,
      autoExit: data.autoExit,
      isActive: data.isActive,
    });
      await handleFinalSubmit()
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex justify-between flex-col-reverse lg:flex-row">
        <CustomAIAgentForm
          register={register}
          control={control}
          errors={errors}
          watch={watch}
          selectedPairs={selectedPairs}
          setSelectedPairs={setSelectedPairs}
        />

        <div className="bg-darkest_white p-[10px] sm:p-0 sm:bg-transparent flex flex-col-reverse sm:flex-col rounded-[12px] mt-4 sm:mt-0">
          {showDetail && <RefundCard />}
          <div className="w-full sm:w-[353px] mt-4 rounded-[12px] p-0 sm:p-[10px] bg-transparent sm:bg-darkest_white">
            <div className="flex justify-between text-white pb-4 text-[20px]">
              <span>Balance</span>
              <span className="font-bold">$24.7800</span>
            </div>
            <div className="flex justify-between text-white text-[20px]">
              <span>Address</span>
              <span className="flex items-center gap-2">
                BNr1...LkYT <CopyIcon />
              </span>
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
      </div>
     <div className="text-white pt-[34px] text-[40px] flex justify-end items-center">
        <div className="lg:pt-[32px] w-full flex justify-end">
          <div className="w-full flex justify-end flex-col items-end">
            <div className="w-full lg:w-[168px] flex items-center justify-end gap-2 text-16 mb-8 sm:mb-4">
              <Toggle
                register={register("isActive")}
                errors={errors}
                fieldName="isActive"
              />
              Activate
            </div>
            <button
              type="submit"
              className={`border border-gray_border p-4 flex gap-2 items-center rounded-[80px] text-[14px] lg:text-[16px] font-medium bg-primary justify-center h-12 w-full lg:w-[168px]`}
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form2;
