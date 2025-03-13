import React from "react";
import { RadioButton } from "@/app/components";
import { TooltipIcon } from "@/app/svg";

interface RadioButtonGroupProps {
  title: string;
  options: string[];
}

const RadioButtonGroup = ({ title, options }: RadioButtonGroupProps) => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-8 mb-6">
        <h1 className="heading-text">{title}</h1>

       <TooltipIcon/>
      </div>
      <div className="flex gap-8 lg:gap-[80px]">
        {options.map((option, index) => (
          <RadioButton key={index} label={option} />
        ))}
      </div>
    </div>
  );
};

export default RadioButtonGroup;
