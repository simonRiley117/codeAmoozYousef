import React, {useEffect} from "react";

import {ReactComponent as Line} from "@Assets/Icons/Line 27.svg";
import ResumeDoneWrapper from '@Components/Layouts/resume/ResumeWrapper/ResumeDoneWrapper'
import Rate from "../../../Shared/Rate/Rate";

const SkillsDone = (
    {
        getTeacherSkillInfo,
        teacherSkill,
        loadingTeacherSkill,
    }) => {

    useEffect(() => {
        getTeacherSkillInfo.reFetch()
    }, []);

    return (
        !loadingTeacherSkill ? (
            teacherSkill.results.map((teacherSk) => (
                <ResumeDoneWrapper className="WorkExperinceDone">
                    <div className=" WorkExperinceDone__header SkillsDone__header  d-flex-space mt-14">
                        <p className="WorkExperinceDone__title">
                            {teacherSk.skill_name}
                        </p>
                        <Rate
                            value={teacherSk.skill_rate}
                            disabled
                        />
                    </div>
                </ResumeDoneWrapper>
            ))
        ) : null
    );
};

export default SkillsDone;
