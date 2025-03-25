import * as React from "react";

function WebLogoModal() {
  return (
    <svg
      width={132}
      height={132}
      viewBox="0 0 132 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1991_14064)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M126 66c0 33.137-26.863 60-60 60S6 99.137 6 66 32.863 6 66 6s60 26.863 60 60zM23.006 42.824l.007-.005 20.81 29.788h.007C60.168 61.181 64.214 38.337 52.796 22L23.013 42.82l-.007-.01v.014zM89.417 23.1l-.002-.003h.007l-.005.003zM59.293 43.43L89.417 23.1l20.332 30.126c-16.525 11.151-39.297 6.737-50.456-9.788v-.008zm50.529 45.746l-.007.004-20.81-29.787h-.007C72.66 70.818 68.612 93.663 80.03 110l29.784-20.82.007.01v-.014zm-66.41 19.717l.002.003h-.007l.005-.003zm0 0l30.124-20.33v-.008c-11.159-16.525-33.93-20.94-50.456-9.788l20.332 30.126z"
          fill="#8266F2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1991_14064"
          x={0.2}
          y={0.2}
          width={131.6}
          height={131.6}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={2.9} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.509804 0 0 0 0 0.4 0 0 0 0 0.94902 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1991_14064"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1991_14064"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default WebLogoModal;
