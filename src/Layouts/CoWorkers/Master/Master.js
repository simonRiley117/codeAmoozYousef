import React, { useState } from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import WorkWithUs from "@Components/Layouts/CoWorkers/Master/WorkWithUs";
import CoursStandards from "@Components/Layouts/CoWorkers/Master/CoursStandards";
import ProduceRules from "@Components/Layouts/CoWorkers/Master/ProduceRules";
import MasterSignUp from "@Components/Layouts/CoWorkers/Master/MasterSignUp";
import TabBox from "@Components/Shared/Tabs/TabBox";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function Master() {
  const [id, setId] = useState(0);
  return (
    <div className="Master container">
      <BreadCrump item={menu} />
      <p className="Master__title text-center	">اساتید</p>
      <div className="Master__formBox">
        <TabBox className="Master__form" key="1">
          <TabPane
            tab="همکاری با ما"
            key="1"
            style={{ borderRadius: "1.5rem" }}
          >
            <WorkWithUs />
          </TabPane>
          <TabPane tab="استاندارد های دوره" key="2">
            <CoursStandards />
          </TabPane>
          <TabPane tab="قوانین تولید" key="3">
            <ProduceRules />
          </TabPane>
          <TabPane tab="ثبت نام" key="4">
            <MasterSignUp />
          </TabPane>
        </TabBox>
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
