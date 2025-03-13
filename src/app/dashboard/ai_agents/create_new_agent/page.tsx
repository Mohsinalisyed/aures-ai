'use client'
import { BackwardArrow, PlusIcon } from '@/app/svg';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import CustomAIAgentForm from '../custom_agent_form/page';
import { ConnectWallet, RefundCard } from './components';
import { Toggle } from '@/app/components';

const CreateNewAgent = () => {
  const router = useRouter()
  const [customForm, setCustomForm] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
    const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    };
    return (
      <div className="lg:pl-16 lg:py-12 pb-2">
        <div className="text-white  text-[24px] lg:text-[40px] font-bold flex justify-between lg:items-center  flex-col lg:flex-row gap-4">
          <div className="flex gap-4 text-white items-center">
            <button
              onClick={() => {
                if (customForm) {
                  setCustomForm(false);
                } else {
                  router.push("/dashboard/ai_agents");
                }
              }}
            >
              <BackwardArrow />
            </button>
            Create New Agent
          </div>
          <div>
            <button
              onClick={openModal}
              className="border border-gray_border p-4 flex gap-2  justify-center items-center rounded-[80px] text-[14px] lg:text-[16px] font-medium w-full  lg:w-auto"
            >
              <PlusIcon /> <span>Connect Wallet</span>
            </button>
          </div>
        </div>
        {customForm ? (
          <div className="flex justify-between  flex-col-reverse lg:flex-row">
            <CustomAIAgentForm />
            <div className="bg-darkest_white p-[10px] sm:p-0 sm:bg-transparent flex flex-col-reverse sm:flex-col rounded-[12px] mt-4 sm:mt-0">
              <RefundCard />
              <div className="w-full sm:w-[353px] mt-4 rounded-[12px] p-0 sm:p-[10px] bg-transparent sm:bg-darkest_white ">
                <div className="flex justify-between  text-white pb-4">
                  <span>Balance</span>
                  <span>$24.7800</span>
                </div>
                <div className="flex justify-between  text-white">
                  <span>Address</span>
                  <span>BNr1...LkYT</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form className=" flex flex-col text-white max-w-[672px] gap-6 mt-[64px]">
            <label>Agent Name</label>
            <input
              placeholder="Enter Name"
              className="bg-darkest_white h-[48px] px-2 rounded-[6px] border-gray_border border placeholder:text-white hover:border-primary"
            />

            <label>Agent Purpose</label>
            <input
              placeholder="Enter Purpose"
              className="bg-darkest_white h-[48px] rounded-[6px] border-gray_border border px-2 placeholder:text-white hover:border-primary"
            />

            <label>Agent Description</label>
            <textarea className="bg-darkest_white rounded-[6px] min-h-[168px] border-gray_border border px-2 placeholder:text-white hover:border-primary" />
          </form>
        )}
        <div className="text-white pt-[34px] text-[40px]  flex justify-end items-center">
          <div className="lg:pt-[200px] w-full flex justify-end">
            <div>
              <div className="w-full  lg:w-[168px] flex items-center justify-end gap-2 text-16 mb-4 sm:mb-8">
                <Toggle /> Activate
              </div>
              <button
                onClick={() => setCustomForm(true)}
                className={`border border-gray_border p-4 flex gap-2 items-center rounded-[80px] text-[14px] lg:text-[16px] font-medium bg-primary  justify-center h-12 w-full  lg:w-[168px]`}
              >
                {customForm ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        </div>
        <div>
          {isOpen && (
            <div
              className="pointer-events-auto fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
              onClick={handleBackdropClick}
            >
              <div className="relative m-4 py-10 px-5  min-w-[40%] max-w-[94%] lg:max-w-[40%] rounded-lg border border-darker_white bg-darkest_white shadow-sm">
                <ConnectWallet />
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default CreateNewAgent