import React, { useState, useEffect } from "react";
import WebTour from "@Components/Layouts/CourseContent/WebTour";
import CourseContent from "./CourseContent";
import { useUserData } from "@App/Context/userContext";
import { tourguid } from "@App/Recoil/StateRecoil";
import { useRecoilState } from "recoil";

function Index() {
  const { userData } = useUserData();

  const handleClose = () => {};
  return (
    <div>
      <CourseContent />
      <WebTour tourConfig={tourConfig} />
      {/* <Tour
        onRequestClose={closeTour}
        steps={tourConfig}
        isOpen={isTourOpen}
        maskClassName="mask"
        className="helper"
        rounded={5}
        accentColor={"#F68521"}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
        // nextButton={<button>{"Next"}</button>}
        lastStepNextButton={<button>{"Done"}</button>}
        showCloseButton={false}
        showNavigation={false}
        showNumber={false}
        showButtons={true}
        stepInteraction={true}
      /> */}
    </div>
  );
}

export default Index;
const tourConfig = [
  {
    selector: '[data-tut="reactour__start"]',
    content: ({ goTo }) => (
      <div className=" WebTour__txtBox">
        <div style={{ fontWeight: "600", fontSize: "18px" }}>جلسات</div>
        <div style={{ marginTop: "15px" }}>
          همه جلسات و مباحث دوره شما در این قسمت قرار می گیره
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "45px",
          }}
        >
          <span className="WebTour__number" style={{ fontWeight: "600" }}>
            1 of 5
          </span>
          {/* <button onClick={() => goTo(1)} className=" WebTour__NextArrow">
            {"Next"}
          </button> */}
        </div>
      </div>
    ),
    style: {
      padding: "20px 18px 12px 18px",
    },
    position: "left",
  },
  {
    selector: '[data-tut="reactour__lock"]',
    content: ({ goTo }) => (
      <div className=" WebTour__txtBox">
        <div style={{ fontWeight: "600", fontSize: "18px" }}>قفل</div>
        <div style={{ marginTop: "15px" }}>
          تا زمانی که مباحث خود را با موفقیت نگذزانید مباحث بعدی برای شما قفل
          خواهد بود
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "45px",
          }}
        >
          <span className="WebTour__number" style={{ fontWeight: "600" }}>
            2 of 5
          </span>
          {/* <button onClick={() => goTo(2)}>{"Next"}</button> */}
        </div>
      </div>
    ),
    style: {
      padding: "20px 18px 12px 18px",
    },
    position: "left",
  },
  {
    selector: '[data-tut="reactour__status"]',
    content: ({ goTo }) => (
      <div className=" WebTour__txtBox">
        <div style={{ fontWeight: "600", fontSize: "18px" }}>پیشرفت</div>
        <div style={{ marginTop: "15px" }}>
          میزان پیشرفت خود در دوره می توانید در این قسمت مشاهده کنید
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "45px",
          }}
        >
          <span className="WebTour__number" style={{ fontWeight: "600" }}>
            3 of 5
          </span>
          {/* <button onClick={() => goTo(3)}>{"Next"}</button> */}
        </div>
      </div>
    ),
    style: {
      padding: "20px 18px 12px 18px",
    },
    position: "bottom",
  },
  {
    // selector: '[data-tut="reactour__video"]',
    selector: ".reactour__video",
    content: ({ goTo }) => (
      <div className=" WebTour__txtBox">
        <div style={{ fontWeight: "600", fontSize: "18px" }}>ویدیو</div>
        <div style={{ marginTop: "15px" }}>
          ویدیو های هر مبحث به همراه توضیحاتش توی این بخش قرار میگیره
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "45px",
          }}
        >
          <span className="WebTour__number" style={{ fontWeight: "600" }}>
            4 of 5
          </span>
          {/* <button onClick={() => goTo(4)}>{"Next"}</button> */}
        </div>
      </div>
    ),
    style: {
      padding: "20px 18px 12px 18px",
    },
    position: "left",
  },
  {
    selector: '[data-tut="reactour__end"]',
    content: ({ goTo }) => (
      <div className=" WebTour__txtBox">
        <div style={{ fontWeight: "600", fontSize: "18px" }}>قبل</div>
        <div style={{ marginTop: "15px" }}>
          از این قسمت میتونی به مباحث قبلی دسترسی داشته باشی
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "45px",
          }}
        >
          <span className="WebTour__number" style={{ fontWeight: "600" }}>
            5 of 5
          </span>
          {/* <button onClick={() => goTo(5)}>{"Next"}</button> */}
        </div>
      </div>
    ),
    style: {
      padding: "20px 18px 12px 18px",
    },
    position: "top",
  },
  {
    selector: '[data-tut="reactour__next"]',
    content: ({ goTo }) => (
      <div className=" WebTour__txtBox">
        <div style={{ fontWeight: "600", fontSize: "18px" }}>قبل</div>
        <div style={{ marginTop: "15px" }}>
          از این قسمت میتونی به مباحث بعدی دسترسی داشته باشی. در صورتی این گزینه
          فعاله که آزمون این مبحث رو داده باشی و یا آزمونی نداشته باشی.{" "}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "45px",
          }}
        >
          <span className="WebTour__number" style={{ fontWeight: "600" }}>
            5 of 5
          </span>
          {/* <button onClick={() => goTo(5)}>{"Next"}</button> */}
        </div>
      </div>
    ),
    style: {
      padding: "20px 18px 12px 18px",
    },
    position: "top",
  },
];
