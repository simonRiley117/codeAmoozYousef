import React from "react";
import arrowdown from "@Assets/Icons/arrowdown.svg";
import pdf from "@Assets/Pic/pdf.png";
import ExampleCodeEditor from "../../Shared/CodeeditorWithRun/ExampleCodeEditor";
import Button from "../../Shared/Buttons/Button";
import { useNavigate } from "react-router-dom";

function ExampleDetail({ example, courseUuid }) {
  const navigate = useNavigate();
  return (
    <div className="ExampleDetail">
      <div className="ExampleDetail__txtBox">
        <p className="ExampleDetail__title font-bold">{example.name}</p>
        <p className="ExampleDetail__txt font-normal text-justify	">
          {example.text}
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
          {example.test_cases.map((item, index) => (
            <div
              key={index}
              className="flex flex-col	ExampleDetail__sampledataBox mr-6"
            >
              <p className="ExampleDetail__sampledata text-center	">
                {item.input.replace(/#$$#/g, ",")}
              </p>
              <img src={arrowdown} alt={arrowdown} />
              <p className="ExampleDetail__sampledata text-center	">
                {item.output}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center ExampleDetail__downloadBox mb-10">
          <div className="flex items-center">
            {example.file && (
              <>
                <img src={pdf} alt={pdf} />
                <p className="cursor-pointer">
                  <a href={example.file} download target={"_blank"}>
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
      <ExampleCodeEditor
        name={example.name}
        id={example.uuid}
        lan={example.language === "c" ? "c_cpp" : example.language}
        lang={example.language}
        value={example.code}
      />
    </div>
  );
}

export default ExampleDetail;
