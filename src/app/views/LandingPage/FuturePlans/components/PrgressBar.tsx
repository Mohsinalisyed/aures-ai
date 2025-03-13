import { cn } from "@/app/utils";
interface ProgressBarProps {
    progress: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    // Calculate width based on progress value
    const progressWidth = (progress + 1) * 25;

    return (
        <div className="w-full max-w-[570px] bg-dark_white rounded-lg h-1">
            <div
                className={cn('bg-white shadow-[0px_0px_12px_0px_#8266F2CC,0px_0px_16px_2px_#8266F2CC] h-full rounded-lg transition-all duration-300', progressWidth === 25 ? "w-1/4" : progressWidth === 50 ? "w-1/2" : progressWidth === 75 ? "w-9/12" : "w-full")}
            ></div>
        </div>
    );
};

export default ProgressBar;