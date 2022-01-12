import React, { useState } from "react";
import Tour from "reactour";
import Lock from "@Assets/Icons/lock.svg";

const stepStyle = {
  color: "#000000",
  background: "#fff",
};

const steps = [
  {
    selector: ".LastCourse__Position",
    content: "همه جلسات و مباحث دوره شما در این قسمت قرار می گیره.",
    style: stepStyle,
  },
  {
    selector:
      ".Sarfasl__Accordionbox .Sarfasl__AccordionItem .Sarfasl__AccordionItem__lock",
    content:
      "تا زمانی که مباحث خود را با موفقیت نگذزانید مباحث بعدی برای شما قفل خواهد بود",
    style: stepStyle,
  },
  {
    selector: ".CourseStatus",
    content: "میزان پیشرفت خود در دوره می توانید در این قسمت مشاهده کنید.",
    style: stepStyle,
  },
  {
    selector: ".TabBox__video",
    content: "ویدیو های هر مبحث به همراه توضیحاتش توی این بخش قرار میگیره.",
    style: stepStyle,
  },
  {
    selector: ".LastCourse .LastCourse__btnBox .CoWorkers__btnPast",
    content: "از این قسمت میتونی به مباحث قبلی دسترسی داشته باشی",
    style: stepStyle,
  },
  {
    selector: ".CoWorkers__btnnext",
    content:
      "از این قسمت میتونی به مباحث بعدی دسترسی داشته باشی. در صورتی این گزینه فعاله که آزمون این مبحث رو داده باشی و یا آزمونی نداشته باشی.",
    style: stepStyle,
  },
  //   {
  //     selector: ".ContentDetail__downloadLinkBox .ContentDetail__downloadLink",
  //     content: "ویدیو های هر مبحث رو می تونید از این قسمت دانلود کنید",
  //     style: stepStyle,
  //   },
];

function WebTour({ onAfterOpen, onBeforeClose }) {
  const [isTourOpen, setIsTourOpen] = useState(true);

  return (
    <Tour
      steps={steps}
      isOpen={isTourOpen}
      rounded={5}
      stepInteraction={true}
      maskClassName="mask"
      className="helper"
      accentColor="#F68521"
      onRequestClose={() => setIsTourOpen(false)}
      onBeforeClose={onBeforeClose}
      onAfterOpen={onAfterOpen}

      //   inViewThreshold={850}
      //   scrollOffset={50}
      //   scrollDuration={300}
    />
  );
}

export default WebTour;
