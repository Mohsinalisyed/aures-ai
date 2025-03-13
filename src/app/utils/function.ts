
import { gsap } from '@/app/utils';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
type ScrollToElementFunction = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, 
    targetId: string, 
    setIsActive?: (id: string) => void
  ) => void;



export const scrollToElement: ScrollToElementFunction = (event, targetId, setIsActive) => {
    if (setIsActive) {
        setIsActive(targetId);
    }
    event.preventDefault(); // Prevent default anchor behavior

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
       
        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: targetElement, offsetY: 0 }, // Adjusted to work with pinned sections
            ease: "power2.out",
        });
    }
};

export function formatParams(path: string): string {
  // Split the path into parts by "/"
  const pathParts = path.split("/");

  // Find the index of the "dashboard" part and get the next segment
  const index = pathParts.indexOf("dashboard");

  if (index === -1 || index + 1 >= pathParts.length) {
    return ""; // If no "dashboard" or no segment after "dashboard", return an empty string
  }

  // Get the segment after "/dashboard/"
  const pathSegment = pathParts[index + 1];

  // Format the segment: replace underscores with spaces, capitalize each word
  const formattedText = pathSegment
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return formattedText;
}

