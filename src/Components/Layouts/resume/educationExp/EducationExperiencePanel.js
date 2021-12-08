import React from "react";
import { ReactComponent as PlusIcon } from "@Assets/Icons/plus.svg";
import EducationExperinceDone from "./EducationExperinceDone";
import EducationExperienceForm from "./EducationExperienceForm";
import Button from "@Components/Shared/Buttons/Button";

const EducationExperiencePanel = ({ readable }) => {
  return (
    <div className="WorkExperiencePanel">
      <EducationExperinceDone
        title="برنامه نویس"
        company="گروه آوید"
        startdate="1 تیر 1397"
        endDate="1 تیر 1398"
      />
      {!readable && <EducationExperienceForm />}

      {!readable && (
        <Button type="text" size="small" success>
          <PlusIcon />
          <p>اضافه کردن سوابق تحصیلی</p>
        </Button>
      )}
    </div>
  );
};

export default EducationExperiencePanel;
