import React, {useState} from "react";
import {ReactComponent as PlusIcon} from "@Assets/Icons/plus.svg";
import EducationExperinceDone from "./EducationExperinceDone";
import EducationExperienceForm from "./EducationExperienceForm";
import Button from "@Components/Shared/Buttons/Button";

const EducationExperiencePanel = (
    {
        readable,
        getGradeInfo,
        grade,
        loadingGrade
    }) => {
    const [addItem, setAddItem] = useState(false);
    const showForm = () => {
        setAddItem((before) => !before);
    };
    return (
        <div className="WorkExperiencePanel">
            <EducationExperinceDone
                getGradeInfo={getGradeInfo}
                grade={grade}
                loadingGrade={loadingGrade}
                readable={readable}
                showForm={showForm}
            />
            {!readable && (
                addItem && (
                    <EducationExperienceForm
                        showForm={showForm}
                        getEducations={getGradeInfo}
                    />
                )
            )}
            {!readable && (
                !addItem && (
                    <Button type="text" size="small" success onClick={showForm}>
                        <PlusIcon/>
                        <p>اضافه کردن سوابق تحصیلی</p>
                    </Button>
                )
            )}
        </div>
    );
};

export default EducationExperiencePanel;
