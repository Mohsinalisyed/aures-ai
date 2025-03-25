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
  poolAddresses?: string[]; // Make this non-optional
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
const Form2 = ({ data, agentId }: { data: any; agentId: string }) => {
  const router = useRouter();
  const [selectedPairs, setSelectedPairs] = useState<string[]>(
    data && data?.selectedPools?.length > 0
      ? data?.selectedPools.map((item: TokenPair) => item.address)
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
      poolAddresses: [],
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
    setValue("poolAddresses", selectedPairs);
  }, [selectedPairs, setValue]);

  useEffect(() => {
    if (data) {
      setValue("tolerance", data.tolerance);
      setValue("investmentType", data.investmentType);
      setValue("poolAddresses", data.poolAddresses);
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
  console.log(errors, "errors");
  const { mutateAsync: createAgentMutation } = useMutation<any, Error, any>({
    mutationFn: async (data: TradingBotData) => {
      return createAgent(data);
    },
  });

  const { mutateAsync: updateAgentMutation } = useMutation<any, Error, any>({
    mutationFn: async (data: TradingBotData) => {
      return updateAgentById(data, agentId ?? "");
    },
  });
  const handleFinalSubmit = async () => {
    try {
      const formData = { ...agentFormData };

      // Submit the agent data
      if (agentId) {
        await updateAgentMutation({
          ...formData,
          poolAddresses:
            investType === InvestmentType.SELECTED_POOL ? selectedPairs : [],
        });
        successToast("Agent successfully updated!");
      } else {
        await createAgentMutation({
          ...formData,
          poolAddresses:
            investType === InvestmentType.SELECTED_POOL ? selectedPairs : [],
        });
        successToast("Agent successfully created!");
      }

      router.push("/dashboard/ai_agents");
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
        isActive: data.isActive,
      };

      if (
        Object.values(updatedFormData).some(
          (value) => value === undefined || value === null
        )
      ) {
        throw new Error("Some form values are missing or invalid.");
      }

      await setAgentFormData(updatedFormData);

      await handleFinalSubmit();
    } catch (error: any) {
      console.error("Error during form submission:", error.message);
    }
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
        className={`absolute right-0 border text-white border-gray_border p-4 flex gap-2 items-center rounded-[80px] text-[14px] lg:text-[16px] font-medium bg-primary justify-center h-12 w-full lg:w-[168px]`}
      >
        Finish
      </button>
    </form>
  );
};

export default Form2;
