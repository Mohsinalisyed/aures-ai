import React from 'react'
import HoldingItem from './HoldingItem';
import { BitcoinToken, LiraToken } from '@/app/svg';

const Holding = () => {
  return (
    <div className="w-full sm:w-[203px] h-[274px] bg-darkest_white rounded-[12px] px-3 py-4 mb-2 sm:mb-0">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-[20px]">Holding</h1>
        <h1>$0</h1>
      </div>
      <HoldingItem
        tokenSymbol={<LiraToken width={32} height={32} />}
        tokenName="Token name"
        tokenPrice="$0"
        tokenBalance="0"
        tokenDetail="ABC"
      />
      <HoldingItem
        tokenSymbol={<BitcoinToken />}
        tokenName="Token name"
        tokenPrice="$0"
        tokenBalance="0"
        tokenDetail="ABC"
      />
      <HoldingItem
        tokenSymbol={<LiraToken width={32} height={32} />}
        tokenName="Token name"
        tokenPrice="$0"
        tokenBalance="0"
        tokenDetail="ABC"
      />
      <HoldingItem
        tokenSymbol={<BitcoinToken />}
        tokenName="Token name"
        tokenPrice="$0"
        tokenBalance="0"
        tokenDetail="ABC"
      />
    </div>
  );
}

export default Holding