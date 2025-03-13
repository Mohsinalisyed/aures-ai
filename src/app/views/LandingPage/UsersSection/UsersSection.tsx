"use client";

import { UserSectionIcon } from "@/app/components/Icons";

const UsersSection = () => {
  return (
    <div className=" flex  mb-[60px] mt-[-20px] md:my-60 gap-y-4 md:gap-x-6 flex-col md:flex-row">
      <div className="bg-black_three  w-full border-2 border-darkest_white backdrop-blur-[80px] rounded-3xl p-0 md:p-9">
        <div className="flex  flex-col-reverse h-full md:flex-row relative">
          <div className="group flex flex-1 flex-col justify-center h-full  md:min-h-full  z-30 transition-colors duration-300  px-5 py-10 md:p-0 md:pt-0">
            <h2 className="text-28 md:text-40 text-bold text-white mb-6 group-hover:text-white">
              General User
            </h2>
            <p className="text-16 md:text-20 text-gray_one font-medium group-hover:text-white">
              Smart trading strategies personalized to your investment style and
              goals.
            </p>
          </div>

          {/* Icon Section */}
          <div className="flex flex-1 justify-center md:justify-end relative">
            <UserSectionIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersSection;
