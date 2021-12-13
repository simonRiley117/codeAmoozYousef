import React, { useEffect, useState } from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import Button from "@Components/Shared/Buttons/Button";
import CourseStatus from "@Components/Layouts/CourseContent/CourseStatus";
import ContentTab from "@Components/Layouts/CourseContent/ContentTabs";
import SeasonList from "@Components/Layouts/CourseContent/SeasonList";
import useFetch from "../../Context/useFetch";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function CourseContent() {
  const [CurrentCourseStatus, setCurrentCourseStatus] = useState();
  const [CurrentcontenStatus, setCurrentcontenStatus] = useState();
  const [Currentcontentid, setCurrentContentid] = useState(null);
  const [Currentcontentname, setCurrentContentname] = useState(null);
  const [quizUuid, setquizUuid] = useState();
  const [sidebarList, setSidebarList] = useState();
  const { courseId } = useParams();
  const getCourseSeasons = useFetch({
    url: `CourseService/${courseId}/sidebar`,
    method: "GET",
    noHeader: false,
    setter: setSidebarList,
    trigger: false,
  });
  const getContentName=(name)=>{
    setCurrentContentname(name)
  }
  const getCurrentCourseState = useFetch({
    url: `CourseService/${courseId}/currentCourseState`,
    method: "GET",
    setter: setCurrentCourseStatus,
    caller: getCourseSeasons,
    argFunc: (res) => {
      if (Currentcontentid === null) {
        setCurrentContentid(res.current_content_id);
      }
      getCurrentContentState.reFetch();
    },
  });
  const getCurrentContentState = useFetch({
    url: `ContentService/${Currentcontentid}/currentContentState`,
    method: "GET",
    trigger: false,
    setter: setCurrentcontenStatus,
  });
  const changeContentID = (id, name) => {
    setCurrentContentname(name);
    setCurrentContentid(id);
    getCurrentCourseState.reFetch();
  };
  useEffect(() => {
    console.log("cur__id", Currentcontentid);
  }, [Currentcontentid]);

  const postPassContent = useFetch({
    url: `PassService/${Currentcontentid}`,
    method: "POST",
      trigger: false,
    // errMessage:setErrorPostData,
    caller: getCurrentCourseState,
    // setter: setCallBackPassContent
  });

  const handleNextContent = () => {
    if (CurrentcontenStatus.next_content_passed) {
      setCurrentContentid(CurrentcontenStatus.next_content_id);
     // setQuizUuid(CurrentcontenStatus.next_quiz_id);
     getCurrentCourseState.reFetch();
    } else {
      postPassContent.reFetch();
    }
  };

   const handlePrevContent = () => {
     if (CurrentcontenStatus.prev_content_passed) {
       setCurrentContentid(CurrentcontenStatus.prev_content_id);
       //setQuizUuid(CurrentcontenStatus.prev_quiz_id);
       getCurrentCourseState.reFetch();
     } else {
       postPassContent.reFetch();
      // setIsNext(false);
      //setMakeSetCurrentSituationDataTrigger(true);
     }
   };

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
      {CurrentCourseStatus && sidebarList && (
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
                  <SeasonList
                    sidebarList={sidebarList}
                    activeSeasons={CurrentCourseStatus.current_season_id}
                    activeContent={Currentcontentid}
                    setquizUuid={setquizUuid}
                    changeContentID={changeContentID}
                    getContentName={getContentName}
                  />
                  <div className="flex items-center cursor-pointer LastCourse__guideBox">
                    <p className="LastCourse__guide-icon"> i</p>
                    <p className="LastCourse__guide">راهنمای صفحه</p>
                  </div>
                </div>
              </div>
              <div>
                {CurrentCourseStatus && Currentcontentname !== null ? (
                  <CourseStatus
                    Currentcontentname={Currentcontentname}
                    loading={getCurrentContentState.loading}
                    details={CurrentCourseStatus}
                  />
                ) : (
                  <div>
                    <ClipLoader color="#EF8019" loading={true} size={40} />
                  </div>
                )}

                <ContentTab
                  contentUuid={Currentcontentid}
                  quizUuid={quizUuid}
                  courseUuid={courseId}
                />
                {/* <div className="flex items-center justify-between LastCourse__btnBox">
                   <Button
                    type="primary"
                    classes="CoWorkers__btn flex items-center "
                    {...(CurrentcontenStatus.has_next_content && {
                      onClick: handleNextContent,
                    })}
                    disabled={!CurrentcontenStatus.has_next_content}
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
                    مبحث قبلی{" "}
                  </Button> 
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CourseContent;
