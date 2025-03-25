import { axios } from "../lib";
import { ApiResponse, IProfile } from "./types";

export const updateProfile = async (data: IProfile): Promise<ApiResponse> => {
  try {
    const response = await axios.put<ApiResponse>(`/users/profile`, data);
    return response.data;
  } catch (error) {
    console.error("Error creating agent:", error);
    throw error;
  }
};