import React from "react";
import { ReactComponent as Trash } from "@Assets/Icons/Trash.svg";
import { ReactComponent as Pencil } from "@Assets/Icons/Pencil.svg";
import IconBtn from '@Components/Shared/Buttons/IconBtn';

const ResumeDoneWrapper = ({children,className}) => {
  return (
    <div className={`resume__bg ResumeDoneWrapper relative ${className}`}>
      <div className="flex IconBox-ab">
        <div className="px-7">
          
          <IconBtn title='ویرایش' icon={<Pencil />} danger/>

        </div>
        <div>
        <IconBtn title='حذف' icon={<Trash />} danger/>
        </div>
      </div>
      <>
      {children}
      </>
    </div>
  );
};

export default ResumeDoneWrapper;
