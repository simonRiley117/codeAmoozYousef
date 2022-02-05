import React, { useState, useEffect, useLayoutEffect } from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import { useParams, useLocation } from "react-router-dom";
import QuizDetail from "@Components/Layouts/Quiz/QuizDetail";
import useFetch from "@App/Context/useFetch";
import { Skeleton } from "antd";

function Index() {
  const location = useLocation();
  const [quizId, setQuizId] = useState(null);
  const [contentId, setContentId] = useState(null);
  const [courseId, setCourseId] = useState(null);
  const [language, setLanguage] = useState("");
  const [ispreview, setispreview] = useState();
  const [ismycoursebol, setismycoursebol] = useState();
  const [data, setData] = useState([]);
  const [intro, setIntro] = useState(false);

  useEffect(() => {
    setQuizId(location.state.quiz_id);
    setContentId(location.state.content_id);
    setLanguage(location.state.language);
    setCourseId(location.state.courseUuid);
    setispreview(location.state.ispreviw);
    setismycoursebol(location.state.ismycoursebol);
    setIntro(location.state.intro);
  }, [location]);
  const getCourseSeasons = useFetch({
    url: `QuizService/${quizId}/get_user_quiz`,
    method: "GET",
    noHeader: false,
    setter: setData,
    trigger: true,
  });

  return (
    <div className="Example ">
      {getCourseSeasons?.response ? (
        <>
          <BreadCrump
            name={data?.name}
            name1={data?.course_name}
            intro={intro}
            namestate={data?.course_name}
            id={data?.course_uuid}
          />
          <div className="Example__container">
            <QuizDetail
              quizId={quizId}
              contentId={contentId}
              courseId={courseId}
              language={language}
              ispreview={ispreview}
              ismycoursebol={ismycoursebol}
              data={data}
            />
          </div>
        </>
      ) : (
        <div className="w-11/12	 m-auto mt-44">
          <Skeleton.Button block active size="large" />
          <br />
          <br />
          <Skeleton.Button block active size="large" />
          <br />
          <br />
          <Skeleton.Button block active size="large" />
          <br />
          <br />
          <Skeleton.Button block active size="large" />
          <br />
          <br />
          <Skeleton.Button block active size="large" />
          <br />
          <br />
          <Skeleton.Button block active size="large" />
          <br />
          <br />
        </div>
      )}
    </div>
  );
}

export default Index;
