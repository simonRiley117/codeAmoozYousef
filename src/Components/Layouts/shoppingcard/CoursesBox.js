import React, { useState } from "react";
import ShoppingCoursecard from "./ShoppingCoursecard";
import NoShoppingCard from "@Assets/Icons/NoShoppingCard.svg";
import Button from "@Components/Shared/Buttons/Button";
import { useNavigate } from "react-router-dom";

const CoursesBox = ({ orderCard, getPayment, getorderSummary }) => {
  const navigate = useNavigate();

  return (
    <div className="primary-box CoursesBox">
      {orderCard?.results?.map((i) => (
        <ShoppingCoursecard
          getPayment={getPayment}
          getorderSummary={getorderSummary}
          key={i.uuid}
          card={i}
        />
      ))}
      {orderCard?.results?.length === 0 && (
        <div className="ShoppingList__NoCard">
          <p>هنوز دوره ای در سبد خرید شما وجود ندارد;(</p>
          <img src={NoShoppingCard} alt="shoppingcard" />
          
            <Button onClick={() => navigate("/courses")}>
              افزودن دوره های جدید
            </Button>
         
        </div>
      )}
    </div>
  );
};

export default CoursesBox;
