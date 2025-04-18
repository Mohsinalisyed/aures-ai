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
    poolAddresses: z.array(z.string()).optional(),
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

    // Allow string | number | undefined, convert "" to undefined, skip validation until superRefine
    dcaPercentage: z.preprocess(
      (val) => (val === "" || val === null ? undefined : val),
      z.number().optional()
    ),
    dcaIteration: z.preprocess(
      (val) => (val === "" || val === null ? undefined : val),
      z.number().optional()
    ),
  })
  .superRefine((data, ctx) => {
    // Only require dca fields when dcaPref is true
    if (data.dcaPref) {
      if (data.dcaPercentage === undefined) {
        ctx.addIssue({
          path: ["dcaPercentage"],
          message: "DCA Percentage is required when DCA is enabled",
          code: z.ZodIssueCode.custom,
        });
      } else if (data.dcaPercentage < 1) {
        ctx.addIssue({
          path: ["dcaPercentage"],
          message: "DCA Percentage must be at least 1",
          code: z.ZodIssueCode.custom,
        });
      }

      if (data.dcaIteration === undefined) {
        ctx.addIssue({
          path: ["dcaIteration"],
          message: "DCA Iteration is required when DCA is enabled",
          code: z.ZodIssueCode.custom,
        });
      } else if (data.dcaIteration < 1) {
        ctx.addIssue({
          path: ["dcaIteration"],
          message: "DCA Iteration must be at least 1",
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
