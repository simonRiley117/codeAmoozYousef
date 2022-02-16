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
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import PropTypes from "prop-types";
import { tourguid } from "@App/Recoil/StateRecoil";
import { useRecoilState } from "recoil";
import { useAuth } from "@App/Context/authContext";

function CourseContent() {
  // const [showguid, setShowguid] = useRecoilState(tourguid);
  const { setShowGuid, showGuid } = useAuth();
  const [CurrentCourseStatus, setCurrentCourseStatus] = useState();
  const [CurrentcontenStatus, setCurrentcontenStatus] = useState();
  const [Currentcontentid, setCurrentContentid] = useState(null);
  const [ActiveSeason, setActiveSeason] = useState(null);
  const [ActiveTab, setActiveTab] = useState(null);
  const [SeasonsQuizeid, setSeasonsQuizeid] = useState(null);
  const [SeasonsQuizeActive, setSeasonsQuizeActive] = useState(false);
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
    return response.json();
  };

  const getCurrentCourseState = useFetch({
    url: `CourseService/${id}/currentCourseState`,
    method: "GET",
    setter: setCurrentCourseStatus,
    caller: getCourseSeasons,
    argFunc: (res) => {
      if (Currentcontentid === null) {
        console.log("getCurrentCourseStateres: ", res);
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
  console.log("Currentcontentid", Currentcontentid);
  const changeContentID = (id, name) => {
    setCurrentContentid(id);
  };

  console.log(
    "CurrentCourseStatus.current_content_id: ",
    CurrentCourseStatus?.current_content_id
  );
  console.log("Currentcontentid: ", Currentcontentid);
  const postPassContent = useFetch({
    url: `PassService/${Currentcontentid}`,
    method: "POST",
    trigger: false,
    caller: getCurrentCourseState,
    argErrFunc: (err) => handlePassContentError(err),
    func: () => {
      if (
        CurrentcontenStatus.next_content_id ===
        "You have not passed quiz season"
      ) {
        setSeasonsQuizeActive(true);
        console.log(
          "CurrentcontenStatus.next_content_id",
          CurrentcontenStatus.next_content_id
        );
      } else {
        setCurrentContentid(CurrentcontenStatus.next_content_id);
      }
    },
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
    setActiveTab("tab_1");
    window.scrollTo(0, 0);
  }, [Currentcontentid]);

  const handleNextContent = () => {
    if (!isContentPass) {
      postPassContent.reFetch();
    } else {
      if (
        CurrentcontenStatus?.next_content_id ===
        "You have not passed quiz season"
      ) {
        setSeasonsQuizeActive(true);
      }
      setCurrentContentid(CurrentcontenStatus.next_content_id);
    }
  };

  const handlePrevContent = () => {
    setCurrentContentid(CurrentcontenStatus.prev_content_id);
  };
  const handleOpen = () => {
    setShowGuid(true);
  };
  return (
    <fieldset style={showGuid ? { pointerEvents: "none" } : {}}>
      <div style={{ height: "100%" }}>
        <div className="LastCourse">
          <div className="container">
            <BreadCrump title={sidebarList?.title} />
            <div className="grid LastCourse__container relative">
              <div className="LastCourse__Box">
                {sidebarList && !getCourseSeasons.loading ? (
                  <div className="LastCourse__Position">
                    <div data-tut="reactour__start">
                      <p className="LastCourse__title">{sidebarList?.title}</p>
                      <SeasonList
                        sidebarList={sidebarList}
                        activeSeasons={ActiveSeason}
                        activeContent={Currentcontentid}
                        setquizUuid={setquizUuid}
                        changeContentID={changeContentID}
                        setIsContentPass={setIsContentPass}
                        setSeasonsQuizeActive={setSeasonsQuizeActive}
                        setSeasonsQuizeid={setSeasonsQuizeid}
                        SeasonsQuizeid={SeasonsQuizeid}
                      />
                    </div>
                    <div className="flex items-center cursor-pointer LastCourse__guideBox">
                      <p className="LastCourse__guide-icon"> i</p>
                      <p className="LastCourse__guide" onClick={handleOpen}>
                        راهنمای صفحه
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full mt-10">
                    <Skeleton.Button block={true} active size="large" />
                    <br />
                    <br />
                    <Skeleton.Button block={true} active size="large" />
                    <br />
                    <br />
                    <Skeleton.Button block={true} active size="large" />
                    <br />
                    <br />
                    <Skeleton.Button block={true} active size="large" />
                    <br />
                    <br />
                  </div>
                )}
              </div>
              <div>
                {CurrentCourseStatus && !getCurrentContentState.loading ? (
                  <CourseStatus details={CurrentCourseStatus} />
                ) : (
                  <Skeleton.Button block={true} active size="large" />
                )}

                {!LastCourse ? (
                  <ContentTab
                    contentUuid={Currentcontentid}
                    quizUuid={quizUuid}
                    courseUuid={id}
                    setActiveSeason={setActiveSeason}
                    hasSeasonQuize={CurrentcontenStatus?.next_content_id}
                    ActiveTab={ActiveTab}
                    setActiveTab={setActiveTab}
                    setSeasonsQuizeid={setSeasonsQuizeid}
                    SeasonsQuizeid={SeasonsQuizeid}
                    SeasonsQuizeActive={SeasonsQuizeActive}
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
                        <div data-tut="reactour__next">
                          <Button
                            type="primary"
                            classes=" CoWorkers__btn flex items-center  "
                            onClick={
                              CurrentcontenStatus.next_content_id !== null
                                ? handleNextContent
                                : handleLastCourse
                            }
                            disabled={!isContentPass && quizUuid !== null}
                          >
                            مبحث بعدی
                            <i className="fas fa-chevron-right"></i>
                          </Button>
                        </div>
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
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
}

export default CourseContent;
