/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alchemy, Network } from "alchemy-sdk";
import React, { useEffect, useState } from "react";

const TokenDetails = () => {
  const [tokens, setTokens] = useState<any[]>([]); // To hold token details with metadata
  const settings = {
    apiKey: "IckhJh095VzMkfbgJVVxirZRweii_Hx0", // Replace with your Alchemy API Key.
    network: Network.ETH_MAINNET, // Replace with your network.
  };
  const alchemy = new Alchemy(settings);

  useEffect(() => {
    const getTokenBalances = async () => {
      try {
        const balances = await alchemy.core.getTokenBalances(
          "0x8912aE9B03C2209572B0C2CeCE0925d9Ab363848"
        );

        // Fetch token metadata for each token
        const tokenDetails = await Promise.all(
          balances.tokenBalances.map(async (token: any) => {
            const metadata = await alchemy.core.getTokenMetadata(
              token.contractAddress
            );
            return {
              ...token,
              name: metadata.name,
              symbol: metadata.symbol,
              decimals: metadata.decimals,
            };
          })
        );

        setTokens(tokenDetails);
      } catch (error) {
        console.error("Error fetching token balances:", error);
      }
    };

    getTokenBalances();
  }, []);

  return (
    <div className="token-details">
      {tokens.length > 0 ? (
        tokens.map((token: any) => (
          <div key={token.contractAddress} className="token-card p-1">
            <div className="text-center text-white">
              <strong>Token Address:</strong> {token.contractAddress}
            </div>
            <div className="text-center text-white">
              <strong>Token Name:</strong> {token.name || "N/A"}
            </div>
            <div className="text-center text-white">
              <strong>Token Symbol:</strong> {token.symbol || "N/A"}
            </div>
            <div className="text-center text-white">
              <strong>Decimals:</strong> {token.decimals || "N/A"}
            </div>
            <div className="text-center text-white">
              <strong>Balance:</strong>{" "}
              {BigInt(token.tokenBalance) / BigInt(10 ** token.decimals)}
            </div>
          </div>
        ))
      ) : (
        <div className="text-white">No tokens found for this address.</div>
      )}
    </div>
  );
};

export default TokenDetails;
