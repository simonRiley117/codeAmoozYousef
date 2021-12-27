import React, { useEffect, useState } from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import Button from "@Components/Shared/Buttons/Button";
import CourseStatus from "@Components/Layouts/CourseContent/CourseStatus";
import ContentTab from "@Components/Layouts/CourseContent/ContentTabs";
import SeasonList from "@Components/Layouts/CourseContent/SeasonList";
import useFetch from "../../Context/useFetch";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { API_URL } from "@App/constants";
import congrats from "@Assets/Icons/congrats.svg";
import { Skeleton } from "antd";

function CourseContent() {
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
  //next_content_id:
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
    window.scrollTo(0, 0);
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

  console.log("pass", isContentPass);

  return (
    <>
      <div className="LastCourse">
        <div className="container">
          <BreadCrump name={name} />
          <div className="grid LastCourse__container relative">
            <div className="LastCourse__Box">
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
              {CurrentcontenStatus && (
                <div className="flex items-center justify-between LastCourse__btnBox">
                  <Button
                    type="primary"
                    classes="CoWorkers__btn flex items-center "
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
                  <Button
                    type="primary"
                    classes="CoWorkers__btn flex items-center "
                    {...(CurrentcontenStatus.has_prev_content && {
                      onClick: handlePrevContent,
                    })}
                    disabled={!CurrentcontenStatus.has_prev_content}
                  >
                    <i className="fas fa-chevron-left"></i>
                    مبحث قبلی
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseContent;
