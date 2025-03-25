import React from 'react'

const NotificationItem = () => {
  return (
    <div className="backdrop-blur-3xl flex items-center justify-between bg-notification_item_background min-h-[81px] max-w-[894px] rounded-[12px] px-6 py-[14px] mb-[18px]">
      <div>
        <h1 className="text-[20px]">Notification</h1>
        <h1>lorem ipsum dolor sit amet</h1>
      </div>
      <div className="bg-primary shadow-[0px_0px_6px_0px_rgba(130,102,242,1)] w-3 h-3 rounded-full" />
    </div>
  );
}

export default NotificationItem