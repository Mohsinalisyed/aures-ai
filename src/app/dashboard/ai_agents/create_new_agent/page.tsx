
"use client"; 
import { BackwardArrow } from "@/app/svg";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, } from "react";
import {  useQuery } from "@tanstack/react-query";
import {getAgentById} from "@/app/api";
import Form2 from "../components/Form2";
import Form1 from "../components/Form1";

const CreateNewAgent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const agentId = searchParams.get("agentId");
  const [customForm, setCustomForm] = useState(1);

  const { data } = useQuery({
    queryKey: ["getagentbyid", agentId],
    queryFn: () => getAgentById(agentId as string),
    enabled: !!agentId,
  });


  return (
    <div className="lg:px-16 lg:py-12 pb-2">
      <div className="text-white text-[24px] lg:text-[40px] font-bold flex justify-between lg:items-center flex-col lg:flex-row gap-4">
        <div className="flex gap-4 text-white items-center">
          <button
            onClick={() => {
              if (customForm === 2) {
                setCustomForm(1);
              } else {
                router.push("/dashboard/ai_agents");
              }
            }}
          >
            <BackwardArrow />
          </button>
          Create New Agent
        </div>
      </div>
      {customForm === 1 && <Form1 setCustomForm={setCustomForm} data={data} />}
      {customForm === 2 && <Form2 data={data} agentId={agentId ?? ""} />}
    </div>
  );
};

export default CreateNewAgent;