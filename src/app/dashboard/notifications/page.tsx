import React from "react";
import { NotificationItem } from "./component";

const Notifications = () => {
  return (
    <div className="lg:px-16 lg:py-12 pb-2 text-white">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <NotificationItem key={index} />
      ))}
    </div>
  );
};

export default Notifications;
