"use client";
import { Toggle } from "@/app/components";
import { ProgressBar } from "@/app/components/ProgressBar";
import RadioButtonGroup from "@/app/components/RadioButton/RadioButtonGroup";
import React from "react";
import {
  Control,
  Controller,
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
import { ExplinatortToolTip } from "@/app/svg";
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
  return (
    <div className="max-w-[688px] pb-2 lg:py-12">
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
        <Tooltip text="Comming Soon">
          <ExplinatortToolTip />
        </Tooltip>
      </div>

      <div>
        <Toggle
          register={register("dcaPref")}
          errors={errors}
          fieldName="dcaPref"
        />
      </div>

      {/* Take-Profit Conditions */}
      <div className="flex items-center gap-3 mt-8 mb-6">
        <h1 className="heading-text">Take-Profit Conditions</h1>
        <Tooltip text="Comming Soon">
          <ExplinatortToolTip />
        </Tooltip>
      </div>

      <div className="max-w-[392px]">
        <Controller
          name="takeProfitPercentage"
          control={control}
          render={({ field }) => (
            <ProgressBar
              progress={field.value || 0}
              onProgressChange={(value: number) => field.onChange(value)}
            />
          )}
        />
        {errors.takeProfitPercentage && (
          <p className="text-error_color text-sm mt-4">
            {errors.takeProfitPercentage?.message}
          </p>
        )}
      </div>

      {/* Stop-Loss Conditions */}
      <div className="flex items-center gap-3 mt-8 mb-6">
        <h1 className="heading-text">Stop-Loss Conditions</h1>
        <Tooltip text="Comming Soon">
          <ExplinatortToolTip />
        </Tooltip>
      </div>

      <div className="max-w-[392px]">
        <Controller
          name="stopLossPercentage"
          control={control}
          render={({ field }) => (
            <ProgressBar
              progress={field.value || 0}
              onProgressChange={(value: number) => field.onChange(value)}
              isNegative
            />
          )}
        />
        {errors.stopLossPercentage && (
          <p className="text-error_color text-sm mt-4">
            {errors.stopLossPercentage?.message}
          </p>
        )}
      </div>

      {/* Auto-Exit Conditions */}
      <div className="flex items-center gap-3 mt-8 mb-6">
        <h1 className="heading-text">Auto-Exit Conditions</h1>
        <Tooltip text="Comming Soon">
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
