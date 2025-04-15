export interface TradingAgentData {
    name: string;
    id: string;
    walletPublicKey: string;
    updatedAt: string;
    tradingAmount: string;
    isActive: boolean;
}
interface Token {
  id: number;
  address: string;
  name: string;
  logoUrl: string;
  symbol: string;
  decimals: number;
}

interface AgentInfo {
  id: number;
  name: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedPools: any[];
}

export interface TradeHistory  {
  id: number;
  agent: AgentInfo;
  fromAmount: string;
  toAmount: string;
  fromTokenAddress: string;
  fromTokenSymbol: string;
  fromToken: Token;
  toTokenAddress: string;
  toTokenSymbol: string;
  toToken: Token;
  poolAddress: string;
  txHash: string;
  usdValue: string;
  createdAt: string;
  updatedAt: string;
}
