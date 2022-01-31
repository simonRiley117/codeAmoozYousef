import React, { useEffect, useState } from "react";
import quiz from "@Assets/Pic/quiz.png";
import Button from "@Components/Shared/Buttons/Button";
import { Link } from "react-router-dom";
import useFetch from "../../../Context/useFetch";
import { ClipLoader } from "react-spinners";
import { useNavigate, useLocation } from "react-router-dom";
import { Skeleton } from "antd";
import { useAuth } from "@App/Context/authContext";

function Quiz({ quizUuid, ismycoursebol, contentUuid, courseUuid, ispreviw }) {
  const [quizContent, setQuizContent] = useState(null);
  const location = useLocation();
  
  const [quizLoading, setQuizLoading] = useState(true);
  const [errorpass, seterrorpass] = useState(false);
  
  let navigate = useNavigate();
  const [name, setName] = useState();
  useEffect(() => {
    setName(location.state.name);
  }, [location]);
  const handleClick = () => {
    navigate("/coursecontent/quiz", {
      state: {
        content_id: contentUuid,
        quiz_id: quizUuid,
        courseUuid: courseUuid,
        title: quizContent?.name,
        text: quizContent?.text,
        test_cases: quizContent?.test_cases,
        language: quizContent?.language,
        file: quizContent?.file,
        ispreviw: ispreviw,
        ismycoursebol: ismycoursebol,
        course: name,
      },
    });
  };
  const setData = (data) => {
    setQuizContent(data);
    setQuizLoading(false);
  };
  const { token, authDispatch } = useAuth();

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
    argErrFunc:(err)=>{
    if(err.detail){
        if(err.detail === "You didnt pass former contents"){
          seterrorpass(true)
        }
    }
    }
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
      <>
       {!errorpass ? <div className="Quiz__box">
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
        </div> :  <div className="Quiz__empty">
          <p>برای گذراندن آزمون فصل ابتدا آزمون جلسه ی قبل را پاس کنید :)</p>
          <img src={quiz} alt={quiz} />{" "}
        </div>} 
      </>
      ) : (
        <div className="center m-4">
          <Skeleton />
        </div>
      )}
    </div>
  );
}

export default Quiz;
