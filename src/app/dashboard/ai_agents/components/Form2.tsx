/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import CustomAIAgentForm from "../create_new_agent/components/CustomAIAgentForm";
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
import {
  createAgent,
  TokenPair,
  TradingBotData,
  updateAgentById,
} from "@/app/api";
import { Toggle } from "@/app/components";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface AgentFormData {
  tolerance: Tolerance;
  investmentType: InvestmentType;
  poolAddresses?: string[];
  goalType: GoalType;
  tradingPreference: TradingPerformance;
  dcaPref: boolean;
  takeProfitStatus?: boolean;
  takeProfitPercentage: number;
  stopLossStatus?: boolean;
  stopLossPercentage: number;
  tradingAmount: number;
  dcaIterations?: number; // Make this optional
  dcaPercentage?: number;
  autoExit: boolean;
  isActive: boolean;
}

const Form2 = ({ agentData, agentId }: { agentData: any; agentId: string }) => {
  const router = useRouter();
  const [selectedPairs, setSelectedPairs] = useState<string[]>(
    agentData?.selectedPools?.map((item: TokenPair) => item.address) || []
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
      poolAddresses: [],
      goalType: undefined,
      tradingPreference: undefined,
      dcaPref: false,
      takeProfitStatus: false,
      takeProfitPercentage: undefined,
      stopLossStatus: false,
      stopLossPercentage: undefined,
      tradingAmount: undefined,
      dcaIterations: undefined,
      dcaPercentage: undefined,
      autoExit: false,
      isActive: false,
    },
  });

  const investType = watch("investmentType");

  useEffect(() => {
    setValue("poolAddresses", selectedPairs);
  }, [selectedPairs, setValue]);

  useEffect(() => {
    if (agentData) {
      setValue("tolerance", agentData.tolerance);
      setValue("investmentType", agentData.investmentType);
      setValue("poolAddresses", agentData.poolAddresses);
      setValue("goalType", agentData.goalType);
      setValue("tradingPreference", agentData.tradingPreference);
      setValue("dcaPref", agentData.dcaPref);
      setValue("takeProfitStatus", agentData.takeProfitStatus);
      setValue("takeProfitPercentage",agentData.takeProfitPercentage);
      setValue("stopLossStatus", agentData.stopLossStatus);
      setValue("stopLossPercentage", agentData.stopLossPercentage);
      setValue("tradingAmount",agentData.tradingAmount);
      setValue("dcaPercentage", agentData.dcaPercentage);
      setValue("dcaIterations", agentData.dcaIterations);
      setValue("autoExit", agentData.autoExit);
      setValue("isActive", agentData.isActive);
    }
  }, [agentData, setValue]);

  const { mutateAsync: createAgentMutation } = useMutation<any, Error, any>({
    mutationFn: async (data: TradingBotData) => createAgent(data),
  });

  const { mutateAsync: updateAgentMutation } = useMutation<any, Error, any>({
    mutationFn: async (data: TradingBotData) =>
      updateAgentById(data, agentId ?? ""),
  });

  const handleFinalSubmit = async (finalFormData: AgentFormData) => {
    try {
      // Submit the agent data with the final form data passed directly
      if (agentId) {
        await updateAgentMutation({
          ...finalFormData,
          poolAddresses:
            investType === InvestmentType.SELECTED_POOL ? selectedPairs : [],
        });
        successToast("Agent successfully updated!");
      } else {
        await createAgentMutation({
          ...finalFormData,
          poolAddresses:
            investType === InvestmentType.SELECTED_POOL ? selectedPairs : [],
        });
        successToast("Agent successfully created!");
      }
      router.push('/dashboard/ai_agents')
    } catch (error) {
      console.error("Error during agent creation/update:", error);
    }
  };

  const onSubmit = async (data: AgentFormData) => {
    try {
      const updatedFormData = {
        ...agentFormData,
        tolerance: data.tolerance,
        investmentType: data.investmentType,
        poolAddresses: selectedPairs,
        goalType: data.goalType,
        tradingPreference: data.tradingPreference,
        dcaPref: data.dcaPref,
        takeProfitStatus: true,
        takeProfitPercentage: data.takeProfitPercentage,
        stopLossStatus: true,
        stopLossPercentage: data.stopLossPercentage,
        autoExit: data.autoExit,
        tradingAmount: data.tradingAmount,
        dcaIterations:data.dcaIterations ? data.dcaIterations : 0,
        dcaPercentage:data.dcaPercentage ? data.dcaPercentage : 0,
        isActive: data.isActive,
      };
      if (
        Object.values(updatedFormData).some(
          (value) => value === undefined || value === null
        )
      ) {
        throw new Error("Some form values are missing or invalid.");
      }

      // Update the agentFormData using the setter function
      await setAgentFormData(updatedFormData);

      // Call handleFinalSubmit with the updated form data
      await handleFinalSubmit(updatedFormData);
    } catch (error: any) {
      console.error("Error during form submission:", error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full   mb-4">
      <div className="flex justify-between flex-col-reverse lg:flex-row">
        <CustomAIAgentForm
          register={register}
          control={control}
          errors={errors}
          watch={watch}
          selectedPairs={selectedPairs}
          setSelectedPairs={setSelectedPairs}
        />
      </div>
      <div className="text-white absolute  w-full flex gap-2 justify-end">
        <Toggle
          register={register("isActive")}
          errors={errors}
          fieldName="isActive"
        />
        <h1 className="h-5">Activate</h1>
      </div>
      <div className="my-10" />
      <button
        type="submit"
        className={`absolute right-0 border text-white border-gray_border p-4 flex gap-2 items-center rounded-[80px] text-[14px] lg:text-[16px] font-medium bg-button-gradient justify-center h-12 w-full lg:w-[168px]`}
      >
        Finish
      </button>
    </form>
  );
};

export default Form2;
