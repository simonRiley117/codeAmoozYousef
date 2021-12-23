import React from "react";
import {ReactComponent as CloseIcon, ReactComponent as Trash} from "@Assets/Icons/Trash.svg";
import {ReactComponent as Submit} from "@Assets/Icons/CheckCircle.svg";
import IconBtn from "@Components/Shared/Buttons/IconBtn";

const ResumeFormWrapper = (
    {
        className,
        children,
        showForm,
        showEdit,
        edit,
    }) => {
    return (
        <div className={`resume__bg ResumeFormWrapper relative ${className}`}>
            <div className='flex IconBox-ab'>
                <IconBtn
                    title='تایید'
                    icon={<Submit/>}
                    classes='success mx-7'
                    htmlType='submit'
                />

                <IconBtn
                    title='بستن'
                    icon={<CloseIcon/>}
                    classes='resume__button'
                    onClick={edit ? showEdit : showForm}
                />
            </div>
            <>{children}</>
        </div>
    );
};

export default ResumeFormWrapper;
