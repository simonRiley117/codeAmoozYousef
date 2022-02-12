import React, { useEffect, useState } from "react";

import { ReactComponent as Line } from "@Assets/Icons/Line 27.svg";
import ResumeDoneWrapper from "@Components/Layouts/resume/ResumeWrapper/ResumeDoneWrapper";
import Time from "../../../Shared/Time/Time";
import WorkExperienceForm from "./WorkExperienceForm";
import { Skeleton } from "antd";

const WorkExperinceDone = ({
  getProfessionInfo,
  profession,
  loadingProfession,
  showForm,
  type,
  readable,
}) => {
  useEffect(() => {
    getProfessionInfo.reFetch();
  }, []);

  const [edit, setEdit] = useState(false);
  const [editid, setEditid] = useState("");
  const showEdit = () => {
    setEdit((before) => !before);
  };
  return !loadingProfession ? (
    profession.results.map((teacherProf) => (
      <>
        <ResumeDoneWrapper
          className="WorkExperinceDone"
          type={type}
          id={teacherProf.uuid}
          caller={getProfessionInfo}
          showEdit={showEdit}
          readable={readable}
          setEditid={setEditid}
        >
          <div className=" WorkExperinceDone__header  ">
            <p className="WorkExperinceDone__title">
              {teacherProf?.profession_title}
            </p>
          </div>
          <div className="WorkExperinceDone__middle flex">
            <p>{teacherProf?.company_name}</p>
            <span>
              <Line />
            </span>
            {/*<p>*/}
            {/*    <span>{teacherProf?.profession_start_date}</span> - <span>{teacherProf.profession_end_date}</span>*/}
            {/*</p>*/}
            <p className="whitespace-nowrap">
              <Time value={teacherProf?.profession_start_date} /> تا
              {teacherProf?.profession_end_date ? (
                <Time value={teacherProf?.profession_end_date} />
              ) : (
                <span>تاکنون&nbsp; </span>
              )}
            </p>
          </div>
          <p className="WorkExperinceDone__des">
            {teacherProf?.profession_description}
          </p>
        </ResumeDoneWrapper>

        {editid === teacherProf.uuid && !readable && edit && (
          <WorkExperienceForm
            showEdit={showEdit}
            edit
            showForm={showForm}
            getWorks={getProfessionInfo}
            company_name={teacherProf?.company_name}
            profession_description={teacherProf?.profession_description}
            profession_end_date={teacherProf?.profession_end_date}
            profession_start_date={teacherProf?.profession_start_date}
            profession_title={teacherProf?.profession_title}
            id={teacherProf?.uuid}
            editid={editid}
          />
        )}
      </>
    ))
  ) : (
    <Skeleton />
  );
};

export default WorkExperinceDone;
