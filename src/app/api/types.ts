import { IUser } from "../state";
import { GoalType, InvestmentType, Tolerance, TradingPerformance } from "../utils";

export interface VerifyAccountRequest {
  address: string;
  signature: string;
  message: string;
}
export interface VerifyAccountResponse {
  success: boolean;
  message: string;
  data: IUser;
}
export interface ApiResponse {
  success: boolean;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}
export interface TradingBotData {
  name: string;
  purpose: string;
  description: string;
  tolerance: Tolerance;
  investmentType: InvestmentType;
  pairAddresses?: string[]; // Make this non-optional
  goalType: GoalType;
  tradingPreference: TradingPerformance;
  dcaPref: boolean;
  takeProfitStatus?: boolean;
  takeProfitPercentage: number;
  stopLossStatus?: boolean;
  stopLossPercentage: number;
  autoExit: boolean;
  isActive: boolean;
}

