/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { AgentDetails, AgentNotFound } from "./components";
import { useQuery } from "@tanstack/react-query";
import { getagents } from "@/app/api";

const AIAgent = () => {
    const { data } = useQuery({
      queryKey: ["agents"],
      queryFn: getagents,
    });
  return (
    <div className="max-w-[1920px] mx-auto lg:pl-16">
      <AgentNotFound />
      <div className="mt-8">
        {data?.map((agent:any, index:number) => {
           return (
             <AgentDetails
               key={index}
               owner={`${agent.walletPublicKey.slice(0, 6)}......`}
               status={agent.isActive}
               lastTrade="2 Hours Ago"
             />
           );
        })}
    
      </div>
    </div>
  );
};

export default AIAgent;
