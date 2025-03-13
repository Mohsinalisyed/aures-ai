'use client'
import React, { useState } from "react";

const ProgressBar = () => {
  // State for progress (0 to 100)
  const [progress, setProgress] = useState(25); // Change this value to test different progress

  // Function to handle setting progress
  const handleSetProgress = (value: number) => {
    setProgress(value);
  };

  // CircleMilestone Component
  const CircleMilestone = ({
    percentage,
    currentProgress,
    onClick,
  }: {
    percentage: number;
    currentProgress: number;
    onClick: () => void;
  }) => {
    const getCircleColor = () => {
      return currentProgress >= percentage ? "bg-primary" : "bg-darkest_white";
    };

    return (
      <div
        className={`w-2 h-2 rounded-full cursor-pointer ${getCircleColor()}`}
        onClick={onClick}
      ></div>
    );
  };

  // ProgressLabel Component
  const ProgressLabel = ({
    label,
    onClick,
  }: {
    label: string;
    onClick: () => void;
  }) => {
    return (
      <span className="text-sm text-gray-700 cursor-pointer" onClick={onClick}>
        {label}
      </span>
    );
  };

  // ProgressBarFill Component
  const ProgressBarFill = ({ progress }: { progress: number }) => {
    return (
      <div
        className={`h-1 rounded-full ${
          progress > 100 ? "bg-darkest_white" : "bg-primary"
        }`}
        style={{ width: `${progress}%` }} // Dynamically adjust width
      ></div>
    );
  };

  return (
    <div className="relative w-full h-8">
      {/* Background bar */}
      <div className="w-full h-1 bg-darkest_white rounded-full">
        {/* Dynamic progress color bar */}
        <ProgressBarFill progress={progress} />
      </div>

      {/* Percentage labels */}
      <div className="absolute w-full flex justify-between top-6">
        <ProgressLabel label="0%" onClick={() => handleSetProgress(0)} />
        <ProgressLabel label="25%" onClick={() => handleSetProgress(25)} />
        <ProgressLabel label="50%" onClick={() => handleSetProgress(50)} />
        <ProgressLabel label="75%" onClick={() => handleSetProgress(75)} />
        <ProgressLabel label="100%" onClick={() => handleSetProgress(100)} />
      </div>

      {/* Circles indicating the milestones */}
      <div className="absolute w-full flex justify-between top-[-2px]">
        <CircleMilestone
          percentage={0}
          currentProgress={progress}
          onClick={() => handleSetProgress(0)}
        />
        <CircleMilestone
          percentage={25}
          currentProgress={progress}
          onClick={() => handleSetProgress(25)}
        />
        <CircleMilestone
          percentage={50}
          currentProgress={progress}
          onClick={() => handleSetProgress(50)}
        />
        <CircleMilestone
          percentage={75}
          currentProgress={progress}
          onClick={() => handleSetProgress(75)}
        />
        <CircleMilestone
          percentage={100}
          currentProgress={progress}
          onClick={() => handleSetProgress(100)}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
