import React, { useEffect, useState } from "react";
import quiz from "@Assets/Pic/quiz.png";
import Button from "@Components/Shared/Buttons/Button";
import { Link } from "react-router-dom";
import useFetch from "../../../Context/useFetch";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "antd";
import { useAuth } from "@App/Context/authContext";

function Quiz({ quizUuid, ismycoursebol, contentUuid, courseUuid, ispreviw }) {
  const [quizContent, setQuizContent] = useState(null);

  const [quizLoading, setQuizLoading] = useState(true);
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard/course/quiz", {
      state: {
        content_id: contentUuid,
        quiz_id: quizUuid,
        courseUuid: courseUuid,
        title: quizContent.name,
        text: quizContent.text,
        test_cases: quizContent.test_cases,
        language: quizContent.language,
        file: quizContent.file,
        ispreviw: ispreviw,
        ismycoursebol: ismycoursebol,
      },
    });
  };
  const setData = (data) => {
    setQuizContent(data);
    setQuizLoading(false);
  };
  const { token, authDispatch } = useAuth();
  console.log(token);
  console.log(ismycoursebol);
  console.log(token);
  const previewUrlCondition =
    !token || !ismycoursebol
      ? `QuizService/${quizUuid}/get_user_quiz_preview`
      : `QuizService/${quizUuid}/get_user_quiz`;
  const url = ispreviw
    ? previewUrlCondition
    : `QuizService/${quizUuid}/get_user_quiz`;
  const getQuizContent = useFetch({
    url: url,
    method: "GET",
    noHeader: token ? false : ispreviw,
    trigger: false,
    setter: setData,
  });

  useEffect(() => {
    if (quizUuid) {
      getQuizContent.reFetch();
    }
  }, [quizUuid]);

  return (
    <div className="Quiz">
      {!quizUuid ? (
        <div className="Quiz__empty">
          <p>این مبحث آزمونی نداره! میتونی بری مبحث بعدی:) </p>
          <img src={quiz} alt={quiz} />{" "}
        </div>
      ) : !getQuizContent.loading ? (
        <div className="Quiz__box">
          <p className="Quiz__title">آزمون درس</p>
          <p className="Quiz__txt">
            آزمون بدون زمان میباشد و تا زمانی که نمره 100 دریافت نشده است، پاس
            نمی شود و شما مجاز هستید تا زمانی که نمره 100 دریافت کنید، آزمون
            دهید اما زمانی که نمره 100 گرفته شود، نمره های بعدی بدون تاثیر
            میباشد
          </p>
          <Button
            onClick={handleClick}
            ico={false}
            type="primary"
            classes="CoWorkers__btn Quiz__btn"
          >
            شروع
          </Button>
        </div>
      ) : (
        <div className="center m-4">
          <Skeleton />
        </div>
      )}
    </div>
  );
}

export default Quiz;
