import React, { useState } from "react";
import courseLogo from "@Assets/Icons/HTML.svg";
import teacherPic from "@Assets/Icons/cardProfile.png";
import { Rate, Statistic } from "antd";

const CourseCardBg = () => {
  const [isOff, setIsOff] = useState(false);
  return (
    <div className="card-bg">
      <div className="card-bg-title">
        <img src={courseLogo} />
        <h4>python</h4>
      </div>
      <div className="card-bg-info">
        <h5 className="card-bg-info-title">دوره آنلاین برنامه نویسی HTML</h5>
        <div className="card-bg-info-content">
          <img src={teacherPic} />
          <div>
            <h4>علیرضا میرزایی فرد</h4>
            <span className="card-bg-content-time">07:13:00</span>
            <Statistic
              value={50000}
              valueStyle={{ color: "#329c00", marginTop: "-0.8rem" }}
            />
          </div>
        </div>
        <div className="line "></div>
        <Rate
          disabled
          defaultValue={4}
          style={{
            color: "#F68521",
            direction: "ltr",
            paddingBottom: "0.5rem",
            fontSize: "3rem",
            position: "absolute",
            bottom: "4rem",
            left: "34rem",
          }}
        />
      </div>
    </div>
  );
};

export default CourseCardBg;
