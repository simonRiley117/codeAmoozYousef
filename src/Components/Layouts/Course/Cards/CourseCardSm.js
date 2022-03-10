import React, { useEffect, useState } from "react";
import { ReactComponent as Heart } from "@Assets/Icons/heart.svg";
import { ReactComponent as CardIcon } from "@Assets/Icons/shoppingCard.svg";
import { ReactComponent as User } from "@Assets/Icons/user.svg";
import { ReactComponent as ClockIcon } from "@Assets/Icons/clock.svg";
import { ReactComponent as Star } from "@Assets/Icons/star.svg";
import Price from "@Components/Shared/Price/Price";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import { useAuth } from "@App/Context/authContext";
import { useCourseListIcons } from "../../../../Context/courseListIconsContext";
import Rate from "@Components/Shared/Rate/Rate";

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
    // getCourseUUID,
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
  const [isDes, setIsDes] = useState(
    Number.isInteger(mean_of_participant_points.grade)
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
console.log('mean_of_participant_points.grade', mean_of_participant_points.grade)
  return (
    <div className="card-sm">
      <p
        className={
          cost?.discountRate === 0 ? "card-sm-off-hide" : "card-sm-off-show"
        }
      >
        <span>{cost?.discountRate}</span>%تخفیف
      </p>
      <div className="card-sm-img-hover">
        <div className="card-sm-img-hover--box">
          {has_user_course ? null : (
            <div
              className={`card-sm-img-hover--shopingcard ${
                !isInCart ? "wishList--empthy" : "wishList--full"
              }`}
            >
              {/*{!has_user_course && !is_course_in_cart && (*/}
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

          <div
            className={`card-sm-img-hover--heart ${
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
      </div>
      <div>
        <div className="card-sm-img">
          <div className="card-sm-img-title">
            <img src={cover} alt={title} />
          </div>
        </div>
        <div className="card-sm-content">
          <div className="card-sm-info-row ">
            <div className="d-flex-align card-sm-info-row-star">
              <div className="card-sm__rate">
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
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: "1rem",
                  }}
                />
              </div>
              {!isDes ? (
                <p className="card-sm-content-time">
                  {mean_of_participant_points.grade?.toFixed(1)
                    ? mean_of_participant_points.grade?.toFixed(1)
                    : "0"}
                  <span>({nums_of_voter})</span>
                  نفر
                </p>
              ) : (
                <p className="card-sm-content-time">
                  {mean_of_participant_points.grade
                    ? mean_of_participant_points.grade
                    : "0"}
                  <span>({nums_of_voter})</span>
                  نفر
                </p>
              )}
            </div>
            <div className="d-flex-align card-sm-info-row-time">
              <ClockIcon />
              <p className="card-sm-content-time">{total_time_of_course}</p>
            </div>
            <div className="d-flex-align card-sm-info-row-user">
              <User />
              <p className="card-sm-content-time">{num_of_participants}نفر</p>
            </div>
          </div>

          <h5 className="cursor-pointer">
            <Link
              to="/courses/intro"
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
          <Link
            className="card-sm-img-pic"
            to="/courses/teacher"
            state={{
              courseId: uuid,
              teacherId: teacher_uuid,
            }}
          >
            <img src={teacher_avatar} alt="teacher-avatar" />
            <span>
              {teacher_first_name} {teacher_last_name}
            </span>
          </Link>

          <div className="card-sm-footer">
            <div className="card-sm-footer-level">{level}</div>
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
                    <p className="success"> رایگان</p>
                  )}
                </>
              ) : (
                <p className="success"> این دوره خریده شده است</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursecardsm;
