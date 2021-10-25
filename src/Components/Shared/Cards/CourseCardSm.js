import React, { useState } from "react";
import courseLogo from "@Assets/Icons/HTML.svg";
import teacherPic from "@Assets/Icons/cardProfile.png";
import { Rate, Statistic } from "antd";
import { Link } from "react-router-dom";

const Coursecardsm = () => {
  const [isOff, setIsOff] = useState(false);
  return (
    <div className="card-sm">
      <div>
        <div className="card-sm-img">
          <div
            className={isOff ? "card-sm-img-off-show" : "card-sm-img-off-hide"}
          >
            40% تخفیف
          </div>
          <div className="card-sm-img-title">
            <img src={courseLogo} />
            <h4>python</h4>
          </div>
          <div className="card-sm-img-pic">
            <img src={teacherPic} />
            <h4>علیرضا میرزایی فرد</h4>
          </div>
          <div className="card-sm-img-hover">
            <button>افزودن به سبد خرید</button>
            <button>افزودن به علاقه‌ مندی‌ها</button>
          </div>
        </div>
        <div className="card-sm-content">
          <h5 className="cursor-pointer	">
            {" "}
            <Link
              to={{
                pathname: "/course",
                state: { name: "دوره آنلاین برنامه نویسی HTM" },
              }}
            >
              دوره آنلاین برنامه نویسی HTML{" "}
            </Link>
          </h5>
          <span className="card-sm-content-time">07:13:00</span>
          <Statistic
            value={50000}
            valueStyle={{ color: "#329c00", marginTop: "-1.5rem" }}
          />
          <div className="card-sm-content-rating">
            <Rate
              disabled
              defaultValue={4}
              style={{
                color: "#F68521",
                direction: "ltr",
                paddingBottom: "0.5rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursecardsm;
