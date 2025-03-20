"use client";
import { BackwardArrow, CopyIcon, DropDownIcon, UpwardIcon } from "@/app/svg";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { RefundCard } from "./components";
import { Toggle } from "@/app/components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AgentFormData, agentSchema } from "../type";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createAgent, getAgentById, TokenPair, TradingBotData, updateAgentById } from "@/app/api";
import CustomAIAgentForm from "./components/CustomAIAgentForm";
import { InvestmentType, successToast } from "@/app/utils";

const CreateNewAgent = () => {
  const router = useRouter();
    const searchParams = useSearchParams();
    const agentId = searchParams.get("agentId");


  // Fetch agent data
  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ["getagentbyid", agentId],
    queryFn: () => getAgentById(agentId as string),
    enabled:!!agentId
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { mutateAsync: createAgentMutation } = useMutation<any, Error, any>({
    mutationFn: async (data: TradingBotData) => {
      return createAgent(data);
    },
  });
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const { mutateAsync: updateAgentMutation } = useMutation<any, Error, any>({
     mutationFn: async (data: TradingBotData) => {
       return updateAgentById(data,agentId ?? '');
     },
   });

  const [customForm, setCustomForm] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  const [showdetail, setShowDeatils] = useState(true);
  const [selectedPairs, setSelectedPairs] = useState<string[]>(
   data && data?.selectedPairs.length > 0 ?  data?.selectedPairs.map((item: TokenPair) => item.address ) :[]
  );
 
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    setValue,
    setError,
    clearErrors
  } = useForm<AgentFormData>({
    resolver: zodResolver(agentSchema),
    defaultValues: {
      name: "",
      purpose: "",
      description: "",
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
    const agentName = watch("name");
    const agentPurpose = watch("purpose");
    const agentDescription = watch("description");
    const investType = watch("investmentType");
useEffect(() => {
  if (selectedPairs?.length > 0) {
    clearErrors("investmentType"); // Clear the error for investmentType if no pairs are selected
  } else {
       if (
         selectedPairs?.length === 0 &&
         investType === InvestmentType.SELECTED_PAIRS
       ) {
         setError("investmentType", {
           type: "manual",
           message: "Please select at least one token pair.",
         });
         return;
       }
  }
}, [selectedPairs, clearErrors, investType, setError]);
  // Effect to set default values once data is loaded
  useEffect(() => {
    if (isSuccess && data) {
      setValue("name", data.name);
      setValue("purpose", data.purpose);
      setValue("description", data.description);
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
  }, [isSuccess, data, setValue]);

  const closeModal = () => setIsOpen(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };


  const areAllFieldsFilled = !!(agentName && agentPurpose && agentDescription);
  const onSubmit = async (data: AgentFormData) => {
    try {
         if (selectedPairs?.length === 0 && investType===InvestmentType.SELECTED_PAIRS) {
           setError("investmentType", {
             type: "manual",
             message: "Please select at least one token pair.",
           });
           return;
         }
        if (agentId && data) {
           await updateAgentMutation({
             ...data,
             pairAddresses:  investType === InvestmentType.SELECTED_PAIRS ? selectedPairs : [],
             takeProfitStatus: true,
             stopLossStatus: true,
           });
          // successToast("AI Agent updated successfully!");
      } else {
        await createAgentMutation({
          ...data,
          pairAddresses:
            investType === InvestmentType.SELECTED_PAIRS ? selectedPairs : [],
          takeProfitStatus: true,
          stopLossStatus: true,
        });
          successToast("AI Agent  created successfully!");
          router.push("/dashboard/ai_agents");

      }
    } catch (error) {
      console.error("Error during agent creation:", error);
    }
  };

  // Show loading indicator if data is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If there was an error fetching data
  if (error) {
    return <div>Error loading agent data</div>;
  }

  return (
    <div className="lg:px-16 lg:py-12 pb-2">
      <div className="text-white text-[24px] lg:text-[40px] font-bold flex justify-between lg:items-center flex-col lg:flex-row gap-4">
        <div className="flex gap-4 text-white items-center">
          <button
            onClick={() => {
              if (customForm) {
                setCustomForm(false);
              } else {
                router.push("/dashboard/ai_agents");
              }
            }}
          >
            <BackwardArrow />
          </button>
          Create New Agent
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {customForm ? (
          <div className="flex justify-between flex-col-reverse lg:flex-row">
            <CustomAIAgentForm
              register={register}
              control={control}
              errors={errors}
              watch={watch}
              selectedPairs={selectedPairs}
              setSelectedPairs={(e)=>setSelectedPairs(e)}
            />
            <div className="bg-darkest_white p-[10px] sm:p-0 sm:bg-transparent flex flex-col-reverse sm:flex-col rounded-[12px] mt-4 sm:mt-0">
              {showdetail && <RefundCard />}
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
                  onClick={() => setShowDeatils(!showdetail)}
                >
                  <span>Details</span>
                  <span>{!showdetail ? <DropDownIcon /> : <UpwardIcon />}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col text-white max-w-[672px] gap-6 mt-[64px]">
            <label>Agent Name</label>
            <div>
              <input
                {...register("name")}
                placeholder="Enter Here"
                className="w-full bg-darkest_white h-[48px] px-2 rounded-[6px] border-gray_border border placeholder:text-white hover:border-primary"
              />
              {errors.name && (
                <p className="text-error_color text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <label>Agent Purpose</label>
            <div>
              <input
                {...register("purpose")}
                placeholder="Enter Here"
                className=" w-full bg-darkest_white h-[48px] rounded-[6px] border-gray_border border px-2 placeholder:text-white hover:border-primary"
              />
              {errors.purpose && (
                <p className="text-error_color text-sm mt-1">
                  {errors.purpose?.message}
                </p>
              )}
            </div>
            <label>Agent Description</label>
            <div>
              <textarea
                {...register("description")}
                placeholder="Enter Here"
                className=" w-full py-4 bg-darkest_white rounded-[6px] min-h-[168px] border-gray_border border px-2 placeholder:text-white hover:border-primary"
              />
              {errors.description && (
                <p className="text-error_color text-sm mt-1">
                  {errors.description?.message}
                </p>
              )}
            </div>
          </div>
        )}
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
                onClick={() => areAllFieldsFilled && setCustomForm(true)}
                className={`border border-gray_border p-4 flex gap-2 items-center rounded-[80px] text-[14px] lg:text-[16px] font-medium bg-primary justify-center h-12 w-full lg:w-[168px]`}
              >
                {customForm ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNewAgent;