import React from "react";
import { Accordion, Panel } from "@Components/Shared/Accordion/Accordion";
import WorkExperiencePanel from "@Components/Layouts/resume/WorkExperince/WorkExperiencePanel";
import EducationExperiencePanel from "@Components/Layouts/resume/educationExp/EducationExperiencePanel";
import SkillsPanel from "@Components/Layouts/resume/skills/SkillsPanel";
const Resume = ({ readable }) => {
  return (
    <>
      {!readable && <h3 className="title  mb-10"> رزومه شما</h3>}
      {readable && <h3 className="title  mb-10"> رزومه</h3>}

      <Accordion half>
        <Panel header={<span>سوابق کاری</span>}>
          <WorkExperiencePanel readable={readable} />
        </Panel>
        <Panel header={<span>سوابق تحصیلی</span>}>
          <EducationExperiencePanel readable={readable} />
        </Panel>

        <Panel header={<span>مهارت ها</span>}>
          <SkillsPanel readable={readable} />
        </Panel>
      </Accordion>
    </>
  );
};

export default Resume;
