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
export const getProfile = async (): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(`/users/profile`);
    return response.data;
  } catch (error) {
    console.error("Error  profile:", error);
    throw error;
  }
};
export const uploadImage= async (data: FormData): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(`/users/upload-image`, data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    return response.data;
  } catch (error) {
    console.error("Error creating agent:", error);
    throw error;
  }
};