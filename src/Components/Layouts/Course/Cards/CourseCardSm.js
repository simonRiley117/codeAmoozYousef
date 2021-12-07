import React, { useState } from "react";
import { ReactComponent as Heart } from "@Assets/Icons/heart.svg";
import { ReactComponent as CardIcon } from "@Assets/Icons/shoppingCard.svg";
import { ReactComponent as User } from "@Assets/Icons/user.svg";
import { ReactComponent as ClockIcon } from "@Assets/Icons/clock.svg";
import { ReactComponent as Star } from "@Assets/Icons/star.svg";
import useFetch from "@App/Context/useFetch";
import Price from "@Components/Shared/Price/Price";
import {  toast } from 'react-toastify';
import { Rate, Statistic } from "antd";
import { Link } from "react-router-dom";
import IconBtn from "@Components/Shared/Buttons/IconBtn";

const Coursecardsm = ({ card }) => {
  const {
    uuid,
    num_of_participants,
    teacher_first_name,
    level,
    teacher_last_name,
    total_time_of_course,
    nums_of_voter,
    mean_of_participant_points,
    is_favorite,
    title,
    has_user_course,
    get_price_without_degree_with_some_extra_info,
    teacher_avatar,cover
  } = card;
  const [isOff, setIsOff] = useState(false);
  const [courseid, setCourseid] = useState(null);
  const [addtocardData, setaddtocardData] = useState();
  const Addtocard = useFetch({
    url: `CartService/addToCart`,
    method: "POST",
    trigger: false,
    data: addtocardData,
    argFunc:(res)=>{toast.success('     دوره با موفقیت به سبد کالا اضافه شد ')},
    argErrFunc : (err) => handleErrorAddtocard(err),
  });
  const handleErrorAddtocard = (err)=>{
   console.log("errCard",err)
   if(err?.data === "course already exists"){
    toast.error('این دوره از قبل اضافه شده است')
   }
   if(err?.detail === "Given token not valid for any token type"){
    toast.error('برای خرید دوره اول وارد سایت شوید')
   }
  }
  const addToCard = (id) => {
    setaddtocardData({ course_uuid: id, degree_uuid: null });
    Addtocard.reFetch();
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
            <img src={cover} alt='course-cover'/>
          </div>

          <div className="card-sm-img-hover">
            <div className="card-sm-img-hover--box"> <div className="card-sm-img-hover--shopingcard">
              {" "}
            { !has_user_course &&
             <IconBtn
                onClick={() => addToCard(uuid)}
                title="افزودن به سبدخرید"
                icon={<CardIcon />}
              />}
            </div>
            <div className="card-sm-img-hover--heart">
              {" "}
              <IconBtn title="افزودن به لیست علاقه مندیها" icon={<Heart />} />
            </div></div>

          </div>
        </div>
        <div className="card-sm-content">
          <div className="card-sm-info-row ">
            <div className="d-flex-align card-sm-info-row-star">
              <Star />
              <p className="card-sm-content-time">
                {mean_of_participant_points.grade}
                <span>({nums_of_voter})</span>
                نفر
              </p>
            </div>
            <div className="d-flex-align card-sm-info-row-time">
              <ClockIcon />
              <p className="card-sm-content-time">
                {total_time_of_course}
              </p>
            </div>
            <div className="d-flex-align card-sm-info-row-user">
              <User />
              <p className="card-sm-content-time">
                {num_of_participants}نفر
              </p>
            </div>
          </div>

          <h5 className="cursor-pointer	">
            <Link
              to={{
                pathname: "/courses/content",
                state: { nameid: "react", id: "5BiZCqjR" },
              }}
            >
              {title}
            </Link>
          </h5>
          <div className="card-sm-img-pic">
            <img src={teacher_avatar} />
            <h4>
              {teacher_first_name} {teacher_last_name}
            </h4>
          </div>

          <div className="d-flex-space card-sm-footer">
            <div className="card-sm-footer-level">{level}</div>
           {get_price_without_degree_with_some_extra_info
                  .discountAmount === 0 ? <Price
              value={
                get_price_without_degree_with_some_extra_info
                  .discountAmount
              }
              success
            /> : "رایگان"}
            {get_price_without_degree_with_some_extra_info.discountRate ||
              get_price_without_degree_with_some_extra_info
                .discountRate !== 0 ? (
                <Price
                  value={
                    get_price_without_degree_with_some_extra_info
                      .originalAmount 
                  }
                  isDiscount
                  suffix="تومان"
                />
              ):null}
           
          </div>

       
        </div>
      </div>
    </div>
  );
};

export default Coursecardsm;
