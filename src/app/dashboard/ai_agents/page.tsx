/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { AgentDetails, AgentHeader } from "./components";
import { useQuery } from "@tanstack/react-query";
import { getagents } from "@/app/api";
import { getTimeAgo } from "@/app/utils";
import { useRouter } from "next/navigation";

const AIAgent = () => {
  const router =useRouter()
    const { data, isLoading } = useQuery({
      queryKey: ["agents"],
      queryFn: getagents,
    });
  return (
    <div className="max-w-[1920px] mx-auto lg:pl-16">
      <AgentHeader />
      {data?.length === 0 || isLoading ? (
        <p className="text-sub_heading_color text-[14px] lg:text-[16px] mt-6">
          No Agents Found!
        </p>
      ) : (
        <div className="mt-8">
          {data?.map((agent: any, index: number) => {
            return (
              <div
                key={index}
                onClick={() =>
                  router.push(
                    `/dashboard/ai_agents/create_new_agent?agentId=${agent.id}`
                  )
                }
                className="cursor-pointer"
              >
                <AgentDetails
                  agentName={agent.name}
                  owner={`${agent.walletPublicKey.slice(0, 6)}......`}
                  status={agent.isActive}
                  lastTrade={getTimeAgo(agent.updatedAt)}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AIAgent;
