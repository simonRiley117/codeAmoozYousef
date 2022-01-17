import React, { useEffect, useState } from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import Button from "@Components/Shared/Buttons/Button";
import CourseStatus from "@Components/Layouts/CourseContent/CourseStatus";
import ContentTab from "@Components/Layouts/CourseContent/ContentTabs";
import SeasonList from "@Components/Layouts/CourseContent/SeasonList";
import useFetch from "../../Context/useFetch";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { API_URL } from "@App/constants";
import congrats from "@Assets/Icons/congrats.svg";
import { Skeleton } from "antd";
import WebTour from "@Components/Layouts/CourseContent/WebTour";
// import Tour from "reactour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import PropTypes from "prop-types";
import Joyride from "react-joyride";
import { withTour } from "@reactour/tour";

function CourseContent({ setIsOpen, steps, setStep }) {
  const [CurrentCourseStatus, setCurrentCourseStatus] = useState();
  const [CurrentcontenStatus, setCurrentcontenStatus] = useState();
  const [Currentcontentid, setCurrentContentid] = useState(null);
  const [ActiveSeason, setActiveSeason] = useState(null);
  const [SeasonsQuizeid, setSeasonsQuizeid] = useState(null);
  const [isContentPass, setIsContentPass] = useState(false);
  const [quizUuid, setquizUuid] = useState();
  const [sidebarList, setSidebarList] = useState();
  const [LastCourse, setLastCourse] = useState(false);
  const { courseId } = useParams();
  const location = useLocation();
  const [id, setId] = useState();
  const [name, setName] = useState();
  const handleLastCourse = () => {
    setLastCourse(true);
  };
  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);

  useEffect(() => {
    // setMenu(location.state.name);
    setId(location.state.id);
    setName(location.state.name);
  }, [location]);
  const getCourseSeasons = useFetch({
    url: `CourseService/${id}/sidebar`,
    method: "GET",
    noHeader: false,
    setter: setSidebarList,
    trigger: false,
  });

  const fetchPeople = async () => {
    const response = await fetch(
      `${API_URL}/CourseService/${id}/currentCourseState`
    );
    console.log("fetch people");
    return response.json();
  };

  const getCurrentCourseState = useFetch({
    url: `CourseService/${id}/currentCourseState`,
    method: "GET",
    setter: setCurrentCourseStatus,
    caller: getCourseSeasons,
    argFunc: (res) => {
      if (Currentcontentid === null) {
        setCurrentContentid(res.current_content_id);
      }
    },
  });
  const getCurrentContentState = useFetch({
    url: `ContentService/${Currentcontentid}/currentContentState`,
    method: "GET",
    trigger: false,
    setter: setCurrentcontenStatus,
  });
  const changeContentID = (id, name) => {
    setCurrentContentid(id);
  };

  const postPassContent = useFetch({
    url: `PassService/${Currentcontentid}`,
    method: "POST",
    trigger: false,
    caller: getCurrentCourseState,
    argErrFunc: (err) => handlePassContentError(err),
    func: () => setCurrentContentid(CurrentcontenStatus.next_content_id),
    // setter: setCallBackPassContent
  });
  const handlePassContentError = (err) => {
    console.log(err);
  };

  useEffect(() => {
    if (quizUuid === null) {
      postPassContent.reFetch();
    }
    if (
      CurrentcontenStatus?.next_content_id !== "You have not passed quiz season"
    ) {
      setActiveSeason(CurrentCourseStatus?.current_season_id);
    }
  }, []);
  useEffect(() => {
    if (Currentcontentid) {
      getCurrentContentState.reFetch();
    }
  }, [Currentcontentid]);

  const handleNextContent = () => {
    if (!isContentPass) {
      postPassContent.reFetch();
    } else {
      setCurrentContentid(CurrentcontenStatus.next_content_id);
    }
  };

  const handlePrevContent = () => {
    setCurrentContentid(CurrentcontenStatus.prev_content_id);
  };
  const [isTourOpen, setIsTourOpen] = useState(true);
  const [stepsEnabled, setStepsEnabled] = useState(true);
  const [initialStep, setInitialStep] = useState(0);
  const [hintsEnabled, setHintsEnabled] = useState(true);
  // const [steps, setSteps] = useState([
  //   {
  //     target: ".LastCourse__Position",
  //     content: "همه جلسات و مباحث دوره شما در این قسمت قرار می گیره.",
  //   },
  //   {
  //     target:
  //       ".Sarfasl__Accordionbox .Sarfasl__AccordionItem .Sarfasl__AccordionItem__lock",
  //     content:
  //       "تا زمانی که مباحث خود را با موفقیت نگذزانید مباحث بعدی برای شما قفل خواهد بود",
  //   },
  //   {
  //     target: ".CourseStatus",
  //     content: "میزان پیشرفت خود در دوره می توانید در این قسمت مشاهده کنید.",
  //   },
  //   {
  //     target: ".TabBox__video",
  //     content: "ویدیو های هر مبحث به همراه توضیحاتش توی این بخش قرار میگیره.",
  //   },
  //   {
  //     target: ".LastCourse .LastCourse__btnBox .CoWorkers__btnPast",
  //     content: "از این قسمت میتونی به مباحث قبلی دسترسی داشته باشی",
  //   },
  //   {
  //     target: ".CoWorkers__btnnext",
  //     content:
  //       "از این قسمت میتونی به مباحث بعدی دسترسی داشته باشی. در صورتی این گزینه فعاله که آزمون این مبحث رو داده باشی و یا آزمونی نداشته باشی.",
  //   },
  // ]);
  // const [hints, setHints] = useState([
  //   {
  //     target: ".LastCourse__Position",
  //     hint: "Hello hint",
  //     hintPosition: "middle-right",
  //   },
  // ]);
  const onExit = () => {
    setStepsEnabled(false);
  };

  return (
    <div style={{ height: "100%" }}>
      <div className="LastCourse">
        <div className="container">
          <BreadCrump name={name} />
          <div className="grid LastCourse__container relative">
            <div className="LastCourse__Box" data-tut="reactour__start">
              {sidebarList && !getCourseSeasons.loading ? (
                <div className="LastCourse__Position">
                  <p className="LastCourse__title">{sidebarList?.title}</p>
                  <SeasonList
                    sidebarList={sidebarList}
                    activeSeasons={ActiveSeason}
                    activeContent={Currentcontentid}
                    setquizUuid={setquizUuid}
                    changeContentID={changeContentID}
                    setIsContentPass={setIsContentPass}
                  />
                  <div className="flex items-center cursor-pointer LastCourse__guideBox">
                    <p className="LastCourse__guide-icon"> i</p>
                    <p className="LastCourse__guide">راهنمای صفحه</p>
                  </div>
                </div>
              ) : (
                <Skeleton />
              )}
            </div>
            <div>
              {CurrentCourseStatus && !getCurrentContentState.loading ? (
                <CourseStatus details={CurrentCourseStatus} />
              ) : (
                <Skeleton />
              )}

              {!LastCourse ? (
                <ContentTab
                  contentUuid={Currentcontentid}
                  quizUuid={quizUuid}
                  courseUuid={id}
                  setActiveSeason={setActiveSeason}
                  hasSeasonQuize={CurrentcontenStatus?.next_content_id}
                />
              ) : (
                <div className="LastCourse__congrats ">
                  <h2 className="my-8">تبریک میگم دوره تموم شد</h2>
                  <img src={congrats} alt="" />
                </div>
              )}
              <div>
                {CurrentcontenStatus && (
                  <div className="flex items-center justify-between LastCourse__btnBox">
                    {!LastCourse && (
                      <Button
                        type="primary"
                        classes=" CoWorkers__btn flex items-center  "
                        onClick={
                          CurrentcontenStatus.next_content_id !== null
                            ? handleNextContent
                            : handleLastCourse
                        }
                        disabled={
                          (!isContentPass && quizUuid !== null) ||
                          CurrentcontenStatus.next_content_id ===
                            "You have not passed quiz season"
                        }
                      >
                        مبحث بعدی
                        <i className="fas fa-chevron-right"></i>
                      </Button>
                    )}
                    <div data-tut="reactour__end">
                      <Button
                        type="primary"
                        classes=" CoWorkers__btn flex items-center "
                        {...(CurrentcontenStatus.has_prev_content && {
                          onClick: handlePrevContent,
                        })}
                        disabled={!CurrentcontenStatus.has_prev_content}
                      >
                        <i className="fas fa-chevron-left"></i>
                        مبحث قبلی
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* <WebTour onAfterOpen={disableBody} onBeforeClose={enableBody} /> */}
          </div>
          {/* <div className=" relative">
            {CurrentcontenStatus && (
              <div className="flex items-center justify-between LastCourse__btnBox">
                {!LastCourse && (
                  <Button
                    type="primary"
                    classes=" CoWorkers__btn flex items-center  "
                    onClick={
                      CurrentcontenStatus.next_content_id !== null
                        ? handleNextContent
                        : handleLastCourse
                    }
                    disabled={
                      (!isContentPass && quizUuid !== null) ||
                      CurrentcontenStatus.next_content_id ===
                        "You have not passed quiz season"
                    }
                  >
                    مبحث بعدی
                    <i className="fas fa-chevron-right"></i>
                  </Button>
                )}
                <div id="testtttttttttttt">
                  <Button
                    type="primary"
                    classes=" CoWorkers__btn flex items-center "
                    {...(CurrentcontenStatus.has_prev_content && {
                      onClick: handlePrevContent,
                    })}
                    disabled={!CurrentcontenStatus.has_prev_content}
                  >
                    <i className="fas fa-chevron-left"></i>
                    مبحث قبلی
                  </Button>
                </div>
              </div>
            )}
          </div> */}
        </div>
      </div>
      {/* <Joyride steps={steps} run continuous /> */}
    </div>
  );
}

export default CourseContent;
