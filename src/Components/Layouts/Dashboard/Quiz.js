import React, { useState } from "react";
import quiz from "@Assets/Pic/quiz.png";
import Button from "@Components/Shared/Buttons/Button";
import { Link } from "react-router-dom";

function Quiz() {
  const [haveQuiz, setHaveQuiz] = useState(true);
  let id = "1";
  return (
    <div className="Quiz">
      {!haveQuiz ? (
        <div className="Quiz__empty">
          <p>این مبحث آزمونی نداره! میتونی بری مبحث بعدی:) </p>
          <img src={quiz} alt={quiz} />{" "}
        </div>
      ) : (
        <div className="Quiz__box">
          <p className="Quiz__title">آزمون جلسه اول</p>
          <p className="Quiz__txt">
            کتابهای زیادی در شصت نیاز، و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که افزارها است، چاپگرها و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، و سه درصد گذشته حال و آینده، شناخت فراوان
            جامعه و متخصصان را می طلبد،تا با نرم سطرآنچنان که افزارها است،
            چاپگرها و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، و
            سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
            طلبد،تا با نرم
          </p>

          <Button ico={false} type="primary" classes="CoWorkers__btn Quiz__btn">
            <Link
              to={{
                pathname: "/dash/quiz",
                state: {
                  title: " phyton دوره برنامه نویسی",
                  id: id,
                },
              }}
            >
              شروع
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
