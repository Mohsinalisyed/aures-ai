import * as React from "react";

function TooltipIcon() {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={20}
        height={20}
        rx={10}
        fill="url(#paint0_linear_1946_2366)"
      />
      <path
        d="M7.504 7.505c0-.497.23-.973.64-1.324.41-.351.965-.549 1.544-.549h.624c.58 0 1.135.198 1.545.549.41.35.64.827.64 1.324a1.872 1.872 0 01-1.248 1.872c-.383.18-.712.52-.937.97-.225.45-.335.986-.312 1.527M10 14.37v.006"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1946_2366"
          x1={10}
          y1={0}
          x2={10}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9488C3" />
          <stop offset={0.798718} stopColor="#8266F2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default TooltipIcon;
