import React from "react";
import WorkExperienceDone from "./WorkExperinceDone";
import WorkExperienceForm from "./WorkExperienceForm";
import { ReactComponent as PlusIcon } from "@Assets/Icons/plus.svg";
import Button from "@Components/Shared/Buttons/Button";

const WorkExperiencePanel = ({ readable }) => {
  return (
    <div className="WorkExperiencePanel">
      <WorkExperienceDone
        title="برنامه نویس"
        company="گروه آوید"
        startdate="1 تیر 1397"
        endDate="1 تیر 1398"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
      />
      {!readable && <WorkExperienceForm />}
      {/* {isReadable} */}
      {!readable && (
        <Button type="text" size="small" success>
          <PlusIcon />
          <p>اضافه کردن سوابق کاری</p>
        </Button>
      )}
    </div>
  );
};

export default WorkExperiencePanel;
