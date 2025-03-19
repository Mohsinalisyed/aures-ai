// Enums
export enum TimePeriod {
  HOUR='HOUR',
  DAY='DAY',
  WEEk='WEEK',
  MONTH='MONTH',
  YEAR='YEAR',
  ALL='ALL'
}

export enum Tolerance {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export enum InvestmentType {
  AUTO = "AUTO",
  SELECTED_PAIRS = "SELECTED_PAIRS",
}

export enum GoalType {
  SHORT_TERM = "SHORT_TERM",
  LONG_TERM = "LONG_TERM",
}

export enum TradingPerformance {
  SWING = "SWING",
  SCALPING = "SCALPING",
}

// Arrays using Enums
export const TOLORENCE_ARRAY = [
  { label: "Low Risk", value: Tolerance.LOW },
  { label: "Medium Risk", value: Tolerance.MEDIUM },
  { label: "High Risk", value: Tolerance.HIGH },
] as const;

export const INVESTMENT_TYPE = [
  { label: "Predefined Strategy", value: InvestmentType.AUTO },
  { label: "User-Defined Portfolio", value: InvestmentType.SELECTED_PAIRS },
] as const;

export const GOAL_TYPE = [
  { label: "Short-Term Gains", value: GoalType.SHORT_TERM },
  { label: "Long-Term Gains", value: GoalType.LONG_TERM },
] as const;

export const TRADING_PERFORMANCE = [
  { label: "Swing Trading", value: TradingPerformance.SWING },
  { label: "Scalping", value: TradingPerformance.SCALPING },
] as const;
