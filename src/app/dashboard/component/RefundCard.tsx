import { Ethereum, SuccessIcon, WebLogoModal } from '@/app/svg';
import React, { useState } from 'react'
import WithdrawModal from './WithdrawModal';
import ConfirmationModal from './ConformationModal';
import DepositModal from './DepositModal';
import { useRouter } from 'next/navigation';
import { errorToast } from '@/app/utils';
interface IRefundCard {
  showWithdraw?: boolean
  balance?: string
  agentId:string | undefined
}
const RefundCard: React.FC<IRefundCard> = ({ showWithdraw, balance, agentId }) => {
  const router=useRouter()
  const [openModal, setOpenModal] = useState(false)
  const [depositModal, setDepositModal]=useState(false)
  const [conformationModal, setConformationModal] = useState(false);
  const [confirmed,setConfirmed] = useState(false)
  
  return (
    <>
      <div className="bg-refund_card_gradient  rounded-[12px] p-4">
        <div className="h-[97px] mb-2">
          <h1 className="text-24 text-white font-bold">${balance}</h1>
          <h1 className="text-eth_color text-24 pt-2">~ 0 ETH</h1>
        </div>
        <div className="bg-darker_white border border-darker_white py-4 px-[10px] rounded-[6px] flex gap-3 items-center ">
          <Ethereum />
          <div className="text-white">0.00</div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setDepositModal(true)}
            className="bg-white text-toggle_active_color w-full h-[48px] rounded-[24px] mt-2"
          >
            Deposit
          </button>
          {showWithdraw && (
            <button
              onClick={() => {
                if (agentId === undefined) {
                  errorToast('Please select agent')
                }
                else{
                  setOpenModal(true)
                }
              }}
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
        setModalOpen={(e) => setConformationModal(e)}
        isModalOpen={conformationModal}
        agentId={agentId}
        setConfirmed={(e) => setConfirmed(e)}
      />
      {/* <DepositConformation
        isOpen={withdrawModal}
        onClose={() => setWithdrawModal(false)}
        setModalOpen={(e) => setConformationModal(e)}
        isModalOpen={conformationModal}
      /> */}
      <ConfirmationModal
        isOpen={conformationModal}
        icon={<WebLogoModal />}
        title="Sending..."
        desc="Please wait!  It may take few seconds. "
        onClose={() => setConformationModal(false)}
      />
      <ConfirmationModal
        isOpen={confirmed}
        icon={<SuccessIcon/>}
        title="Sent Successfully"
        desc="Congratulations! your Withdraw has been completed successfully."
        onClose={() => setConfirmed(false)}
        actionText='Go to Home'
        onAction={() => router.push("/dashboard/portfolio")}
      />
      <DepositModal
        isOpen={depositModal}
        onClose={() => setDepositModal(false)}
      />
    </>
  );
};

export default RefundCard