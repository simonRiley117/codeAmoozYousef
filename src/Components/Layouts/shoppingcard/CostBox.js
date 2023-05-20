import React, {useState} from "react";
import Button from "@Components/Shared/Buttons/Button";
import useFetch from "@App/Context/useFetch";
import {toast} from "react-toastify";
import {useForm as formBox} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useCartData} from '@App/Context/cartContext';
import ShoppingCoursecard from "./ShoppingCoursecard";
import {ClipLoader} from "react-spinners";

const TipButton = ({orderCard, getPayment}) => {
    const [coupon_number, setCoupounNum] = useState();
    const {
        handleSubmit,
        control,
        register,
        formState: {errors},
    } = formBox();
    const postCoupone = useFetch({
        url: `CartService/addCoupon`,
        method: "POST",
        trigger: false,
        caller: getPayment,
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
        if (err?.data === "This Coupon Is Expired") {
            toast.error("تاریخ انقضای کد تخفیف گذشته است   ");
        }
        if (err?.data === "This Coupon is already used for this Order") {
            toast.error("این کد تخفیف قبلا استفاده شده است");
        }
        if (err?.data === "This User has no Order") {
            toast.error("لیست سفارش های شما خالی است ");
        }
        if (err?.data === "This Coupon is already used for this OrderItem") {
            toast.error("این کد تخفیف قبلا برای این دوره استفاده شده است        ");
        }
        if (
            err?.data ===
            "There is no course in your order that related to this coupon"
        ) {
            toast.error("دوره ای برای این کد تخفیف وجود نداره        ");
        }
        if (err?.data === "This Coupon is not valid for you") {
            toast.error("این کد تخفیف برای شما قابل استفاده نیست");
        }
    };

    const onSubmit = (data) => {
        setCoupounNum(data);
        postCoupone.reFetch();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="TipButton">
                <button
                    disabled={orderCard?.results?.length === 0 || orderCard?.results?.length === undefined || postCoupone.loading}
                    type="submit"
                >
                    {" "}
                    اعمال کدتخفیف
                </button>
                <input {...register("coupon_number", {required: true})} type="text"
                       disabled={orderCard?.results?.length === 0 || orderCard?.results?.length === undefined || postCoupone.loading}/>
            </div>
            {errors.coupon_number && <p className="error"> این فیلد اجباری است</p>}
            {/* <p className="success"> کد تخفیف شما اعمال شد</p> */}
        </form>
    );
}; 
const CostBox = ({orderCard, payment, getPayment}) => {
    const {final_amount, discounted_cost, discount_amount} = payment;
    const navigate = useNavigate();
    const {getCart} = useCartData();

    const Payment = useFetch({
        url: `CartService/sendTransactionToPGI`,
        method: "POST",
        trigger: false,
        argFunc: (res) => {
            // toast.success("دوره ها با موفقیت پرداخت شد");
            // getCart.reFetch();
            window.location.replace(res.payment_url)
         //   navigate("/dashboard/my-course");
        },
    });
    const buyCourse = () => {
        Payment.reFetch();
    };
    const orderCardLength = orderCard?.results?.length;
    return (
        <div
            className={`primary-box CostBox ${
                orderCardLength === 0 || orderCardLength === undefined ? "CostBox__empthy" : null
            }`}
        >
            <table style={{width: "100%"}}>
                <tr>
                    <td> مجموع هزینه:</td>
                    <td>
                        <p>{orderCardLength === 0 || orderCardLength === undefined ? "0" : discounted_cost}</p>
                    </td>
                    <td>تومان</td>
                </tr>
                <tr>
                    <td> تخفیف:</td>
                    <td>
                        <p>{orderCardLength === 0 || orderCardLength === undefined ? "0" : discount_amount}</p>
                    </td>
                    <td>تومان</td>
                </tr>
                <tr>
                    <td> پرداختی:</td>
                    <td>
                        <p className="success">
                            {orderCardLength === 0 || orderCardLength === undefined ? "0" : final_amount}
                        </p>
                    </td>
                    <td>تومان</td>
                </tr>
                <tr>
                    <td> تعداد:</td>
                    <td>
                        <p>{orderCardLength === 0 || orderCardLength === undefined ? "0" : orderCardLength}</p>
                    </td>
                    <td>عدد</td>
                </tr>
            </table>
            <TipButton orderCard={orderCard} getPayment={getPayment}/>
            <div className="CostBox__btn">
                <Button
                    disabled={orderCardLength === 0 || orderCardLength === undefined || Payment.loading}
                    onClick={buyCourse}
                    type="primary"
                >
                    تکمیل خرید
                </Button>
            </div>
        </div>
    );
};

export default CostBox;
