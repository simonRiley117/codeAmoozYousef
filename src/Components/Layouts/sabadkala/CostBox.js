import React from "react";
import Button from "@Components/Shared/Buttons/Button"
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
const CostBox = () => {
  return (
    <div className="primary-box CostBox">
      <table style={{ width: "100%" }}>
        <tr>
          <td> مجموع هزینه:</td>
          <td>
            {" "}
            <p>500.000</p>
          </td>
          <td>تومان</td>
        </tr>
        <tr>
          <td> تخفیف:</td>
          <td>
            {" "}
            <p>100.000</p>
          </td>
          <td>تومان</td>
        </tr>
        <tr>
          <td> پرداختی:</td>
          <td>
            <p className="success">400.000</p>
          </td>
          <td>تومان</td>
        </tr>
        <tr>
          <td> تعداد:</td>
          <td>
            {" "}
            <p>1</p>
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
