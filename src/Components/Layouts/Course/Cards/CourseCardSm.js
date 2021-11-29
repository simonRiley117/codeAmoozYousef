import React, { useState } from "react";
import courseLogo from "@Assets/Icons/HTML.svg";
import teacherPic from "@Assets/Icons/cardProfile.png";
import { Rate, Statistic } from "antd";
import { Link } from "react-router-dom";

const Coursecardsm = ({ card }) => {
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
            <img src={card.cover} />
          </div>
          <div className="card-sm-img-pic">
            <img src={card.teacher_avatar} />
            <h4>
              {card.teacher_first_name} {card.teacher_last_name}{" "}
            </h4>
          </div>
          <div className="card-sm-img-hover">
            <button>افزودن به سبد خرید</button>
            <button>افزودن به علاقه‌ مندی‌ها</button>
          </div>
        </div>
        <div className="card-sm-content">
          <h5 className="cursor-pointer	">
            <Link
              to={{
                pathname: "/course",
                state: { name: "دوره آنلاین برنامه نویسی HTM", id: card.uuid },
              }}
            >
              {card.title}
            </Link>
          </h5>
          <span className="card-sm-content-time">{card.total_time_of_course}</span>
          <Statistic
            value={card.get_price_without_degree_with_some_extra_info}
            valueStyle={{ color: "#329c00", marginTop: "-1.5rem" }}
          />
          <div className="card-sm-content-rating">
            <Rate
              disabled
              allowClear={false} defaultValue={card.mean_of_participant_points.grade}
              style={{
                color: "#F68521",
                // direction: "ltr",
                paddingBottom: "0.5rem",
                marginRight: "6vmax",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursecardsm;
