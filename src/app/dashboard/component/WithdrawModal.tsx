import { WithdrawIcon } from '@/app/svg';
import React from 'react'
interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  isModalOpen: boolean;
  setModalOpen:(e:boolean)=>void
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({
    isOpen,
    onClose,
  setModalOpen,
}) => {
  if (!isOpen) return null;
const handleModalClick = (e: React.MouseEvent) => {
  // Prevent closing the modal when clicking inside the modal content
  e.stopPropagation();
};
  return (
    <>
      <div
        className="fixed z-[9999] top-0 left-0 w-full h-full bg-overlay_bg backdrop-blur-[1px] flex justify-center items-center"
        onClick={onClose}
      >
        <div
          className="w-[380px] min-h-[302px] rounded-[12px] p-10 gap-[10px] border border-darker_white  backdrop-blur-xl bg-darkest_white "
          onClick={handleModalClick}
        >
          <div>
            <div className="flex justify-between items-center">
              <div className="flex">
                <span className="text-white text-[36px] mt-1">$</span>
                <input
                  type="number"
                  className="text-[64px] h-[77px] max-w-[195px] text-white bg-transparent placeholder:text-white focus:outline-none focus:border-0"
                  placeholder="0.00"
                />
              </div>
              <WithdrawIcon />
            </div>
            <div className="pb-2">
              <h1 className="font-medium text-white text-[12px]">
                You can Deposit upto $50,000.00
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center  flex-col  w-full">
            <button
              type="button"
              className="h-12 px-4  mt-10 text-[16px] bg-primary text-white w-full mb-4 rounded-full"
              onClick={() => {
                onClose();
                setModalOpen(true);
              }}
            >
              Withdraw
            </button>
          </div>
          <div className="flex justify-between">
            <h1 className=" font-medium text-white text-[14px]">ETH Balance</h1>
            <h1 className=" font-medium text-white text-[14px]">
              0.005545ETH = $200.90
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawModal