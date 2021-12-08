import React,{useState} from "react";
import Button from "@Components/Shared/Buttons/Button"
import useFetch from "@App/Context/useFetch";
import ShoppingCoursecard from "./ShoppingCoursecard";
import { ClipLoader } from "react-spinners";
const TipButton = () => {
  return (
    <form>
      <div className="TipButton">
        <button> اعمال کدتخفیف</button>
        <input type="text" />
      </div>
      <p className="success"> کد تخفیف شما اعمال شد</p>
    </form>
  );
};
const CostBox = ({orderCard,payment}) => {
 
  const {final_amount,discounted_cost,discount_amount }=payment;
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
      <div className='CostBox__btn' >
         <Button type="primary" >
           تکمیل خرید
         </Button>
      </div>
    </div>
  );
};

export default CostBox;
