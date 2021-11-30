import React from "react";
import arrowdown from "@Assets/Icons/arrowdown.svg";
import pdf from "@Assets/Pic/pdf.png";
import CodeeditorWithRun from "@Components/Shared/CodeeditorWithRun";

function QuizDetail({title, text, test_cases,language,file}) {
    console.log('language: ',language)
    console.log('typeof language: ',typeof language)
    return (
        <div className="ExampleDetail">
            <div className="ExampleDetail__txtBox">
                <p className="ExampleDetail__title font-bold">{title}</p>
                <p className="ExampleDetail__txt font-normal text-justify	">
                    {text}
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
                    {test_cases.map((item,index)=>(
                       <div className="flex flex-col	ExampleDetail__sampledataBox mr-6">
                        <p className="ExampleDetail__sampledata text-center	">{item.input}</p>
                        <img src={arrowdown} alt={arrowdown}/>
                        <p className="ExampleDetail__sampledata text-center	">{item.output}</p>
                    </div>
                    ))}
                </div>
                <div className="flex items-center ExampleDetail__downloadBox">
                    <img src={pdf} alt={pdf}/>
                    <p className="cursor-pointer">{file}</p>
                </div>
            </div>
            <CodeeditorWithRun
                lan={`${language === `c` ? `c_cpp` : language}`}
                value=''
            />
        </div>
    );
}

export default QuizDetail;
