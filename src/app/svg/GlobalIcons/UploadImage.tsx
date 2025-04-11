"use client";
import * as React from "react";
import { useRef } from "react";

interface UploadImageProps {
  onImageSelect: (file: File) => void;
}

const UploadImage = ({ onImageSelect }: UploadImageProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageSelect(e.target.files[0]);
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <svg
        width={17}
        height={17}
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.836 4.832h-.833a1.667 1.667 0 00-1.667 1.667v7.5a1.667 1.667 0 001.667 1.666h7.5A1.666 1.666 0 0012.169 14v-.834"
          stroke="#8266F2"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.333 3.167l2.5 2.5m1.155-1.18a1.75 1.75 0 00-2.476-2.474L5.5 9v2.5H8l6.988-7.012z"
          stroke="#8266F2"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        type="file"
        ref={inputRef}
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

export default UploadImage;
