import {
  GOAL_TYPE,
  GoalType,
  INVESTMENT_TYPE,
  InvestmentType,
  Tolerance,
  TOLORENCE_ARRAY,
  TRADING_PERFORMANCE,
  TradingPerformance,
} from "@/app/utils/enums";
import { z } from "zod";

// Extract only the 'value' part of each object for z.enum
const TOLERANCE_VALUES = TOLORENCE_ARRAY.map((option) => option.value) as [Tolerance];
const INVESTMENT_TYPE_VALUES = INVESTMENT_TYPE.map(
  (option) => option.value
) as [InvestmentType];
const GOAL_TYPE_VALUES = GOAL_TYPE.map((option) => option.value) as [
 GoalType
];
const TRADING_PERFORMANCE_VALUES = TRADING_PERFORMANCE.map(
  (option) => option.value
) as [TradingPerformance];

// Create the Zod schema

export const form2Schema = z
  .object({
    tolerance: z.enum(TOLERANCE_VALUES, {
      errorMap: () => ({ message: "Invalid tolerance" }),
    }),
    investmentType: z.enum(INVESTMENT_TYPE_VALUES, {
      errorMap: () => ({ message: "Invalid investment type" }),
    }),
    poolAddresses: z
      .array(z.string())
      // .min(1, "Pair addresses are required")
      .optional(),
    goalType: z.enum(GOAL_TYPE_VALUES, {
      errorMap: () => ({ message: "Invalid goal type" }),
    }),
    tradingPreference: z.enum(TRADING_PERFORMANCE_VALUES, {
      errorMap: () => ({ message: "Invalid trading preference" }),
    }),
    dcaPref: z.boolean(),
    takeProfitStatus: z.boolean().optional(),
    stopLossStatus: z.boolean().optional(),
    takeProfitPercentage: z
      .number()
      .min(1, "Take profit percentage is required"),
    stopLossPercentage: z.number().min(1, "Stop loss percentage is required"),
    tradingAmount: z
      .number({ required_error: "Trading amount is required" })
      .min(0.00000001, "Trading amount must not be too small or negative"),
    autoExit: z.boolean(),
    isActive: z.boolean(),
    dcaPercentage: z.number().min(1, "DCA Percentage is required").optional(), // Initially optional
    dcaIterations: z.number().min(1, "DCA Iteration is required").optional(), // Initially optional
  })
  .superRefine((data, ctx) => {
    // Conditionally require dcaPercentage and dcaIterations if dcaPref is true
    if (data.dcaPref) {
      if (data.dcaPercentage === undefined) {
        ctx.addIssue({
          path: ["dcaPercentage"],
          message: "DCA Percentage is required when DCA preference is true",
          code: z.ZodIssueCode.custom,
        });
      }

      if (data.dcaIterations === undefined) {
        ctx.addIssue({
          path: ["dcaIterations"],
          message: "DCA Iteration is required when DCA preference is true",
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });


// Form 1 Schema (Name, Purpose, Description)
export const form1Schema = z.object({
  name: z.string().min(1, "Name is required"),
  purpose: z.string().min(1, "Purpose is required"),
  description: z.string().min(1, "Description is required"),
});

export type Form1Data = z.infer<typeof form1Schema>;

export type AgentFormData = z.infer<typeof form2Schema>;
