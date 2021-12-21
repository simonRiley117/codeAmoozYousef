import React from "react";
import arrowdown from "@Assets/Icons/arrowdown.svg";
import pdf from "@Assets/Pic/pdf.png";
import QuizCodeEditor from "../../Shared/CodeeditorWithRun/QuizCodeEditor";
import Button from "../../Shared/Buttons/Button";
import { Link } from "react-router-dom";

function QuizDetail({
  quizId,
  contentId,
  courseId,
  title,
  text,
  test_cases,
  language,
  file,
}) {
  console.log("language: ", language);
  console.log("typeof language: ", typeof language);
  return (
    <div className="ExampleDetail">
      <div className="ExampleDetail__txtBox">
        <p className="ExampleDetail__title font-bold">{title}</p>
        <p className="ExampleDetail__txt font-normal text-justify	">{text}</p>
        <div className="flex items-center">
          <div className="flex flex-col	ExampleDetail__sampleTitleBox">
            <p className="ExampleDetail__sampleTitle font-normal">
              ورودی نمونه:
            </p>
            <p className="ExampleDetail__sampleTitle font-normal">
              خروجی نمونه:
            </p>
          </div>
          {test_cases.map((item, index) => (
            <div
              className="flex flex-col	ExampleDetail__sampledataBox mr-6"
              key={index}
            >
              <p className="ExampleDetail__sampledata text-center	">
                {item.input}
              </p>
              <img src={arrowdown} alt={arrowdown} />
              <p className="ExampleDetail__sampledata text-center	">
                {item.output}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center ExampleDetail__downloadBox">
          <div className="flex items-center">
            <img src={pdf} alt={pdf} />
            <p className="cursor-pointer">{file}</p>
          </div>
          <Button
            ico={false}
            type="primary"
            classes="CoWorkers__btn flex items-center "
            // onClick={handlePassContent}
          >
            <Link
              to={`/coursecontent`}
              state={{
                id: courseId,
              }}
              className="flex items-center"
            >
              بازگشت{" "}
            </Link>
          </Button>
        </div>
      </div>
      <QuizCodeEditor
        name={title}
        quizId={quizId}
        contentId={contentId}
        lan={language === `c` ? `c_cpp` : language}
        value=""
      />
    </div>
  );
}

export default QuizDetail;
