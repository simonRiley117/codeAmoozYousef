import React from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import { Tabs } from "antd";
import VideoPlayer from "@Components/Shared/VideoPlayer/VideoPlayer";
import Detaile from "@Components/Layouts/Course/Sarfasl/Detaile";
import Button from "@Components/Shared/Buttons/Button";
import clock from "@Assets/Icons/clock.svg";
import lock from "@Assets/Pic/lock.png";
import Accordion from "@Components/Shared/Accordion/Accordion";
import ProgressLine from "@Components/Shared/Progress/ProgressLine";
import TrainExample from "@Components/Layouts/Dashboard/TrainExample";
import Quiz from "@Components/Layouts/Dashboard/Quiz";

const { TabPane } = Tabs;

function LastCourse() {
  return (
    <div className="LastCourse">
      <BreadCrump pathsname="/dash/course" name="پایتون" />
      <div className="grid LastCourse__container relative">
        <div>
          <Tabs className="TabBox" type="card">
            <TabPane tab="ویدیو" key="1">
              <Detaile />
            </TabPane>
            <TabPane tab="تمرین و مثال" key="2">
              <TrainExample />
            </TabPane>
            <TabPane tab="آزمون" key="3">
              <Quiz />
            </TabPane>
          </Tabs>
          <div className="flex items-center justify-between LastCourse__btnBox">
            <Button
              ico={false}
              type="primary"
              classes="CoWorkers__btn flex items-center "
            >
              مبحث بعدی
              <i className="fas fa-chevron-right"></i>
            </Button>
            <Button
              ico={false}
              type="primary"
              classes="CoWorkers__btn flex items-center "
            >
              <i className="fas fa-chevron-left"></i>
              مبحث قبلی{" "}
            </Button>
          </div>
        </div>

        <div className="LastCourse__Box">
          <div className="LastCourse__Position">
            <p className="LastCourse__title">
              دوره برنامه نویسی <span>python</span>
            </p>
            <div className="Sarfasl__Accordionbox">
              {cor.map((season, index) => (
                <Accordion header={season.title}>
                  {season.contents.map((content, index) => (
                    <div className="flex justify-between items-center">
                      <div className="flex items-center Sarfasl__Accordiontxtbox">
                        {content.done ? (
                          <div className={"Sarfasl__Accordiondone"}>
                            <i className="fas fa-check"></i>
                          </div>
                        ) : (
                          <div className={"Sarfasl__Accordionnumber"}>
                            {index + 1}{" "}
                          </div>
                        )}

                        <p>{content.title}</p>
                      </div>
                      <div className="flex items-start Sarfasl__AccordionTimeBox">
                        {content.lock && (
                          <img
                            src={lock}
                            alt={lock}
                            className="Sarfasl__AccordionLock"
                          />
                        )}
                        <p>{content.duration_time}</p>
                        <img
                          src={clock}
                          alt={clock}
                          className="Sarfasl__Accordionclock"
                        />
                      </div>
                    </div>
                  ))}
                </Accordion>
              ))}
            </div>
            <p className="LastCourse__progresstitle">
              پیشرفت شما در دوره: <span>20%</span>
            </p>
            <ProgressLine precent={20} />
            <div className="flex items-center cursor-pointer LastCourse__guideBox">
              <p className="LastCourse__guide-icon"> i</p>
              <p className="LastCourse__guide">راهنمای صفحه</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastCourse;
const cor = [
  {
    title: "جلسه اول: آشنایی",
    contents: [
      { title: "چرا پایتون؟", duration_time: "04:33", done: true, lock: false },
      { title: "چرا پایتون؟", duration_time: "04:33", done: false, lock: true },
    ],
  },
  {
    title: "جلسه اول: آشنایی",
    contents: [
      { title: "چرا پایتون؟", duration_time: "04:33", done: false, lock: true },
    ],
  },
  {
    title: "جلسه اول: آشنایی",
    contents: [
      { title: "چرا پایتون؟", duration_time: "04:33", done: false, lock: true },
    ],
  },
  {
    title: "جلسه اول: آشنایی",
    contents: [
      { title: "چرا پایتون؟", duration_time: "04:33", done: false, lock: true },
    ],
  },
];
