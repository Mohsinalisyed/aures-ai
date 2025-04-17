import React from "react";

interface ConfirmationModalProps {
  isOpen: boolean;
  icon: React.ReactNode;
  onClose: () => void;
  actionText?: string;
  onAction?: () => void;
  title: string
  desc: string
  showCancel?: boolean
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  icon,
  title,
  desc,
  onClose,
  actionText = "Confirm",
  onAction,
  showCancel,
}) => {
  if (!isOpen) return null;
const handleModalClick = (e: React.MouseEvent) => {
  // Prevent closing the modal when clicking inside the modal content
  e.stopPropagation();
};
  return (
    <div
      className="fixed z-[9999] top-0 left-0 w-full h-full bg-overlay_bg backdrop-blur-[1px] flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[380px] min-h-[265px] rounded-[12px] p-[20px] gap-[10px] border border-darker_white  backdrop-blur-[2px] bg-darkest_white"
        onClick={handleModalClick}
      >
        <div className="flex justify-center">{icon}</div>
        <div className="mt-10">
          <div className="pb-4">
            <h1 className="font-medium text-white text-[22px] text-center">
              {title}
            </h1>
          </div>
          <div>
            <p className="text-sm font-medium text-white text-[16px] text-center">
              {desc}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center  flex-col px-4 pt-2 w-full">
          {onAction && (
            <button
              type="button"
              className="h-12 px-4  mt-10 text-sm  bg-primary text-white w-full mb-4 rounded-full"
              onClick={onAction}
            >
              {actionText}
            </button>
          )}
          {showCancel && (
            <button
              type="button"
              className="h-12 px-2 text-sm rounded-full bg-white text-primary w-full"
              onClick={onClose}
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
