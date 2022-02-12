import React, { useState } from "react";
import SkillsDone from "./SkillsDone";
import SkillsForm from "./SkillsForm";
import { ReactComponent as PlusIcon } from "@Assets/Icons/plus.svg";
import Button from "@Components/Shared/Buttons/Button";

const SkillsPanel = ({ readable, getSkillInfo, skill, loadingSkill }) => {
  const [addItem, setAddItem] = useState(false);

  const showForm = () => {
    setAddItem((before) => !before);
  };
  return (
    <div className="WorkExperiencePanel ">
      <SkillsDone
        getSkillInfo={getSkillInfo}
        readable={readable}
        skill={skill}
        type="skill"
        showForm={showForm}
        loadingSkill={loadingSkill}
      />

      { !readable && addItem && (
        <SkillsForm showForm={showForm} getSkill={getSkillInfo} />
      )}

      {!readable && !addItem && (
        <Button type="text" size="small" success onClick={showForm}>
          <PlusIcon />
          <p>اضافه کردن مهارت </p>
        </Button>
      )}
    </div>
  );
};

export default SkillsPanel;
