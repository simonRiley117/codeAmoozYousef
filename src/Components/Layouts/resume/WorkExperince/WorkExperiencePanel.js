import React, {useEffect, useState} from "react";
import WorkExperienceDone from "./WorkExperinceDone";
import WorkExperienceForm from "./WorkExperienceForm";
import {ReactComponent as PlusIcon} from "@Assets/Icons/plus.svg";
import Button from "@Components/Shared/Buttons/Button";

const WorkExperiencePanel = (
    {
        readable,
        getProfessionInfo,
        profession,
        loadingProfession
    }) => {
    const [addItem, setAddItem] = useState(false);
    const showForm = () => {
        setAddItem((before) => !before);
    };

    return (
        <div className="WorkExperiencePanel">
            <WorkExperienceDone
                getProfessionInfo={getProfessionInfo}
                profession={profession}
                loadingProfession={loadingProfession}
                readable={readable}
                type='work'
                showForm={showForm}
            />
            {!readable && (
                addItem && (
                    <WorkExperienceForm
                        showForm={showForm}
                        getWorks={getProfessionInfo}/>
                )
            )}
            {/* {isReadable} */}
            {!readable && (
                !addItem && (
                    <Button type='text' size='small' success onClick={showForm}>
                        <PlusIcon/>
                        <p>اضافه کردن سوابق کاری</p>
                    </Button>
                )
            )}
        </div>
    );
};

export default WorkExperiencePanel;
