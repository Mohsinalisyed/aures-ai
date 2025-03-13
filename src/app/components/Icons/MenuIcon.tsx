import { IconSvgProps } from './types';

const MenuIcon: React.FC<IconSvgProps> = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20" stroke="url(#paint0_linear_188_1291)" strokeLinecap="round" />
            <path d="M4 12H20" stroke="url(#paint1_linear_188_1291)" strokeLinecap="round" />
            <path d="M4 18H20" stroke="url(#paint2_linear_188_1291)" strokeLinecap="round" />
            <defs>
                <linearGradient id="paint0_linear_188_1291" x1="3.5" y1="6" x2="20" y2="6" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0.24" />
                    <stop offset="0.5" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0.24" />
                </linearGradient>
                <linearGradient id="paint1_linear_188_1291" x1="3.5" y1="12" x2="20" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0.24" />
                    <stop offset="0.5" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0.24" />
                </linearGradient>
                <linearGradient id="paint2_linear_188_1291" x1="3.5" y1="18" x2="20" y2="18" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0.24" />
                    <stop offset="0.5" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0.24" />
                </linearGradient>
            </defs>
        </svg>


    );
};
export default MenuIcon;