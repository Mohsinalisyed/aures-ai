"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { ethers } from "ethers";
import { getNonce, verifyAccount } from "@/app/api";
import { updateLoginState } from "@/app/state";
import ConnectWallet from "@/app/svg/ConnectWallet";
import MetaMaskIcon from "@/app/svg/MetaMaskIcon";

interface ConnectWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();

  if (!isOpen) return null;

  const connectMetaMask = async () => {

    try {
      if (!window.ethereum) {
        return;
      }

      // 1. Request wallet access
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      console.log("Wallet address:", address);

      // 2. Fetch nonce from backend
      const nonceResponse = await getNonce();
      const message = nonceResponse?.nonce;

      // 3. Sign the nonce
      const signature = await signer.signMessage(message);
      console.log("Signature:", signature);

      // 4. Verify the account
      const verifyResponse = await verifyAccount({
        address,
        message,
        signature,
      });

        // 5. Save login state
      updateLoginState(verifyResponse.token, verifyResponse.user);

      // 6. Redirect
      router.push("/dashboard/portfolio");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Connection error:", err);
      console.log(err.message || "Failed to connect and authenticate.");
    }
  };

  return (
    <div
      className="fixed z-[9999] top-0 left-0 w-full h-full bg-overlay_bg backdrop-blur-[1px] flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[380px] min-h-[302px] rounded-[12px] mx-4 p-8 gap-[10px] border border-darker_white backdrop-blur-xl bg-darkest_white"
        onClick={(e) => e.stopPropagation()} // prevent modal close on inner click
      >
        <h2 className="text-white font-bold text-center text-[16px] lg:text-[24px] leading-[130%] mb-8 ">
          Connect Wallet
        </h2>
        <div
          className="text-white p-4 bg-[#333] rounded-lg cursor-pointer hover:bg-[#444] mb-4 flex items-center gap-2"
          onClick={() => router.push("/login")}
        >
          <ConnectWallet /> Wallet Connect
        </div>

        <div
          className="text-white p-4 bg-[#333] rounded-lg cursor-pointer hover:bg-[#444] flex items-center gap-2"
          onClick={connectMetaMask}
        >
          <MetaMaskIcon /> Connect with MetaMask
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
