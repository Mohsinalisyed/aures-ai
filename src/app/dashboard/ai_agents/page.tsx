"use client";
import React from "react";
import { AgentDetails, AgentNotFound } from "./components";

const page = () => {
  return (
    <div className="max-w-[1920px] mx-auto lg:pl-16">
      <AgentNotFound />
      <div className="mt-8">
        <AgentDetails
          owner="0x2efa......"
          status="Active"
          lastTrade="2 Hours Ago"
        />
        <AgentDetails
          owner="0x2efa......"
          status="Active"
          lastTrade="2 Hours Ago"
        />
        <AgentDetails
          owner="0x2efa......"
          status="Active"
          lastTrade="2 Hours Ago"
        />
        <AgentDetails
          owner="0x2efa......"
          status="Active"
          lastTrade="2 Hours Ago"
        />
      </div>
    </div>
  );
};

export default page;
