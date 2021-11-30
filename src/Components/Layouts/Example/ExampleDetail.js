import React from "react";
import arrowdown from "@Assets/Icons/arrowdown.svg";
import pdf from "@Assets/Pic/pdf.png";
import CodeeditorWithRun from "@Components/Shared/CodeeditorWithRun";

function ExampleDetail({example}) {
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
                    {example.test_cases.map((item,index)=>(
                        <div className="flex flex-col	ExampleDetail__sampledataBox mr-6">
                        <p className="ExampleDetail__sampledata text-center	">{item.input}</p>
                        <img src={arrowdown} alt={arrowdown}/>
                        <p className="ExampleDetail__sampledata text-center	">{item.output}</p>
                    </div>
                    ))}

                </div>
                <div className="flex items-center ExampleDetail__downloadBox">
                    <img src={pdf} alt={pdf}/>
                    <p className="cursor-pointer">فایل مثال 1</p>
                </div>
            </div>
            <CodeeditorWithRun lan="python" value={example.code}/>
        </div>
    );
}

export default ExampleDetail;
