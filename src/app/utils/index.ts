import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

export * from "gsap";
export * from "@gsap/react";
export * from "gsap/ScrollTrigger";
export * from './function'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);