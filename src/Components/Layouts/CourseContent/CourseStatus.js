import React from "react";
import ProgressLine from "@Components/Shared/Progress/ProgressLine";
import { ClipLoader } from "react-spinners";

const CourseStatus = ({ details, Currentcontentname, loading }) => {
  const {
    content_passed_numbers,
    course_progress,
    current_content_name,
    latest_content_user_passed_name,
  } = details;
  console.log(Currentcontentname);
  return (
    <div className="CourseStatus" data-tut="reactour__status">
      <div className=" CourseStatus__table mb-8">
        <p>آخرین مبحث گذرانده شده:</p>
        {latest_content_user_passed_name !== null ? (
          <p className="success text-center">
            {latest_content_user_passed_name}
          </p>
        ) : (
          <p className="text-primary"> هنوز مجثی گذرانده نشده</p>
        )}
        <p>تعداد مبحث های گذرانده شده :</p>
        <p className="success text-center">{content_passed_numbers}</p>
        <p className="LastCourse__progresstitle">پیشرفت شما در دوره:</p>
        <p className="text-center">{course_progress}%</p>
      </div>
      <ProgressLine precent={course_progress} />
    </div>
  );
};

export default CourseStatus;
