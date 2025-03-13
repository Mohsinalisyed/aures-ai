'use client'
import { useState, useEffect } from "react";

/**
 * Custom hook to check if a media query matches.
 * @param query - The media query string (e.g., "(min-width: 768px)")
 * @returns Boolean - Whether the media query matches
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(() => {
        if (typeof window !== "undefined") {
            return window.matchMedia(query).matches;
        }
        return false;
    });

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQueryList = window.matchMedia(query);

        const handleChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        mediaQueryList.addEventListener("change", handleChange);
        return () => mediaQueryList.removeEventListener("change", handleChange);
    }, [query]);

    return matches;
}
