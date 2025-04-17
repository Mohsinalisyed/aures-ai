import { axios } from "../lib";
import { ApiResponse, WithdrawData } from "./types";

export const withdrawAmount = async (data: WithdrawData): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>("/withdrawal", data); 
    return response.data;
  } catch (error) {
    console.error("Error creating agent:", error);
    throw error;
  }
};
