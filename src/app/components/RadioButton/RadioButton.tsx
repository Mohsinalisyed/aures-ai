"use client";
import { TradingBotData } from "@/app/api";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface IRadioButton {
  label: string;
  register: UseFormRegister<TradingBotData>; // Accept register function
  value: string; // The value for the radio button
  fieldName: keyof TradingBotData;
}

const RadioButton: React.FC<IRadioButton> = ({
  label,
  register,
  value,
  fieldName,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="inline-flex items-center">
        <label
          className="relative flex items-center cursor-pointer"
          htmlFor={label}
        >
          <input
            id={label}
            value={value} // Set the value for the radio button
            {...register(fieldName)}
            type="radio"
            className="peer h-6 w-6 cursor-pointer appearance-none rounded-full border border-darker_white checked:border-none checked:shadow-radio_btn_shadow checked:bg-primary transition-all"
          />
          <span className="absolute bg-white w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
        <label className="ml-2 text-white cursor-pointer" htmlFor={label}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
