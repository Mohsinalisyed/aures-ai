import { z } from "zod";

export const WithdrawSchema = z.object({
  token: z.object(
    {
      value: z.string(),
      label: z.string(),
    },
    { required_error: "Token is required" }
  ),
  withdrawAmount: z
    .number({ invalid_type_error: "Amount is required" })
    .positive("Amount must be greater than 0"),
  toAddress: z
    .string()
    .min(10, "Address is too short")
    .max(100, "Address is too long"),
});

// 2. Type for form data
export type WithdrawFormData = z.infer<typeof WithdrawSchema>;
