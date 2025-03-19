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
      <input
        type="radio"
        id={label}
        value={value} // Set the value for the radio button
        {...register(fieldName)} // Spread register return object into the input
        className="w-6 h-6 rounded-full border-2 border-gray-500 bg-gray-800 focus:ring-0"
      />
      <label htmlFor={label} className="text-white">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
