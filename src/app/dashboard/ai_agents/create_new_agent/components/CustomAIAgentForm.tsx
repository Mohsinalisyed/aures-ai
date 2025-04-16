"use client";
import { Toggle } from "@/app/components";
import RadioButtonGroup from "@/app/components/RadioButton/RadioButtonGroup";
import React from "react";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import {
  GOAL_TYPE,
  INVESTMENT_TYPE,
  InvestmentType,
  TOLORENCE_ARRAY,
  TRADING_PERFORMANCE,
} from "@/app/utils";
import { ExplinatortToolTip, TooltipIcon } from "@/app/svg";
import { TradingBotData } from "@/app/api";
import { TokenSelection } from "../../components";
import { Tooltip } from "@/app/components/Tooltip";

interface CustomAIAgentFormProps {
  register: UseFormRegister<TradingBotData>;
  control: Control<TradingBotData>;
  errors: FieldErrors<TradingBotData>;
  watch: UseFormWatch<TradingBotData>;
  selectedPairs: string[] | undefined
  setSelectedPairs:(e:string[])=>void
}

const CustomAIAgentForm: React.FC<CustomAIAgentFormProps> = ({
  register,
  control,
  errors,
  watch,
  selectedPairs,
  setSelectedPairs
}) => {
  const investmentType = watch("investmentType");
  const isDcaPref = watch("dcaPref");
  return (
    <div className="max-w-[688px] pb-2 lg:py-12">
      <div className="flex items-center gap-3 mt-8 mb-6">
        <h1 className="heading-text">Trading Amount</h1>
        <Tooltip text="Coming Soon">
          <TooltipIcon />
        </Tooltip>
      </div>
      <div>
        <div className="relative w-full">
          <input
            type="number"
            onWheel={(e) => e.currentTarget.blur()}
            step="any"
            {...register("tradingAmount", {
              setValueAs: (value) => {
                const parsed = Number(value);
                return isNaN(parsed) ? null : parsed;
              },
            })}
            placeholder="Enter Here"
            className="w-full bg-darkest_white h-[48px] px-2 rounded-[6px] border-gray_border border placeholder:text-white hover:border-primary pr-[40px]" // Added padding-right for space for the % symbol
          />
        </div>

        {errors.tradingAmount && (
          <p className="text-error_color text-sm mt-4">
            {errors.tradingAmount?.message}
          </p>
        )}
      </div>
      {/* Tolerance Group */}
      <RadioButtonGroup
        title="Tolerance"
        options={TOLORENCE_ARRAY}
        register={register}
        fieldName="tolerance"
        errors={errors}
      />
      {/* Investment Type Group */}
      <RadioButtonGroup
        title="Investment Type"
        options={INVESTMENT_TYPE}
        register={register}
        fieldName="investmentType"
      />
      {errors.investmentType && (
        <p className="text-error_color text-sm mt-4">
          {errors.investmentType?.message}
        </p>
      )}
      {investmentType === InvestmentType.SELECTED_POOL && (
        <div className="mt-8">
          <TokenSelection
            selectedPairs={selectedPairs}
            setSelectedPairs={(e) => setSelectedPairs(e)}
            errors={errors}
            control={control}
          />
        </div>
      )}
      {/* Goal Type Group */}
      <RadioButtonGroup
        title="Goal Type"
        options={GOAL_TYPE}
        register={register}
        fieldName="goalType"
        errors={errors}
      />
      {/* Trading Preferences Group */}
      <RadioButtonGroup
        title="Trading Preferences"
        options={TRADING_PERFORMANCE}
        register={register}
        fieldName="tradingPreference"
        errors={errors}
      />
      {/* DCA Preferences */}
      <div className="flex items-center gap-3 mt-8 mb-6">
        <h1 className="heading-text">DCA Preferences</h1>
        <Tooltip text="Coming Soon">
          <ExplinatortToolTip />
        </Tooltip>
      </div>
      <div>
        <Toggle
          register={register("dcaPref")}
          errors={errors}
          fieldName="dcaPref"
        />
        {isDcaPref && (
          <>
            <div className=" flex gap-4 items-center">
              <div>
                <div className="flex items-center gap-3 mt-8 mb-6">
                  <h1 className="heading-text">DCA Iteration</h1>
                  <Tooltip text="Coming Soon">
                    <TooltipIcon />
                  </Tooltip>
                </div>
                <div className="relative w-full">
                  <input
                    type="number"
                    onWheel={(e) => e.currentTarget.blur()}
                    {...register("dcaIteration", {
                      setValueAs: (value) =>
                        value === 0 ? null : Number(value),
                    })}
                    placeholder="Enter Here"
                    className="w-full bg-darkest_white h-[48px] px-2 rounded-[6px] border-gray_border border placeholder:text-white hover:border-primary pr-[40px]" // Added padding-right for space for the % symbol
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mt-8 mb-6">
                  <h1 className="heading-text">DCA Percentage</h1>
                  <Tooltip text="Coming Soon">
                    <TooltipIcon />
                  </Tooltip>
                </div>
                <div className="relative w-full">
                  <input
                    type="number"
                    onWheel={(e) => e.currentTarget.blur()}
                    min={0}
                    {...register("dcaPercentage", {
                      setValueAs: (value) =>
                        value === 0 ? null : Number(value),
                    })}
                    placeholder="Enter Here"
                    className="w-full bg-darkest_white h-[48px] px-2 rounded-[6px] border-gray_border border placeholder:text-white hover:border-primary pr-[40px]" // Added padding-right for space for the % symbol
                  />
                  <span className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white">
                    %
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className=" flex gap-4 items-center">
              <div className="w-1/2">
                {errors.dcaIteration && (
                  <p className="text-error_color text-sm mt-4">
                    {errors.dcaIteration?.message}
                  </p>
                )}
              </div>
              {errors.dcaPercentage && (
                <p className="text-error_color text-sm mt-4">
                  {errors.dcaPercentage?.message}
                </p>
              )}
            </div>
          </>
        )}
      </div>
      {/* Take-Profit Conditions */}
      <div className="flex items-center gap-3 mt-8 mb-6">
        <h1 className="heading-text">Take-Profit Conditions</h1>
        <Tooltip text="Coming Soon">
          <ExplinatortToolTip />
        </Tooltip>
      </div>
      <div>
        <div className="relative w-full">
          <input
            type="number"
            onWheel={(e) => e.currentTarget.blur()}
            min={0}
            {...register("takeProfitPercentage", {
              setValueAs: (value) => (value === 0 ? null : Number(value)),
            })}
            placeholder="Enter Here"
            className="w-full bg-darkest_white h-[48px] px-2 rounded-[6px] border-gray_border border placeholder:text-white hover:border-primary pr-[40px]" // Added padding-right for space for the % symbol
          />
          <span className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white">
            %
          </span>{" "}
        </div>

        {errors.takeProfitPercentage && (
          <p className="text-error_color text-sm mt-4">
            {errors.takeProfitPercentage?.message}
          </p>
        )}
      </div>
      {/* Stop-Loss Conditions */}
      <div className="flex items-center gap-3 mt-8 mb-6">
        <h1 className="heading-text">Stop-Loss Conditions</h1>
        <Tooltip text="Coming Soon">
          <ExplinatortToolTip />
        </Tooltip>
      </div>
      <div>
        <div className="relative w-full">
          <input
            type="number"
            onWheel={(e) => e.currentTarget.blur()}
            min={0}
            {...register("stopLossPercentage", {
              setValueAs: (value) => (value === 0 ? null : Number(value)),
            })}
            placeholder="Enter Here"
            className="w-full bg-darkest_white h-[48px] px-2 rounded-[6px] border-gray_border border placeholder:text-white hover:border-primary pr-[40px]" // Added padding-right for space for the % symbol
          />
          <span className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white">
            %
          </span>{" "}
        </div>

        {errors.stopLossPercentage && (
          <p className="text-error_color text-sm mt-4">
            {errors.stopLossPercentage?.message}
          </p>
        )}
      </div>
      {/* Auto-Exit Conditions */}
      <div className="flex items-center gap-3 mt-8 mb-6">
        <h1 className="heading-text">Auto-Exit Conditions</h1>
        <Tooltip text="Coming Soon">
          <ExplinatortToolTip />
        </Tooltip>
      </div>
      <div>
        <Toggle
          register={register("autoExit")}
          errors={errors}
          fieldName="autoExit"
        />
      </div>
    </div>
  );
};

export default CustomAIAgentForm;
