import React, { useEffect, useState } from "react";

import { ReactComponent as Line } from "@Assets/Icons/Line 27.svg";
import ResumeDoneWrapper from "@Components/Layouts/resume/ResumeWrapper/ResumeDoneWrapper";
import moment from "jalali-moment";
import WorkExperienceForm from "../WorkExperince/WorkExperienceForm";
import EducationExperienceForm from "./EducationExperienceForm";
import { Skeleton } from "antd";

const EducationExperinceDone = ({
  getGradeInfo,
  grade,
  loadingGrade,
  readable,
  showForm,
}) => {
  useEffect(() => {
    getGradeInfo.reFetch();
  }, []);

  const [edit, setEdit] = useState(false);
  const showEdit = () => {
    setEdit((before) => !before);
  };

  const optionList = [
    { value: "DP", label: "فوق دیپلم" },
    { value: "U.DP", label: "دیپلم" },
    { value: "B.S", label: "کارشناسی" },
    { value: "M.S", label: "کارشناسی ارشد" },
    { value: "Ph.D", label: "دکترا" },
  ];

  return !loadingGrade ? (
    grade.results.map((teacherGr) => (
      <>
        <ResumeDoneWrapper
          className="WorkExperinceDone"
          type="education"
          id={teacherGr.uuid}
          caller={getGradeInfo}
          showEdit={showEdit}
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
                optionList.find((element) => element.value === teacherGr.grade)
                  .label
              }
            </p>
            <p className="line">{teacherGr.major}</p>

            <p>
              <span>
                {" "}
                {moment(teacherGr.catch_start_date, "YYYY-MM-DD")
                  .locale("fa")
                  .format("dddd D MMMM YYYY")}
              </span>{" "}
              تا
              <span>
                {" "}
                {moment(teacherGr.catch_end_date, "YYYY-MM-DD")
                  .locale("fa")
                  .format("dddd D MMMM YYYY")}
              </span>
            </p>
          </div>
        </ResumeDoneWrapper>

        {!readable && edit && (
          <EducationExperienceForm
            showEdit={showEdit}
            edit
            showForm={showForm}
            getEducations={getGradeInfo}
            institute_name={teacherGr.institute_name}
            grade={teacherGr.grade}
            catch_end_date={teacherGr.catch_end_date}
            catch_start_date={teacherGr.catch_start_date}
            major={teacherGr.major}
            id={teacherGr.uuid}
          />
        )}
      </>
    ))
  ) : (
    <Skeleton />
  );
};

export default EducationExperinceDone;
