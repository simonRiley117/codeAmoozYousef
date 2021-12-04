import React, { useState } from "react";
import { Link } from "react-router-dom";
import Price from "@Components/Shared/Price/Price";
import Rate from "@Components/Shared/Rate/Rate";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
// Assets
import teacherPic from "@Assets/Pic/course-profile.png";
import courseLogo from "@Assets/Icons/HTML.svg";
import pythonIcon from "@Assets/Icons/python.svg";
import { ReactComponent as CoinIcon } from "@Assets/Icons/Coin.svg";
import { ReactComponent as ClockIcon } from "@Assets/Icons/clock.svg";
import { ReactComponent as User } from "@Assets/Icons/user.svg";
import { ReactComponent as Star } from "@Assets/Icons/star.svg";
import { ReactComponent as Heart } from "@Assets/Icons/heart.svg";
import { ReactComponent as CardIcon } from "@Assets/Icons/shoppingCard.svg";
import useFetch from "@App/Context/useFetch";
const CourseCardBg = ({ card }) => {
  const [isOff, setIsOff] = useState(false);
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
    <article className="card-bg">
      {/* <div className="card-bg-discount">
        <span>40%</span>
        <span>تخفیف</span>
      </div> */}
      <div className="card-bg-pic">
        <img src={card.cover} alt="python" className="card-bg-pic-logo" />
      </div>
      <div className="card-bg-info">
        <div className="card-bg-content ">
          <div className="card-bg--shopingcard">
            <IconBtn title="افزودن به سبدخرید" icon={<CardIcon />} />
          </div>
          <div className="card-bg--heart">
            <IconBtn title="افزودن به لیست علاقه مندیها" icon={<Heart />} />
          </div>
          <h5 className="card-bg-title">
            <Link
              to={{
                pathname: "/course",
                state: {
                  name: card.title,
                  id: card.uuid,
                },
              }}
            >
              {card.title}
            </Link>
          </h5>
          <p className="mt-6 card-bg-des">
          {card.intro}
          </p>

          <div className='d-flex-space '>
            {" "}
            <div className="card-bg-info-row ">
              <div className="d-flex-align card-bg-info-row-star">
                <Star />
                <p className="card-bg-time">
                  {card.mean_of_participant_points.grade ? card.mean_of_participant_points.grade : "0" }
                  <span>({card.nums_of_voter})</span>
                  نفر
                </p>
              </div>
              <div className="d-flex-align card-bg-info-row-time">
                <ClockIcon />
                <p className="card-bg-time">{card.total_time_of_course}</p>
              </div>
              <div className="d-flex-align card-bg-info-row-user">
                <User />
                <p className="card-bg-time">{card.num_of_participants}نفر</p>
              </div>
            </div>
            <div className="card-bg-info-row-level  center">
              {" "}
              <p>{card.level}</p>
            </div>
          </div>

          <div className="d-flex-space card-bg-footer">
            <div className="card-bg-img-pic">
              <img src={card.teacher_avatar} />
              <h4>
                {card.teacher_first_name} {card.teacher_last_name}
              </h4>
            </div>
            <Price
              value={card.get_price_without_degree_with_some_extra_info}
              success
            />
            <Price value={70000} isDiscount suffix="تومان" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseCardBg;
//  <Price value={card.get_price_without_degree_with_some_extra_info} success />
//  <Price value={70000} isDiscount suffix="تومان" />
