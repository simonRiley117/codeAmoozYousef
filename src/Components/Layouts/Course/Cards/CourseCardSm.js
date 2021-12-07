import React, { useState } from "react";
import { ReactComponent as Heart } from "@Assets/Icons/heart.svg";
import { ReactComponent as CardIcon } from "@Assets/Icons/shoppingCard.svg";
import { ReactComponent as User } from "@Assets/Icons/user.svg";
import { ReactComponent as ClockIcon } from "@Assets/Icons/clock.svg";
import { ReactComponent as Star } from "@Assets/Icons/star.svg";
import useFetch from "@App/Context/useFetch";

import { Rate, Statistic } from "antd";
import { Link } from "react-router-dom";
import IconBtn from "@Components/Shared/Buttons/IconBtn";

const Coursecardsm = ({ card }) => {
  const [isOff, setIsOff] = useState(false);
  const [courseid, setCourseid] = useState(null);
  const [addtocardData, setaddtocardData] = useState();
  const getLatestCourseList = useFetch({
    url: `CartService/addToCart`,
    method: "POST",
    trigger: false,
    data: addtocardData,
  });
  const addToCard = (id) => {
    setaddtocardData({ course_uuid: id, degree_uuid: null });
    getLatestCourseList.reFetch();
  };
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

          <div className="card-sm-img-hover">
            <div className="card-sm-img-hover--shopingcard">
              {" "}
              <IconBtn
                onClick={() => addToCard(card.uuid)}
                title="افزودن به سبدخرید"
                icon={<CardIcon />}
              />
            </div>
            <div className="card-sm-img-hover--heart">
              {" "}
              <IconBtn title="افزودن به لیست علاقه مندیها" icon={<Heart />} />
            </div>
          </div>
        </div>
        <div className="card-sm-content">
          <div className="card-sm-info-row ">
            <div className="d-flex-align card-sm-info-row-star">
              <Star />
              <p className="card-sm-content-time">
                {card.mean_of_participant_points.grade}
                <span>({card.nums_of_voter})</span>
                نفر
              </p>
            </div>
            <div className="d-flex-align card-sm-info-row-time">
              <ClockIcon />
              <p className="card-sm-content-time">
                {card.total_time_of_course}
              </p>
            </div>
            <div className="d-flex-align card-sm-info-row-user">
              <User />
              <p className="card-sm-content-time">
                {card.num_of_participants}نفر
              </p>
            </div>
          </div>

          <h5 className="cursor-pointer	">
            <Link
              to={{
                pathname: "/course",
                state: { name: card.title, id: card.uuid },
              }}
            >
              {card.title}
            </Link>
          </h5>
          <div className="card-sm-img-pic">
            <img src={card.teacher_avatar} />
            <h4>
              {card.teacher_first_name} {card.teacher_last_name}
            </h4>
          </div>

          <div className="d-flex-space card-sm-footer">
            <div className="card-sm-footer-level">{card.level}</div>
            <Statistic
              value={card.get_price_without_degree_with_some_extra_info}
              valueStyle={{ color: "#329c00", marginTop: "-1.5rem" }}
            />
          </div>

          {/* <div className="card-sm-content-rating">
            <Rate
              disabled
              allowClear={false}
              defaultValue={card.mean_of_participant_points.grade}
              style={{
                color: "#F68521",
                // direction: "ltr",
                paddingBottom: "0.5rem",
                marginRight: "6vmax",
              }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Coursecardsm;
