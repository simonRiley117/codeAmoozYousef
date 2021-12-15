import React, {useState} from "react";
import {Accordion, Panel} from "@Components/Shared/Accordion/Accordion";
import WorkExperiencePanel from "@Components/Layouts/resume/WorkExperince/WorkExperiencePanel";
import EducationExperiencePanel from "@Components/Layouts/resume/educationExp/EducationExperiencePanel";
import SkillsPanel from "@Components/Layouts/resume/skills/SkillsPanel";
import useFetch from "../../Context/useFetch";

const Resume = ({readable, teacherId}) => {
    const [teacherProfession, setTeacherProfession] = useState([])
    const [loadingTeacherProfession, setLoadingTeacherProfession] = useState(true)
    const [teacherGrade, setTeacherGrade] = useState([])
    const [loadingTeacherGrade, setLoadingTeacherGrade] = useState(true)
    const [teacherSkill, setTeacherSkill] = useState([])
    const [loadingTeacherSkill, setLoadingTeacherSkill] = useState(true)

    const setTeacherProfessionInfo = (data) => {
        setTeacherProfession(data)
        setLoadingTeacherProfession(false)
    }
    const setTeacherGradeInfo = (data) => {
        setTeacherGrade(data)
        setLoadingTeacherGrade(false)
    }
    const setTeacherSkillInfo = (data) => {
        setTeacherSkill(data)
        setLoadingTeacherSkill(false)
    }

    const getTeacherProfessionInfo = useFetch({
        url: `TeacherProfessionService`,
        params: {teacher_uuid: teacherId},
        method: "GET",
        noHeader: true,
        trigger: false,
        setter: setTeacherProfessionInfo,
    });
    const getTeacherGradeInfo = useFetch({
        url: `TeacherGradeService`,
        params: {teacher_uuid: teacherId},
        method: "GET",
        noHeader: true,
        trigger: false,
        setter: setTeacherGradeInfo,
    });
    const getTeacherSkillInfo = useFetch({
        url: `TeacherSkillService`,
        params: {teacher_uuid: teacherId},
        method: "GET",
        noHeader: true,
        trigger: false,
        setter: setTeacherSkillInfo,
    });

    return (
        <>
            {!readable && <h3 className="title  mb-10"> رزومه شما</h3>}
            {readable && <h3 className="title  mb-10"> رزومه</h3>}
            <Accordion half>
                <Panel header={<span>سوابق کاری</span>}>
                    <WorkExperiencePanel
                        getTeacherProfessionInfo={getTeacherProfessionInfo}
                        teacherProfession={teacherProfession}
                        loadingTeacherProfession={loadingTeacherProfession}
                        readable={readable}/>
                </Panel>
                <Panel header={<span>سوابق تحصیلی</span>}>
                    <EducationExperiencePanel
                        getTeacherGradeInfo={getTeacherGradeInfo}
                        teacherGrade={teacherGrade}
                        loadingTeacherGrade={loadingTeacherGrade}
                        readable={readable}/>
                </Panel>
                <Panel header={<span>مهارت ها</span>}>
                    <SkillsPanel
                        getTeacherSkillInfo={getTeacherSkillInfo}
                        teacherSkill={teacherSkill}
                        loadingTeacherSkill={loadingTeacherSkill}
                        readable={readable}/>
                </Panel>
            </Accordion>
        </>
    );
};

export default Resume;
