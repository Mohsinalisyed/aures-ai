import { Ethereum, WebLogoModal } from '@/app/svg';
import React, { useState } from 'react'
import WithdrawModal from './WithdrawModal';
import DepositConformation from './DepositConformation';
import ConfirmationModal from './ConformationModal';
interface IRefundCard {
  showWithdraw?:boolean
}
const RefundCard: React.FC<IRefundCard> = ({ showWithdraw }) => {
  const [openModal, setOpenModal] = useState(false)
  const [depositModal, setDepositModal] = useState(false);
      const [conformationModal, setConformationModal] = useState(false);


  
  return (
    <>
      <div className="bg-refund_card_gradient  rounded-[12px] p-4">
        <div className="h-[97px] mb-2">
          <h1 className="text-24 text-white font-bold">$279.17</h1>
          <h1 className="text-eth_color text-24 pt-2">~ 0 ETH</h1>
        </div>
        <div className="bg-darker_white border border-darker_white py-4 px-[10px] rounded-[6px] flex gap-3 items-center ">
          <Ethereum />
          <div className="text-white">12.4463</div>
        </div>
        <div className="flex gap-3">
          <button className="bg-white text-toggle_active_color w-full h-[48px] rounded-[24px] mt-2">
            Fund
          </button>
          {showWithdraw && (
            <button
              onClick={() => setOpenModal(true)}
              className="bg-profile_options_bg border border-white text-white w-full h-[48px] rounded-[24px] mt-2"
            >
              Withdraw
            </button>
          )}
        </div>
      </div>
      <WithdrawModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        setModalOpen={(e) => setDepositModal(e)}
        isModalOpen={depositModal}
      />
      <DepositConformation
        isOpen={depositModal}
        onClose={() => setDepositModal(false)}
        setModalOpen={(e) => setConformationModal(e)}
        isModalOpen={conformationModal}
      />
      <ConfirmationModal
        isOpen={conformationModal}
        icon={<WebLogoModal />}
        title="Sending..."
        desc="Please wait!  It may take few seconds. "
        onClose={()=>setConformationModal(false)}
        
      />
    </>
  );
};

export default RefundCard