import TeacherInfo from "@Components/Layouts/Course/Teacher/TeacherInfo";
import Resume from "@Layouts/resume/Resume";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../../Context/useFetch";
import ResumeDoneWrapper from "@Components/Layouts/resume/ResumeWrapper/ResumeDoneWrapper";
import Time from "../../Shared/Time/Time";
import { ReactComponent as Line } from "@Assets/Icons/Line 27.svg";
import moment from "jalali-moment";
import Rate from "../../Shared/Rate/Rate";

const TeacherResumeIndex = () => {
    const location = useLocation();
    const [profession, setProfession] = useState([]);
    const [loadingProfession, setLoadingProfession] = useState(true);
    const [grade, setGrade] = useState([]);
    const [loadingGrade, setLoadingGrade] = useState(true);
    const [skill, setSkill] = useState([]);
    const [loadingSkill, setLoadingSkill] = useState(true);
    const [readable, setReadable] = useState(true);

    const setProfessionInfo = (data) => {
        setProfession(data);
        setLoadingProfession(false);
    };
    const setGradeInfo = (data) => {
        setGrade(data);
        setLoadingGrade(false);
    };
    const setSkillInfo = (data) => {
        setSkill(data);
        setLoadingSkill(false);
    };

    const optionList = [
        { value: "DP", label: "فوق دیپلم" },
        { value: "U.DP", label: "دیپلم" },
        { value: "B.S", label: "کارشناسی" },
        { value: "M.S", label: "کارشناسی ارشد" },
        { value: "Ph.D", label: "دکترا" },
    ];

    const getProfessionInfo = useFetch({
        url: `TeacherProfessionService`,
        params: { teacher_uuid: location.state.teacherId },
        method: "GET",
        noHeader: true,
        // trigger: false,
        setter: setProfessionInfo,
    });
    const getGradeInfo = useFetch({
        url: `TeacherGradeService`,
        params: { teacher_uuid: location.state.teacherId },
        method: "GET",
        noHeader: true,
        // trigger: false,
        setter: setGradeInfo,
    });
    const getSkillInfo = useFetch({
        url: `TeacherSkillService`,
        params: { teacher_uuid: location.state.teacherId },
        method: "GET",
        noHeader: true,
        // trigger: false,
        setter: setSkillInfo,
    });
    // const showEdit = () => {
    //     setEdit((before) => !before);
    // };
    // console.log(profession.results?.[0]);
    return (
        <div className="container grid grid-cols-6 mt-60">
            <div>
                <TeacherInfo courseId={location.state.courseId} resume={true} />
            </div>
            <div className="col-span-5">
                <div>
                    <div className="teacher-resume teacher-resume-profession mb-4">
                        <h3>سوابق کاری</h3>
                        {profession.results?.map((teacherProf) => (
                            <div className=" mb-4">
                                <ResumeDoneWrapper
                                    className="WorkExperinceDone"
                                    id={teacherProf.uuid}
                                    caller={getProfessionInfo}
                                    readable={readable}
                                >
                                    <div className=" WorkExperinceDone__header ">
                                        <p className="WorkExperinceDone__title">
                                            {teacherProf?.profession_title}
                                        </p>
                                    </div>
                                    <div className="WorkExperinceDone__middle flex">
                                        <p>{teacherProf?.company_name}</p>
                                        <span>
                                            <Line />
                                        </span>
                                        <p className="whitespace-nowrap">
                                            <Time
                                                value={
                                                    teacherProf?.profession_start_date
                                                }
                                            />{" "}
                                            تا
                                            {teacherProf?.profession_end_date ? (
                                                <Time
                                                    value={
                                                        teacherProf?.profession_end_date
                                                    }
                                                />
                                            ) : (
                                                <span>تاکنون&nbsp; </span>
                                            )}
                                        </p>
                                    </div>
                                    <p className="WorkExperinceDone__des">
                                        {teacherProf?.profession_description}
                                    </p>
                                </ResumeDoneWrapper>
                            </div>
                        ))}
                    </div>
                    <div className="teacher-resume teacher-resume-grade mb-4">
                        <h3>سوابق تحصیلی</h3>
                        {grade.results?.map((teacherGr) => (
                            <div className=" mb-4">
                                <ResumeDoneWrapper
                                    className="WorkExperinceDone"
                                    type="education"
                                    id={teacherGr.uuid}
                                    caller={getGradeInfo}
                                    readable={readable}
                                >
                                    <div className=" WorkExperinceDone__header  ">
                                        <p className="WorkExperinceDone__title">
                                            {teacherGr.institute_name}
                                        </p>
                                    </div>
                                    <div className="WorkExperinceDone__middle flex">
                                        <p className="line">
                                            {
                                                optionList.find(
                                                    (element) =>
                                                        element.value ===
                                                        teacherGr.grade
                                                ).label
                                            }
                                        </p>
                                        <p className="line">
                                            {teacherGr.major}
                                        </p>

                                        <p>
                                            <span>
                                                {" "}
                                                {moment(
                                                    teacherGr.catch_start_date,
                                                    "YYYY-MM-DD"
                                                )
                                                    .locale("fa")
                                                    .format("dddd D MMMM YYYY")}
                                            </span>{" "}
                                            تا
                                            <span>
                                                {" "}
                                                {moment(
                                                    teacherGr.catch_end_date,
                                                    "YYYY-MM-DD"
                                                )
                                                    .locale("fa")
                                                    .format("dddd D MMMM YYYY")}
                                            </span>
                                        </p>
                                    </div>
                                </ResumeDoneWrapper>
                            </div>
                        ))}
                    </div>
                    <div className="teacher-resume teacher-resume-skill mb-4">
                        <h3>مهارت‌ها</h3>
                        {skill.results?.map((teacherSk) => (
                            <div className=" mb-4">
                                <ResumeDoneWrapper
                                    className="WorkExperinceDone"
                                    id={teacherSk.uuid}
                                    caller={getSkillInfo}
                                    readable={readable}
                                >
                                    <div className=" WorkExperinceDone__header SkillsDone__header  d-flex-space mt-14">
                                        <p className="WorkExperinceDone__title">
                                            {teacherSk.skill_name
                                                ? teacherSk.skill_name
                                                : teacherSk.award_title}
                                        </p>
                                        <Rate
                                            value={
                                                teacherSk.skill_rate
                                                    ? teacherSk.skill_rate
                                                    : teacherSk.award_rate
                                            }
                                            disabled
                                        />
                                    </div>
                                </ResumeDoneWrapper>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherResumeIndex;
