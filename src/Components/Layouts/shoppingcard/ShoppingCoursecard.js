import React, { useState } from "react";
import { Link } from "react-router-dom";
import Price from "@Components/Shared/Price/Price";
import Rate from "@Components/Shared/Rate/Rate";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import { Radio } from "antd";

// Assets
import teacherPic from "@Assets/Pic/course-profile.png";
import courseLogo from "@Assets/Icons/HTML.svg";
import Cover from "@Assets/Pic/js.png";
import { ReactComponent as CoinIcon } from "@Assets/Icons/Coin.svg";
import { ReactComponent as ClockIcon } from "@Assets/Icons/clock.svg";
import { ReactComponent as User } from "@Assets/Icons/user.svg";
import { ReactComponent as Star } from "@Assets/Icons/star.svg";
import { ReactComponent as Heart } from "@Assets/Icons/heart.svg";
import { ReactComponent as CardIcon } from "@Assets/Icons/shoppingCard.svg";
import useFetch from "@App/Context/useFetch";
const ShoppingCoursecard = ({ card }) => {
  return (
    <article className="card-bg">
      <div className="card-bg-pic">
        <img src={Cover} alt="python" className="card-bg-pic-logo" />
      </div>
      <div className="card-bg-info">
        <div className="card-bg-content ">
          <h5 className="card-bg-title">
            <Link
              to={{
                pathname: "/course",
                // state: {
                //   name: card.title,
                //   id: card.uuid,
                // },
              }}
            >
              دوره جاوا
            </Link>
          </h5>
          <div className="shoppingcard__DegreeBox">
           
            <Radio.Group>
              <Radio value="1">مدرک بین المللی</Radio>
              <Radio value="2">مدرک فنی حرفه ای</Radio>
              <Radio value="3">بدون مدرک</Radio>
            </Radio.Group>
          </div>
          <div className="d-flex-space card-bg-footer">
            <div className="card-bg-img-pic">
              <img src={teacherPic} />
              <h4>پریسا قربانی</h4>
            </div>

            <Price value={10000} success />
            <Price value={70000} isDiscount suffix="تومان" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ShoppingCoursecard;
//  <Price value={card.get_price_without_degree_with_some_extra_info} success />
//  <Price value={70000} isDiscount suffix="تومان" />
