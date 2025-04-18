/* eslint-disable @typescript-eslint/no-explicit-any */
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
  imageUrl?: string;
  data: any;
  user?: any
  transactions?: any
}
export interface TradingBotData {
  id?: string;
  name?: string;
  purpose?: string;
  description?: string;
  tolerance: Tolerance;
  investmentType: InvestmentType;
  poolAddresses?: string[]; // Make this non-optional
  goalType: GoalType;
  tradingPreference: TradingPerformance;
  dcaPref: boolean;
  takeProfitStatus?: boolean;
  takeProfitPercentage: number;
  stopLossStatus?: boolean;
  stopLossPercentage: number;
  tradingAmount: number;
  dcaIteration?: number; // Make this optional
  dcaPercentage?: number;
  autoExit: boolean;
  isActive: boolean;
}

// Define type for Token
interface Token {
  id: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  createdAt: string;
  updatedAt: string;
}

// Define type for TokenPair
export interface TokenPair {
  id: number;
  address: string;
  exchange: string;
  createdAt: string;
  updatedAt: string;
  token0: Token;
  token1: Token;
}

export interface IProfile {
  name: string
  imgUrl:string
}

export interface WithdrawData {
  agentId:string
  tokenAddress:string
  withdrawAmount:string
  toAddress:string
}
