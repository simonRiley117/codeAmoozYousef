import React, { useState } from "react";
import { Accordion, Panel } from "@Components/Shared/Accordion/Accordion";
import WorkExperiencePanel from "@Components/Layouts/resume/WorkExperince/WorkExperiencePanel";
import EducationExperiencePanel from "@Components/Layouts/resume/educationExp/EducationExperiencePanel";
import SkillsPanel from "@Components/Layouts/resume/skills/SkillsPanel";
import useFetch from "../../Context/useFetch";

const Resume = ({ readable, teacherId }) => {
    const [profession, setProfession] = useState([]);
    const [loadingProfession, setLoadingProfession] = useState(true);
    const [grade, setGrade] = useState([]);
    const [loadingGrade, setLoadingGrade] = useState(true);
    const [skill, setSkill] = useState([]);
    const [loadingSkill, setLoadingSkill] = useState(true);

    const setProfessionInfo = (data) => {
        setProfession(data);
        setLoadingProfession(false);
    };
    const setrGradeInfo = (data) => {
        setGrade(data);
        setLoadingGrade(false);
    };
    const setSkillInfo = (data) => {
        setSkill(data);
        setLoadingSkill(false);
    };

    const getProfessionInfo = useFetch({
        url: teacherId
            ? `TeacherProfessionService`
            : `StudentProfessionService`,
        params: teacherId ? { teacher_uuid: teacherId } : "",
        method: "GET",
        noHeader: teacherId ? true : false,
        trigger: false,
        setter: setProfessionInfo,
    });
    const getGradeInfo = useFetch({
        url: teacherId ? `TeacherGradeService` : `StudentGradeService`,
        params: teacherId ? { teacher_uuid: teacherId } : "",
        method: "GET",
        noHeader: teacherId ? true : false,
        trigger: false,
        setter: setrGradeInfo,
    });
    const getSkillInfo = useFetch({
        url: teacherId ? `TeacherSkillService` : `StudentAwardService`,
        params: teacherId ? { teacher_uuid: teacherId } : "",
        method: "GET",
        noHeader: teacherId ? true : false,
        trigger: false,
        setter: setSkillInfo,
    });

    return (
        <>
            {!readable ? (
                <h3 className="title  mb-10"> رزومه شما</h3>
            ) : (
                <h3 className="title  mb-10"> رزومه</h3>
            )}
            <Accordion half>
                <Panel header={<span>سوابق کاری</span>}>
                    <WorkExperiencePanel
                        getProfessionInfo={getProfessionInfo}
                        profession={profession}
                        loadingProfession={loadingProfession}
                        readable={readable}
                    />
                </Panel>
                <Panel header={<span>سوابق تحصیلی</span>}>
                    <EducationExperiencePanel
                        getGradeInfo={getGradeInfo}
                        grade={grade}
                        loadingGrade={loadingGrade}
                        readable={readable}
                    />
                </Panel>
                <Panel header={<span>مهارت ها</span>}>
                    <SkillsPanel
                        getSkillInfo={getSkillInfo}
                        skill={skill}
                        loadingSkill={loadingSkill}
                        readable={readable}
                    />
                </Panel>
            </Accordion>
        </>
    );
};

export default Resume;
