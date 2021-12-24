import React from "react";
import {ReactComponent as Trash} from "@Assets/Icons/Trash.svg";
import {ReactComponent as Pencil} from "@Assets/Icons/Pencil.svg";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import useFetch from "../../../../Context/useFetch";

const ResumeDoneWrapper = (
    {
        readable,
        children,
        className,
        type,
        id,
        caller,
        showEdit,
    }) => {
    const deleteItem = useFetch({
        url:
            type == 'skill'
                ? `StudentAwardService/${id}`
                : type == 'work'
                    ? `StudentProfessionService/${id}`
                    : `StudentGradeService/${id}`,
        method: 'DELETE',
        trigger: false,
        caller: caller,
    });

    return (
        <div className={`resume__bg ResumeDoneWrapper relative ${className}`}>
            <div className="flex IconBox-ab">
                {!readable && (
                    <div className='px-7' onClick={showEdit}>
                        <IconBtn title='ویرایش' icon={<Pencil/>} classes='text-black'/>
                    </div>
                )}
                {!readable && (
                    <div onClick={deleteItem.reFetch}>
                        <IconBtn title='حذف' icon={<Trash/>} danger/>
                    </div>
                )}
            </div>
            <>{children}</>
        </div>
    );
};

export default ResumeDoneWrapper;
