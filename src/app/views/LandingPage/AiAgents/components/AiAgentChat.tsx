import { AiChatIcon, RightArrowIcon } from "@/app/components/Icons";
import { useState } from "react";

export default function AIChatAgent() {
  const [showAIMessage, setShowAIMessage] = useState(false);

  const messages = [
    {
      text: "When will BTC hit $103K?",
      sender: "user",
    },
    {
      text: "Analysts predict a bullish market for Bitcoin in 2025, with prices potentially reaching $225,000 by year-end, driven by favorable regulations and increased adoption.",
      sender: "ai",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className="w-full max-w-[400px] p-6 rounded-[1.5rem] shadow-lg border border-light_gray my-[3rem] md:mx-[20px] md:max-w-[700px] "
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
        <div className="flex w-full mt-9 items-center gap-2 p-4">
          <div
            className={`py-6 px-4 bg-white600 rounded-[10px] w-[100%] 
          ${
            showAIMessage
              ? "border border-white/10 shadow-[0px_0px_10px_0px_#FFFFFF40] cursor-pointer hover:duration-300"
              : ""
          }`}
          >
            <div className="text-[#888888] text-16 font-normal">
              Type Here to Ask
            </div>
          </div>
          <button
            className={`bg-button-gradient rounded-[10px] p-5  ${
              showAIMessage
                ? "shadow-[0px_0px_5.2px_0px_#8266F2] cursor-pointer ease duration-300"
                : ""
            }`}
          >
            <RightArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
