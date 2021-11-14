import React, { useState } from "react";
import studsPic from "@Assets/Pic/nostuds.png";
import avatar from "@Assets/Pic/avatar.png";
import { Card, Divider } from "antd";

const Students = () => {
  const [isStuds, setIsStuds] = useState(false);
  const students = [
    {
      username: "سینا آزادی",
      course: "دوره آنلاین برنامه نویسی",
      avatar: avatar,
    },
    {
      username: "سینا آزادی",
      course: "دوره آنلاین برنامه نویسی",
      avatar: avatar,
    },
    {
      username: "سینا آزادی",
      course: "دوره آنلاین برنامه نویسی",
      avatar: avatar,
    },
  ];
  return (
    <div>
      {isStuds ? (
        <div className="dashboard-card dash-students">
          <Card
            title="بهترین دانشجوی شما:"
            bordered={false}
            headStyle={{ border: "none", fontSize: "1.4rem" }}
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
              height: "26.7rem",
            }}
          >
            <img src={studsPic} style={{ paddingBottom: "2rem" }} />
            <p style={{ paddingBottom: "2rem" }}>
              در حال حاضر هنوز دانشجویی ندارید
            </p>
          </Card>
        </div>
      ) : (
        <div>
          <Card
            title="بهترین دانشجوی شما:"
            bordered={false}
            headStyle={{ border: "none", fontSize: "1.4rem" }}
            bodyStyle={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
            style={{
              borderRadius: "1.5rem",
              height: "26.7rem",
              boxShadow: "0px 2px 8px 2px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div className="student-cards">
              {students.map((student) => {
                return (
                  <div className="max-w-full">
                    <div className="student-card">
                      <img src={student.avatar} />
                      <div className="student-card-content">
                        <p className="student-card-content-name">
                          {student.username}
                        </p>
                        <p className="student-card-content-course">
                          {student.course}
                        </p>
                      </div>
                    </div>
                    <Divider style={{ margin: "0.5rem 0" }} />
                  </div>
                );
              })}
              <div className="flex justify-end w-full">
                <a className="text-primary self-end">بیشتر...</a>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Students;
