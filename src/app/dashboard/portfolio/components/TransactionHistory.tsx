'use client'
import React from 'react'
import { Transaction_History } from '../dummyData';
import { WrappedItem } from '../../component';
import { LiraToken } from '@/app/svg';

const TransactionHistory = () => {
  return (
    <div className="bg-darkest_white py-2 px-2 lg:px-4  rounded-[20px]">
      <h1 className="text-white text-[24px] font-bold mb-5">
        Transaction History
      </h1>

      <table className="text-left w-full">
        <tbody
          className="bg-grey-light flex flex-col items-center justify-between overflow-x-hidden lg:overflow-y-scroll w-full"
          style={{ maxHeight: "41vh" }}
        >
          {Transaction_History.map((trns) => (
            <tr key={trns.id} className="flex justify-between w-full py-2">
              <td>
                <WrappedItem
                  heading="Token Name"
                  subHeading="ABC"
                  icon={<LiraToken />}
                />
              </td>
              <td>
                <WrappedItem
                  heading={`$${parseFloat(trns.latest_trade_token).toFixed(2)}`}
                  subHeading="0.000000ABC"
                />
              </td>
              <td>
                <WrappedItem
                  heading={`${parseFloat(trns.earning).toFixed(2)}`}
                  subHeading={"0.00%"}
                />
              </td>
              <td className=" p-2 text-white">
                <div className="bg-primary rounded-lg text-[14px] lg:text-[16px] ">
                  00.00%
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory