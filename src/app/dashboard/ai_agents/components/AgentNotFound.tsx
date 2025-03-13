'use client'
import { PlusIcon } from '@/app/svg';
import { useRouter } from 'next/navigation';
import React from 'react'

const AgentNotFound = () => {
const router=useRouter()
  return (
    <div className="lg:pt-20">
      <div className=" flex justify-between items-center">
        <div className="flex justify-between w-full">
          <div>
            <h1 className="text-white  text-[24px] lg:text-[40px] font-bold">
              My Agents
            </h1>
            <p className="text-sub_heading_color text-[14px] lg:text-[16px] mt-6">
              No Agents Found!
            </p>
          </div>
          <button
            className="w-[56px] h-[56px] rounded-[80px] p-4 bg-hover_background_gradient text-white"
            onClick={() => router.push("/dashboard/ai_agents/create_new_agent")}
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgentNotFound