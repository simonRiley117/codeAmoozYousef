import React from "react";
import { Accordion, Panel } from "@Components/Shared/Accordion/Accordion";
import WorkExperiencePanel from "@Components/Layouts/resume/WorkExperince/WorkExperiencePanel";
import EducationExperiencePanel from "@Components/Layouts/resume/educationExp/EducationExperiencePanel";
import SkillsPanel from "@Components/Layouts/resume/skills/SkillsPanel";
const Resume = () => {
  return (
    <>
      <h3 className="title mt-20 mb-10"> رزومه شما</h3>
      <Accordion half>
        <Panel header={<span>سوابق کاری</span>}>
          <WorkExperiencePanel />
        </Panel>
        <Panel header={<span>سوابق تحصیلی</span>}>
          <EducationExperiencePanel />
        </Panel>

        <Panel header={<span>مهارت ها</span>}>
          <SkillsPanel />
        </Panel>
      </Accordion>
    </>
  );
};

export default Resume;
