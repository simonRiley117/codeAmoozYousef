import React, { useState } from "react";
import { Link } from "react-router-dom";
import Price from "@Components/Shared/Price/Price";
import Rate from "@Components/Shared/Rate/Rate";

// Assets
import teacherPic from "@Assets/Pic/course-profile.png";
import courseLogo from "@Assets/Icons/HTML.svg";
import pythonIcon from "@Assets/Icons/python.svg";
import { ReactComponent as CoinIcon } from "@Assets/Icons/Coin.svg";
import { ReactComponent as ClockIcon } from "@Assets/Icons/clock.svg";

const CourseCardBg = ({card}) => {
  const [isOff, setIsOff] = useState(false);

  return (
    <article className="card-bg">
      <div className="card-bg-discount">
        <span>40%</span>
        <span>تخفیف</span>
      </div>
      <div className="card-bg-pic">
        <img src={card.cover} alt="python" className="card-bg-pic-logo" />
      
      </div>
      <div className="card-bg-info">
        <div className="card-bg-content">
          <h5 className="card-bg-title">
            <Link
              to={{
                pathname: "/course",
                state: {
                  name:card.title ,
                  id: card.uuid,
                },
              }}
            >
              {card.title}
            </Link>
          </h5>
          <div className="card-bg-box">
            <div className="card-profile">
              <img src={card.teacher_avatar	} alt={teacherPic} />
            </div>
            <div className="card-bg-details">
              <h4> {card.teacher_first_name}  {card.teacher_last_name} </h4>
              <div className="card-bg-details-time">
                <ClockIcon />
                <span>{card.total_time_of_course}</span>
              </div>
              <div className="card-bg-details-price">
                <CoinIcon />
                <Price value={card.get_price_without_degree_with_some_extra_info} success />
                <Price value={70000} isDiscount suffix="تومان" />
              </div>

            </div>
            <Rate disabled allowClear={false} defaultValue={card.mean_of_participant_points.grade} />

          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseCardBg;
