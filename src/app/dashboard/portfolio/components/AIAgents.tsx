import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getagents } from "@/app/api";
import { TradingAgentData } from "../type";
import { getTimeAgo } from "@/app/utils";

const AIAgents = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["agents"],
    queryFn: getagents,
  });
  return (
    <div className="lg:bg-darkest_white py-2 px-0 lg:px-4 rounded-[20px] mb-4 lg:mb-0">
      <h1 className="text-white text-[24px] font-bold mb-5">AI Agents</h1>

      {isLoading ? (
        <div className="text-white flex justify-center items-center h-[49vh]">
          Loading...
        </div>
      ) : (
        <table className="text-left w-full">
          <thead className=" flex text-white w-full">
            <tr className="flex justify-between w-full mb-4 mr-4 table-head-border">
              <th className="w-[25%] text-[14px] lg:text-[16px] whitespace-nowrap">
                Token Name
              </th>
              <th className="w-[25%] text-[14px] lg:text-[16px] whitespace-nowrap">
                Latest Trade
              </th>
              <th className="w-[30%] text-[14px] lg:text-[16px] whitespace-nowrap">
                Total Earnings
              </th>
              <th className="w-[15%] text-[14px] lg:text-[16px]">Status</th>
            </tr>
          </thead>

          <tbody
            className="bg-grey-light flex flex-col items-center overflow-y-auto overflow-x-hidden lg:overflow-y-scroll w-full "
            style={{ maxHeight: "43vh", minHeight: "43vh" }}
          >
            {data?.length > 0 ? (
              data?.map((agent: TradingAgentData) => (
                <tr
                  key={agent.id}
                  className="flex justify-between mr-4  w-full pb-3"
                >
                  <td className="  text-white w-[33%] lg:w-[30%] text-[14px] lg:text-[16px] pl-2">
                    <div>{agent.name}</div>
                    <div className="flex text-sub_heading_color text-[14px] lg:text-[16px]">
                      <span>Owner:</span>
                      <span>
                        {agent.walletPublicKey
                          ? `${agent.walletPublicKey.slice(0, 6)}......`
                          : "N/A"}
                        ...
                      </span>
                    </div>
                  </td>
                  <td className=" text-sub_heading_color  w-[28%] lg:w-[30%] text-[14px] lg:text-[16px] ">
                    {getTimeAgo(agent.updatedAt)}
                  </td>

                  <td className="  text-white w-[20%] lg:w-[25%] text-[14px] lg:text-[16px] ">
                    ${parseFloat(agent.tradingAmount).toFixed(2)}{" "}
                  </td>
                  <td className={` text-white `}>
                    <div
                      className={`p-1   rounded-[24px] w-[76px] lg:w-[99px] text-center text-[14px] lg:text-[16px]  ${
                        agent.isActive
                          ? "bg-text_success text-success text-center"
                          : "bg-darker_white"
                      }`}
                    >
                      {agent.isActive ? "Active" : "In Active"}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <div className="text-white flex justify-center items-center h-[49vh]">
                No AI Agents found.
              </div>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AIAgents;
