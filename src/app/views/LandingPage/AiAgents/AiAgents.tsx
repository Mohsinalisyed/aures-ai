"use client";
import Image from "next/image";
import { AiAgentsData } from "./components/AiAgentsData";

const AiAgents = () => {
  return (
    <div className=" flex flex-col">
      {/* Left Side: Scrollable Text */}
      <div className="flex flex-col w-full">
        {AiAgentsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between  mb-[100px] md:flex-row  md:mb-[300px] gap-[23px]"
          >
            <div className="flex flex-col gap-4 justify-center h-auto md:w-[50%]">
              <h2 className="text-3xl text-center font-bold text-white mb-11 2xl:text-4xl md:text-left ">
                {item.title}
              </h2>
              <ul className="text-white">
                {item.points.map((point, idx) => (
                  <li className="flex mb-4 flex-col items-center md:flex-row md:items-start" key={idx}>
                    <span className="flex-shrink-0 mr-3  mb-2 mt-4 w-6 h-6 md:mb-0 md:mt-0">
                      <Image
                        src={"/StarListIcon.svg"}
                        width={24}
                        height={24}
                        alt="starlist icon"
                      />
                    </span>
                    <p className="text-20  text-white font-normal leading-[140%]  text-center md:text-left">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className=" flex w-full flex-col items-center md:w-[50%]">
              {/* Top Gradient Border */}
              <div className="w-full h-[1px] bg-transparent border-t border-transparent border-gradient"></div>
              {item.image}
              {/* Bottom Gradient Border */}
              <div className="w-full h-[1px] bg-transparent border-b border-transparent border-gradient"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiAgents;
