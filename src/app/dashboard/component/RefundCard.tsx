import { Ethereum } from '@/app/svg';
import React from 'react'

const RefundCard = () => {
  return (
    <div className="bg-refund_card_gradient mt-6 rounded-[12px] p-4">
      <div className="h-[97px] mb-2">
        <h1 className="text-24 text-white font-bold">$279.17</h1>
        <h1 className="text-eth_color text-24 pt-2">~ 0 ETH</h1>
      </div>
      <div className="bg-darker_white border border-darker_white py-4 px-[10px] rounded-[6px] flex gap-3 items-center ">
        <Ethereum/>
        <div className="text-white">12.4463</div>
      </div>
      <button className="bg-white text-toggle_active_color w-full h-[48px] rounded-[24px] mt-2">Fund</button>
    </div>
  );
}

export default RefundCard