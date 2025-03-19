import * as React from "react";

function ExplinatortToolTip() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1784_1116)">
        <path
          d="M3 12a9 9 0 1018.001 0A9 9 0 003 12z"
          fill="url(#paint0_linear_1784_1116)"
        />
        <path
          d="M12 9h.01M11 12h1v4h1"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1784_1116"
          x1={12}
          y1={3}
          x2={12}
          y2={21}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9488C3" />
          <stop offset={0.798718} stopColor="#8266F2" />
        </linearGradient>
        <clipPath id="clip0_1784_1116">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ExplinatortToolTip;
