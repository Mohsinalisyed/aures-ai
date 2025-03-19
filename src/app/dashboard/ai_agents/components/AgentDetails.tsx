import React from "react";

// Define the types for the props
interface AgentDetailsProps {
  owner: string;
  status: "Active" | "Inactive" | "Pending"; // You can adjust this depending on possible statuses
  lastTrade: string;
  agentName:string
}

const AgentDetails: React.FC<AgentDetailsProps> = ({
  owner,
  status,
  lastTrade,
  agentName,
}) => {
  return (
    <div className="py-4 px-6 bg-darkest_white rounded-[12px] mb-4">
      <div className="flex justify-between mb-5">
        <h1 className="text-[20px] text-white">{agentName}</h1>
        <p className="text-toggle_active_color text-16 min-w-[133px]">
          Owner: {owner}
        </p>
      </div>
      <div className="flex justify-between">
        <div
          className={`p-1 rounded-[24px] w-[76px] lg:w-[99px] text-center text-[14px] lg:text-[16px] ${
            status
              ? "bg-text_success text-success text-center"
              : "bg-darkest_white text-inactive_color"
          }`}
        >
          {status ? "Active" : "In-Active"}
        </div>
        <p className="text-16 min-w-[133px] text-light_gray">
          Last Trade: {lastTrade}
        </p>
      </div>
    </div>
  );
};

export default AgentDetails;
