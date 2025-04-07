import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useAccount } from "wagmi";

// ERC-20 ABI for name, symbol, balance, and decimals
const erc20Abi = [
  "function balanceOf(address owner) view returns (uint256)",
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
];

// Define type for token details
interface TokenInfo {
  address: string;
  name: string;
  symbol: string;
  balance: string;
}

// Delay function for rate-limiting
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const TokenDetails = () => {
  const { address, isConnected } = useAccount(); // Get connected wallet address
  const [tokensInfo, setTokensInfo] = useState<TokenInfo[]>([]); // Explicitly define the type
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTokensInfo = async () => {
      if (!isConnected || !address) return;

      setLoading(true);

      try {
        // Use Sepolia provider from Infura (or another provider)
        const provider = new ethers.providers.JsonRpcProvider(
          "https://eth-sepolia.public.blastapi.io"
        );

        const tokenAddresses = [
          "0x5a1298B1Bdc9800e8BFb9dc632adDC92a9b5aded",
          "0x17Fb64BAB6b42DCAbc3d5275183b55b685b073b1",
          "0xadbf21cCdFfe308a8d83AC933EF5D3c98830397F",
        ];

        const tokensDetails = await Promise.all(
          tokenAddresses.map(async (tokenAddress, index) => {
            // Implement retry logic with delay between requests
            try {
              if (index > 0) {
                await delay(1000); // Add a 1-second delay between requests to avoid hitting rate limit
              }

              const tokenContract = new ethers.Contract(
                tokenAddress,
                erc20Abi,
                provider
              );
             console.log("Token Contract: ", tokenContract);
              // Fetch token details
              const name = await tokenContract.name();
              const symbol = await tokenContract.symbol();
              const decimals = await tokenContract.decimals();

              // Fetch balance and format it using decimals
              const balanceResult = await tokenContract.balanceOf(address);
              const formattedBalance = ethers.utils.formatUnits(
                balanceResult,
                decimals
              );

              return {
                address: tokenAddress,
                name,
                symbol,
                balance: formattedBalance,
              };
            } catch (error) {
              console.error(
                "Error fetching token info for address:",
                tokenAddress,
                error
              );
              return null; // Return null for failed requests
            }
          })
        );

        // Filter out null values and set the token details
        const validTokens = tokensDetails.filter(
          (token): token is TokenInfo => token !== null
        );

        setTokensInfo(validTokens); // Set the valid token details
      } catch (error) {
        console.error("Error fetching token info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTokensInfo();
  }, [address, isConnected]); // Dependencies: Re-run when address or connection changes

  if (loading) {
    return <p className="text-white">Loading token info...</p>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3>Token Information</h3>
      {tokensInfo.length === 0 ? (
        <p>No tokens found</p>
      ) : (
        tokensInfo.map((token, index) => (
          <div key={index} className="mb-4">
            <h4>{token.name}</h4>
            <p>Symbol: {token.symbol}</p>
            <p>Balance: {token.balance}</p>
            <p>Address: {token.address}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default TokenDetails;
