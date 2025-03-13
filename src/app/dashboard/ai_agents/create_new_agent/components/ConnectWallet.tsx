"use client";
import React, { useState, useEffect } from "react";
import { useAccount, useConnect } from "wagmi";
import { QRCodeSVG } from "qrcode.react";
import { EllipsisMenuIcon  } from "@/app/components/Icons";

export default function ConnectWallet() {
  const {  isConnected } = useAccount();

  const { connect, connectors } = useConnect();

  // const { disconnect } = useDisconnect();

  const [, setUri] = useState<string | null>(null);
  const [, setConnectionError] = useState<string | null>(null);



  // Setup WalletConnect
  useEffect(() => {
    const connector = connectors.find((c) => c.id === "walletConnect");

    async function setupProvider() {
      if (!connector) return;

      try {
        const provider = (await connector.getProvider()) as {
          on: (event: string, callback: (data: string) => void) => void;
        };

        if (!provider || typeof provider.on !== "function") {
          console.error("Provider is invalid.");
          return;
        }

        provider.on("display_uri", (newUri: string) => {
          console.log("WalletConnect URI:", newUri);
          setUri(newUri);
        });

        // Initiate connection
        connect({ connector });
      } catch (err) {
        console.error("Wallet connection failed:", err);
        setConnectionError("Failed to connect. Please try again.");
      }
    }

    if (!isConnected) {
      setUri(null); // Reset URI when disconnected
      setupProvider(); // Reinitialize provider when disconnected
    }
  }, [connectors, connect, isConnected]);

  return (
    <>
      <div className="flex flex-col gap-[40px] items-center">
        {/* QR Code */}
        <div className="rounded-xl border border-darker_white p-3">
          <div className="w-[fit-content] relative p-3">
            <QRCodeSVG className="bg-white" value={""} size={274} />
            {/* Corner borders */}
            <div className="absolute inset-0 border-white w-full h-full pointer-events-none">
              {/* Top Left */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-[8px] border-l-[8px] border-white rounded-tl-[6px]" />
              {/* Top Right */}
              <div className="absolute top-0 right-0 w-5 h-5 border-t-[8px] border-r-[8px] border-white rounded-tr-[6px]" />
              {/* Bottom Left */}
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-[8px] border-l-[8px] border-white rounded-bl-[6px]" />
              {/* Bottom Right */}
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-[8px] border-r-[8px] border-white rounded-br-[6px]" />
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="flex flex-col items-center">
          <span className="text-white text-[24px] font-medium leading-[120%] mb-[40px]">
            Scan this code in your wallet app
          </span>
          <div className="flex flex-col">
            <div className="flex flex-row mb-[16px] gap-2 items-center">
              <span className="text-white text-[14px] lg:text-[16px] font-normal leading-[120%]">
                Scan this code in the xxxxxxxx app on your phone
              </span>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-row mb-[16px] gap-2 items-center">
              <span className="text-white text-[14px] lg:text-[16px] font-normal leading-[120%] flex items-center gap-1">
                Tap Linked Devices from the <EllipsisMenuIcon /> menu
              </span>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-row mb-[16px] gap-2 items-center">
              <span className="text-white text-[14px] lg:text-[16px] font-normal leading-[120%]">
                Scan this QR code
              </span>
            </div>
          </div>

          <span className="mt-[24px] text-primary text-[14px] lg:text-[16px] font-medium leading-[130%]">
            Need Help?
          </span>
        </div>
      </div>
    </>
  );
}
