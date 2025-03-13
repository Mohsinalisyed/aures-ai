interface IWhyAureus {
    id: number
    title: string
    description: string
    style?: string
}

export const WhyAuresuData: IWhyAureus[] = [
    { id: 0, title: "Autonomous Trading Power", description: "Let our AI agent do the heavy lifting—24/7 market analysis and automated trades.", style: 'z-10' },
    { id: 1, title: "Personalized to You", description: "Train the AI with your risk tolerance, goals, and strategies for a perfectly tailored experience.", style: 'z-20 translate-y-full' },
    { id: 2, title: "Diversified Asset Support", description: "Crypto, stocks, and leveraged products all under one secure wallet.", style: 'z-30 translate-y-[10%]' },
    { id: 3, title: "Community & Growth", description: "Grow alongside a decentralized ecosystem with collaborative feedback loops and governance mechanisms.", style: 'z-40 translate-y-[-80%]' },
];