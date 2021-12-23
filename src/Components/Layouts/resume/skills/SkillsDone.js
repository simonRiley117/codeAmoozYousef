import React, {useEffect, useState} from "react";

import {ReactComponent as Line} from "@Assets/Icons/Line 27.svg";
import ResumeDoneWrapper from '@Components/Layouts/resume/ResumeWrapper/ResumeDoneWrapper'
import Rate from "../../../Shared/Rate/Rate";
import SkillsForm from "./SkillsForm";

const SkillsDone = (
    {
        getSkillInfo,
        skill,
        loadingSkill,
        readable,
        type,
        showForm
    }) => {

    useEffect(() => {
        getSkillInfo.reFetch()
    }, []);

    const [edit, setEdit] = useState(false);
    const showEdit = () => {
        setEdit((before) => !before);
    };

    return (
        !loadingSkill ? (
            skill.results.map((teacherSk) => (
                <>
                    <ResumeDoneWrapper
                        className="WorkExperinceDone"
                        type={type}
                        id={teacherSk.uuid}
                        caller={getSkillInfo}
                        showEdit={showEdit}
                        readable={readable}>
                        <div className=" WorkExperinceDone__header SkillsDone__header  d-flex-space mt-14">
                            <p className="WorkExperinceDone__title">
                                {teacherSk.skill_name ? teacherSk.skill_name : teacherSk.award_title}
                            </p>
                            <Rate
                                value={teacherSk.skill_rate ? teacherSk.skill_rate : teacherSk.award_rate}
                                disabled
                            />
                        </div>
                    </ResumeDoneWrapper>

                    {edit && (
                        <SkillsForm
                            showEdit={showEdit}
                            edit
                            showForm={showForm}
                            getSkill={getSkillInfo}
                            award_title={teacherSk.award_title}
                            award_rate={teacherSk.award_rate}
                            id={teacherSk.uuid}
                        />
                    )}
                </>
            ))
        ) : null
    );
};

export default SkillsDone;
