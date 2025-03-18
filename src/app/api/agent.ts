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