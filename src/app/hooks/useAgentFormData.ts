import { useQueryClient } from "@tanstack/react-query";

// Define the type of the agent form data
interface AgentFormData {
  name: string;
  purpose: string;
  description: string;
  tolerance?: string;
  investmentType?: string;
  pairAddresses: string[];
  goalType?: string;
  tradingPreference?: string;
  dcaPref: boolean;
  takeProfitStatus: boolean;
  takeProfitPercentage: number;
  stopLossStatus: boolean;
  stopLossPercentage: number;
  autoExit: boolean;
  isActive: boolean;
}

export function useAgentFormData() {
  const queryClient = useQueryClient();

  // Provide a default value for the form data in case it's not yet set
  const agentFormData = queryClient.getQueryData<AgentFormData>([
    "agentFormData",
  ]) || {
    name: "",
    purpose: "",
    description: "",
    tolerance: undefined,
    investmentType: undefined,
    pairAddresses: [],
    goalType: undefined,
    tradingPreference: undefined,
    dcaPref: false,
    takeProfitStatus: false,
    takeProfitPercentage: 0,
    stopLossStatus: false,
    stopLossPercentage: 0,
    autoExit: false,
    isActive: false,
  };

  const setAgentFormData = (newData: AgentFormData) => {
    queryClient.setQueryData(["agentFormData"], {
      ...agentFormData,
      ...newData,
    });
  };

  return {
    agentFormData,
    setAgentFormData,
  };
}
