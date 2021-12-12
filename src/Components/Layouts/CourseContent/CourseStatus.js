import React from "react";
import ProgressLine from "@Components/Shared/Progress/ProgressLine";
import { ClipLoader } from "react-spinners";

const CourseStatus = ({ details,    Currentcontentname,
    loading }) => {
  const {
    content_passed_numbers,
    course_progress,
    current_content_name,
    latest_content_user_passed_name,
  } = details;
  console.clear()
  console.log(Currentcontentname)
  return (
    <div className="CourseStatus">
     
        <div>
        <p>
          اسم مبحث: <span> {Currentcontentname} </span>
        </p>
        <p>
          آخرین مبحث گذرانده شده:
          <span>{latest_content_user_passed_name}</span>
        </p>
        <p>
          تعداد مبحث های گذرانده شده : <span>{content_passed_numbers}</span>
        </p>
        <p className="LastCourse__progresstitle">
          پیشرفت شما در دوره: <span>{course_progress}%</span>
        </p>
        <ProgressLine precent={course_progress} />
      </div>
     
        
      
    </div>
  );
};

export default CourseStatus;
