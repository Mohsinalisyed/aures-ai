import { IconSvgProps } from './types';

const Divider: React.FC<IconSvgProps> = () => {
    return (
        <svg width="2" height="42" viewBox="0 0 2 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1V41" stroke="url(#paint0_linear_48_240)" strokeLinecap="round" />
            <defs>
                <linearGradient id="paint0_linear_48_240" x1="1.5" y1="1" x2="1.5" y2="41" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1A1A1A" stopOpacity="0" />
                    <stop offset="0.5" stopColor="white" stopOpacity="0.4" />
                    <stop offset="1" stopColor="#1A1A1A" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>

    );
};
export default Divider;