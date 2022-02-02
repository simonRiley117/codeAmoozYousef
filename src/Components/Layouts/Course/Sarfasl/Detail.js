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
  const [courselist, setCourselist] = useState([]);
  const [ismycourse, setIsmycourse] = useState([]);
  const [ismycoursebol, setIsmycoursebol] = useState(false);
  const { token, authDispatch } = useAuth();
  const getMyCourses = useFetch({
    url: "StudentService/myDoingCourses",
    method: "GET",
    noHeader: false,
    argFunc: (res) => setCourselist(res.results),
    trigger: !token ? false : ispreviw,
  });
  //course
  //course_id

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
  useEffect(() => {
    if (courselist.length > 0 && content) {
      setIsmycourse(courselist.filter((i) => i.course_id === content.course));
    }
  }, [courselist, content]);
  useEffect(() => {
    if (ismycourse.length > 0) {
      setIsmycoursebol(true);
    }
  }, [ismycourse]);
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
          {getContent?.response ? (
            <TrainExample
              contentUuid={contentUuid}
              ispreviw={true}
              context={content?.context}
              lang={content?.language}
              intro={true}
            />
          ) : (
            <Skeleton />
          )}
        </TabPane>
        <TabPane tab="آزمون" key={`${contentUuid}_3`}>
          {getContent?.response ? (
            <Quiz
              ismycoursebol={ismycoursebol}
              quizUuid={content.quiz_id}
              ispreviw={ispreviw}
              contentUuid={contentUuid}
              intro={true}
              // courseUuid={courseUuid}
            />
          ) : (
            <Skeleton />
          )}
        </TabPane>
        {/* {hasSeasonQuize === "You have not passed quiz season" && (
                    <TabPane tab=" آزمون فصل" key={`${contentUuid}_4`}>
                      <Quiz
                        quizUuid={quizUuid}
                        contentUuid={contentUuid}
                        courseUuid={courseUuid}
                         intro={true}
                      />
                    </TabPane>
                  )} */}
      </Tabs>
    </>
  );
}

export default Detail;
