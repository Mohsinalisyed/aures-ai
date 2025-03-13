import AiAgentMarketPlace from "@/app/components/Icons/AiAgentMarketPlace";
import { JSX } from "react";
import AIChatAgent from "./AiAgentChat";
import AiAgentVideo from "./AiAgentVideo";
interface IAiAgents {
  title: string;
  points: string[];
  image: JSX.Element;
}

export const AiAgentsData: IAiAgents[] = [
  {
    title: "AI Agent Certification & Validation",
    points: [
      "Every AI trading agent listed on Aureus AI undergoes strict certification and testing to ensure security, accuracy, and performance consistency.",
      "AI trading agents undergo rigorous performance testing, backtested against historical and real-time market data to ensure effectiveness. They execute trades based on user-defined strategies, undergo smart contract security audits to prevent exploits, and continuously optimize strategies based on live market conditions and liquidity changes.",
      "AI agents undergo multi-chain security verification before execution, ensuring safe and risk-adjusted trading across Ethereum, BSC, Polygon, Arbitrum, Avalanche, and Solana.",
    ],
    image: <AiAgentVideo />,
  },
  {
    title: "One-Stop AI Agent Marketplace",
    points: [
      "IAureus AI will launch a decentralized AI agent marketplace, allowing users to buy, sell, and rent AI trading models across multiple chains. Users can monetize AI strategies through licensing, offer subscription-based access, and gain visibility through performance-based rankings based on win rate, ROI, adoption, and risk-adjusted scores.",
      "The AI marketplace will launch on Ethereum, expanding to BSC, Polygon, Arbitrum, Avalanche, and Solana. AI agents will support cross-chain strategies, optimizing yield farming and arbitrage opportunities.",
    ],
    image: <AiAgentMarketPlace />,
  },
  {
    title: "Instant AI Agent Creation & No-Code Customization",
    points: [
      "Aureus AI provides a no-code AI agent builder, allowing users to create, test, and deploy trading bots without programming skills. The drag-and-drop interface enables strategy selection, risk management, and market execution triggers. AI agents can be deployed across DEXs, future CEX integrations, and DeFi yield aggregators.",
      "Aureus AI will enable users to monetize custom AI models through its marketplace, with AI agents designed for seamless, high-performance execution across multiple blockchains.",
    ],
    image: <AIChatAgent />,
  },
];
