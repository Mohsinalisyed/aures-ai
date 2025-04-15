'use client'
import React from 'react'
import { AIAgents, LineChart  } from './components';

const page = () => {
    return (
      <div className="flex gap-5 mt-6 w-full flex-col lg:flex-row pb-5">
        <div className="flex flex-col gap-5 w-full mb-4">
          <LineChart />
          <AIAgents />
        </div>
      </div>
    );
}

export default page