import { IconSvgProps } from "./types";

const RightArrowIcon: React.FC<IconSvgProps> = () => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.332 8h9.333M10 10.667L12.667 8M10 5.333L12.667 8"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default RightArrowIcon;
