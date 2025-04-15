import {
  AiChatIcon,
  ForwardIcon,
  RightArrowIcon,
} from "@/app/components/Icons";
import { useEffect, useRef, useState } from "react";

interface Iprops {
  isDashboardChat?: boolean;
}

interface Message {
  text: string;
  sender: "user" | "ai";
}

const AIChatAgent: React.FC<Iprops> = ({ isDashboardChat }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "When will BTC hit $103K?",
      sender: "user",
    },
    {
      text: isDashboardChat
        ? "As of January 22, 2025, Bitcoin (BTC) is trading at approximately $103,979. This surge is attributed to favorable macroeconomic conditions and the inauguration of President Donald Trump, who has announced plans to support the cryptocurrency industry."
        : "Analysts predict a bullish market for Bitcoin in 2025, with prices potentially reaching $225,000 by year-end, driven by favorable regulations and increased adoption.",
      sender: "ai",
    },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null); // 👈 Ref to bottom

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!isDashboardChat) {
      scrollToBottom();
    } // 👈 Scroll on new message
  }, [messages, isDashboardChat]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const aiResponse: Message = {
      text: "Thanks for your question! We'll get back with an analysis shortly.",
      sender: "ai",
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, aiResponse]);
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex items-center justify-center w-full h-[735px]">
      <div
        className={`w-full max-w-[400px] rounded-[1.5rem] shadow-lg border border-light_gray ${
          isDashboardChat
            ? "h-full flex flex-col justify-between pt-6"
            : "h-auto my-[3rem] p-6"
        } md:mx-[20px] md:max-w-[700px]`}
      >
        <h2 className="text-white text-20 px-4 font-bold mb-[40px]">
          AI Chat Agent
        </h2>

        {/* Chat Messages */}
        <div className="overflow-y-auto space-y-4 p-4 rounded-lg max-h-[400px]">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div className="flex gap-2">
                {msg.sender === "ai" && <AiChatIcon />}
                <div
                  className={`p-3 text-white ${
                    msg.sender === "user"
                      ? "bg-background-gradient rounded-[20px] rounded-br-none max-w-xs mb-[20px]"
                      : "bg-white800 rounded-[20px] rounded-bl-none max-w-[80%]"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />{" "}
          {/* 👈 This keeps us scrolled to bottom */}
        </div>

        {/* Input Box & Button */}
        <div className="flex w-full mt-9 items-center gap-2 p-4 relative">
          <input
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="py-6 px-4 bg-white600 rounded-[10px] w-full placeholder:text-[#888888] placeholder:text-16 text-white"
          />

          <button
            onClick={handleSend}
            className={`bg-button-gradient rounded-[10px] flex justify-center items-center ${
              isDashboardChat ? "absolute right-8 h-10 w-10" : "px-4 py-2"
            }`}
          >
            {isDashboardChat ? <ForwardIcon /> : <RightArrowIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatAgent;
