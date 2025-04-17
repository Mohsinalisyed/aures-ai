import React from "react";
import "../../dashboard/ai_agents/components/selectStyle.css";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { getagents } from "@/app/api";
import { Option } from "@/app/dashboard/ai_agents/components/TokenSelection";
import { TradingAgentData } from "@/app/dashboard/portfolio/type";
interface IAgentDropDown {
  agentId: string | undefined,
  setAgentId:(value:string)=>void
}
const AgentDropDown:React.FC<IAgentDropDown> = ({setAgentId}) => {


  const { data, isLoading } = useQuery({
    queryKey: ["all-agents"],
    queryFn: getagents,
  });
  const options: Option[] =
    data && Array.isArray(data)
      ? data.map((agent: TradingAgentData) => ({
          value: agent.id,
          label: agent.name,
        }))
      : [];

  const handleChange = (selectedOption: Option | null) => {
    if (selectedOption) {
      setAgentId(selectedOption.value);
    }
  };

  return (
    <div className="w-full">
      <Select
        options={options}
        isLoading={isLoading}
        onChange={handleChange}
        placeholder="Select Agent"
      />
    </div>
  );
};

export default AgentDropDown;
