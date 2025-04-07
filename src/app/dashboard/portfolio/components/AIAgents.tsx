import React from "react";
import { AI_Agents } from "../dummyData";

const AIAgents = () => {

  return (
    <div className="lg:bg-darkest_white py-2 px-0 lg:px-4 rounded-[20px] mb-4 lg:mb-0">
      <h1 className="text-white text-[24px] font-bold mb-5">AI Agents</h1>

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
          className="bg-grey-light flex flex-col items-center justify-between overflow-y-auto overflow-x-hidden lg:overflow-y-scroll w-full "
          style={{ maxHeight: "43vh" }}
        >
          {AI_Agents.map((agent) => (
            <tr
              key={agent.id}
              className="flex justify-between mr-4  w-full pb-3"
            >
              <td className="  text-white w-[33%] lg:w-[30%] text-[14px] lg:text-[16px] pl-2">
                <div>{agent.name}</div>
                <div className="flex text-sub_heading_color text-[14px] lg:text-[16px]">
                  <span>Owner:</span>
                  <span>{agent.owner_address.slice(0, 5)}...</span>
                </div>
              </td>
              <td className=" text-sub_heading_color  w-[28%] lg:w-[30%] text-[14px] lg:text-[16px] ">
                {agent.latest_trade}
              </td>
              <td className="  text-white w-[20%] lg:w-[25%] text-[14px] lg:text-[16px] ">
                {agent.earning}
              </td>
              <td className={` text-white `}>
                <div
                  className={`p-1   rounded-[24px] w-[76px] lg:w-[99px] text-center text-[14px] lg:text-[16px]  ${
                    agent.status === "Active"
                      ? "bg-text_success text-success text-center"
                      : "bg-darker_white"
                  }`}
                >
                  {agent.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AIAgents;
