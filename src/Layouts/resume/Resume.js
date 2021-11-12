import React from "react";
import Accordion from "../../Components/Shared/Accordion/Accordion";
import WorkExperiencePanel from "../../Components/Layouts/resume/WorkExperince";
import EducationExperiencePanel from "../../Components/Layouts/resume/educationExp/EducationExperiencePanel";
import SkillsPanel from "../../Components/Layouts/resume/skills/SkillsPanel";
const Resume = () => {
  return (
    <>
      <h3 className="title mt-20 mb-10"> رزومه شما</h3>
      <Accordion half header="سوابق کاری">
        <WorkExperiencePanel />
      </Accordion>
      <Accordion half header="سوابق تحصیلی">
        <EducationExperiencePanel />
      </Accordion>
      <Accordion half header="مهارت ها ">
        <SkillsPanel />
      </Accordion>
    </>
  );
};

export default Resume;
