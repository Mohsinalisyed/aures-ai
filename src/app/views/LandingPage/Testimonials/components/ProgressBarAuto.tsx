'use client'
import { useState, useEffect } from 'react'

interface ProgressBarAutoProps {
    onComplete: () => void; // Callback to trigger when progress completes1
    duration?: number;
}
export const ProgressBarAuto = ({ onComplete, duration = 8000 }: ProgressBarAutoProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(0); // Reset progress

        const interval = duration / 100; // Calculate interval time for smooth updates
        const timer = setInterval(() => {
            setProgress((prev) => {
                const nextProgress = prev + 1;
                if (nextProgress >= 100) {
                    clearInterval(timer); // Stop the timer
                    onComplete(); // Trigger the callback
                    return 100;
                }
                return nextProgress;
            });
        }, interval);

        return () => {
            clearInterval(timer); // Cleanup on unmount
        };
    }, [onComplete, duration]);

    return (

        <div className="relative w-full min-h-[2px] bg-dark_white rounded-3xl ">
            <div
                className="relative h-[2px] shadow-progressbar-shadow rounded-3xl  overflow-visible"
                style={{
                    width: `${progress}%`,
                    transition: `width ${duration / 100}ms linear`, // Smooth width animation
                }}
            >
                {/* Layer 1 */}
                <div className="absolute inset-0 h-[0.1px] rounded-3xl shadow-progressbar-shadow"></div>

                {/* Layer 2 */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8266F2] via-[#8266F2] to-[#9488C3] bg-[length:100%] rounded-3xl  shadow-progressbar-inner-shadow"></div>

                {/* Layer 3 */}
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,255,255,0.24)] via-[#FFFFFF] to-[rgba(255,255,255,0.24)] rounded-3xl "></div>
            </div>
        </div>
    )
}

