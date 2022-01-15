import React, { useEffect, useState } from "react";
import VideoPlayer from "@Components/Shared/VideoPlayer/VideoPlayer";
import useFetch from "@App/Context/useFetch";
import { useAuth } from "@App/Context/authContext";
import { Skeleton } from "antd";
import { Tabs, Tag } from "antd";
import TrainExample from "@Components/Layouts/Dashboard/TrainExample";
import Quiz from "@Components/Layouts/Dashboard/Quiz";

const { TabPane } = Tabs;
function Detail({
  contentUuid,
  setActiveSeason,
  iscontent,
  setSeosononquizeid,
  ispreviw,
}) {
  const [content, setContent] = useState(null);
  const { token, authDispatch } = useAuth();
  const url = ispreviw
    ? `ContentService/${contentUuid}/getPreviewContent`
    : `ContentService/${contentUuid}/getContent`;
  const getContent = useFetch({
    // url: `ContentService/${contentUuid}/getModalContent`,
    url: url,
    method: "GET",
    noHeader: token ? false : true,
    setter: setContent,
    argFunc: (res) => {
      if (iscontent) {
        setActiveSeason(res.season);
        setSeosononquizeid(res.season.season_quiz_uuid);
      }
    },
  });
  useEffect(() => {
    getContent.reFetch();
  }, [contentUuid]);

  return (
    <>
      <Tabs className="TabBox" type="card">
        <TabPane tab="ویدیو" key={`${contentUuid}_1`}>
          {getContent?.response ? (
            <div className="Detaile">
              <div className="Detaile__hederBox">
                <p>{content.title}</p>
              </div>
              <div>
                <VideoPlayer src={content.video} />
              </div>
              <p className="Detaile__txt leading-loose">
                {content.short_description}
              </p>
            </div>
          ) : (
            <Skeleton />
          )}
        </TabPane>
        <TabPane tab="تمرین و مثال" key={`${contentUuid}_2`}>
          {getContent?.response ? <div></div> : <Skeleton />}
          <TrainExample
            contentUuid={contentUuid}
            ispreviw={true}
            context={content?.context}
          />
        </TabPane>
        <TabPane tab="آزمون" key={`${contentUuid}_3`}>
          {getContent?.response ? <div></div> : <Skeleton />}

         <Quiz
            quizUuid={content.quiz_id}
            ispreviw={ispreviw}
            contentUuid={contentUuid}
            // courseUuid={courseUuid}
          /> 
        </TabPane>
        {/* {hasSeasonQuize === "You have not passed quiz season" && (
                    <TabPane tab=" آزمون فصل" key={`${contentUuid}_4`}>
                      <Quiz
                        quizUuid={quizUuid}
                        contentUuid={contentUuid}
                        courseUuid={courseUuid}
                      />
                    </TabPane>
                  )} */}
      </Tabs>
    </>
  );
}

export default Detail;
