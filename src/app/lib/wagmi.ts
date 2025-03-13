import { walletConnect } from "wagmi/connectors";
import { createConfig, http } from "@wagmi/core";
import { mainnet } from "viem/chains";

const connector = walletConnect({
  projectId: "5fa85ca3476bdd444dd59086ae3eb0a5", // Your WalletConnect Project ID
  showQrModal: false, // Ensure modal is disabled
  metadata: {
    name: "MyDApp",
    description: "My Decentralized App",
    url: "https://mydapp.com",
    icons: ["https://mydapp.com/logo.png"], // Ensure a valid logo is used
  },
});

export const config = createConfig({
  chains: [mainnet], // Add required chains
  connectors: [connector],
  transports: {
    [mainnet.id]: http("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"),
  },
});
