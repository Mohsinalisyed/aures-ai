import { axios } from "../lib";
import { IUser } from "../state";
import { VerifyAccountRequest} from "./types";

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
}: VerifyAccountRequest): Promise<IUser> => {
  try {
    const data: VerifyAccountRequest = { address, signature, message };
    const response = await axios.post<IUser>(
      "/auth/verify",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error verifying account:", error);
    throw error;
  }
};

