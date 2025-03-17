export interface VerifyAccountRequest {
  address: string;
  signature: string;
  message: string;
}
export interface VerifyAccountResponse {
  success: boolean;
  message: string;
  // Add other fields here based on your backend response structure
}
