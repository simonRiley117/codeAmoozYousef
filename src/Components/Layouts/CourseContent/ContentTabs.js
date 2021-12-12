import React from "react";
import { Tabs } from "antd";
import Detail from "@Components/Layouts/Course/Sarfasl/Detail";
import TrainExample from "@Components/Layouts/Dashboard/TrainExample";
import Quiz from "@Components/Layouts/Dashboard/Quiz";
const ContentTabs = ({ contentUuid, quizUuid ,courseUuid}) => {
  const { TabPane } = Tabs;

  return (
    <Tabs className="TabBox" type="card">
      <TabPane tab="ویدیو" key={`${contentUuid}_1`}>
        <Detail contentUuid={contentUuid} />
      </TabPane>
      <TabPane tab="تمرین و مثال" key={`${contentUuid}_2`}>
        <TrainExample contentUuid={contentUuid} courseUuid={courseUuid} />
      </TabPane>
      <TabPane tab="آزمون" key={`${contentUuid}_3`}>
        <Quiz
          quizUuid={quizUuid}
          contentUuid={contentUuid}
          courseUuid={courseUuid}
        />
      </TabPane>
    </Tabs>
  );
};

export default ContentTabs;
