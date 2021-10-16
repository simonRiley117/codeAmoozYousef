import React, { useState } from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import DefaultFormBox from "@Components/Shared/DeafaultFormBox/DefaultFormBox";
import WorkWithUs from "@Components/Master/WorkWithUs";

function Master() {
  const [id, setId] = useState(0);
  return (
    <div className="Master">
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
