'use client'
import React from 'react'
import { AIAgents, LineChart, TransactionHistory, YourAssets } from './components';

const page = () => {
    return (
        <div className="flex gap-5 mt-6 w-full flex-col lg:flex-row">
          <div className="flex flex-col gap-5 w-full lg:w-[50%]">
            <LineChart />
            <div className="block lg:hidden">
              <YourAssets />
            </div>
            <TransactionHistory />
          </div>
          <div className="flex flex-col gap-5 w-full lg:w-[50%]">
            <AIAgents />
            <div className="hidden lg:block">
              <YourAssets />
            </div>
          </div>
        </div>
    );
}

export default page