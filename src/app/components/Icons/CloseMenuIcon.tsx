import { IconSvgProps } from './types';

const CloseMenuIcon: React.FC<IconSvgProps> = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="url(#paint0_linear_238_244)" strokeLinecap="round" />
            <path d="M6 6L18 18" stroke="url(#paint1_linear_238_244)" strokeLinecap="round" />
            <defs>
                <linearGradient id="paint0_linear_238_244" x1="6" y1="18" x2="18" y2="6" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0.24" />
                    <stop offset="0.5" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0.24" />
                </linearGradient>
                <linearGradient id="paint1_linear_238_244" x1="6" y1="6" x2="18" y2="18" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0.24" />
                    <stop offset="0.5" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0.24" />
                </linearGradient>
            </defs>
        </svg>
    );
};
export default CloseMenuIcon;