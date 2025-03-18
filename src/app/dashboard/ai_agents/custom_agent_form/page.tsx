import { Toggle } from "@/app/components";
import { ProgressBar } from "@/app/components/ProgressBar";
import RadioButtonGroup from "@/app/components/RadioButton/RadioButtonGroup";
import React from "react";
import { Control, Controller, FieldErrors, UseFormRegister} from "react-hook-form";
import { AgentFormData } from "../type";
import {
  GOAL_TYPE,
  INVESTMENT_TYPE,
  TOLORENCE_ARRAY,
  TRADING_PERFORMANCE,
} from "@/app/utils";

interface CustomAIAgentFormProps {
  register: UseFormRegister<AgentFormData>;
  control: Control<AgentFormData>;
  errors: FieldErrors<AgentFormData>;
}

const CustomAIAgentForm: React.FC<CustomAIAgentFormProps> = ({
  register,
  control,
  errors
}) => {
  return (
    <div className="max-w-[688px] pb-2 lg:py-12">
      {/* Tolerance Group */}
      <RadioButtonGroup
        title="Tolerance"
        options={TOLORENCE_ARRAY}
        register={register("tolerance")}
        fieldName="tolerance"
        errors={errors}
      />

      {/* Investment Type Group */}
      <RadioButtonGroup
        title="Investment Type"
        options={INVESTMENT_TYPE}
        register={register("investmentType")}
        fieldName="investmentType"
        errors={errors}
      />

      {/* Goal Type Group */}
      <RadioButtonGroup
        title="Goal Type"
        options={GOAL_TYPE}
        register={register("goalType")}
        fieldName="goalType"
        errors={errors}
      />

      {/* Trading Preferences Group */}
      <RadioButtonGroup
        title="Trading Preferences"
        options={TRADING_PERFORMANCE}
        register={register("tradingPreference")}
        fieldName="tradingPreference"
        errors={errors}
      />

      {/* DCA Preferences */}
      <h1 className="heading-text mt-8 mb-6">DCA Preferences</h1>
      <div>
        <Toggle
          register={register("dcaPref")}
          errors={errors}
          fieldName="dcaPref"
        />
      </div>

      {/* Take-Profit Conditions */}
      <h1 className="heading-text mt-8 mb-6">Take-Profit Conditions</h1>
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
      <h1 className="heading-text mt-8 mb-6">Stop-Loss Conditions</h1>
      <div className="max-w-[392px]">
        <Controller
          name="stopLossPercentage"
          control={control}
          render={({ field }) => (
            <ProgressBar
              progress={field.value || 0}
              onProgressChange={(value: number) => field.onChange(value)}
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
      <h1 className="heading-text mt-8 mb-6">Auto-Exit Conditions</h1>
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
