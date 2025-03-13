interface IKeyFeaturesData {
    id: number
    rotation: number
    title: string
    keyPoints: string[]
    style: string
}

export const KeyFeaturesData: IKeyFeaturesData[] = [
    {
        id: 0,
        rotation: 270,
        title: "AI-Driven Portfolio Optimization",
        keyPoints: [
            "Real-time AI fund allocation for yield farming, staking, and liquidity mining.",
            "Automated rebalancing based on risk-adjusted strategies (High, Medium, Low Risk Profiles).",
            "AI portfolio diversification models that optimize DeFi returns while reducing risk."
        ],
        style: 'z-10'
    },
    {
        id: 1,
        rotation: 0,
        title: "Next-Gen AI Trading Agents",
        keyPoints: [
            "Traditional Trading Agent – Uses proven AI trading models for long-term portfolio growth.",
            "Market Sentiment Agent – Analyzes real-time market sentiment from Twitter, Reddit, and Telegram.",
            "Cross-Chain Arbitrage Agent – Detects pricing inefficiencies across CEXs & DEXs for profit-maximizing arbitrage trading."
        ],
        style: 'z-20 translate-y-full'
    },
    {
        id: 2,
        rotation: 0,
        title: "AI + DeFi Synergy",
        keyPoints: [
            "AI-powered liquidity routing that dynamically moves funds between yield farming pools.",
            "Cross-chain compatibility for multi-chain DeFi strategies, launching with Ethereum, expanding to BSC, Polygon, Arbitrum, Avalanche, and Solana.",
            "DeFi smart contract analysis to prevent fraud & ensure fund security before executing transactions.",
        ],
        style: 'z-30 translate-y-[10%]'
    },
    {
        id: 3,
        rotation: 180,
        title: "AI Security & Fraud Detection ",
        keyPoints: [
            "AI-powered risk assessment that audits smart contracts for vulnerabilities before executing transactions.",
            "Real-time fraud detection to prevent rug pulls, flash loan attacks, and market manipulation schemes.",
            "On-chain anomaly detection that flags suspicious activity & protects user assets."
        ],
        style: 'z-40 translate-y-[-80%]'
    },
    {
        id: 4,
        rotation: 0,
        title: "AI Agent Marketplace",
        keyPoints: [
            "No-code AI agent creation tools allow users to customize AI bots without programming skills.",
            "Decentralized AI agent marketplace where users buy, sell, and rent AI-driven models.",
            "Revenue-sharing model ensures AI developers earn passive income from successful AI agent deployments.",
        ],
        style: 'z-40 translate-y-[-170%]'
    },
    {
        id: 5,
        rotation: 0,
        title: "Buy/Sell on Command & DCA Trading",
        keyPoints: [
            "Customizable AI trade execution via manual override",
            "Dollar-Cost Averaging (DCA) AI that automatically accumulates assets during market dips.",
        ],
        style: 'z-40 translate-y-[-200%]'
    }
]