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
export const form2Schema = z.object({
  tolerance: z.enum(TOLERANCE_VALUES, {
    errorMap: () => ({ message: "Invalid tolerance" }),
  }),
  investmentType: z.enum(INVESTMENT_TYPE_VALUES, {
    errorMap: () => ({ message: "Invalid investment type" }),
  }),
  poolAddresses: z
    .array(z.string())
    .min(1, "Pair addresses are required")
    .optional(),
  goalType: z.enum(GOAL_TYPE_VALUES, {
    errorMap: () => ({ message: "Invalid goal type" }),
  }),
  tradingPreference: z.enum(TRADING_PERFORMANCE_VALUES, {
    errorMap: () => ({ message: "Invalid trading preference" }),
  }),
  dcaPref: z.boolean(),
  takeProfitStatus: z.boolean().optional(),
  takeProfitPercentage: z
    .number()
    .min(0)
    .max(100, "Take profit percentage must be between 0 and 100"),
  stopLossStatus: z.boolean().optional(),
  stopLossPercentage: z
    .number()
    .min(0)
    .max(100, "Stop loss percentage must be between 0 and 100"),
  autoExit: z.boolean(),
  isActive: z.boolean(),
});

// Form 1 Schema (Name, Purpose, Description)
export const form1Schema = z.object({
  name: z.string().min(1, "Name is required"),
  purpose: z.string().min(1, "Purpose is required"),
  description: z.string().min(1, "Description is required"),
});

export type Form1Data = z.infer<typeof form1Schema>;

export type AgentFormData = z.infer<typeof form2Schema>;
