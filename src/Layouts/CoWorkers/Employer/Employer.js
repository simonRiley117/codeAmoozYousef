import React, { useState } from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import Deatil from "@Components/Layouts/CoWorkers/Employer/Deatil";
import Request from "@Components/Layouts/CoWorkers/Employer/Request";
import TabBox from "@Components/Shared/Tabs/TabBox";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function Employer() {
  const [id, setId] = useState(0);

  return (
    <div className="Master container">
      <BreadCrump item={menu} />
      <p className="Master__title text-center"> تیم کارفرما</p>
      <div className="Master__formBox">
        <TabBox className="Master__form" key="1">
          <TabPane tab="جزئیات" key="1" >
            <Deatil />
          </TabPane>
          <TabPane tab="ارسال درخواست" key="2">
            <Request />
          </TabPane>
        </TabBox>
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
