import React, { useState } from "react";
import useFetch from "@App/Context/useFetch";

import CostBox from "@Components/Layouts/shoppingcard/CostBox";
import CoursesBox from "@Components/Layouts/shoppingcard/CoursesBox";
const ShoppingCard = () => {
  const [orderCard, setOrderCard] = useState([]);
  const [payment, setPayment] = useState([]);
  const getPayment = useFetch({
    url: `CartService/showPayment`,
    method: "GET",
    setter: setPayment,
  });
  const getorderSummary = useFetch({
    url: `CartService/orderSummary`,
    method: "GET",
    setter: setOrderCard,
  });
  return (
    <div className="shoppingcard">
      <div className="container">
        <div className="shoppingcard-heading center title__box">
          <h2> سبدخرید</h2>
        </div>
        <div className="shoppingcard__row  ">
          <CoursesBox getPayment={getPayment} orderCard={orderCard} getorderSummary={getorderSummary} />
          <CostBox
            payment={payment}
            orderCard={orderCard}
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
