import React, { useEffect, useState } from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import { Tabs } from "antd";
import VideoPlayer from "@Components/Shared/VideoPlayer/VideoPlayer";
import Detail from "@Components/Layouts/Course/Sarfasl/Detail";
import Button from "@Components/Shared/Buttons/Button";
import CourseStatus from "@Components/Layouts/CourseContent/CourseStatus";
import { Accordion, Panel } from "@Components/Shared/Accordion/Accordion";
import ProgressLine from "@Components/Shared/Progress/ProgressLine";
import TrainExample from "@Components/Layouts/Dashboard/TrainExample";
import Quiz from "@Components/Layouts/Dashboard/Quiz";
import ContentTab from "@Components/Layouts/CourseContent/ContentTabs";
import SeasonList from "@Components/Layouts/CourseContent/SeasonList";
import Clock, { ReactComponent as LockIcon } from "@Assets/Icons/clock.svg";
import Lock from "@Assets/Icons/lock.svg";
import useFetch from "../../Context/useFetch";
import IconBtn from "../../Components/Shared/Buttons/IconBtn";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "green",
};
const { TabPane } = Tabs;

function CourseContent() {
  const [CurrentStatus, setSurrentStatus] = useState();
  const [sidebarList, setSidebarList] = useState();
  const { courseId } = useParams();
  const getCurrentContentState = useFetch({
    url: `CourseService/${courseId}/currentCourseState`,
    method: "GET",
    setter: setSurrentStatus,
  });
  const getCourseSeasons = useFetch({
    url: `CourseService/${courseId}/sidebar`,
    method: "GET",
    noHeader: false,
    setter: setSidebarList,
  });
  // const getCurrentContentState = useFetch({
  //   url: `ContentService/${contentUuid}/currentContentState`,
  //   method: "GET",
  //   noHeader: false,
  //   trigger: false,
  //   setter: setCurrentSituationData,
  // });

  // const setData = (data) => {
  //   console.log("setData ~ data: ", data);
  //   setCourseSeasons(data);
  //   if (makeSetDataTrigger) {
  //     setContentUuid(data.init_data.first_content_uuid);
  //     setQuizUuid(data.init_data.first_quiz_uuid);
  //     setMakeSetDataTrigger(false);
  //   }
  // };

  // const setUuids = (cUUID, qUUID) => {
  //   setContentUuid(cUUID);
  //   setQuizUuid(qUUID);
  //   getCurrentContentState.reFetch();
  // };

  // const postPassContent = useFetch({
  //   url: `PassService/${contentUuid}`,
  //   method: "POST",
  //   noHeader: false,
  //   trigger: false,
  //   // errMessage:setErrorPostData,
  //   caller: getCourseSeasons,
  //   // setter: setCallBackPassContent
  // });

  // const handleNextContent = () => {
  //   if (currentContentState.next_content_passed) {
  //     setContentUuid(currentContentState.next_content_id);
  //     setQuizUuid(currentContentState.next_quiz_id);
  //     getCurrentContentState.reFetch();
  //   } else {
  //     postPassContent.reFetch();
  //     setIsNext(true);
  //     setMakeSetCurrentSituationDataTrigger(true);
  //   }
  // };

  // const handlePrevContent = () => {
  //   if (currentContentState.prev_content_passed) {
  //     setContentUuid(currentContentState.prev_content_id);
  //     setQuizUuid(currentContentState.prev_quiz_id);
  //     getCurrentContentState.reFetch();
  //   } else {
  //     postPassContent.reFetch();
  //     setIsNext(false);
  //     setMakeSetCurrentSituationDataTrigger(true);
  //   }
  // };

  // // const [activeKey,setActiveKey]=useState('1')
  // // const handleTabChange = (selectedkey) => {
  // //     setActiveKey(selectedkey);
  // //     console.log("change callback");
  // //     getCourseSeasons.reFetch()
  // // };

  // console.log("contentUuid!: ", contentUuid);
  // console.log("quizUuid!: ", quizUuid);

  return (
    <>
      <div className="LastCourse">
        <div className="container">
          <BreadCrump
            pathsname="/dash/course"
            //  name={courseSeasons.title}
          />
          <div className="grid LastCourse__container relative">
            <div className="LastCourse__Box">
              <div className="LastCourse__Position">
                <p className="LastCourse__title"></p>
                {CurrentStatus && sidebarList && (
                  <SeasonList
                    sidebarList={sidebarList}
                    activeSeasons={CurrentStatus.current_season_id}
                    activeContent={CurrentStatus.current_content_id}
                  />
                )}
                <div className="flex items-center cursor-pointer LastCourse__guideBox">
                  <p className="LastCourse__guide-icon"> i</p>
                  <p className="LastCourse__guide">راهنمای صفحه</p>
                </div>
              </div>
            </div>
            <div>
              {CurrentStatus ? (
                <CourseStatus
                  loading={getCurrentContentState.loading}
                  details={CurrentStatus}
                />
              ) : (
                <div>
                  <ClipLoader color="#EF8019" loading={true} size={40} />
                </div>
              )}

              {/* <ContentTab
                  contentUuid={contentUuid}
                  quizUuid={quizUuid}
                  courseUuid={courseUuid}
                /> */}
              <div className="flex items-center justify-between LastCourse__btnBox">
                {/* <Button
                    ico={false}
                    type="primary"
                    classes="CoWorkers__btn flex items-center "
                    {...(currentContentState.has_next_content && {
                      onClick: handleNextContent,
                    })}
                    disabled={!currentContentState.has_next_content}
                  >
                    مبحث بعدی
                    <i className="fas fa-chevron-right"></i>
                  </Button>
                  <Button
                    ico={false}
                    type="primary"
                    classes="CoWorkers__btn flex items-center "
                    {...(currentContentState.has_prev_content && {
                      onClick: handlePrevContent,
                    })}
                    disabled={!currentContentState.has_prev_content}
                  >
                    <i className="fas fa-chevron-left"></i>
                    مبحث قبلی{" "}
                  </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseContent;
