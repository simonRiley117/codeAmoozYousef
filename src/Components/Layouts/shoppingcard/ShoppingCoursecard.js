import React, { useState } from "react";
import { Link } from "react-router-dom";
import Price from "@Components/Shared/Price/Price";
import Rate from "@Components/Shared/Rate/Rate";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import { Radio } from "antd";
import { toast } from "react-toastify";

// Assets

import Cover from "@Assets/Pic/js.png";
import { ReactComponent as CoinIcon } from "@Assets/Icons/Coin.svg";
import { ReactComponent as ClockIcon } from "@Assets/Icons/clock.svg";
import { ReactComponent as User } from "@Assets/Icons/user.svg";
import { ReactComponent as Star } from "@Assets/Icons/star.svg";
import { ReactComponent as Heart } from "@Assets/Icons/heart.svg";
import { ReactComponent as CardIcon } from "@Assets/Icons/shoppingCard.svg";
import useFetch from "@App/Context/useFetch";
const ShoppingCoursecard = ({ card ,getPayment,getorderSummary}) => {
  const {
    all_degrees,
    course_id,
    course_name,
    degree_name,
    discount_amount,
    discounted_cost,
    origin_cost,
    teacher_avatar,
    teacher_last_name,
    teacher_name,
    uuid,
  } = card;
  const [degree, setDegree] = useState(null);
  const handleChange = (e) => {
    const selectedDegree = all_degrees.find(
      (item) => item[1] === e.target.value
    );
    setDegree(selectedDegree[0]);
    ChangeDegree.reFetch();
  };
  const CallFunc =()=>{
    getorderSummary.reFetch()
    getPayment.reFetch()
  }
  const ChangeDegree = useFetch({
    url: `CartService/${uuid}/editOrderItem`,
    method: "PUT",
    trigger: false,
    func:CallFunc,
    argFunc: (res) => {
      toast.success("مدرک با موفقیت تغییر کرد ");
    },
    data: { degree: degree },
  });
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
                pathname: "/courses/content",
                state: { nameid: course_name, id: course_id },
              }}
            >
              {course_name}
            </Link>
          </h5>
          <div className="shoppingcard__DegreeBox">
            <Radio.Group
              onChange={(e) => handleChange(e)}
              defaultValue={degree_name}
            >
              {all_degrees?.map((i) => (
                <Radio key={i[0]} value={i[1]}> {i[1]} </Radio>
              ))}
              
            </Radio.Group>
          </div>
          <div className="d-flex-space card-bg-footer">
            <div className="card-bg-img-pic">
              <img src={teacher_avatar} />
              <h4>
                {teacher_name} {teacher_last_name}
              </h4>
            </div>

            {discount_amount || discount_amount !== 0 ? (
              <div>
                {origin_cost !== 0 ? (
                  <Price value={origin_cost} isDiscount />
                ) : (
                  <p>رایگان</p>
                )}
              </div>
            ) : null}
            {discounted_cost !== 0 ? (
              <Price value={discounted_cost} suffix="تومان" success />
            ) : (
              <p className="success"> رایگان</p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ShoppingCoursecard;
//  <Price value={card.get_price_without_degree_with_some_extra_info} success />
//  <Price value={70000} isDiscount suffix="تومان" />
