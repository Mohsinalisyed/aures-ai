import React, { useState } from "react";
import { CopyIcon } from "@/app/svg"; // Adjust the import path according to your project structure
import { truncateAddress } from "@/app/utils";

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <span className="flex items-center gap-2">
      {truncateAddress(textToCopy)}
      <button onClick={handleCopy} className="cursor-pointer" type="button">
        {copied ? (
          <span>✔</span> // You can replace this with an icon or text
        ) : (
          <CopyIcon />
        )}
      </button>
    </span>
  );
};

export default CopyButton;
