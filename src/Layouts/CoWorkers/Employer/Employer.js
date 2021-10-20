import React, { useState } from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import DefaultFormBox from "@Components/Shared/DeafaultFormBox/DefaultFormBox";
import Deatil from "@Components/Layouts/CoWorkers/Employer/Deatil";
import Request from "@Components/Layouts/CoWorkers/Employer/Request";

function Employer() {
  const [id, setId] = useState(0);

  return (
    <div>
      <BreadCrump item={menu} />
      <p className="Master__title text-center"> تیم کارفرما</p>
      <div className="Master__formBox">
        <DefaultFormBox
          labels={labels}
          className="w-1/2"
          setId={setId}
          height="Master__form"
        >
          {id === 0 ? <Deatil /> : <Request />}
        </DefaultFormBox>
      </div>
    </div>
  );
}

export default Employer;
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
    name: "تیم کارفرما",
    rout: "coWorkers/employer",
  },
];
const labels = ["جزئیات", "ارسال درخواست"];
