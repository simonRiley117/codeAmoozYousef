import React from "react";
import CostBox from "@Components/Layouts/shoppingcard/CostBox";
import CoursesBox from "@Components/Layouts/shoppingcard/CoursesBox";
const ShoppingCard = () => {
  return (
    <div className="shoppingcard">
      <div className="container">
        <div className="shoppingcard-heading center title__box">
          <h2> سبدخرید</h2>
        </div>
        <div className="shoppingcard__row  ">
          <CoursesBox />
          <CostBox />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
