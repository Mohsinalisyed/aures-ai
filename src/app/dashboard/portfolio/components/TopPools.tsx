import React from 'react'
import { AI_Agents } from '../dummyData'
import { PoolDropDown } from '@/app/components';
import { BitcoinToken} from '@/app/svg';

const TopPools = () => {
  return (
    <div className="lg:bg-darkest_white py-2 px-0 lg:px-4 rounded-[20px] mb-4 lg:mb-0 w-full">
      <div className="flex justify-between items-center w-full mb-6">
        <h1 className="text-white text-[24px] font-bold">Top Pools</h1>
        <div className="w-full max-w-[175px]">
          <PoolDropDown
            setPoolFilter={() => console.log("Add pool")}
            poolFilter="pool value"
          />
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="text-left w-full">
          <thead className=" flex text-white w-full">
            <tr className="flex  justify-between w-full  border-radial border">
              <th className="text-[14px] lg:text-[16px] whitespace-nowrap py-1 px-4 w-[173px] border-r border-radial">
                Pool
              </th>
              <th className="text-center text-[14px] lg:text-[16px] p-1 whitespace-nowrap">
                title
              </th>
              <th className="text-center text-[14px] lg:text-[16px] p-1 whitespace-nowrap">
                title
              </th>
              <th className="text-center text-[14px] p-1 lg:text-[16px]">
                title
              </th>
              <th className="text-center text-[14px] p-1 lg:text-[16px] pr-4">
                title
              </th>
            </tr>
          </thead>

          <tbody
            className="bg-grey-light flex flex-col items-center overflow-y-auto overflow-x-hidden lg:overflow-y-scroll w-full "
            style={{ maxHeight: "86vh", minHeight: "86vh" }}
          >
            {AI_Agents?.length > 0 &&
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              AI_Agents?.map((agent: any) => (
                <tr
                  key={agent.id}
                  className="flex justify-between   w-full  border border-radial"
                >
                  <td className=" text-white  text-[14px] lg:text-[16px]  px-4 w-[173px] border-r border-radial py-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <BitcoinToken width={24} /> <BitcoinToken width={24} />
                      </div>
                      <div>USDC/BTC</div>
                    </div>
                  </td>
                  <td className="text-center text-white text-[14px] lg:text-[16px] py-2">
                    data
                  </td>

                  <td className="text-center  text-white  text-[14px] lg:text-[16px] py-2">
                    {agent.tradingAmount}{" "}
                  </td>
                  <td className={`flex justify-center text-white py-2`}>
                    {agent.isActive ? "Active" : "In Active"}
                  </td>
                  <td className="text-white py-2 pr-4">okk</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopPools