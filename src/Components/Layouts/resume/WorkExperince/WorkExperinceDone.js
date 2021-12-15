import React, {useEffect} from "react";

import {ReactComponent as Line} from "@Assets/Icons/Line 27.svg";
import ResumeDoneWrapper from '@Components/Layouts/resume/ResumeWrapper/ResumeDoneWrapper'
import Time from "../../../Shared/Time/Time";

const WorkExperinceDone = (
    {
        // title,
        // company,
        // startdate,
        // endDate,
        // description,
        getTeacherProfessionInfo,
        teacherProfession,
        loadingTeacherProfession,
    }) => {

    useEffect(() => {
        getTeacherProfessionInfo.reFetch()
    }, []);

    return (
        !loadingTeacherProfession ? (
            teacherProfession.results.map((teacherProf) => (
                <ResumeDoneWrapper className="WorkExperinceDone">
                    <div className=" WorkExperinceDone__header  ">
                        <p className="WorkExperinceDone__title">
                            {teacherProf?.profession_title}
                        </p>
                    </div>
                    <div className="WorkExperinceDone__middle flex">
                        <p>{teacherProf?.company_name}</p>
                        <span>
                            <Line/>
                        </span>
                        {/*<p>*/}
                        {/*    <span>{teacherProf?.profession_start_date}</span> - <span>{teacherProf.profession_end_date}</span>*/}
                        {/*</p>*/}
                        <p className='whitespace-nowrap'>
                            <Time value={teacherProf?.profession_start_date}/> تا
                            {teacherProf?.profession_end_date ? <Time value={teacherProf?.profession_end_date}/> :
                                <span>تاکنون&nbsp;  </span>}
                        </p>
                    </div>
                    <p className="WorkExperinceDone__des">{teacherProf?.profession_description}</p>
                </ResumeDoneWrapper>
            ))
        ) : null
    );
};

export default WorkExperinceDone;
