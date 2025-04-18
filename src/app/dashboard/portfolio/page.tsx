'use client'
import React, { useState } from 'react'
import { AIAgents, LineChart, TopPools  } from './components';
import { AgentDropDown } from '@/app/components/AgentDropDown';

const Portfolio = () => {
  const [agentId,setAgentId]=useState('')
    return (
      <div className="flex gap-5 mt-6 w-full flex-col lg:flex-row pb-5 relative">
        <div className='absolute right-0 top-[-72px] w-full max-w-[340px]'>
          <AgentDropDown agentId={agentId} setAgentId={(e) => setAgentId(e)} />
        </div>
        <div className="flex flex-col gap-5 w-full lg:w-1/2">
          <LineChart />
          <AIAgents />
        </div>
        <TopPools/>
      </div>
    );
}

export default Portfolio