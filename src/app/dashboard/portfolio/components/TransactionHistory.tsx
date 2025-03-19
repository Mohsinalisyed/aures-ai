'use client'
import React from 'react'
import { Transaction_History } from '../dummyData';
import { WrappedItem } from '../../component';
import { LiraToken } from '@/app/svg';

const TransactionHistory = () => {
  return (
    <div className="bg-darkest_white py-2 px-2 lg:px-4  rounded-[20px]">
      <h1 className="text-white text-[24px] font-bold mb-6">
        Transaction History
      </h1>

      <table className="text-left w-full">
        <tbody
          className="bg-grey-light flex flex-col items-center justify-between overflow-hidden lg:overflow-y-scroll w-full min-h-[60vh] lg:min-h-[43vh]"
          style={{ maxHeight: "43vh" }}
        >
          {Transaction_History.map((trns) => (
            <tr
              key={trns.id}
              className="flex justify-between w-full py-3 mb-1 min-h-[70px]"
            >
              <td>
                <div className={`flex items-center justify-center gap-1 `}>
                  <LiraToken />
                  <div>
                    <p
                      className={`font-bold text-white text-[14px] lg:text-[16px] leading-[120%] mb-2 `}
                    >
                      Token Name
                    </p>
                    <p
                      className={`text-sub_heading_color text-[14px] lg:text-[16px] leading-[120%]`}
                    >
                      ABC
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <WrappedItem
                  heading={`$${parseFloat(trns.latest_trade_token).toFixed(2)}`}
                  subHeading="0.000000ABC"
                />
              </td>
              <td>
                <WrappedItem
                  heading={`$${parseFloat(trns.earning).toFixed(2)}`}
                  subHeading={"0.00%"}
                />
              </td>
              <td className=" text-white">
                <div className="bg-primary rounded-[24px] px-[6px] py-[4px] text-[10px] 2xl:text-[14px] leading-[19px]">
                  00.00%
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='block md:hidden'>
        <h1 className="text-primary text-center">View More</h1>
      </div>
    </div>
  );
}

export default TransactionHistory