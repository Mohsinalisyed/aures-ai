import { AgentFormData } from "@/app/dashboard/ai_agents/type";
import React from "react";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";

interface ToggleProps {
  register: UseFormRegisterReturn; // The register object from React Hook Form
  errors: FieldErrors<AgentFormData>;
  fieldName: keyof AgentFormData;
}

const Toggle: React.FC<ToggleProps> = ({ register ,errors, fieldName}) => {
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          {...register} // Spread the register object from React Hook Form into the input
          className="sr-only peer"
        />
        <div className="w-9 h-5 bg-toggle_color hover:toggle_color peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-toggle_active_color hover:peer-checked:bg-toggle_active_color"></div>
      </label>
      {errors[fieldName] && (
        <p className="text-error_color text-sm mt-4">
          {errors[fieldName]?.message}
        </p>
      )}
    </>
  );
};

export default Toggle;
