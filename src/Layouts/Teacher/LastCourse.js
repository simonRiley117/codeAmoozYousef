import React from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import { Tabs } from "antd";
import VideoPlayer from "@Components/Shared/VideoPlayer/VideoPlayer";
import Detaile from "@Components/Layouts/Course/Sarfasl/Detaile";
const { TabPane } = Tabs;

function LastCourse() {
  return (
    <div className="LastCourse">
      <BreadCrump pathsname="/dash/course" name="پایتون" />
      <div className="grid LastCourse__container relative">
        <Tabs className="TabBox" type="card">
          <TabPane tab="ویدیو" key="1">
            <Detaile />
          </TabPane>
          <TabPane tab="تمرین و مثال" key="2"></TabPane>
          <TabPane tab="آزمون" key="3"></TabPane>
        </Tabs>
        <div></div>
      </div>
    </div>
  );
}

export default LastCourse;
