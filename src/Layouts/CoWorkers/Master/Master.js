import React, { useState } from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import DefaultFormBox from "@Components/Shared/DeafaultFormBox/DefaultFormBox";
import WorkWithUs from "@Components/Layouts/CoWorkers/Master/WorkWithUs";
import CoursStandards from "@Components/Layouts/CoWorkers/Master/CoursStandards";
import ProduceRules from "@Components/Layouts/CoWorkers/Master/ProduceRules";
import MasterSignUp from "@Components/Layouts/CoWorkers/Master/MasterSignUp";

function Master() {
  const [id, setId] = useState(0);
  return (
    <div className="Master container">
      <BreadCrump item={menu} />
      <p className="Master__title text-center	">اساتید</p>
      <div className="Master__formBox">
        <DefaultFormBox
          labels={labels}
          className="w-1/3"
          setId={setId}
          height="Master__form"
        >
          {id === 0 && <WorkWithUs />}
          {id === 1 && <CoursStandards />}
          {id === 2 && <ProduceRules />}
          {id === 3 && <MasterSignUp />}
        </DefaultFormBox>
      </div>
    </div>
  );
}

export default Master;
const menu = [
  {
    name: "صفحه اصلی",
    rout: "",
  },
  {
    name: "همکاران و اساتید",
    rout: "coWorkers",
  },
  {
    name: "اساتید",
    rout: "coWorkers/master",
  },
];
const labels = [
  "همکاری با ما",
  "استاندارد های دوره",
  "قوانین تولید",
  "ثبت نام",
];
