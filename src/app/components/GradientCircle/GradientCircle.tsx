import { cn } from '@/app/utils';
interface IGradientCircle {
    classname: string
}
export const GradientCircle: React.FC<IGradientCircle> = ({ classname }) => {
    return (
        <div className={cn(classname, ' rounded-full border-[20px] absolute border-[#8266F203] shadow-[inset_0_0_40px_60px_rgba(130,102,242,1)] opacity-100 blur-[12px]')} />
    )
}