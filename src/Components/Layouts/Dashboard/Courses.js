import React, { useState } from "react";
import { Card, Statistic } from "antd";
import CoursesPic from "@Assets/Pic/noCourses.png";
import CourseLogo from "@Assets/Icons/CourseLogo.svg";
import LogoTypo from "@Assets/Pic/logoTypo.png";
import { last } from "lodash";

const Courses = () => {
  const [isCourse, setIsCourse] = useState(false);
  const course = [
    {
      title: "دوره آنلاین برنامه نویسی python",
      income: 0,
      students: "0",
      published: false,
    },
  ];
  return (
    <div className="sm:col-span-2 col-span-1">
      {isCourse ? (
        <div className="dashboard-card dash-courses">
          <Card
            title="آخرین دوره شما:"
            bordered={false}
            headStyle={{
              border: "none",
              fontSize: "1.6rem",
              paddingBottom: "0",
            }}
            bodyStyle={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
            style={{
              borderRadius: "1rem",
              boxShadow: "0px 2px 25px 2px rgba(0, 0, 0, 0.2)",
              maxHeight: "19.9rem",
            }}
          >
            <img src={CoursesPic} style={{ marginTop: "-4rem" }} />
            <p style={{ paddingBottom: "0.5rem" }}>
              هنوز هیچ دوره ای ایجاد نکردی؟!
              <br />
              وقتشه دست به کار شی
            </p>
            <button className="button button__default">ایجاد دوره</button>
          </Card>
        </div>
      ) : (
        <Card
          title="آخرین دوره شما:"
          bordered={false}
          headStyle={{
            border: "none",
            fontSize: "1.6rem",
            paddingBottom: "0",
          }}
          bodyStyle={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          style={{
            borderRadius: "1.5rem",
            boxShadow: "0px 2px 8px 2px rgba(0, 0, 0, 0.15)",
            maxHeight: "19.9rem",
          }}
        >
          {course.map((lastCourse) => {
            return (
              <div className="last-course-card w-full mb-9">
                <div className="last-course-card-banner flex items-center px-7 lg:ml-10 ml-3">
                  <div className="ml-4">
                    <img src={LogoTypo} />
                  </div>
                  <div>
                    <img src={CourseLogo} />
                  </div>
                </div>
                <ul className="lg:grid lg:grid-cols-2 lg:grid-rows-3">
                  <h1 className="col-span-2">{lastCourse.title}</h1>
                  <li>
                    درآمد این دوره: &nbsp;
                    <Statistic
                      value={lastCourse.income}
                      suffix="تومان"
                      valueStyle={{
                        color: "rgba(18, 18, 18, 0.7)",
                        padding: "1rem 0",
                        marginTop: "-0.8rem",
                        fontSize: "1.4rem",
                      }}
                      style={{
                        display: "inline-block",
                        color: "rgba(18, 18, 18, 0.7)",
                        fontFamily: "Vazir",
                      }}
                    />
                  </li>
                  <li>
                    وضعیت انتشار:
                    {lastCourse.published ? "منتشر شده" : "دخیره در پیشنویس"}
                  </li>
                  <li>تعداد دانشجویان: {lastCourse.students} نفر</li>
                  <li>
                    <a href="#">مشاهده دوره</a>
                  </li>
                </ul>
              </div>
            );
          })}
        </Card>
      )}
    </div>
  );
};

export default Courses;
