import { axios } from "../lib";
import { ApiResponse } from "./types";

export const getTransaction = async (): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(`/transaction`);
    return response.data;
  } catch (error) {
    console.error("Error  profile:", error);
    throw error;
  }
};