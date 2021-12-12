import React, { useState } from "react";
import { Link } from "react-router-dom";
import Price from "@Components/Shared/Price/Price";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import { toast } from "react-toastify";
// Assets
import { ReactComponent as ClockIcon } from "@Assets/Icons/clock.svg";
import { ReactComponent as User } from "@Assets/Icons/user.svg";
import { ReactComponent as Star } from "@Assets/Icons/star.svg";
import { ReactComponent as Heart } from "@Assets/Icons/heart.svg";
import { ReactComponent as CardIcon } from "@Assets/Icons/shoppingCard.svg";
import useFetch from "@App/Context/useFetch";

const CourseCardBg = ({ card, getLatestCourseList, getallCourseList }) => {
  const {
    uuid,
    num_of_participants,
    teacher_first_name,
    level,
    teacher_last_name,
    intro,
    total_time_of_course,
    nums_of_voter,
    mean_of_participant_points,
    is_favorite,
    title,
    has_user_course,
    get_price_without_degree_with_some_extra_info,
    teacher_avatar,
    cover,
  } = card;
  const [addtocardData, setaddtocardData] = useState();
  // const [isFavorite, setIsFavorite] = useState({isFavorite: is_favorite});
  const cost = get_price_without_degree_with_some_extra_info;
  const [isfav, setisFav] = useState(is_favorite);

  const Addtocard = useFetch({
    //addtocard=>data:course_uuid: "", degree_uuid: null
    url: `CartService/addToCart`,
    method: "POST",
    trigger: false,
    data: addtocardData,
    // caller: getLatestCourseList,
    argFunc: (res) => {
      toast.success("دوره با موفقیت به سبد کالا اضافه شد");
      getLatestCourseList.reFetch();
      getallCourseList.reFetch();
    },
    argErrFunc: (err) => handleErrorAddtocard(err),
  });
  const handleErrorAddtocard = (err) => {
    if (err?.data === "course already exists") {
      toast.error("این دوره از قبل به سبد کالا اضافه شده است");
    }
    if (err?.detail === "Given token not valid for any token type") {
      toast.error("برای خرید دوره اول وارد سایت شوید");
    }
  };

  const postToFav = useFetch({
    url: `StudentService/willing_course_post`,
    method: "POST",
    trigger: false,
    data: { course_uuid: uuid },
    argFunc: (res) => {
      toast.success("دوره با موفقیت به لیست علاقه مندی های شما اضافه شد");
      getLatestCourseList.reFetch();
      getallCourseList.reFetch();
    },
    argErrFunc: (err) => handleErrorAddtoFav(err),
  });
  const handleErrorAddtoFav = (err) => {
    if (err?.data === "You already have this course in your willingList") {
      toast.error("این دوره از قبل به لیست علاقه مندی ها اضافه شده است");
    }
    if (err?.detail === "Given token not valid for any token type") {
      toast.error("برای خرید دوره اول وارد سایت شوید");
    }
  };

  const addToCard = (id) => {
    setaddtocardData({ course_uuid: id, degree_uuid: null });
    Addtocard.reFetch();
  };
  const addToWishList = () => {
    postToFav.reFetch();
  };
  const removeromWishList = () => {};
  console.log("UUIDBG: ", uuid);
  return (
    <article className="card-bg">
      {/* <div className="card-bg-discount">
        <span>40%</span>
        <span>تخفیف</span>
      </div> */}
      <div
        className={
          cost.discountRate !== 0 ? "card-bg-off-show" : "card-bg-off-hide"
        }
      >
        {cost.discountRate}%تخفیف
      </div>
      <div className="card-bg-pic">
        <img src={cover} alt="python" className="card-bg-pic-logo" />
      </div>
      <div className="card-bg-info">
        <div className="card-bg-content ">
          {!has_user_course && (
            <div className="card-bg--box">
              <div className="card-bg--shopingcard">
                {!has_user_course && (
                  <IconBtn
                    onClick={() => addToCard(uuid)}
                    title="افزودن به سبدخرید"
                    icon={<CardIcon />}
                    disabled={Addtocard.loading}
                  />
                )}
              </div>
              <div
                className={`card-bg--heart ${
                  !isfav ? "wishList--empthy" : "wishList--full"
                }`}
              >
                <IconBtn
                  onClick={!isfav ? addToWishList : removeromWishList}
                  title="افزودن به لیست علاقه مندیها"
                  icon={<Heart />}
                  disabled={postToFav.loading}
                />
              </div>
            </div>
          )}

          <h5 className="card-bg-title">
            <Link
              to={`/courses/content/${uuid}`}
              state={{
                name: title,
                id: uuid,
                // name: 'X',
                // id: 'Y'
              }}
            >
              {title}
            </Link>
          </h5>
          <p className="mt-6 card-bg-des">{intro}</p>

          <div className="d-flex-space ">
            <div className="card-bg-info-row ">
              <div className="d-flex-align card-bg-info-row-star">
                <Star />
                <p className="card-bg-time">
                  {mean_of_participant_points.grade
                    ? mean_of_participant_points.grade
                    : "0"}
                  <span>({nums_of_voter})</span>
                  نفر
                </p>
              </div>
              <div className="d-flex-align card-bg-info-row-time">
                <ClockIcon />
                <p className="card-bg-time">{total_time_of_course}</p>
              </div>
              <div className="d-flex-align card-bg-info-row-user">
                <User />
                <p className="card-bg-time">{num_of_participants}نفر</p>
              </div>
            </div>
            <div className="card-bg-info-row-level  center">
              <p>{level}</p>
            </div>
          </div>

          <div className="d-flex-space card-bg-footer">
            <div className="card-bg-img-pic">
              <img src={teacher_avatar} alt="teacher-avatar" />
              <h4>
                {teacher_first_name} {teacher_last_name}
              </h4>
            </div>

            {!has_user_course && (
              <>
                {cost?.discountRate || cost?.discountRate !== 0 ? (
                  <div>
                    {cost?.originalAmount !== 0 ? (
                      <Price value={cost.originalAmount} isDiscount />
                    ) : (
                      <p>رایگان</p>
                    )}
                  </div>
                ) : null}
              </>
            )}
            {!has_user_course ? (
              <>
                {cost?.discountAmount !== 0 ? (
                  <Price value={cost.discountAmount} suffix="تومان" success />
                ) : (
                  <p className="success"> رایگان</p>
                )}
              </>
            ) : (
              <p className="success"> این دوره خریده شده است</p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseCardBg;
//  <Price value={get_price_without_degree_with_some_extra_info} success />
//  <Price value={70000} isDiscount suffix="تومان" />
