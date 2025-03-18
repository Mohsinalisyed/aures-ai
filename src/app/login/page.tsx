/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import { useAccount, useConnect, useSignMessage } from "wagmi";
import { QRCodeSVG } from "qrcode.react";
import { useRouter } from "next/navigation";
import {
  EllipsisMenuIcon,
  LeftArrowIcon,
  LogoIcon,
  RightArrowIcon,
} from "../components/Icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getNonce, verifyAccount } from "../api/auth";
import { VerifyAccountRequest } from "../api";
import { updateLoginState, useLoginStore } from "../state";

export default function Login() {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { signMessage, data: signMessageData, error } = useSignMessage();
  const { token } = useLoginStore()
  const [uri, setUri] = useState<string | null>(null);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const { data } = useQuery({
    queryKey: ["nonce"],
    queryFn: getNonce,
  });
const {
  mutateAsync: verify,
} = useMutation<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  Error,
  VerifyAccountRequest
>({
  mutationFn: async ({ address, signature, message }: VerifyAccountRequest) => {
    return verifyAccount({ address, signature, message });
  },
});

  // Redirect when connected
  useEffect(() => {
    if (token) {
     router.push("/dashboard/portfolio");
   }
  }, [router, token])
  
  useEffect(() => {
    if (isConnected && data !== undefined) {
      console.log("Connected: ", address);

      signMessage({ message: data.nonce });
    }
  }, [isConnected, address, signMessage, data?.nonce]);

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
  // Handle the signed message and verify it or redirect based on success
  useEffect(() => {
    const verifySignature = async () => {
      if (error) {
        console.error("Error signing message:", error);
      } else if (signMessageData && isConnected) {
        console.log("Message Signed Successfully: ", signMessageData);
        if (address && signMessageData && data?.nonce) {
          const user= await verify({
            address,
            signature: signMessageData,
            message: data.nonce,
          });
          updateLoginState(user.token, user.user);

          router.push('/dashboard/portfolio')
        }
      }
    };

    verifySignature();
  }, [signMessageData, error, address, isConnected]);

  return (
    <>
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="relative w-full flex justify-center items-center mt-12">
          {/* Back Button - Positioned Absolutely */}
          <div
            className="absolute left-0 flex flex-row gap-2 cursor-pointer"
            onClick={() => router.back()}
          >
            <LeftArrowIcon />
            <span className="text-white text-[14px] lg:text-[16px]">Back</span>
          </div>
          <LogoIcon />
        </div>

        {/* QR Section */}
        <div className="flex flex-col items-center justify-center w-full h-[80vh]">
          <span className="text-white text-[32px] font-bold mb-[80px]">
            Connect Your Wallet
          </span>

          <div className="bg-white800 p-[24px] rounded-[24px] backdrop-blur-[80px] w-[800px] h-[326px]">
            {connectionError ? (
              <div className="text-red-500 text-center">{connectionError}</div>
            ) : uri ? (
              <div className="flex flex-row gap-[40px]">
                {/* QR Code */}
                <div className="w-[fit-content] relative p-3">
                  <QRCodeSVG className="bg-white" value={uri} size={256} />
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

                {/* Instructions */}
                <div className="flex flex-col justify-center">
                  <span className="text-white text-[24px] font-medium leading-[120%] mb-[40px]">
                    Scan this code in your wallet app
                  </span>
                  <div className="flex flex-col">
                    <div className="flex flex-row mb-[16px] gap-2 items-center">
                      <RightArrowIcon />
                      <span className="text-white text-[14px] lg:text-[16px] font-normal leading-[120%]">
                        Open wallet connect app on your phone
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex flex-row mb-[16px] gap-2 items-center">
                      <RightArrowIcon />
                      <span className="text-white text-[14px] lg:text-[16px] font-normal leading-[120%] flex items-center gap-1">
                        Tap Linked Devices from the <EllipsisMenuIcon /> menu
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex flex-row mb-[16px] gap-2 items-center">
                      <RightArrowIcon />
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
            ) : (
              !isConnected && (
                <div className="flex flex-col items-center justify-center h-full">
                  <span className="text-white text-[24px] font-medium leading-[120%] mb-[40px]">
                    {`Generating QR Code...`}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="fixed bottom-0 w-[20%] h-[50px] bg-primary flex justify-center items-center left-[40%] opacity-[0.8] filter blur-[100px]" />
      </div>
    </>
  );
}
