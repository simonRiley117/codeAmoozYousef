import React, { useState } from "react";
import { Card, Statistic } from "antd";
import CoursesPic from "@Assets/Pic/noCourses.png";
import Coursecardbanner from "../../Shared/CourseCardBanner/CourseCardBanner";
import Suggest from "@Assets/Pic/Suggest.png";

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
    <div className="md:col-span-2 col-span-1 grid grid-cols-8 md:grid-rows-1 gap-5">
      {isCourse ? (
        <div className="dashboard-card dash-courses md:col-span-7 col-span-8">
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
              هنوز هیچ دوره ای ثبت نام نکردی؟!
              <br />
              وقتشه دست به کار شی
            </p>
            <button className="button button__default">ایجاد دوره</button>
          </Card>
        </div>
      ) : (
        <div className="md:col-span-7 col-span-8">
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
                  <Coursecardbanner suggest={false} />
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
                      <a href="/dash/course">مشاهده دوره</a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </Card>
        </div>
      )}
      <div className="last-course-card-suggestion flex md:flex-col items-center justify-center md:col-span-1 col-span-8 md:p-0 p-4">
        <img src={Suggest} />
        <a className="text-primary md:w-20 text-center mt-4 md:mr-0 mr-4">
          پیشنهاد دوره جدید
        </a>
      </div>
    </div>
  );
};

export default Courses;
