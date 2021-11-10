import React from "react";

import { ReactComponent as Line } from "@Assets/Icons/Line 27.svg";
import ResumeDoneWrapper from '@Components/Layouts/resume/ResumeWrapper/ResumeDoneWrapper'
const WorkExperinceDone = ({
  title,
  company,
  startdate,
  endDate,
  description,
}) => {
  return (
    <ResumeDoneWrapper className="WorkExperinceDone">
      <div className=" WorkExperinceDone__header  ">
        <p className="WorkExperinceDone__title">{title}</p>
      </div>
      <div className="WorkExperinceDone__middle flex">
        <p>{company}</p>
        <span>
          <Line />
        </span>
        <p>
          <span>{startdate}</span> تا<span>{endDate}</span>
        </p>
      </div>
      <p className="WorkExperinceDone__des">{description}</p>
    </ResumeDoneWrapper>
  );
};

export default WorkExperinceDone;
