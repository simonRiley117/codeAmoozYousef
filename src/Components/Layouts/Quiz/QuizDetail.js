import React from "react";
import arrowdown from "@Assets/Icons/arrowdown.svg";
import pdf from "@Assets/Pic/pdf.png";
import QuizCodeEditor from "../../Shared/CodeeditorWithRun/QuizCodeEditor";
import Button from "../../Shared/Buttons/Button";
import { useNavigate } from "react-router-dom";

function QuizDetail({
  quizId,
  contentId,
  courseId,
  ispreview,
  ismycoursebol,
  data,
  currcourseId,
  nextseson,
}) {
  const navigate = useNavigate();

  return (
    <div className="ExampleDetail">
      <div className="ExampleDetail__txtBox">
        <p className="ExampleDetail__title font-bold">{data.name}</p>

        <p className="ExampleDetail__txt font-normal text-justify	">
          {data.text}
        </p>

        <div className="flex items-center">
          <div className="flex flex-col	ExampleDetail__sampleTitleBox">
            <p className="ExampleDetail__sampleTitle font-normal">
              ورودی نمونه:
            </p>
            <p className="ExampleDetail__sampleTitle font-normal">
              خروجی نمونه:
            </p>
          </div>
          {data.test_cases.length !== 0 &&
            data.test_cases.map((item, index) => (
              <div
                className="flex flex-col	ExampleDetail__sampledataBox mr-6"
                key={index}
              >
                {item.input !== "" ? (
                  <p className="ExampleDetail__sampledata text-center	">
                    {item.input.replace(/#$$#/g, ",")}
                  </p>
                ) : (
                  <p
                    className="ExampleDetail__sampledata text-center	"
                    style={{ opacity: "0" }}
                  >
                    {item.input.replace(/#$$#/g, ",")}
                  </p>
                )}
                {item.input !== "" && item.output !== "" && (
                  <img src={arrowdown} alt={arrowdown} />
                )}
                {item.output !== "" && (
                  <p className="ExampleDetail__sampledata text-center	">
                    {item.output}
                  </p>
                )}
                {/* <p className="ExampleDetail__sampledata text-center	">
                  {item.input.replace(/#$$#/g, ",")}
                </p>
                <img src={arrowdown} alt={arrowdown} />
                <p className="ExampleDetail__sampledata text-center	">
                  {item.output}
                </p> */}
              </div>
            ))}
        </div>
        <div className="flex items-center ExampleDetail__downloadBox mb-10">
          <div className="flex items-center">
            {data.file && (
              <>
                <img src={pdf} alt={pdf} />
                <p className="cursor-pointer">
                  <a href={data.file} download target={"_blank"}>
                    دانلود فایل
                  </a>
                </p>
              </>
            )}
          </div>
          <Button
            ico={false}
            type="primary"
            classes="CoWorkers__btn flex items-center "
            onClick={() => navigate(-1)}
          >
            بازگشت
          </Button>
        </div>
      </div>
      {data ? (
        <QuizCodeEditor
          name={data.name}
          courseId={courseId}
          currcourseId={currcourseId}
          quizId={quizId}
          contentId={contentId}
          lan={data.language === `c` ? `c_cpp` : data.language}
          value=""
          lang={data.language}
          ispreview={ispreview}
          ismycoursebol={ismycoursebol}
          nextseson={nextseson}
        />
      ) : null}
    </div>
  );
}

export default QuizDetail;
