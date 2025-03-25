import { axios } from "../lib";
import { ApiResponse, TradingBotData } from "./types"; // Import the TradingBotData type

export const createAgent = async (data: TradingBotData): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>("/agents", data); // Pass the TradingBotData object as the body
    return response.data;
  } catch (error) {
    console.error("Error creating agent:", error);
    throw error;
  }
};

export const getagents = async () => {
  try {
    const response = await axios.get("/agents");
    return response.data.agents;
  } catch (error) {
    console.error("Error fetching agents:", error);
    throw error;
  }
};
export const getAgentById = async (id:string) => {
  try {
    const response = await axios.get(`/agents/${id}`);
    return response.data.agent;
  } catch (error) {
    console.error("Error fetching agents:", error);
    throw error;
  }
};
export const updateAgentById = async (data: TradingBotData , id:string): Promise<ApiResponse> => {
  try {
    const response = await axios.put<ApiResponse>(`/agents/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error creating agent:", error);
    throw error;
  }
};

export const getTokenPairAddress = async ({
  queryKey,
}: {
  queryKey: [string, string];
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, search] = queryKey; // Destructure to get 'search' from queryKey
  try {
    const response = await axios.get(`/pools?search=${search}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pairs:", error);
    throw error;
  }
};
