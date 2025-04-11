import React, { useState } from 'react'
import { EllipsisMenuIcon } from '@/app/components/Icons';
import { QRCodeSVG } from 'qrcode.react';
import { CopyIcon } from '@/app/svg';
interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
//   isModalOpen: boolean;
//   setModalOpen:(e:boolean)=>void
}

const DepositModal: React.FC<DepositModalProps> = ({
    isOpen,
    onClose,
}) => {
const [copied, setCopied] = useState(false);
  if (!isOpen) return null;
const handleModalClick = (e: React.MouseEvent) => {
  // Prevent closing the modal when clicking inside the modal content
  e.stopPropagation();
    };
    
      const handleCopy = () => {
        navigator.clipboard
          .writeText('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045')
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
          })
          .catch((err) => {
            console.error("Failed to copy: ", err);
          });
      };
    
  return (
    <>
      <div
        className="fixed z-[9999] top-0 left-0 w-full h-full bg-overlay_bg backdrop-blur-[1px] flex justify-center items-center"
        onClick={onClose}
      >
        <div
          className="w-[380px] mx-4 min-h-[302px] rounded-[12px] p-6 gap-[10px] border border-darker_white  backdrop-blur-xl bg-darkest_white "
          onClick={handleModalClick}
        >
          <h2 className="text-white font-bold text-center text-[16px] lg:text-[20px] leading-[130%]">
            Recieve
          </h2>
          <div className="flex flex-col gap-[20px] items-center">
            {/* QR Code */}
            <div className="pt-4">
              <div className="w-[fit-content] relative p-3">
                <QRCodeSVG className="bg-white" value={""} size={200} />
                {/* Corner borders */}
                <div className="absolute inset-0 border-white w-full h-full pointer-events-none">
                  {/* Top Left */}
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-[4px] border-l-[4px] border-white rounded-tl-[6px]" />
                  {/* Top Right */}
                  <div className="absolute top-0 right-0 w-5 h-5 border-t-[4px] border-r-[4px] border-white rounded-tr-[6px]" />
                  {/* Bottom Left */}
                  <div className="absolute bottom-0 left-0 w-5 h-5 border-b-[4px] border-l-[4px] border-white rounded-bl-[6px]" />
                  {/* Bottom Right */}
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-[4px] border-r-[4px] border-white rounded-br-[6px]" />
                </div>
              </div>
            </div>
            <div className="max-w-[250px] ">
              <div className=" break-words text-center">
                0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
              </div>
              <button
                onClick={handleCopy}
                className="cursor-pointer w-full mt-2"
                type="button"
              >
                {copied ? (
                  <span className="text-green-500">✔ Copied</span> // You can replace this with an icon or text
                ) : (
                  <div className="flex gap-2 items-center justify-center w-full font-bold text-primary">
                    Copy Address <CopyIcon />
                  </div>
                )}
              </button>
            </div>
            {/* Instructions */}
            <div className="flex flex-col items-center">
              <span className="text-white text-[16px] font-medium leading-[120%] mb-3">
                Scan this code in your wallet app
              </span>
              <div className="flex flex-col">
                <div className="flex flex-row mb-2 gap-2 items-center">
                  <span className="text-white text-[14px] lg:text-[14px] text-center font-normal leading-[120%]">
                    Scan this code in the xxxxxxxx app on your phone
                  </span>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex flex-row mb-2 gap-2 items-center">
                  <span className="text-white text-[14px] lg:text-[14px] font-normal leading-[120%] flex items-center gap-1">
                    Tap Linked Devices from the <EllipsisMenuIcon /> menu
                  </span>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex flex-row mb-2 gap-2 items-center">
                  <span className="text-white text-[14px] lg:text-[14px] font-normal leading-[120%]">
                    Scan this QR code
                  </span>
                </div>
              </div>

              <span className="mt-[24px] text-primary text-[14px] lg:text-[14px] font-medium leading-[130%]">
                Need Help?
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepositModal