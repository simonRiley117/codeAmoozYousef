import React, { useEffect, useState } from "react";
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
import { useAuth } from "@App/Context/authContext";
import { useCourseListIcons } from "../../../../Context/courseListIconsContext";
import Rate from "@Components/Shared/Rate/Rate";

const CourseCardBg = ({ card }) => {
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
    // is_favorite,
    title,
    has_user_course,
    get_price_without_degree_with_some_extra_info: cost,
    teacher_avatar,
    teacher_uuid,
    cover,
    // is_course_in_cart,
  } = card;
  const {
    Addtocard,
    postToFav,
    deleteFav,
    getAddToCardData,
    getAddToWishData,
    cartCourseListIcons,
    favoriteCourseListIcons,
    Removefromcard,
  } = useCourseListIcons();

  const { token } = useAuth();


  const [isFav, setIsFav] = useState(
    favoriteCourseListIcons.find((element) => element === uuid)
  );
  const [isInCart, setIsInCart] = useState(
    cartCourseListIcons.find((element) => element === uuid)
  );
  useEffect(() => {
    setIsFav(favoriteCourseListIcons.find((element) => element === uuid));
  }, [favoriteCourseListIcons, uuid]);
  useEffect(() => {
    setIsInCart(cartCourseListIcons.find((element) => element === uuid));
  }, [cartCourseListIcons, uuid]);

  const addToCard = (id, e) => {
    e.stopPropagation();
    e.preventDefault();
    if (token) {
      if (isInCart) {
        toast.error("این دوره از قبل به سبد کالا اضافه شده است");
      } else {
        getAddToCardData({ course_uuid: id, degree_uuid: null });
        Addtocard.reFetch();
      }
    } else {
      toast.error("ابتدا وارد سایت شوید");
    }
  };
  const removeFromCard = (id, e) => {
    e.stopPropagation();
    e.preventDefault();
    if (token) {
      if (!isInCart) {
        toast.error("این دوره از قبل به سبد کالا اضافه شده است");
      } else {
        getAddToCardData(id);
        Removefromcard.reFetch();
      }
    } else {
      toast.error("ابتدا وارد سایت شوید");
    }
  };
  const addToWishList = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (token) {
      if (isFav) {
        toast.error("این دوره از قبل به لیست علاقه مندی ها اضافه شده است");
      } else {
        getAddToWishData({ course_uuid: uuid });
        postToFav.reFetch();
      }
    } else {
      toast.error("ابتدا وارد سایت شوید");
    }
  };
  const removeromWishList = (e) => {
    e.stopPropagation();
    e.preventDefault();
    getAddToWishData({ course_uuid: uuid });
    deleteFav.reFetch();
  };

  return (
    <article className="card-bg">
      <div
        className={
          cost?.discountRate !== 0 ? "card-bg-off-show" : "card-bg-off-hide"
        }
      >
        {cost.discountRate}%تخفیف
      </div>
      <div className="card-bg-pic">
        <img src={cover} alt="python" className="card-bg-pic-logo" />
      </div>
      <div className="card-bg-info">
        <div className="card-bg-content ">
          <div className="card-bg--box">
            {/*{!has_user_course && !is_course_in_cart && (*/}
            {has_user_course ? null : (
              <div
                className={`card-bg--shopingcard ${
                  !isInCart ? "wishList--empthy" : "wishList--full"
                }`}
              >
                <IconBtn
                  getPopupContainer={false}
                  onClick={(e) =>
                    !isInCart ? addToCard(uuid, e) : removeFromCard(uuid, e)
                  }
                  title={!isInCart ? "افزودن به سبدخرید" : "حذف از  سبدخرید"}
                  icon={<CardIcon />}
                  disabled={Addtocard.loading}
                />
              </div>
            )}

            {/*)}*/}
            <div
              className={`card-bg--heart ${
                !isFav ? "wishList--empthy" : "wishList--full"
              }`}
            >
              <IconBtn
                getPopupContainer={false}
                onClick={(e) =>
                  !isFav ? addToWishList(e) : removeromWishList(e)
                }
                title={
                  !isFav
                    ? "افزودن به لیست علاقه مندیها"
                    : "حذف از لیست علاقه مندی ها"
                }
                icon={<Heart />}
                disabled={postToFav.loading}
              />
            </div>
          </div>

          <h5 className="card-bg-title">
            <Link
              to={`/courses/intro`}
              state={{
                name: title,
                id: uuid,
              }}
            >
              {title}
            </Link>
          </h5>
          <p className="mt-6 card-bg-des">{intro}</p>

          <div className="d-flex-space mt-auto w-full">
            <div className="card-bg-info-row " style={{ width: "80%" }}>
              <div
                className="d-flex-align card-bg-info-row-star"
                style={{ width: "80%" }}
              >
                {/* {Array.from(
                  {
                    length: mean_of_participant_points.grade
                      ? mean_of_participant_points.grade
                      : 0,
                  },
                  (_, i) => (
                    <Star />
                  )
                )} */}
                <span className="card-bg-time">
                  {/* {mean_of_participant_points.grade
                      ? mean_of_participant_points.grade
                      : "0"} */}
                  <Rate
                    count={
                      mean_of_participant_points.grade === null
                        ? 5
                        : mean_of_participant_points.grade
                    }
                    value={
                      mean_of_participant_points.grade === null
                        ? 5
                        : mean_of_participant_points.grade
                    }
                    defaultValue={mean_of_participant_points.grade}
                    disabled
                  />
                  {/* <span>({nums_of_voter})</span>
                    نفر */}
                </span>
              </div>
              <div className="d-flex-align card-bg-info-row-time">
                <ClockIcon />
                <span className="card-bg-time">{total_time_of_course}</span>
              </div>
              <div className="d-flex-align card-bg-info-row-user">
                <User />
                <span className="card-bg-time">{num_of_participants}نفر</span>
              </div>
            </div>
            <div className="card-bg-info-row-level  center">
              <span>{level}</span>
            </div>
          </div>

          <div className="d-flex-space card-bg-footer">
            <Link
              to="/courses/teacher"
              state={{
                courseId: uuid,
                teacherId: teacher_uuid,
              }}
              className="card-bg-img-pic"
            >
              <img src={teacher_avatar} alt="teacher-avatar" />
              <span>
                {teacher_first_name} {teacher_last_name}
              </span>
            </Link>
            <div className="card-bg-price">
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
                    <span className="success"> رایگان</span>
                  )}
                </>
              ) : (
                <p className="success"> این دوره خریده شده است</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseCardBg;
