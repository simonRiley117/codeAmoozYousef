import TeacherInfo from "@Components/Layouts/Course/Teacher/TeacherInfo";
import Resume from "@Layouts/resume/Resume";
import React from "react";
import {useLocation} from "react-router-dom";

const Teacherresume = () => {
    const location = useLocation();
    // console.log('location: ', location)

    return (
        <div className="container grid grid-cols-6 mt-60">
            <div>
                <TeacherInfo
                    courseId={location.state.courseId}
                    resume={true}/>
            </div>
            <div className="col-span-5">
                <Resume
                    teacherId={location.state.teacherId}
                    readable={true}/>
            </div>
        </div>
    );
};

export default Teacherresume;
