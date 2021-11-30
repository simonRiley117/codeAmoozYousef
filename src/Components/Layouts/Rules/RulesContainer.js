import React from "react";
import CoursMastersLogo from "@Assets/Pic/mastersicon.png";

function RulesContainer() {
  return (
    <div className="WorkWithUs text-center CoursStandards mt-40">
      <div className="CoursStandards__titrBox text-right w-full flex items-center justify-center">
        <p className="CoursStandards__titr font-bold">قوانین و مقررات</p>
      </div>
      <p className="items-start text-right CoursStandards__text leading-loose">
        {txt}
      </p>
      <div className="CoursStandards__content">
        {info.map((index, id) => (
          <div className="flex flex-col items-start justify-center" key={id}>
            <div className="flex flex-row items-center justify-start WorkWithUs__titlebox">
              <div className="green-circle">{id + 1}</div>
              <p className="CoursStandards__titrs font-bold">{index.title}</p>
            </div>
            <p className="CoursStandards__text text-right leading-loose">
              {index.txt}
            </p>
          </div>
        ))}
      </div>
      <div className=" text-right ">
        <p className="CoursStandards__titr font-bold">روش تولید محتوا</p>
      </div>
      <p className="items-start text-right CoursStandards__text leading-loose">
        {txt}
      </p>
      <div className="CoursStandards__content">
        {infos.map((index, id) => (
          <div className="flex flex-col items-start justify-center" key={id}>
            <div className="flex flex-row items-center justify-start WorkWithUs__titlebox">
              <div className="green-circle">{id + 1}</div>
              <p className="CoursStandards__titrs font-bold">{index.title}</p>
            </div>
            <p className="CoursStandards__text text-right leading-loose">
              {index.txt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RulesContainer;
const info = [
  {
    title: "چگونگی تصویر",
    txt: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  },
  {
    title: "چگونگی صدا",
    txt: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  },
];
const infos = [
  {
    title: "محتوای تصویری",
    txt: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  },
  {
    title: "مثال و تمرین",
    txt: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  },
];

const txt =
  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.";
