import React, { useState } from "react";
import { Tabs } from "antd";
import ContentDetail from "./ContentDetail";
import TrainExample from "@Components/Layouts/Dashboard/TrainExample";
import Quiz from "@Components/Layouts/Dashboard/Quiz";
const ContentTabs = ({
  contentUuid,
  quizUuid,
  courseUuid,
  hasSeasonQuize,
  setActiveSeason,
  setActiveTab,
  ActiveTab
}) => {
  const { TabPane } = Tabs;
  const [seosononquizeid, setSeosononquizeid] = useState();
  console.log(seosononquizeid)
  return (
    <Tabs onChange={setActiveTab} activeKey={ActiveTab} className="TabBox" type="card">
      <TabPane  tab="ویدیو" key={`tab_1`} className="reactour__video">
        <ContentDetail
          setSeosononquizeid={setSeosononquizeid}
          iscontent={true}
          setActiveSeason={setActiveSeason}
          contentUuid={contentUuid}
        />
        {/* <div className="ContentDetail__downloadLinkBox text-left">
          <a
            href={""}
            download
            target={"_blank"}
            className="ContentDetail__downloadLink"
          >
            دانلود ویدیو
          </a>
        </div> */}
      </TabPane>
      <TabPane  tab="تمرین و مثال" key={`tab_2`}>
        <TrainExample contentUuid={contentUuid} courseUuid={courseUuid} />
      </TabPane>
      <TabPane tab="آزمون" key={`tab_3`}>
        <Quiz
          quizUuid={quizUuid}
          contentUuid={contentUuid}
          courseUuid={courseUuid}
        />
      </TabPane>
      {hasSeasonQuize === "You have not passed quiz season" && (
        <TabPane tab=" آزمون فصل" key={`tab_4`}>
          <Quiz
            quizUuid={seosononquizeid}
            contentUuid={contentUuid}
            courseUuid={courseUuid}
          />
        </TabPane>
      )}
    </Tabs>
  );
};

export default ContentTabs;
