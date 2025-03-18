"use client";
import React from "react";

interface ProgressBarProps {
  progress: number;
  onProgressChange: (value: number) => void; // Function to handle progress change
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  onProgressChange,
}) => {
  // Function to handle setting progress
  const handleSetProgress = (value: number) => {
    onProgressChange(value); // Update the progress using the passed function
  };

  return (
    <div className="relative w-full h-8">
      {/* Background bar */}
      <div className="w-full h-1 bg-darkest_white rounded-full">
        {/* Dynamic progress color bar */}
        <div
          className={`h-1 rounded-full ${
            progress > 100 ? "bg-darkest_white" : "bg-primary"
          }`}
          style={{ width: `${progress}%` }} // Dynamically adjust width
        />
      </div>

      {/* Percentage labels */}
      <div className="absolute w-full flex justify-between top-6">
        {[0, 25, 50, 75, 100].map((value) => (
          <span
            key={value}
            className="text-sm text-gray-700 cursor-pointer"
            onClick={() => handleSetProgress(value)}
          >
            {value}%
          </span>
        ))}
      </div>

      {/* Circles indicating the milestones */}
      <div className="absolute w-full flex justify-between top-[-2px]">
        {[0, 25, 50, 75, 100].map((value) => (
          <div
            key={value}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              progress >= value ? "bg-primary" : "bg-darkest_white"
            }`}
            onClick={() => handleSetProgress(value)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
