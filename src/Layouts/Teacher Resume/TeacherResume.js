import TeacherInfo from "@Components/Layouts/Course/Teacher/TeacherInfo";
import Resume from "@Layouts/resume/Resume";
import React from "react";

const Teacherresume = () => {
  return (
    <div className="container grid grid-cols-6 mt-60">
      <div>
        <TeacherInfo />
      </div>
      <div className="col-span-5">
        <Resume readable={true} />
      </div>
    </div>
  );
};

export default Teacherresume;
