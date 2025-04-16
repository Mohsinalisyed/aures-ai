"use client";
import React from "react";
import { RadioButton } from "@/app/components";
import { TooltipIcon } from "@/app/svg";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TradingBotData } from "@/app/api";
import { Tooltip } from "../Tooltip";
interface RadioButtonOption {
  label: string;
  value: string;
}

interface RadioButtonGroupProps {
  title: string;
  options: readonly RadioButtonOption[];
  errors?: FieldErrors<TradingBotData>;
  register: UseFormRegister<TradingBotData>; // Accept register function
  fieldName: keyof TradingBotData;
}

const RadioButtonGroup = ({
  title,
  options,
  register,
  fieldName,
  errors,
}: RadioButtonGroupProps) => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-8 mb-6">
        <h1 className="heading-text">{title}</h1>
        <Tooltip text="Coming Soon">
          <TooltipIcon />
        </Tooltip>
      </div>
      <div className="flex gap-8 lg:gap-[80px]">
        {options.map((option, index) => (
          <RadioButton
            key={index}
            label={option.label}
            register={register} // Pass register to RadioButton
            value={option.value} // Pass the option value
            fieldName={fieldName}
          />
        ))}
      </div>
      {errors && errors[fieldName] && (
        <p className="text-error_color text-sm mt-4">
          {errors[fieldName]?.message}
        </p>
      )}
    </div>
  );
};

export default RadioButtonGroup;
