import React from "react";
import { ReactComponent as Trash } from "@Assets/Icons/Trash.svg";
import { ReactComponent as Submit } from "@Assets/Icons/CheckCircle.svg";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
const ResumeFormWrapper = ({ className, children }) => {
  return (
    <div className={`resume__bg ResumeFormWrapper relative ${className}`}>
      <div className="flex IconBox-ab">
        <div className="px-7">
          <IconBtn title="تایید" icon={<Submit />} danger />
        </div>

        <div >
          <IconBtn title="حذف" icon={<Trash />} danger />
        </div>
      </div>
      <>{children}</>
    </div>
  );
};

export default ResumeFormWrapper;
