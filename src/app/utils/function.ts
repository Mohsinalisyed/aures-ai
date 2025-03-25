
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

 export const extractMessage = (response: string) => {
   const regex = /Sign this message to authenticate: (.+)/;
   const match = response?.match(regex);

   if (match && match[1]) {
     return match[1];
   }
   return null;
 };
export function getTimeAgo(updatedAt: string): string {
  const now = new Date();
  const updatedDate = new Date(updatedAt);
  const diffInSeconds = Math.floor((now.getTime() - updatedDate.getTime()) / 1000);

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInSeconds < 60) {
    return "Just now";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
  } else if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths === 1 ? '' : 's'} ago`;
  } else {
    return `${diffInYears} year${diffInYears === 1 ? '' : 's'} ago`;
  }
}

export const truncateAddress = (address: string): string => {
  if (address?.length <= 8) return address;
  if (address === undefined) return '---';
  return `${address?.slice(0, 4)}...${address?.slice(-4)}`;
};