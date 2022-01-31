import React, { useState, useEffect, useLayoutEffect } from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import { useParams, useLocation } from "react-router-dom";
import QuizDetail from "@Components/Layouts/Quiz/QuizDetail";
import useFetch from "@App/Context/useFetch";
import { createBrowserHistory } from "history";
import { useNavigationType, useNavigate } from "react-router-dom";

function Index() {
  const location = useLocation();
  const [quizId, setQuizId] = useState(null);
  const [contentId, setContentId] = useState(null);
  const [courseId, setCourseId] = useState(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("");
  const [file, setFile] = useState(null);
  const [course, setCourse] = useState(null);
  const [ispreview, setispreview] = useState();
  const [ismycoursebol, setismycoursebol] = useState();
  const [test_cases, setTest_cases] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    setQuizId(location.state.quiz_id);
    setContentId(location.state.content_id);
    setTitle(location.state.title);
    setText(location.state.text);
    setTest_cases(location.state.test_cases);
    setLanguage(location.state.language);
    setFile(location.state.file);
    setCourseId(location.state.courseUuid);
    setispreview(location.state.ispreviw);
    setismycoursebol(location.state.ismycoursebol);
    setCourse(location.state.course);
  }, [location]);
  const getCourseSeasons = useFetch({
    url: `QuizService/${quizId}/get_user_quiz`,
    method: "GET",
    noHeader: false,
    setter: setData,
    trigger: true,
  });
  const history = createBrowserHistory();
  let navigate = useNavigate();

  useLayoutEffect(() => {
    history.listen(setState);
    console.log("first", history.action);
    console.log("first1", navigate);
    console.log("first2", location);
  }, [history]);

  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });
  return (
    <div className="Example">
      <BreadCrump
        name={title}
        name1={data?.content?.content_name}
        id={data?.content?.content_id}
      />
      <div className="Example__container">
        <QuizDetail
          quizId={quizId}
          contentId={contentId}
          courseId={courseId}
          title={title}
          text={text}
          file={file}
          language={language}
          test_cases={test_cases}
          ispreview={ispreview}
          ismycoursebol={ismycoursebol}
        />
      </div>
    </div>
  );
}

export default Index;
