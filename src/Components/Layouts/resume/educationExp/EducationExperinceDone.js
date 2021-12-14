import React, {useEffect} from "react";

import {ReactComponent as Line} from "@Assets/Icons/Line 27.svg";
import ResumeDoneWrapper from '@Components/Layouts/resume/ResumeWrapper/ResumeDoneWrapper'
import moment from "jalali-moment";

const EducationExperinceDone = (
    {
        // title,
        // company,
        // startdate,
        // endDate,
        // description,
        getTeacherGradeInfo,
        teacherGrade,
        loadingTeacherGrade
    }) => {

    useEffect(() => {
        getTeacherGradeInfo.reFetch()
    }, []);

    return (
        !loadingTeacherGrade ? (
            teacherGrade.results.map((teacherGr) => (
                <ResumeDoneWrapper className="WorkExperinceDone">
                    <div className=" WorkExperinceDone__header  ">
                        <p className="WorkExperinceDone__title">{teacherGr.institute_name}</p>
                    </div>
                    <div className="WorkExperinceDone__middle flex">
                        <p className='line'>{teacherGr.grade}</p>
                        <p className='line'>{teacherGr.major}</p>

                        <p>
                            <span>
                                {" "}
                                {moment(teacherGr.catch_end_date, "YYYY-MM-DD")
                                    .locale("fa")
                                    .format("dddd D MMMM YYYY")}
                            </span> تا
                            <span>
                                {" "}
                                {moment(teacherGr.catch_end_date, "YYYY-MM-DD")
                                    .locale("fa")
                                    .format("dddd D MMMM YYYY")}
                            </span>
                        </p>
                    </div>
                </ResumeDoneWrapper>
            ))
        ) : null
    );
};

export default EducationExperinceDone;
