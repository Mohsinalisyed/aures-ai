import { axios } from "../lib";
import { VerifyAccountRequest, VerifyAccountResponse } from "./types";

export const getNonce = async () => {
  try {
    const response = await axios.get("/auth/nonce");
    return response.data;
  } catch (error) {
    console.error("Error fetching nonce:", error);
    throw error;
  }
};


export const verifyAccount = async ({
  address,
  signature,
  message,
}: VerifyAccountRequest): Promise<VerifyAccountResponse> => {
  try {
    const data: VerifyAccountRequest = { address, signature, message };
    const response = await axios.post<VerifyAccountResponse>(
      "/auth/verify",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error verifying account:", error);
    throw error;
  }
};

