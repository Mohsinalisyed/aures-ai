import { AiChatIcon, ForwardIcon, RightArrowIcon } from "@/app/components/Icons";
import { useState } from "react";

interface Iprops {
  isDashboardChat?:boolean
}
const AIChatAgent: React.FC<Iprops> = ({ isDashboardChat }) => {
  const [showAIMessage, setShowAIMessage] = useState(false);

  const messages = [
    {
      text: "When will BTC hit $103K?",
      sender: "user",
    },
    {
      text:isDashboardChat ?  "As of January 22, 2025, Bitcoin (BTC) is trading at approximately $103,979.This surge is attributed to favorable macroeconomic conditions and the inauguration of President Donald Trump, who has announced plans to support the cryptocurrency industry.As of January 22, 2025, Bitcoin (BTC) is trading at approximately $103,979.This surge is attributed to favorable macroeconomic conditions and the inauguration of President Donald Trump, who has announced plans to support the cryptocurrency industry.Investor's Business DailyAnalysts predict a bullish market for Bitcoin in 2025, with prices potentially reaching $225,000 by year-end, driven by favorable regulations and increased adoption." : "Analysts predict a bullish market for Bitcoin in 2025, with prices potentially reaching $225,000 by year-end, driven by favorable regulations and increased adoption.",
      sender: "ai",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full h-[735px]">
      <div
        className={`w-full max-w-[400px] rounded-[1.5rem] shadow-lg border border-light_gray ${
          isDashboardChat
            ? "h-full flex flex-col justify-between pt-6"
            : "h-auto my-[3rem] p-6"
        }  md:mx-[20px] md:max-w-[700px] `}
        onMouseEnter={() => setShowAIMessage(true)}
        onMouseLeave={() => setShowAIMessage(false)}
      >
        <h2 className="text-white text-20 px-4 font-bold mb-[120px]">
          AI Chat Agent
        </h2>

        {/* Chat Messages */}
        <div className="overflow-y-auto space-y-4 p-4 rounded-lg">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div className="flex gap-2">
                {msg.sender === "ai" && (
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      showAIMessage
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 "
                    }`}
                  >
                    <AiChatIcon />
                  </div>
                )}

                <div
                  className={`p-3 text-white transition-all duration-500 ease-in-out ${
                    msg.sender === "user"
                      ? "bg-background-gradient rounded-[20px] rounded-br-none max-w-xs mb-[20px]"
                      : `bg-white800 rounded-[20px] rounded-bl-none w-[80%] ${
                          showAIMessage
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Box & Button */}
        <div className="flex w-full mt-9 items-center gap-2 p-4 relative">
          <input
            placeholder=" Type Here to Ask"
            className={`py-6 px-4 bg-white600 rounded-[10px] w-[100%] placeholder:text-[#888888] placeholder:text-16 placeholder:font-normal 
          ${
            showAIMessage
              ? "border border-white/10 shadow-[0px_0px_10px_0px_#FFFFFF40] cursor-pointer hover:duration-300"
              : ""
          }`}
          />

          <button
            className={`bg-button-gradient rounded-[10px] flex justify-center items-center   ${
              showAIMessage
                ? "shadow-[0px_0px_5.2px_0px_#8266F2] cursor-pointer ease duration-300"
                : ""
            } ${isDashboardChat ? "absolute right-8 h-10 w-10" : ""}`}
          >
            {isDashboardChat ? <ForwardIcon /> : <RightArrowIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};
export default AIChatAgent;