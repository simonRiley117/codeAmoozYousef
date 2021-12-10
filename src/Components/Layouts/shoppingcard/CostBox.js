import React, { useState } from "react";
import Button from "@Components/Shared/Buttons/Button";
import useFetch from "@App/Context/useFetch";
import { toast } from "react-toastify";
import { useForm as formBox } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ShoppingCoursecard from "./ShoppingCoursecard";
import { ClipLoader } from "react-spinners";
const TipButton = () => {
  const [coupon_number, setCoupounNum] = useState();

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = formBox();
  const postCoupone = useFetch({
    url: `CartService/addCoupon`,
    method: "POST",
    trigger: false,
    argFunc: (res) => {
      toast.success("کد تخفیف با موفقیت اعمال شد ");
      
    },
    data: coupon_number,
    argErrFunc: (err) => handleError(err),
  });

  const handleError = (err) => {
    if (err?.data === "This Coupon Is Invalid") {
      toast.error("کد تخفیف اشتباه است");
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    setCoupounNum(data);
    console.log(coupon_number);
    postCoupone.reFetch();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="TipButton">
        <button type="submit"> اعمال کدتخفیف</button>
        <input {...register("coupon_number", { required: true })} type="text" />
      </div>
      {errors.coupon_number && <p className="error"> این فیلد اجباری است</p>}
      {/* <p className="success"> کد تخفیف شما اعمال شد</p> */}
    </form>
  );
};
const CostBox = ({ orderCard, payment }) => {
  const { final_amount, discounted_cost, discount_amount } = payment;
  const navigate = useNavigate();

  const Payment = useFetch({
    url: `CartService/makePaymentCompleted`,
    method: "POST",
    trigger: false,
    argFunc: (res) => {
      toast.success("دوره ها با موفقیت پرداخت شد");
      navigate("/dashboard/my-course");
    },
  });
  const buyCourse = () => {
    Payment.reFetch();
  };
  return (
    <div className="primary-box CostBox">
      <table style={{ width: "100%" }}>
        <tr>
          <td> مجموع هزینه:</td>
          <td>
            <p>{discounted_cost}</p>
          </td>
          <td>تومان</td>
        </tr>
        <tr>
          <td> تخفیف:</td>
          <td>
            <p>{discount_amount}</p>
          </td>
          <td>تومان</td>
        </tr>
        <tr>
          <td> پرداختی:</td>
          <td>
            <p className="success">{final_amount}</p>
          </td>
          <td>تومان</td>
        </tr>
        <tr>
          <td> تعداد:</td>
          <td>
            <p>{orderCard?.results?.length}</p>
          </td>
          <td>عدد</td>
        </tr>
      </table>
      <TipButton />
      <div className="CostBox__btn">
        <Button onClick={buyCourse} type="primary">
          تکمیل خرید
        </Button>
      </div>
    </div>
  );
};

export default CostBox;
