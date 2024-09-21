import React from "react";
import { IoIosMoon } from "react-icons/io";

const WorkingHours: React.FC = () => {
  return (
    <div className="workingHours">
      <IoIosMoon className="workingHours__icon" />
      <span className="workingHours__text">Работаем с 08:00 до 23:00</span>
    </div>
  );
};

export default React.memo(WorkingHours);
