import React, {useState} from "react";
import SkillsDone from "./SkillsDone";
import SkillsForm from "./SkillsForm";
import {ReactComponent as PlusIcon} from "@Assets/Icons/plus.svg";
import Button from "@Components/Shared/Buttons/Button";

const SkillsPanel = (
    {
        readable,
        getTeacherSkillInfo,
        teacherSkill,
        loadingTeacherSkill,
    }) => {
    const [AddForm, setAddForm] = useState(true);
    return (
        <div className="WorkExperiencePanel ">
            <SkillsDone
                getTeacherSkillInfo={getTeacherSkillInfo}
                teacherSkill={teacherSkill}
                loadingTeacherSkill={loadingTeacherSkill}/>

            {AddForm && !readable && <SkillsForm/>}

            {!readable && (
                <Button
                    onClick={() => setAddForm(true)}
                    type="text"
                    size="small"
                    success
                >
                    <PlusIcon/>
                    <p>اضافه کردن مهارت </p>
                </Button>
            )}
        </div>
    );
};

export default SkillsPanel;
