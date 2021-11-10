import React from "react";
import arrowdown from "@Assets/Icons/arrowdown.svg";
import pdf from "@Assets/Pic/pdf.png";
import CodeeditorWithRun from "@Components/Shared/CodeeditorWithRun";

function ExampleDetail() {
  return (
    <div className="ExampleDetail">
      <div className="ExampleDetail__txtBox">
        <p className="ExampleDetail__title font-bold">مثال 1</p>
        <p className="ExampleDetail__txt font-normal text-justify	">
          و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد،تا با نرم افزارها است، چاپگرها و کاربردهای متنوع با هدف بهبود
          ابزارهای کاربردی می باشد، کتابهای زیادی در شصت نیاز، و متون بلکه
          روزنامه و مجله در ستون و سطرآنچنان که صنعت چاپ، و با استفاده از طراحان
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از لازم است، و برای
          شرایط فعلی تکنولوژی مورد و سه درصد گذشته حال و آینده، شناخت فراوان
          جامعه و متخصصان را می طلبد،تا با نرم افزارها است، چاپگرها و کاربردهای
          متنوع
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
          <div className="flex flex-col	ExampleDetail__sampledataBox mr-6">
            <p className="ExampleDetail__sampledata text-center	">2 ، 1</p>
            <img src={arrowdown} alt={arrowdown} />
            <p className="ExampleDetail__sampledata text-center	">3</p>
          </div>
          <div className="flex flex-col	ExampleDetail__sampledataBox mr-6">
            <p className="ExampleDetail__sampledata text-center	">3 ، 2 ، 1</p>
            <img src={arrowdown} alt={arrowdown} />
            <p className="ExampleDetail__sampledata text-center	">6</p>
          </div>
        </div>
        <div className="flex items-center ExampleDetail__downloadBox">
          <img src={pdf} alt={pdf} />
          <p className="cursor-pointer">فایل مثال 1</p>
        </div>
      </div>
      <CodeeditorWithRun lan="python" value='if 5 > 2:
      print("Five is greater than two!")' />
    </div>
  );
}

export default ExampleDetail;
