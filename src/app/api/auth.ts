import { axios } from "../lib";
import { VerifyAccountRequest, VerifyAccountResponse } from "./types";

export const getNonce = async () => {
  try {
    const response = await axios.get("/auth/nonce"); // Make GET request using the Axios instance
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching nonce:", error);
    throw error; // Throw the error to be handled by the calling code
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

