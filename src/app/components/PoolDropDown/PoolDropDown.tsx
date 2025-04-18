import React from "react";
import "../../dashboard/ai_agents/components/selectStyle.css";
import Select from "react-select";
import { Option } from "@/app/dashboard/ai_agents/components/TokenSelection";
interface  PoolDropDown {
  poolFilter: string | undefined,
  setPoolFilter:(value:string)=>void
}
const PoolDropDown: React.FC<PoolDropDown> = ({ setPoolFilter }) => {

  const handleChange = (selectedOption: Option | null) => {
    if (selectedOption) {
      setPoolFilter(selectedOption.value);
    }
  };

  return (
    <div className="w-full">
      <Select
        options={[]}
        onChange={handleChange}
        placeholder="Select Pool"
        className="h-[40px]"
      />
    </div>
  );
};

export default PoolDropDown;
