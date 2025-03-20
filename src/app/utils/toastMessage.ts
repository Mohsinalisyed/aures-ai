import { toast } from "react-toastify";

// Reusable toast function
const showToast = (message: string, type: "error" | "success" | "warning") => {
  switch (type) {
    case "error":
      return toast.error(message);
    case "success":
      return toast.success(message);
    case "warning":
      return toast.warning(message);
    default:
      return toast(message);
  }
};

// Example usage:

const errorToast = (message: string) => showToast(message, "error");
const successToast = (message: string) => showToast(message, "success");
const warningToast = (message: string) => showToast(message, "warning");

export { errorToast, successToast, warningToast };
