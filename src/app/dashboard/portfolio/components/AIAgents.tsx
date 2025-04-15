import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getagents } from "@/app/api";
import { TradingAgentData } from "../type";
import { getTimeAgo } from "@/app/utils";
import { PlusIcon } from "@/app/svg";
import { useRouter } from "next/navigation";
import EyeIcon from "@/app/svg/EyeIcon";
import EditIcon from "@/app/svg/EditIcon";

const AIAgents = () => {
  const router=useRouter()
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
        <div className="w-full overflow-x-auto">
          <table className="text-left w-full min-w-[600px]">
            <thead className=" flex text-white w-full">
              <tr className="flex  w-full mb-4 mr-4 table-head-border">
                <th className="w-[20%] text-[14px] lg:text-[16px] whitespace-nowrap">
                  Token Name
                </th>
                <th className="w-[20%] text-center text-[14px] lg:text-[16px] whitespace-nowrap">
                  Latest Trade
                </th>
                <th className="w-[20%] text-center text-[14px] lg:text-[16px] whitespace-nowrap">
                  Total Earnings
                </th>
                <th className="w-[20%] text-center text-[14px] lg:text-[16px]">
                  Status
                </th>
                <th className="w-[20%] text-center text-[14px] lg:text-[16px]">
                  Action
                </th>
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
                    <td className="w-[20%]  text-white  text-[14px] lg:text-[16px] pl-2">
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
                    <td className="w-[20%] text-center text-sub_heading_color text-[14px] lg:text-[16px] ">
                      {getTimeAgo(agent.updatedAt)}
                    </td>

                    <td className="w-[20%] text-center  text-white  text-[14px] lg:text-[16px] ">
                      ${parseFloat(agent.tradingAmount).toFixed(2)}{" "}
                    </td>
                    <td className={`w-[20%] flex justify-center text-white `}>
                      <div
                        className={`p-1 h-8 rounded-[24px] w-[76px] lg:w-[99px] text-center text-[14px] lg:text-[16px]  ${
                          agent.isActive
                            ? "bg-text_success text-success text-center"
                            : "bg-darker_white"
                        }`}
                      >
                        {agent.isActive ? "Active" : "In Active"}
                      </div>
                    </td>
                    <td className="w-[20%] flex justify-center  text-white  text-[14px] lg:text-[16px] px-4 cursor-pointer">
                      <div className="flex  gap-4">
                        <div
                          onClick={() =>
                            router.push(
                              `/dashboard/portfolio/view-agent?agentId=${agent.id}`
                            )
                          }
                        >
                          <EyeIcon />
                        </div>
                        <div>
                          <div
                            onClick={() =>
                              router.push(
                                `/dashboard/ai_agents/create_new_agent?agentId=${agent.id}`
                              )
                            }
                          >
                            <EditIcon />
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <div className="text-white flex justify-center items-center h-[49vh]">
                  <button
                    className=" rounded-[80px] p-2 px-4 bg-hover_background_gradient text-white flex gap-2 items-center text-[14px] lg:text-[16px] font-medium"
                    onClick={() =>
                      router.push("/dashboard/ai_agents/create_new_agent")
                    }
                  >
                    <PlusIcon /> Create New Agent
                  </button>
                </div>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AIAgents;
