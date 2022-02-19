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
  ActiveTab,
  SeasonsQuizeid,
  setSeasonsQuizeid,
  SeasonsQuizeActive,
  contentUuid2,
}) => {
  const { TabPane } = Tabs;

  return (
    <Tabs
      onChange={setActiveTab}
      activeKey={ActiveTab}
      className="TabBox"
      type="card"
    >
      {!SeasonsQuizeActive ? (
        <>
          <TabPane tab="ویدیو" key={`tab_1`} className="reactour__video">
            <ContentDetail
              setSeosononquizeid={setSeasonsQuizeid}
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
          <TabPane tab="تمرین و مثال" key={`tab_2`}>
            <TrainExample
              contentUuid={contentUuid}
              courseUuid={courseUuid}
              intro={false}
            />
          </TabPane>
          <TabPane tab="آزمون" key={`tab_3`}>
            <Quiz
              quizUuid={quizUuid}
              contentUuid={contentUuid}
              courseUuid={courseUuid}
              intro={false}
              season={false}
            />
          </TabPane>
        </>
      ) : (
        <TabPane tab=" آزمون فصل" key={ActiveTab}>
          <Quiz
            quizUuid={SeasonsQuizeid}
            contentUuid={contentUuid}
            courseUuid={courseUuid}
            intro={false}
            season={true}
          />
        </TabPane>
      )}
    </Tabs>
  );
};

export default ContentTabs;
