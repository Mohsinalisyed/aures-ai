import { TransactionIcon } from "@/app/svg";
import React from "react";
interface DepositConformationProps {
  isOpen: boolean;
  onClose: () => void;
  isModalOpen: boolean;
  setModalOpen: (e: boolean) => void;
}

const DepositConformation: React.FC<DepositConformationProps> = ({
  isOpen,
  setModalOpen,
  onClose,
}) => {
  if (!isOpen) return null;
const handleModalClick = (e: React.MouseEvent) => {
  // Prevent closing the modal when clicking inside the modal content
  e.stopPropagation();
};

  return (
    <div
      className="fixed z-[9999] top-0 left-0 w-full h-full text-white bg-overlay_bg backdrop-blur-[1px] flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[416px] h-[671px] overflow-y-auto rounded-[12px] p-[20px] gap-[10px] border border-darker_white  backdrop-blur-xl bg-darkest_white "
        onClick={handleModalClick}
      >
        <h1 className="text-[22px] mb-8"> Review and Confirm</h1>
        <div className="bg-darkest_white h-[74px] rounded-[16px] flex justify-between items-center p-6">
          <h1>Send</h1>
          <h1 className="text-[28px]">1.09074 APT</h1>
        </div>
        <div className="bg-darkest_white rounded-[16px] my-2">
          <div className=" min-h-[56px] flex justify-between items-center p-6">
            <h1>From</h1>
            <div className="flex gap-[6px] items-center">
              <TransactionIcon />
              <h1>Bzsz06Dp....f567wq</h1>
            </div>
          </div>
          <div className="flex justify-between items-center mx-6 border-t border-deposit_color" />
          <div className=" min-h-[56px] flex justify-between items-center p-6">
            <h1>To</h1>
            <div className="flex gap-[6px] items-center">
              <TransactionIcon />
              <h1>Psfz08Gq....f567wq</h1>
            </div>
          </div>
        </div>
        <div className="bg-darkest_white rounded-[16px]">
          <div className=" min-h-[42px] flex justify-between items-center p-6">
            <h1>Network Fee</h1>
            <h1>~$0.023235</h1>
          </div>
          <div className="flex justify-between items-center mx-6 border-t border-deposit_color" />
          <div className=" min-h-[72px] flex justify-between items-center p-6">
            <h1>Speed</h1>
            <div className="text-end">
              <h1>Normal</h1>
              <p className="text-sub_heading_color">~20 secs</p>
            </div>
          </div>
          <div className="flex justify-between items-center mx-6 border-t border-deposit_color" />
          <div className=" min-h-[72px] flex justify-between items-center p-6">
            <h1>Max Total</h1>
            <div className="text-end">
              <h1>1.002000 APT</h1>
              <p className="text-sub_heading_color">$6.75647 USD</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center  flex-col  w-full">
          <button
            type="button"
            className="h-12 px-4  mt-10 text-sm  bg-primary text-white w-full mb-4 rounded-full"
            onClick={() => {
              onClose();
              setModalOpen(true);
            }}
          >
            Confirm and Send
          </button>
          <button
            type="button"
            className="h-12 px-2 text-sm rounded-full bg-white text-primary w-full"
          onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepositConformation;
